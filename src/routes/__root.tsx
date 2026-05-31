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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Portfolio
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            activeProps={{ className: "text-amber-500 font-medium" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground font-body"
          >
            Home
          </Link>
          <Link
            to="/executive-journey"
            activeProps={{ className: "text-amber-500 font-medium" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground font-body"
          >
            Executive Journey
          </Link>
          <Link
            to="/product-lab"
            activeProps={{ className: "text-amber-500 font-medium" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground font-body"
          >
            Product Lab
          </Link>
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
        className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted"
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
        <div className="absolute right-0 top-16 w-64 bg-background border border-border rounded-lg shadow-lg p-4 flex flex-col gap-3">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground font-body" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/executive-journey" className="text-sm font-medium text-muted-foreground hover:text-foreground font-body" onClick={() => setOpen(false)}>Executive Journey</Link>
          
          <Link to="/product-lab" className="text-sm font-medium text-muted-foreground hover:text-foreground font-body" onClick={() => setOpen(false)}>Product Lab</Link>
        </div>
      )}
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-muted-foreground font-body">
              Built with precision and purpose.
            </p>
            <p className="text-xs text-muted-foreground/70 font-body">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/executive-journey" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
              Executive
            </Link>
            <Link to="/yoga-ecosystem" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
              Yoga
            </Link>
            <Link to="/product-lab" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
              Lab
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio & Product Sandbox" },
      { name: "description", content: "Professional executive portfolio, yoga ecosystem sandbox, and product lab." },
      { name: "author", content: "Portfolio" },
      { property: "og:title", content: "Portfolio & Product Sandbox" },
      { property: "og:description", content: "Professional executive portfolio, yoga ecosystem sandbox, and product lab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Portfolio & Product Sandbox" },
      { name: "twitter:description", content: "Professional executive portfolio, yoga ecosystem sandbox, and product lab." },
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
      <body>
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
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

