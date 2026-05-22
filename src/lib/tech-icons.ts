export type TechIconEntry = {
  slug?: string;
  color?: string;
};

/** Simple Icons slugs: https://simpleicons.org */
export const techIcons: Record<string, TechIconEntry> = {
  Ruby: { slug: "ruby", color: "CC342D" },
  "Ruby on Rails": { slug: "rubyonrails", color: "D30001" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  Dart: { slug: "dart", color: "0175C2" },
  Flutter: { slug: "flutter", color: "02569B" },
  Bash: { slug: "gnubash", color: "4EAA25" },
  HTML5: { slug: "html5", color: "E34F26" },
  CSS3: { slug: "css3", color: "1572B6" },
  Sinatra: { slug: "ruby", color: "CC342D" },
  React: { slug: "react", color: "61DAFB" },
  NestJS: { slug: "nestjs", color: "E0234E" },
  "Node.js": { slug: "nodedotjs", color: "339933" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  MySQL: { slug: "mysql", color: "4479A1" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  DynamoDB: { slug: "amazonwebservices", color: "FF9900" },
  AWS: { slug: "amazonwebservices", color: "FF9900" },
  GraphQL: { slug: "graphql", color: "E10098" },
  Docker: { slug: "docker", color: "2496ED" },
  Kamal: { color: "E9573F" },
  Git: { slug: "git", color: "F05032" },
  RabbitMQ: { slug: "rabbitmq", color: "FF6600" },
  Hotwire: { slug: "hotwire", color: "FFE801" },
  Turbo: { slug: "hotwire", color: "FFE801" },
  Stimulus: { slug: "hotwire", color: "FFE801" },
  Sidekiq: { slug: "sidekiq", color: "B1003E" },
  Redis: { slug: "redis", color: "FF4438" },
  RSpec: { slug: "ruby", color: "CC342D" },
  Astro: { slug: "astro", color: "FF5D01" },
  Android: { slug: "android", color: "3DDC84" },
};

export function getTechIcon(name: string): TechIconEntry | undefined {
  return techIcons[name];
}

export function techIconUrl(name: string): string | undefined {
  const entry = getTechIcon(name);
  if (!entry?.slug) return undefined;
  return `https://cdn.simpleicons.org/${entry.slug}/${entry.color ?? "white"}`;
}
