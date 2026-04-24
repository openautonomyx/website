import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getProduct, products } from "@/lib/products";
import {
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  productSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} · OpenAutonomyx`,
      description: product.tagline,
      url: `${SITE_URL}/products/${product.slug}`,
      images: [{ url: product.heroImage }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const structuredData = [
    productSchema(product),
    faqSchema(product),
    howToSchema(product),
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Products", url: `${SITE_URL}/#products` },
      { name: product.name, url: `${SITE_URL}/products/${product.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-wider text-brand-cyan"
          >
            ← Back to overview
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {product.productId}
            </p>
            <h1 className="mt-3 text-4xl font-light tracking-tight md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-sm border border-border bg-card px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-light tracking-tight md:text-3xl">Features</h2>
            <ul className="mt-6 space-y-4">
              {product.features.map((feature) => (
                <li key={feature.title} className="rounded-md border border-border bg-card p-4">
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light tracking-tight md:text-3xl">How to Use</h2>
            <ol className="mt-6 space-y-4">
              {product.howToUse.map((step) => (
                <li key={step.step} className="rounded-md border border-border bg-card p-4">
                  <p className="font-mono text-xs text-brand-cyan">Step {step.step}</p>
                  <h3 className="mt-2 font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {product.faq.map((item) => (
              <article key={item.question} className="rounded-md border border-border bg-card p-4">
                <h3 className="font-medium">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-brand-surface2">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-light tracking-tight md:text-3xl">{product.cta}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Want a walkthrough for {product.name}? We can help you evaluate fit quickly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {product.tryItUrl ? (
              <Link
                href={product.tryItUrl}
                className="inline-flex h-11 items-center justify-center rounded-sm bg-brand-cyan px-5 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cyan/90"
              >
                Try product
              </Link>
            ) : null}
            <Link
              href={product.buyItUrl ?? "mailto:chinmay@openautonomyx.com"}
              className="inline-flex h-11 items-center justify-center rounded-sm border border-border px-5 text-sm font-medium transition-colors hover:border-brand-cyan hover:text-brand-cyan"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
