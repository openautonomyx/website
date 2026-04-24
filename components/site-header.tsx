import Link from "next/link";
import { products } from "@/lib/products";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-brand-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-brand-cyan" />
          <span className="font-mono text-sm font-medium tracking-tight">openautonomyx</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <div className="group relative">
            <button
              type="button"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-haspopup="menu"
            >
              Products
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-80 rounded-md border border-border bg-card p-2 glow">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block rounded-sm px-3 py-2 transition-colors hover:bg-accent focus-visible:bg-accent"
                  >
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="https://www.openautonomyx.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Main site
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/#products"
            className="inline-flex h-9 items-center rounded-sm bg-brand-cyan px-4 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cyan/90"
          >
            Get started
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary className="inline-flex h-9 cursor-pointer list-none items-center rounded-sm border border-border px-3 text-sm text-muted-foreground">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-72 rounded-md border border-border bg-card p-3 shadow-lg">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Products</p>
            <div className="mt-2 space-y-1">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="block rounded-sm px-2 py-2 text-sm hover:bg-accent"
                >
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="mt-3 border-t border-border pt-3">
              <Link href="/#about" className="block px-2 py-2 text-sm hover:text-brand-cyan">
                About
              </Link>
              <Link href="/#contact" className="block px-2 py-2 text-sm hover:text-brand-cyan">
                Contact
              </Link>
              <Link href="/#products" className="mt-1 block px-2 py-2 text-sm font-medium text-brand-cyan">
                Get started
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
