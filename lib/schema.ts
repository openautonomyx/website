import type { Product } from "./products";

const SITE_URL = "https://website.openautonomyx.com";
const BRAND = "OpenAutonomyx";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND,
  alternateName: "Autonomyx",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
  },
  description:
    "OpenAutonomyx builds autonomous intelligence products for the enterprise — decision platforms, entity resolution, fraud signals, trust scoring, and governed AI toolkits.",
  sameAs: [
    "https://github.com/openautonomyx",
    "https://www.openautonomyx.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "chinmay@openautonomyx.com",
    url: `${SITE_URL}/#contact`,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${BRAND} — Autonomous Enterprise Intelligence`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export function productSchema(product: Product) {
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const offers = product.pricing.tiers
    ? product.pricing.tiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.price.replace(/[^0-9.]/g, "") || "0",
        priceCurrency: "USD",
        description: tier.features.join(" · "),
        availability: "https://schema.org/PreOrder",
        url: productUrl,
      }))
    : [
        {
          "@type": "Offer",
          url: productUrl,
          availability: "https://schema.org/PreOrder",
          category: "Enterprise Software",
          description: product.pricing.note || "Contact us for pricing",
        },
      ];

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${productUrl}/#software`,
    identifier: product.productId,
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Linux, macOS",
    url: productUrl,
    description: product.description,
    headline: product.tagline,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    provider: {
      "@type": "Organization",
      name: product.vendor,
    },
    image: `${SITE_URL}${product.heroImage}`,
    logo: `${SITE_URL}${product.logo}`,
    screenshot: product.screenshots.map((s) => ({
      "@type": "ImageObject",
      url: `${SITE_URL}${s.url}`,
      caption: s.caption,
    })),
    featureList: product.features.map((f) => f.title),
    applicationSubCategory: product.useCases.map((u) => u.title).join(", "),
    offers,
  };
}

export function faqSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function howToSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${product.name}`,
    description: `Get started with ${product.name} in ${product.howToUse.length} steps.`,
    step: product.howToUse.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.title,
      text: s.description,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export { SITE_URL, BRAND };
