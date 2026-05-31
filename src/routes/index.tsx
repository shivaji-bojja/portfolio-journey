import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, FlaskConical } from "lucide-react";
import headshot from "@/assets/shivaji-headshot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio & Product Sandbox" },
      { name: "description", content: "Executive portfolio and product lab." },
      { property: "og:title", content: "Portfolio & Product Sandbox" },
      { property: "og:description", content: "Executive portfolio and product lab." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col lg:h-[calc(100vh-4rem)] lg:overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-16 lg:flex-1 lg:flex lg:items-center">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-600 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Where strategy meets
                <span className="text-amber-400"> creation</span>.
              </h1>
              <p className="mt-4 text-base leading-7 text-primary-foreground/80 font-body lg:text-lg">
                An executive portfolio and product sandbox bridging data-driven leadership,
                digital strategy and pricing, and modern product experimentation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber-400/40 to-emerald-500/30 blur-2xl" />
                <img
                  src={headshot}
                  alt="Shivaji Bojja headshot"
                  className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover ring-4 ring-amber-400/60 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-16 lg:py-8 lg:flex-shrink-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Multiple Dimensions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-body max-w-2xl mx-auto">
              Each space is crafted with intent — from corporate leadership to product innovation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <PillarCard
              icon={<TrendingUp className="h-6 w-6 text-amber-500" />}
              title="Executive Journey"
              description="A timeline of leadership across pricing strategy, enterprise data platforms, and AI workflow orchestration."
              href="/executive-journey"
              accent="bg-slate-900"
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
