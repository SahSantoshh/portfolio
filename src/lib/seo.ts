import { site } from "../data/site";

export const SITE_URL = "https://sahsantoshh.com";

const routeLabels: Record<string, string> = {
  projects: "Projects",
  "open-source": "Open Source",
  blog: "Blog",
  experience: "Experience",
  contact: "Contact",
};

export function absoluteUrl(path: string, base = SITE_URL): string {
  return new URL(path, base).href;
}

export function pageCanonical(pathname: string, base = SITE_URL): string {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return absoluteUrl(normalized, base);
}

export function pageTitle(title?: string): string {
  if (!title || title === site.name) {
    return `${site.name} — ${site.title}`;
  }
  return `${title} — ${site.name}`;
}

export function breadcrumbSchema(pathname: string, pageName?: string) {
  if (pathname === "/" || pathname === "") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  let path = "";
  segments.forEach((segment, index) => {
    path += `/${segment}`;
    const isLast = index === segments.length - 1;
    const name =
      isLast && pageName
        ? pageName
        : routeLabels[segment] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    items.push({
      "@type": "ListItem",
      position: index + 2,
      name,
      item: absoluteUrl(`${path}/`),
    });
  });

  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function personSchema(profileImage: string) {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: site.name,
    givenName: "Santosh",
    familyName: "Sah",
    jobTitle: site.title,
    url: SITE_URL,
    image: profileImage,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [site.social.github, site.social.linkedin, site.social.medium],
    knowsAbout: site.primaryStack,
    worksFor: {
      "@type": "Organization",
      name: "InAllMedia",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    description: site.tagline,
    inLanguage: "en",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function webPageSchema({
  title,
  description,
  url,
  type = "WebPage",
}: {
  title: string;
  description: string;
  url: string;
  type?: "WebPage" | "ProfilePage" | "CollectionPage" | "ContactPage" | "AboutPage";
}) {
  const personRef = {
    "@id": `${SITE_URL}/#person`,
    "@type": "Person",
    name: site.name,
  };

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: personRef,
    ...(type === "ProfilePage" ? { mainEntity: personRef } : {}),
    inLanguage: "en",
  };
}

export function articleSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  tags = [],
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  tags?: string[];
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },
    inLanguage: "en",
    keywords: tags.join(", "),
  };
}

export function buildSchemaGraph({
  pathname,
  title,
  description,
  url,
  profileImage,
  pageType = "WebPage",
  article,
}: {
  pathname: string;
  title: string;
  description: string;
  url: string;
  profileImage: string;
  pageType?: "WebPage" | "ProfilePage" | "CollectionPage" | "ContactPage";
  article?: {
    title: string;
    description: string;
    image: string;
    publishedTime: string;
    modifiedTime?: string;
    tags?: string[];
  };
}) {
  const graph: Record<string, unknown>[] = [
    websiteSchema(),
    personSchema(profileImage),
    webPageSchema({ title, description, url, type: pageType }),
  ];

  const breadcrumbs = breadcrumbSchema(pathname, article?.title ?? title);
  if (breadcrumbs) graph.push(breadcrumbs);

  if (article) {
    graph.push(
      articleSchema({
        title: article.title,
        description: article.description,
        url,
        image: article.image,
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        tags: article.tags,
      }),
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
