import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { Mail } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground font-body">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground font-body">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 font-body"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground font-body">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-body">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 font-body"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent font-body"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#0b111e]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-body text-base font-medium tracking-tight text-zinc-100">
            Shivaji Bojja — Portfolio
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {[
            { to: "/", label: "Home" },
            { to: "/executive-journey", label: "Executive Journey" },
            { to: "/product-lab", label: "Product Lab" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-amber-500" }}
              className="text-sm font-normal tracking-wide text-zinc-400 transition-colors duration-300 hover:text-amber-500 font-body"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:text-amber-500"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute right-4 top-16 w-64 bg-[#0b111e] border border-zinc-800 rounded-lg shadow-lg p-4 flex flex-col gap-3">
          <Link to="/" className="text-sm font-normal text-zinc-400 hover:text-amber-500 font-body" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/executive-journey" className="text-sm font-normal text-zinc-400 hover:text-amber-500 font-body" onClick={() => setOpen(false)}>Executive Journey</Link>
          <Link to="/product-lab" className="text-sm font-normal text-zinc-400 hover:text-amber-500 font-body" onClick={() => setOpen(false)}>Product Lab</Link>
        </div>
      )}
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-[#0b111e] mt-8 text-slate-100 antialiased font-sans">
      {/* GET IN TOUCH SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="border border-zinc-800/80 bg-[#121215] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold font-body block">
              Get in Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight">
              Open to executive opportunities
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl font-body leading-relaxed">
              Available for CPO, VP Product, Director of Product, and AI Strategy leadership roles across global enterprises.
            </p>
          </div>
          
          <a 
            href="mailto:shivaji.bojja@gmail.com" 
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold px-6 py-3.5 rounded-full transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap font-body text-sm"
          >
            <Mail className="w-4 h-4 stroke-[2.5]" />
            Send a Message
          </a>
        </div>
      </section>

      {/* FOOTER NAV BAR */}
      <footer className="border-t border-zinc-900/60 bg-[#0b111e] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-zinc-500 uppercase font-body">
          <div className="font-medium">
            © {currentYear} SHIVAJI BOJJA - PRODUCT & TECHNOLOGY LEADER
          </div>
          <div className="flex items-center gap-6 normal-case text-sm font-medium text-zinc-400">
            <a href="https://linkedin.com/in/shivajibojja" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">LinkedIn</a>
            <a href="https://github.com/shivaji-bojja" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">GitHub</a>
            <a href="mailto:shivaji.bojja@gmail.com" className="hover:text-amber-500 transition-colors">shivaji.bojja@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shivaji Bojja — Portfolio" },
      { name: "description", content: "Shivaji Bojja's executive portfolio and product lab." },
      { name: "author", content: "Shivaji Bojja" },
      { property: "og:title", content: "Shivaji Bojja — Portfolio" },
      { property: "og:description", content: "Shivaji Bojja's executive portfolio and product lab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Shivaji Bojja — Portfolio" },
      { name: "twitter:description", content: "Shivaji Bojja's executive portfolio and product lab." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f7dc963-71f8-4e1a-8fac-35cc1c64485d/id-preview-160e752f--bdf87f55-0d58-4671-bb46-ed8ce0b1881f.lovable.app-1779577133271.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f7dc963-71f8-4e1a-8fac-35cc1c64485d/id-preview-160e752f--bdf87f55-0d58-4671-bb46-ed8ce0b1881f.lovable.app-1779577133271.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#0b111e] text-slate-100 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-[#0b111e] text-slate-100 antialiased">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

