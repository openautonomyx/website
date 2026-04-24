import Link from "next/link";
import { products } from "@/lib/products";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 grid-noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-surface" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
              <span className="font-mono text-xs text-muted-foreground">
                Autonomous intelligence · Enterprise-grade
              </span>
            </div>
            <h1 className="mt-8 text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              Intelligence that
              <br />
              <span className="text-gradient font-normal">
                decides, explains, and acts.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              OpenAutonomyx builds autonomous intelligence products for the
              enterprise. Governed decision platforms. Resolved entities.
              Trusted signals. Agents that plan, act, and verify.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="#products"
                className="inline-flex h-12 items-center rounded-sm bg-brand-cyan px-6 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cyan/90"
              >
                Explore products →
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center rounded-sm border border-border px-6 text-sm font-medium transition-colors hover:border-brand-cyan hover:text-brand-cyan"
              >
                Book a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section id="products" className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-brand-cyan">
                Product portfolio
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-5xl">
                Six products.
                <br />
                One autonomous intelligence stack.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Each product is independently deployable. Together, they share a
              common governance, observability, and identity layer — so
              decisions compound instead of conflict.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col justify-between bg-brand-surface p-8 transition-colors hover:bg-brand-surface2"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.productId}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-medium tracking-tight group-hover:text-brand-cyan">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h}
                        className="rounded-sm border border-border bg-card px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-border/50 pt-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    Learn more
                  </span>
                  <span className="font-mono text-sm text-brand-cyan transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-brand-cyan">
                Operating principles
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-tight md:text-5xl">
                Autonomous, but accountable.
              </h2>
            </div>
            <div className="space-y-10">
              {[
                {
                  title: "Decisions, not dashboards",
                  body: "Dashboards describe the past. Decisions change the future. Our products ship closed-loop decisions — ingest, reason, act, audit.",
                },
                {
                  title: "Governed by construction",
                  body: "Every action is authorized (OpenFGA), policy-checked (OPA), and audited. Compliance isn't a bolt-on; it's the architecture.",
                },
                {
                  title: "Open foundations",
                  body: "Built on open protocols — MCP, OpenAPI, SCIM, ODRL. No vendor tax. Your data stays yours. Swap components when you want to.",
                },
                {
                  title: "Self-hosted or managed",
                  body: "Run on your cloud, your VPS, or ours. Same binaries, same behavior. Sovereignty is a config flag.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l border-brand-cyan/30 pl-6"
                >
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-b border-border/50 bg-brand-surface2"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-light tracking-tight md:text-4xl">
                Early access, design partners welcome.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                The products on this site are in active development. If you&rsquo;re
                building something that needs governed autonomous intelligence —
                we&rsquo;d like to talk.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:chinmay@openautonomyx.com?subject=Design%20partner%20interest"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-brand-cyan px-6 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cyan/90"
              >
                Get in touch
              </a>
              <Link
                href="https://github.com/openautonomyx"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-6 text-sm font-medium transition-colors hover:border-brand-cyan hover:text-brand-cyan"
              >
                Browse GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
