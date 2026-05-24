import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Anchor,
  GraduationCap,
  Code2,
  Briefcase,
  TrendingUp,
  LineChart,
  ShoppingBag,
  Building2,
  Smartphone,
  Network,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/executive-journey")({
  head: () => ({
    meta: [
      { title: "Executive Journey — Career Timeline" },
      {
        name: "description",
        content:
          "An interactive, premium timeline of a multi-decade journey across engineering, product, and strategic pricing leadership.",
      },
      { property: "og:title", content: "Executive Journey — Career Timeline" },
      {
        property: "og:description",
        content:
          "From the Indian Navy to enterprise pricing strategy — an interactive serpentine career timeline.",
      },
    ],
  }),
  component: ExecutiveJourney,
});

type Milestone = {
  period: string;
  title: string;
  org: string;
  location?: string;
  tag?: string;
  kind: "service" | "education" | "engineering" | "consulting" | "product" | "strategy";
  Icon: React.ComponentType<{ className?: string }>;
};

const milestones: Milestone[] = [
  {
    period: "2000",
    title: "INS Viraat",
    org: "Indian Navy",
    location: "XYX",
    kind: "service",
    Icon: Anchor,
  },
  {
    period: "2000 – 2003",
    title: "Masters in Computer Applications (MCA)",
    org: "Osmania University",
    location: "Hyderabad, India",
    kind: "education",
    Icon: GraduationCap,
  },
  {
    period: "2003 – 2006",
    title: "Software Engineer",
    org: "Satyam · Merrill Lynch",
    location: "Hyderabad, India",
    kind: "engineering",
    Icon: Code2,
  },
  {
    period: "2006 – 2007",
    title: "IT Consultant",
    org: "McNeil (Johnson & Johnson)",
    location: "Hyderabad, India",
    kind: "consulting",
    Icon: Briefcase,
  },
  {
    period: "2007 – 2010",
    title: "Sr. Software Engineer",
    org: "Credit Suisse",
    location: "Pune, India",
    kind: "engineering",
    Icon: LineChart,
  },
  {
    period: "2011 – 2012",
    title: "Business Analyst",
    org: "Ameriprise Financial",
    location: "Minneapolis, US",
    kind: "consulting",
    Icon: TrendingUp,
  },
  {
    period: "2012 – 2017",
    title: "Product Manager",
    org: "BestBuy",
    location: "Minneapolis, US",
    kind: "product",
    Icon: ShoppingBag,
  },
  {
    period: "2016 – 2020",
    title: "MBA",
    org: "Carlson School of Management · UMN",
    location: "Minneapolis, US",
    kind: "education",
    Icon: Building2,
  },
  {
    period: "2017 – 2018",
    title: "Digital Product Manager",
    org: "Kohl's",
    kind: "product",
    Icon: Smartphone,
  },
  {
    period: "2018 – 2023",
    title: "Lead Product Manager",
    org: "AT&T",
    location: "Plano, TX",
    tag: "MDP, AT&T",
    kind: "product",
    Icon: Network,
  },
  {
    period: "2023 – 2025",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business",
    location: "Dallas, TX",
    tag: "VP Events, Oasis, AT&T",
    kind: "strategy",
    Icon: Target,
  },
];

const kindLabel: Record<Milestone["kind"], string> = {
  service: "Service",
  education: "Education",
  engineering: "Engineering",
  consulting: "Consulting",
  product: "Product",
  strategy: "Strategy",
};

function ExecutiveJourney() {
  return (
    <div className="flex flex-col font-body">
      {/* Header */}
      <section className="bg-slate-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Executive Journey
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              A Twenty‑Five Year Arc
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From the deck of the INS Viraat to enterprise pricing strategy at AT&amp;T — a
              chronological path through engineering, consulting, product, and strategic
              leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile / vertical stack */}
          <div className="md:hidden">
            <VerticalTimeline />
          </div>

          {/* Desktop serpentine grid */}
          <div className="hidden md:block">
            <SerpentineTimeline />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Mobile vertical ---------- */
function VerticalTimeline() {
  return (
    <ol className="relative border-l border-slate-200 pl-6">
      {milestones.map((m, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group mb-8 last:mb-0"
        >
          <NodeDot Icon={m.Icon} />
          <MilestoneCard m={m} />
        </motion.li>
      ))}
    </ol>
  );
}

/* ---------- Desktop serpentine (3-col grid, alternating row direction) ---------- */
function SerpentineTimeline() {
  const cols = 3;
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12">
      {milestones.map((m, i) => {
        const row = Math.floor(i / cols);
        const reversed = row % 2 === 1;
        // visual order within row
        const indexInRow = i % cols;
        const orderIndex = reversed ? cols - 1 - indexInRow : indexInRow;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: indexInRow * 0.08 }}
            style={{ order: row * cols + orderIndex, gridColumnStart: orderIndex + 1 }}
            className="relative"
          >
            <TimelineCard m={m} index={i + 1} />
          </motion.div>
        );
      })}
    </div>
  );
}

/* ---------- Card variants ---------- */
function TimelineCard({ m, index }: { m: Milestone; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative rounded-2xl border bg-white p-6 transition-all duration-300 ease-out ${
        hover
          ? "-translate-y-1 border-emerald-200 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.35)]"
          : "border-slate-200 shadow-sm"
      }`}
    >
      {/* Index pill */}
      <div className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-50">
        {String(index).padStart(2, "0")}
      </div>

      {/* Icon node */}
      <div className="flex items-center gap-3">
        <NodeCircle Icon={m.Icon} active={hover} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            {kindLabel[m.kind]}
          </p>
          <p className="font-mono text-xs text-slate-500">{m.period}</p>
        </div>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug text-slate-900">
        {m.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-slate-700">{m.org}</p>
      {m.location && (
        <p className="mt-0.5 text-xs text-slate-500">{m.location}</p>
      )}

      {m.tag && (
        <div className="mt-3 inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
          {m.tag}
        </div>
      )}
    </div>
  );
}

function MilestoneCard({ m }: { m: Milestone }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
        {kindLabel[m.kind]} · <span className="font-mono text-slate-500">{m.period}</span>
      </p>
      <h3 className="mt-1.5 text-base font-semibold text-slate-900">{m.title}</h3>
      <p className="mt-0.5 text-sm text-slate-700">{m.org}</p>
      {m.location && <p className="text-xs text-slate-500">{m.location}</p>}
      {m.tag && (
        <div className="mt-2 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
          {m.tag}
        </div>
      )}
    </div>
  );
}

/* ---------- Icon nodes ---------- */
function NodeCircle({
  Icon,
  active,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
        active
          ? "border-emerald-300 bg-slate-900 text-emerald-200"
          : "border-slate-200 bg-slate-50 text-slate-900"
      }`}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

function NodeDot({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <span className="absolute -left-[14px] flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm">
      <Icon className="h-3.5 w-3.5" />
    </span>
  );
}
