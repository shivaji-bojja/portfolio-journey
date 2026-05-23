import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Leaf, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio & Product Sandbox" },
      { name: "description", content: "Executive portfolio, yoga ecosystem sandbox, and product lab." },
      { property: "og:title", content: "Portfolio & Product Sandbox" },
      { property: "og:description", content: "Executive portfolio, yoga ecosystem sandbox, and product lab." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        <div className="absolute inset-className pointer-events-none opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-600 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Where strategy meets
              <span className="text-amber-400"> creation</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80 font-body">
              An executive portfolio and product sandbox bridging data-driven leadership,
              eastern philosophy, and modern product experimentation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/executive-journey"
                className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 font-body"
              >
                Explore Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product-lab"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 bg-transparent px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 font-body"
              >
                Enter the Lab
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three Dimensions
            </h2>
            <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
              Each space is crafted with intent — from corporate leadership to holistic wellness to product innovation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <PillarCard
              icon={<TrendingUp className="h-6 w-6 text-amber-500" />}
              title="Executive Journey"
              description="A timeline of leadership across pricing strategy, enterprise data platforms, and AI workflow orchestration."
              href="/executive-journey"
              accent="bg-slate-900"
            />
            <PillarCard
              icon={<Leaf className="h-6 w-6 text-emerald-600" />}
              title="Yoga Ecosystem"
              description="A curated editorial space exploring Sanskrit roots, eastern philosophy, and the science of holistic medicine."
              href="/yoga-ecosystem"
              accent="bg-emerald-50"
            />
            <PillarCard
              icon={<FlaskConical className="h-6 w-6 text-amber-500" />}
              title="Product Lab"
              description="Live product experiments: willingness-to-pay surveys, A/B testing frameworks, and e-commerce referral grids."
              href="/product-lab"
              accent="bg-slate-50"
            />
          </div>
        </div>
      </section>

      {/* Brief CTA */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Built for clarity. Designed for impact.
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
            Every component is modular, responsive, and intentionally scannable.
          </p>
        </div>
      </section>
    </div>
  );
}

function PillarCard({
  icon,
  title,
  description,
  href,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  accent: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={href}
        className="group block h-full rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
      >
        <div className={`inline-flex items-center justify-center rounded-lg p-3 ${accent} ${accent.includes("slate") ? "text-white" : accent.includes("emerald") ? "text-emerald-700" : "text-slate-700"}`}>
          {icon}
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold text-card-foreground">
          {title}
        </h3>
        <p className="mt-3 text-muted-foreground font-body leading-relaxed">
          {description}
        </p>
        <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-amber-500 transition-colors group-hover:text-amber-600 font-body">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
