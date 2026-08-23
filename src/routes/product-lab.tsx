import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useId } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  BarChart3,
  Check,
  DollarSign,
  Percent,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const GOLD = "#D9A74A";

export const Route = createFileRoute("/product-lab")({
  head: () => ({
    meta: [
      { title: "Product Lab — Portfolio & Sandbox" },
      {
        name: "description",
        content:
          "A curated sandbox of live product experiments — Van Westendorp pricing, A/B testing frameworks, and e-commerce mechanics.",
      },
      { property: "og:title", content: "Product Lab — Portfolio & Sandbox" },
      {
        property: "og:description",
        content:
          "Live product experiments and data-driven sandbox showcasing AI, pricing, and product innovation.",
      },
      { property: "og:url", content: "https://shivajibojja.com/product-lab" },
    ],
    links: [{ rel: "canonical", href: "https://shivajibojja.com/product-lab" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Product Lab — Portfolio & Sandbox",
          url: "https://shivajibojja.com/product-lab",
          description:
            "A curated sandbox of live product experiments including Van Westendorp pricing, A/B testing frameworks, and e-commerce mechanics.",
        }),
      },
    ],
  }),
  component: ProductLab,
});

type Showcase = {
  id: string;
  index: string;
  title: string;
  description: string;
  stack: string[];
  cta: string;
  anchor: string;
};

const showcases: Showcase[] = [
  {
    id: "wtp",
    index: "LAB_01",
    title: "Willingness-to-Pay Engine",
    description:
      "Interactive Van Westendorp Price Sensitivity Meter — an applied pricing experiment that translates qualitative price thresholds into a quantitative optimal range and indifference point.",
    stack: ["Pricing Strategy", "Survey Analytics", "React", "TypeScript"],
    cta: "Launch Experiment",
    anchor: "#wtp",
  },
  {
    id: "ab",
    index: "BETA_02",
    title: "A/B Testing Framework",
    description:
      "A modular experimentation sandbox to preview variants, simulate visitor distributions, and quantify conversion lift with statistical confidence.",
    stack: ["Experimentation", "Statistics", "Product Analytics", "A/B Testing"],
    cta: "Run Simulation",
    anchor: "#ab",
  },
  {
    id: "grid",
    index: "LAB_03",
    title: "Affiliate Referral Grid",
    description:
      "A curated e-commerce surface demonstrating omni-channel product cards, performance metrics, and referral economics for partner monetization.",
    stack: ["E-commerce", "Omni-channel", "Affiliate", "UI Systems"],
    cta: "View Showcase",
    anchor: "#grid",
  },
];

function ProductLab() {
  return (
    <div className="bg-[#0b111e] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-[#D9A74A]/10 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#D9A74A]/5 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="font-body text-sm font-medium uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              Product Sandbox
            </p>
            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white">
              Where Data Architecture Meets{" "}
              <em
                className="font-display italic font-medium"
                style={{ color: GOLD }}
              >
                Product Innovation.
              </em>
            </h1>
            <div
              className="mt-6 h-px w-24"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />
            <p className="mt-8 max-w-2xl font-body text-base md:text-lg leading-[1.8] text-slate-300">
              A curated space showcasing how hands-on software and data
              engineering roots seamlessly transition into scalable AI
              strategies. Explore live product experiments, data pipelines,
              predictive price optimization models, and interactive
              e-commerce frameworks designed to translate complex data into
              measurable business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SHOWCASE GRID */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {showcases.map((s) => (
              <ShowcaseCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* LIVE EXPERIMENTS */}
      <ExperimentSection
        id="wtp"
        index="LAB_01"
        title="Willingness-to-Pay Engine"
        subtitle="Van Westendorp Price Sensitivity Meter — interactive"
      >
        <WTPSurvey />
      </ExperimentSection>

      <ExperimentSection
        id="ab"
        index="BETA_02"
        title="A/B Testing Framework"
        subtitle="Toggle between variants and simulate outcome distributions"
      >
        <ABTestingFramework />
      </ExperimentSection>

      <ExperimentSection
        id="grid"
        index="LAB_03"
        title="Affiliate Referral Grid"
        subtitle="Curated e-commerce partnerships with performance metrics"
      >
        <ReferralGrid />
      </ExperimentSection>

      {/* FOOTER NAV */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/"
            className="font-body text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: GOLD }}
          >
            ← Back to Home
          </Link>
          <Link
            to="/executive-journey"
            className="font-body text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: GOLD }}
          >
            View Executive Journey →
          </Link>
        </div>
      </section>
    </div>
  );
}

function ShowcaseCard({ s }: { s: Showcase }) {
  return (
    <motion.a
      href={s.anchor}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#D9A74A]/40 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between">
        <span
          className="font-body text-[11px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: GOLD }}
        >
          {s.index}
        </span>
        <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:text-[#D9A74A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-white">
        {s.title}
      </h3>
      <p className="mt-3 font-body text-sm leading-[1.75] text-slate-300/90">
        {s.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {s.stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/80 font-body"
          >
            {t}
          </span>
        ))}
      </div>
      <span
        className="mt-7 inline-flex items-center gap-1.5 font-body text-sm font-medium"
        style={{ color: GOLD }}
      >
        {s.cta} <span aria-hidden="true">→</span>
      </span>
    </motion.a>
  );
}

function ExperimentSection({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative border-t border-white/5 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <p
            className="font-body text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: GOLD }}
          >
            {index}
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 font-body text-sm leading-[1.75] text-slate-300/90">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------------- WTP Survey ---------------- */
function WTPSurvey() {
  const [prices, setPrices] = useState({ tooCheap: 29, bargain: 49, expensive: 79, tooExpensive: 99 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof typeof prices, value: string) => {
    const num = parseInt(value) || 0;
    setPrices((prev) => ({ ...prev, [key]: num }));
    setSubmitted(false);
  };

  const { tooCheap, bargain, expensive, tooExpensive } = prices;
  const optimalMin = Math.max(tooCheap, bargain);
  const optimalMax = Math.min(expensive, tooExpensive);
  const indifference = (bargain + expensive) / 2;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Panel>
        <h3 className="font-display text-lg font-medium text-white">
          Set your price thresholds
        </h3>
        <p className="mt-1 font-body text-sm text-slate-400">
          Drag the sliders to define four critical price points for a hypothetical SaaS product.
        </p>

        <div className="mt-8 space-y-6">
          <PriceSlider label="Too Cheap — Quality would be suspect" value={tooCheap} onChange={(v) => handleChange("tooCheap", v)} />
          <PriceSlider label="Bargain — Great value for money" value={bargain} onChange={(v) => handleChange("bargain", v)} />
          <PriceSlider label="Expensive — But I'd still consider it" value={expensive} onChange={(v) => handleChange("expensive", v)} />
          <PriceSlider label="Too Expensive — I'd never buy" value={tooExpensive} onChange={(v) => handleChange("tooExpensive", v)} />
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-body text-sm font-semibold text-[#0B0F19] transition-colors hover:opacity-90"
          style={{ backgroundColor: GOLD }}
        >
          <BarChart3 className="h-4 w-4" />
          Calculate Optimal Range
        </button>
      </Panel>

      <Panel>
        <h3 className="font-display text-lg font-medium text-white">
          Van Westendorp Analysis
        </h3>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mt-6 space-y-3">
              <MetricRow
                label="Optimal Price Range"
                value={`$${optimalMin} – $${optimalMax}`}
                icon={<Percent className="h-4 w-4" />}
                highlight
              />
              <MetricRow
                label="Point of Marginal Cheapness (PMC)"
                value={`$${bargain}`}
                icon={<TrendingUp className="h-4 w-4" />}
              />
              <MetricRow
                label="Point of Marginal Expensiveness (PME)"
                value={`$${expensive}`}
                icon={<TrendingUp className="h-4 w-4 rotate-180" />}
              />
              <MetricRow
                label="Indifference Price Point"
                value={`$${indifference.toFixed(0)}`}
                icon={<DollarSign className="h-4 w-4" />}
              />
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <p className="font-body text-sm leading-[1.7] text-slate-300">
                <span className="font-semibold text-white">Interpretation:</span> At{" "}
                <span style={{ color: GOLD }} className="font-medium">${indifference.toFixed(0)}</span>, an equal share
                of customers find the product too cheap or too expensive. The acceptable range spans{" "}
                <span style={{ color: GOLD }} className="font-medium">${optimalMin} – ${optimalMax}</span>.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="mt-8 flex h-64 items-center justify-center rounded-lg border border-dashed border-white/10 bg-white/[0.02]">
            <p className="px-8 text-center font-body text-sm text-slate-400">
              Adjust the price thresholds and calculate to see the Van Westendorp analysis.
            </p>
          </div>
        )}
      </Panel>
    </div>
  );
}

function PriceSlider({ label, value, onChange }: { label: string; value: number; onChange: (v: string) => void }) {
  const id = useId();
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="font-body text-sm text-slate-300">{label}</label>
        <span
          className="inline-flex items-center rounded-md border px-2 py-0.5 font-body text-sm font-semibold"
          style={{ borderColor: GOLD, color: GOLD }}
        >
          ${value}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={9}
        max={199}
        step={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#D9A74A]"
      />
    </div>
  );
}

function MetricRow({
  label,
  value,
  icon,
  highlight,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-lg border p-4 ${highlight ? "border-[#D9A74A]/40 bg-[#D9A74A]/[0.06]" : "border-white/10 bg-white/[0.02]"
        }`}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full border"
        style={{ borderColor: highlight ? GOLD : "rgba(255,255,255,0.15)", color: highlight ? GOLD : "rgba(255,255,255,0.7)" }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
        <p className="mt-0.5 font-display text-lg font-medium" style={{ color: highlight ? GOLD : "white" }}>
          {value}
        </p>
      </div>
    </div>
  );
}

/* ---------------- A/B Testing Framework ---------------- */
function ABTestingFramework() {
  const [variant, setVariant] = useState<"A" | "B">("A");
  const [simulated, setSimulated] = useState(false);

  const variantA = { headline: "Streamline Your Workflow Today", cta: "Get Started Free", conversion: 3.2, visitors: 4850 };
  const variantB = { headline: "Cut 10 Hours Off Your Week", cta: "Claim Your Free Trial", conversion: 4.7, visitors: 4920 };

  const active = variant === "A" ? variantA : variantB;
  const other = variant === "A" ? variantB : variantA;
  const lift = ((active.conversion - other.conversion) / other.conversion) * 100;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Panel>
        <h3 className="font-display text-lg font-medium text-white">Select Active Variant</h3>
        <p className="mt-1 font-body text-sm text-slate-400">
          Toggle between A and B to preview the experience and simulate outcomes.
        </p>

        <div className="mt-8">
          <div className="flex rounded-lg border border-white/10 bg-white/[0.03] p-1">
            {(["A", "B"] as const).map((v) => (
              <button
                key={v}
                onClick={() => { setVariant(v); setSimulated(false); }}
                className={`flex-1 rounded-md py-2.5 font-body text-sm font-semibold transition-all ${variant === v ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
              >
                Variant {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            Live Preview
          </p>
          <div className="rounded-xl border border-white/10 bg-[#0B0F19] p-6 text-center">
            <h4 className="font-display text-2xl font-medium text-white">{active.headline}</h4>
            <p className="mt-3 font-body text-sm text-slate-400">
              Experience the difference in messaging and call-to-action.
            </p>
            <button
              className="mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-body text-sm font-semibold transition-colors"
              style={
                variant === "B"
                  ? { backgroundColor: GOLD, color: "#0B0F19" }
                  : { backgroundColor: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }
              }
            >
              {active.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          onClick={() => setSimulated(true)}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
        >
          <BarChart3 className="h-4 w-4" />
          Simulate 5,000 Visitors
        </button>
      </Panel>

      <Panel>
        <h3 className="font-display text-lg font-medium text-white">Simulated Results</h3>

        {simulated ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-slate-400">Variant A</p>
                <p className="mt-1 font-display text-2xl font-medium text-white">{variantA.conversion}%</p>
                <p className="font-body text-xs text-slate-500">{variantA.visitors.toLocaleString()} visitors</p>
              </div>
              <div className="rounded-lg border border-[#D9A74A]/40 bg-[#D9A74A]/[0.06] p-4 text-center">
                <p className="font-body text-[10px] uppercase tracking-[0.2em]" style={{ color: GOLD }}>Variant B</p>
                <p className="mt-1 font-display text-2xl font-medium" style={{ color: GOLD }}>{variantB.conversion}%</p>
                <p className="font-body text-xs text-slate-400">{variantB.visitors.toLocaleString()} visitors</p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5" style={{ color: GOLD }} />
                <div>
                  <p className="font-body text-sm font-semibold text-white">Winner: Variant B</p>
                  <p className="font-body text-sm text-slate-300">
                    {lift > 1 ? "+" : ""}{lift.toFixed(1)}% relative lift in conversion rate
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between font-body text-sm">
                  <span className="text-slate-400">Statistical significance</span>
                  <span className="font-semibold text-white">99.1%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 rounded-full" style={{ width: "99.1%", backgroundColor: GOLD }} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <MiniStat icon={<Users className="h-4 w-4" />} label="Total visitors" value="9,770" />
              <MiniStat icon={<Check className="h-4 w-4" />} label="Conversions" value="391" />
              <MiniStat icon={<DollarSign className="h-4 w-4" />} label="Est. revenue" value="$23.4K" />
            </div>
          </motion.div>
        ) : (
          <div className="mt-8 flex h-64 items-center justify-center rounded-lg border border-dashed border-white/10 bg-white/[0.02]">
            <p className="px-8 text-center font-body text-sm text-slate-400">
              Select a variant and click "Simulate" to generate outcome distributions.
            </p>
          </div>
        )}
      </Panel>
    </div>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center">
      <div className="inline-flex items-center justify-center text-slate-400">{icon}</div>
      <p className="mt-1 font-display text-lg font-medium text-white">{value}</p>
      <p className="font-body text-xs text-slate-500">{label}</p>
    </div>
  );
}

/* ---------------- Affiliate Referral Grid ---------------- */
function ReferralGrid() {
  const products = [
    { name: "Monetizing Innovation", category: "Book", price: "$24", rating: 4.7, reviews: 1240, commission: "10%", image: "📘", tag: "Pricing Essential" },
    { name: "Figma Professional", category: "Design Tool", price: "$15/mo", rating: 4.8, reviews: 8900, commission: "$10", image: "🎨", tag: "Top Rated" },
    { name: "Notion Team Plan", category: "Productivity", price: "$10/mo", rating: 4.7, reviews: 15200, commission: "$8", image: "🗂️", tag: "Best Seller" },
    { name: "Linear Standard", category: "Project Mgmt", price: "$8/mo", rating: 4.9, reviews: 3400, commission: "$6", image: "📈", tag: null },
    { name: "Amplitude Analytics", category: "Analytics", price: "Custom", rating: 4.6, reviews: 2100, commission: "12%", image: "📊", tag: null },
    { name: "The Lean Startup", category: "Book", price: "$18", rating: 4.6, reviews: 6400, commission: "10%", image: "📕", tag: "Classic" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          whileHover={{ y: -4 }}
          className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#D9A74A]/40"
        >
          <div className="flex h-32 items-center justify-center border-b border-white/5 bg-white/[0.02] text-5xl">
            {p.image}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/15 bg-white/[0.03] px-2 py-0.5 font-body text-[11px] text-slate-300">
                {p.category}
              </span>
              {p.tag && (
                <span
                  className="rounded-full px-2 py-0.5 font-body text-[11px] font-medium"
                  style={{ color: GOLD, backgroundColor: "rgba(217,167,74,0.1)" }}
                >
                  {p.tag}
                </span>
              )}
            </div>
            <h2 className="mt-3 font-display text-lg font-medium text-white transition-colors group-hover:text-[#D9A74A]">
              {p.name}
            </h2>
            <div className="mt-2 flex items-center gap-1">
              <Star className="h-3.5 w-3.5" style={{ color: GOLD, fill: GOLD }} />
              <span className="font-body text-sm font-medium text-white">{p.rating}</span>
              <span className="font-body text-xs text-slate-500">({p.reviews.toLocaleString()})</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-display text-xl font-medium text-white">{p.price}</span>
              <span
                className="rounded-full px-2.5 py-1 font-body text-[11px] font-medium"
                style={{ color: GOLD, backgroundColor: "rgba(217,167,74,0.08)" }}
              >
                {p.commission} commission
              </span>
            </div>
            <button
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-4 py-2.5 font-body text-sm font-medium text-white transition-colors hover:border-[#D9A74A]/40 hover:text-[#D9A74A]"
            >
              View Case Study <span aria-hidden="true">→</span>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      {children}
    </div>
  );
}
