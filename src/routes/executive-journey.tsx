import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
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
          "A vertical, color-coded executive timeline tracing leadership, education, and engineering foundations in reverse chronological order.",
      },
      { property: "og:title", content: "Executive Journey — Career Timeline" },
      {
        property: "og:description",
        content:
          "Leadership and pricing roles, education tiers, and engineering foundations — visually segregated on a single tracking timeline.",
      },
    ],
  }),
  component: ExecutiveJourney,
});

type Category = "leadership" | "education" | "foundation";

type Milestone = {
  period: string;
  title: string;
  org: string;
  location?: string;
  tag?: string;
  category: Category;
  Icon: React.ComponentType<{ className?: string }>;
};

// Reverse chronological: latest first
const milestones: Milestone[] = [
  {
    period: "2023 – 2025",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business",
    location: "Dallas, TX",
    tag: "VP Events, Oasis, AT&T",
    category: "leadership",
    Icon: Target,
  },
  {
    period: "2018 – 2023",
    title: "Lead Product Manager",
    org: "AT&T",
    location: "Plano, TX",
    tag: "MDP, AT&T",
    category: "leadership",
    Icon: Network,
  },
  {
    period: "2017 – 2018",
    title: "Digital Product Manager",
    org: "Kohl's",
    category: "leadership",
    Icon: Smartphone,
  },
  {
    period: "2016 – 2020",
    title: "MBA",
    org: "Carlson School of Management · UMN",
    location: "Minneapolis, US",
    category: "education",
    Icon: Building2,
  },
  {
    period: "2012 – 2017",
    title: "Product Manager",
    org: "BestBuy",
    location: "Minneapolis, US",
    category: "leadership",
    Icon: ShoppingBag,
  },
  {
    period: "2011 – 2012",
    title: "Business Analyst",
    org: "Ameriprise Financial",
    location: "Minneapolis, US",
    category: "foundation",
    Icon: TrendingUp,
  },
  {
    period: "2007 – 2010",
    title: "Sr. Software Engineer",
    org: "Credit Suisse",
    location: "Pune, India",
    category: "foundation",
    Icon: LineChart,
  },
  {
    period: "2006 – 2007",
    title: "IT Consultant",
    org: "McNeil (Johnson & Johnson)",
    location: "Hyderabad, India",
    category: "foundation",
    Icon: Briefcase,
  },
  {
    period: "2003 – 2006",
    title: "Software Engineer",
    org: "Satyam · Merrill Lynch",
    location: "Hyderabad, India",
    category: "foundation",
    Icon: Code2,
  },
  {
    period: "2000 – 2003",
    title: "Masters in Computer Applications (MCA)",
    org: "Osmania University",
    location: "Hyderabad, India",
    category: "education",
    Icon: GraduationCap,
  },
];

const categoryMeta: Record<
  Category,
  {
    label: string;
    // node ring + bg
    node: string;
    // card classes
    card: string;
    // small chip
    chip: string;
    // tag pill
    tag: string;
    // period
    period: string;
  }
> = {
  leadership: {
    label: "Leadership & Pricing",
    node: "border-slate-700 bg-slate-900 text-slate-50 ring-4 ring-slate-900/10",
    card: "bg-slate-900 text-slate-100 border-slate-800 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.55)]",
    chip: "bg-slate-800 text-slate-100 ring-1 ring-inset ring-slate-700",
    tag: "bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/30",
    period: "text-slate-300",
  },
  education: {
    label: "Education",
    node: "border-emerald-600 bg-emerald-600 text-white ring-4 ring-emerald-100",
    card: "bg-emerald-50 text-emerald-950 border-emerald-200",
    chip: "bg-emerald-600 text-white",
    tag: "bg-emerald-100 text-emerald-800 ring-1 ring-inset ring-emerald-200",
    period: "text-emerald-700",
  },
  foundation: {
    label: "Engineering Foundations",
    node: "border-slate-300 bg-white text-slate-700 ring-4 ring-slate-100",
    card: "bg-white text-slate-800 border-slate-200",
    chip: "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200",
    tag: "bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-200",
    period: "text-slate-500",
  },
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
              A Tracking Timeline
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A reverse-chronological view across three arcs — strategic leadership,
              advanced education, and the engineering foundations beneath them.
            </p>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap gap-3">
              <LegendChip color="bg-slate-700" label="Leadership & Pricing" />
              <LegendChip color="bg-emerald-500" label="Education" />
              <LegendChip color="bg-amber-400" label="Engineering Foundations" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Timeline />
        </div>
      </section>
    </div>
  );
}

function LegendChip({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-inset ring-white/15">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </span>
  );
}

function Timeline() {
  return (
    <div className="relative">
      {/* Center axis (desktop) / left axis (mobile) */}
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-slate-300 to-slate-200 left-4 md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-10 md:space-y-14">
        {milestones.map((m, i) => (
          <TimelineRow key={i} m={m} index={i} />
        ))}
      </ol>
    </div>
  );
}

function TimelineRow({ m, index }: { m: Milestone; index: number }) {
  const meta = categoryMeta[m.category];
  const onRight = index % 2 === 1; // desktop alternation

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: 0.05 }}
      className="relative"
    >
      {/* Node marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform duration-300 hover:scale-110 ${meta.node}`}
        >
          <m.Icon className="h-4 w-4" />
        </div>
      </div>

      {/* Mobile: left-aligned card */}
      <div className="md:hidden pl-14">
        <Card m={m} meta={meta} align="left" />
      </div>

      {/* Desktop: alternating two-column */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-12">
        <div className={onRight ? "" : "pr-2"}>
          {!onRight && <Card m={m} meta={meta} align="right" />}
        </div>
        <div className={onRight ? "pl-2" : ""}>
          {onRight && <Card m={m} meta={meta} align="left" />}
        </div>
      </div>
    </motion.li>
  );
}

function Card({
  m,
  meta,
  align,
}: {
  m: Milestone;
  meta: (typeof categoryMeta)[Category];
  align: "left" | "right";
}) {
  return (
    <div
      className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${meta.card} ${
        align === "right" ? "md:text-right" : "md:text-left"
      }`}
    >
      <div
        className={`flex items-center gap-2 ${
          align === "right" ? "md:justify-end" : "md:justify-start"
        } justify-start`}
      >
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${meta.chip}`}
        >
          {meta.label}
        </span>
        <span className={`font-mono text-[11px] ${meta.period}`}>{m.period}</span>
      </div>

      <h3 className="mt-2 text-base font-semibold leading-snug">{m.title}</h3>
      <p className="mt-1 text-sm font-medium opacity-90">{m.org}</p>
      {m.location && <p className="mt-0.5 text-xs opacity-70">{m.location}</p>}

      {m.tag && (
        <div
          className={`mt-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${meta.tag}`}
        >
          {m.tag}
        </div>
      )}
    </div>
  );
}
