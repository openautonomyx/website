import Link from "next/link";
import { products } from "@/lib/products";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-sm bg-brand-cyan" />
              <span className="font-mono text-sm font-medium">
                openautonomyx
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Autonomous intelligence products for the enterprise. Built on
              open foundations. Governed by default.
            </p>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              chinmay@openautonomyx.com
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-brand-cyan"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="https://www.openautonomyx.com"
                  className="text-sm text-foreground/80 transition-colors hover:text-brand-cyan"
                >
                  Main site
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/openautonomyx"
                  className="text-sm text-foreground/80 transition-colors hover:text-brand-cyan"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-foreground/80 transition-colors hover:text-brand-cyan"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border/50 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} OpenAutonomyx. All rights reserved.</p>
          <p className="font-mono">
            All copy on this site is AI-assisted. Human-reviewed. Feedback
            welcome at chinmay@openautonomyx.com.
          </p>
        </div>
      </div>
    </footer>
  );
}
