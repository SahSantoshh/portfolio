interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
}

type PagesFunction<E = unknown> = (context: {
  request: Request;
  env: E;
}) => Response | Promise<Response>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimit = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("CF-Connecting-IP") ??
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return jsonResponse({ error: "Contact form is not configured." }, 503);
  }

  let payload: { name?: string; email?: string; message?: string; website?: string };

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  if (payload.website) {
    return jsonResponse({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || name.length > 120) {
    return jsonResponse({ error: "Please enter your name." }, 400);
  }

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return jsonResponse({ error: "Please enter a valid email address." }, 400);
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return jsonResponse({ error: "Message must be between 10 and 5000 characters." }, 400);
  }

  const ip = getClientIp(request);
  const now = Date.now();
  const lastSent = rateLimit.get(ip);

  if (lastSent && now - lastSent < RATE_LIMIT_MS) {
    return jsonResponse({ error: "Please wait a minute before sending another message." }, 429);
  }

  const to = env.CONTACT_TO_EMAIL ?? "sahsantoshh@gmail.com";
  const from = env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    console.error("Resend error:", detail);
    return jsonResponse({ error: "Failed to send message. Please try email instead." }, 502);
  }

  rateLimit.set(ip, now);

  return jsonResponse({ ok: true });
};
