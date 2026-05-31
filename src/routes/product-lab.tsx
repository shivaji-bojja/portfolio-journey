import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FlaskConical,
  BarChart3,
  ToggleLeft,
  ShoppingBag,
  Star,
  Check,
  ArrowRight,
  Percent,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/product-lab")({
  head: () => ({
    meta: [
      { title: "Product Lab — Portfolio" },
      { name: "description", content: "Live product experiments: WTP surveys, A/B testing frameworks, and e-commerce affiliate grids." },
      { property: "og:title", content: "Product Lab — Portfolio" },
      { property: "og:description", content: "Live product experiments: WTP surveys, A/B testing frameworks, and e-commerce affiliate grids." },
    ],
  }),
  component: ProductLab,
});

function ProductLab() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400 font-body">
              <FlaskConical className="h-3.5 w-3.5" />
              Live Experiments
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Product Lab
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80 font-body">
              A sandbox for product experimentation. Test pricing sensitivity, simulate A/B outcomes,
              and explore referral mechanics — all in one modular workspace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: WTP Survey */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <div className="inline-flex items-center justify-center rounded-lg bg-amber-500/10 p-2.5">
              <DollarSign className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Willingness-to-Pay Survey
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Van Westendorp Price Sensitivity Meter — interactive
              </p>
            </div>
          </div>
          <WTPSurvey />
        </div>
      </section>

      {/* Section 2: A/B Testing Framework */}
      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <div className="inline-flex items-center justify-center rounded-lg bg-slate-700/10 p-2.5">
              <ToggleLeft className="h-5 w-5 text-slate-700" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                A/B Testing Framework
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Toggle between variants and simulate outcome distributions
              </p>
            </div>
          </div>
          <ABTestingFramework />
        </div>
      </section>

      {/* Section 3: Affiliate Referral Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <div className="inline-flex items-center justify-center rounded-lg bg-emerald-600/10 p-2.5">
              <ShoppingBag className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Affiliate Referral Grid
              </h2>
              <p className="text-sm text-muted-foreground font-body">
                Curated e-commerce partnerships with performance metrics
              </p>
            </div>
          </div>
          <ReferralGrid />
        </div>
      </section>
    </div>
  );
}

/* WTP Survey Component */
function WTPSurvey() {
  const [prices, setPrices] = useState({ tooCheap: 29, bargain: 49, expensive: 79, tooExpensive: 99 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof typeof prices, value: string) => {
    const num = parseInt(value) || 0;
    setPrices((prev) => ({ ...prev, [key]: num }));
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const { tooCheap, bargain, expensive, tooExpensive } = prices;
  const optimalMin = Math.max(tooCheap, bargain);
  const optimalMax = Math.min(expensive, tooExpensive);
  const indifference = (bargain + expensive) / 2;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Set your price thresholds
        </h3>
        <p className="mt-1 text-sm text-muted-foreground font-body">
          Drag the sliders to define four critical price points for a hypothetical SaaS product.
        </p>

        <div className="mt-8 space-y-6">
          <PriceSlider
            label="Too Cheap — Quality would be suspect"
            value={tooCheap}
            onChange={(v) => handleChange("tooCheap", v)}
            color="bg-red-500"
          />
          <PriceSlider
            label="Bargain — Great value for money"
            value={bargain}
            onChange={(v) => handleChange("bargain", v)}
            color="bg-emerald-500"
          />
          <PriceSlider
            label="Expensive — But I'd still consider it"
            value={expensive}
            onChange={(v) => handleChange("expensive", v)}
            color="bg-amber-500"
          />
          <PriceSlider
            label="Too Expensive — I'd never buy"
            value={tooExpensive}
            onChange={(v) => handleChange("tooExpensive", v)}
            color="bg-slate-700"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 font-body"
        >
          <BarChart3 className="h-4 w-4" />
          Calculate Optimal Range
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Van Westendorp Analysis
        </h3>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mt-6 space-y-4">
              <MetricCard
                label="Optimal Price Range"
                value={`$${optimalMin} – $${optimalMax}`}
                icon={<Percent className="h-5 w-5" />}
                highlight
              />
              <MetricCard
                label="Point of Marginal Cheapness (PMC)"
                value={`$${bargain}`}
                icon={<TrendingUp className="h-5 w-5" />}
              />
              <MetricCard
                label="Point of Marginal Expensiveness (PME)"
                value={`$${expensive}`}
                icon={<TrendingUp className="h-5 w-5 rotate-180" />}
              />
              <MetricCard
                label="Indifference Price Point"
                value={`$${indifference.toFixed(0)}`}
                icon={<DollarSign className="h-5 w-5" />}
              />
            </div>

            <div className="mt-6 rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground font-body">
                <span className="font-semibold text-foreground">Interpretation:</span> At{" "}
                <span className="text-amber-600 font-medium">${indifference.toFixed(0)}</span>, an equal
                percentage of customers find the product too cheap or too expensive. The acceptable range
                spans{" "}
                <span className="text-emerald-600 font-medium">${optimalMin} – ${optimalMax}</span>.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="mt-8 flex h-64 items-center justify-center rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground font-body text-center px-8">
              Adjust the price thresholds and click "Calculate" to see the Van Westendorp analysis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function PriceSlider({
  label,
  value,
  onChange,
  color,
}: {
  label: string;
  value: number;
  onChange: (value: string) => void;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground font-body">{label}</label>
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-semibold ${color} text-white`}>
          ${value}
        </span>
      </div>
      <input
        type="range"
        min={9}
        max={199}
        step={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-amber-500"
      />
    </div>
  );
}

function MetricCard({
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
    <div className={`flex items-center gap-4 rounded-lg p-4 ${highlight ? "bg-amber-50 border border-amber-200" : "bg-muted"}`}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${highlight ? "bg-amber-500 text-white" : "bg-background text-muted-foreground"}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-body uppercase tracking-wide">{label}</p>
        <p className={`text-lg font-bold ${highlight ? "text-amber-700" : "text-foreground"} font-body`}>
          {value}
        </p>
      </div>
    </div>
  );
}

/* A/B Testing Framework Component */
function ABTestingFramework() {
  const [variant, setVariant] = useState<"A" | "B">("A");
  const [simulated, setSimulated] = useState(false);

  const variantA = {
    headline: "Streamline Your Workflow Today",
    cta: "Get Started Free",
    color: "bg-slate-700",
    conversion: 3.2,
    visitors: 4850,
  };

  const variantB = {
    headline: "Cut 10 Hours Off Your Week",
    cta: "Claim Your Free Trial",
    color: "bg-amber-500",
    conversion: 4.7,
    visitors: 4920,
  };

  const active = variant === "A" ? variantA : variantB;
  const other = variant === "A" ? variantB : variantA;
  const lift = ((active.conversion - other.conversion) / other.conversion) * 100;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Controls */}
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Select Active Variant
        </h3>
        <p className="mt-1 text-sm text-muted-foreground font-body">
          Toggle between A and B to preview the experience and simulate outcomes.
        </p>

        <div className="mt-8">
          <div className="flex rounded-lg bg-muted p-1">
            <button
              onClick={() => { setVariant("A"); setSimulated(false); }}
              className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-all font-body ${
                variant === "A" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Variant A
            </button>
            <button
              onClick={() => { setVariant("B"); setSimulated(false); }}
              className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-all font-body ${
                variant === "B" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Variant B
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body mb-4">
            Live Preview
          </p>
          <div className="rounded-xl border border-border bg-background p-6 text-center">
            <h4 className="font-display text-2xl font-bold text-foreground">
              {active.headline}
            </h4>
            <p className="mt-3 text-sm text-muted-foreground font-body">
              Experience the difference in messaging and call-to-action.
            </p>
            <button
              className={`mt-6 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-colors font-body ${
                active.color === "bg-amber-500" ? "bg-amber-500 hover:bg-amber-400 text-slate-900" : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              {active.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          onClick={() => setSimulated(true)}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted font-body"
        >
          <BarChart3 className="h-4 w-4" />
          Simulate 5,000 Visitors
        </button>
      </div>

      {/* Results */}
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Simulated Results
        </h3>

        {simulated ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-6 space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-4 text-center">
                <p className="text-xs text-muted-foreground font-body uppercase">Variant A</p>
                <p className="mt-1 font-display text-2xl font-bold text-foreground">{variantA.conversion}%</p>
                <p className="text-xs text-muted-foreground font-body">{variantA.visitors.toLocaleString()} visitors</p>
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-center">
                <p className="text-xs text-amber-700 font-body uppercase">Variant B</p>
                <p className="mt-1 font-display text-2xl font-bold text-amber-700">{variantB.conversion}%</p>
                <p className="text-xs text-amber-600 font-body">{variantB.visitors.toLocaleString()} visitors</p>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-semibold text-emerald-800 font-body">
                    Winner: Variant B
                  </p>
                  <p className="text-sm text-emerald-700 font-body">
                    {lift > 1 ? "+" : ""}
                    {lift.toFixed(1)}% relative lift in conversion rate
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm font-body">
                  <span className="text-muted-foreground">Statistical significance</span>
                  <span className="font-semibold text-foreground">99.1%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-emerald-200">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: "99.1%" }} />
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
          <div className="mt-8 flex h-64 items-center justify-center rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground font-body text-center px-8">
              Select a variant and click "Simulate" to generate outcome distributions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted p-3 text-center">
      <div className="inline-flex items-center justify-center text-muted-foreground">{icon}</div>
      <p className="mt-1 font-display text-lg font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground font-body">{label}</p>
    </div>
  );
}

/* Affiliate Referral Grid */
function ReferralGrid() {
  const products = [
    {
      name: "Monetizing Innovation",
      category: "Book",
      price: "$24",
      rating: 4.7,
      reviews: 1240,
      commission: "10%",
      image: "📘",
      tag: "Pricing Essential",
    },
    {
      name: "Figma Professional",
      category: "Design Tool",
      price: "$15/mo",
      rating: 4.8,
      reviews: 8900,
      commission: "$10",
      image: "🎨",
      tag: "Top Rated",
    },
    {
      name: "Notion Team Plan",
      category: "Productivity",
      price: "$10/mo",
      rating: 4.7,
      reviews: 15200,
      commission: "$8",
      image: "🗂️",
      tag: "Best Seller",
    },
    {
      name: "Linear Standard",
      category: "Project Mgmt",
      price: "$8/mo",
      rating: 4.9,
      reviews: 3400,
      commission: "$6",
      image: "📈",
      tag: null,
    },
    {
      name: "Amplitude Analytics",
      category: "Analytics",
      price: "Custom",
      rating: 4.6,
      reviews: 2100,
      commission: "12%",
      image: "📊",
      tag: null,
    },
    {
      name: "The Lean Startup",
      category: "Book",
      price: "$18",
      rating: 4.6,
      reviews: 6400,
      commission: "10%",
      image: "📕",
      tag: "Classic",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="group rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
        >
          <div className="h-32 bg-muted flex items-center justify-center text-5xl">
            {product.image}
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground font-body">
                {product.category}
              </span>
              {product.tag && (
                <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600 font-body">
                  {product.tag}
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-card-foreground group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
            <div className="mt-2 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-foreground font-body">{product.rating}</span>
              <span className="text-xs text-muted-foreground font-body">({product.reviews.toLocaleString()})</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-display text-xl font-bold text-foreground">{product.price}</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 font-body">
                {product.commission} commission
              </span>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 font-body">
              <ShoppingBag className="h-4 w-4" />
              View Product
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
