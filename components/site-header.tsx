import Link from "next/link";
import { products } from "@/lib/products";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-brand-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-brand-cyan" />
          <span className="font-mono text-sm font-medium tracking-tight">
            openautonomyx
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-80 rounded-md border border-border bg-card p-2 glow">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block rounded-sm px-3 py-2 transition-colors hover:bg-accent"
                  >
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {p.tagline}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="https://www.openautonomyx.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Main site
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/#get-started"
            className="inline-flex h-9 items-center rounded-sm bg-brand-cyan px-4 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cyan/90"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
