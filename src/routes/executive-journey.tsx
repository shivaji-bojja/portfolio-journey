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
  Sparkles,
  MapPin,
} from "lucide-react";
import * as React from "react";

export const Route = createFileRoute("/executive-journey")({
  head: () => ({
    meta: [
      { title: "Executive Journey — Career Timeline" },
      {
        name: "description",
        content:
          "An interactive horizontal timeline of strategic product leadership, advanced business education, and engineering foundations from 2000 to present.",
      },
      { property: "og:title", content: "Executive Journey — Career Timeline" },
      {
        property: "og:description",
        content:
          "Leadership, pricing, education, and engineering foundations on a single interactive timeline.",
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
  badge: string;
};

// Chronological: earliest -> latest (left -> right)
const milestones: Milestone[] = [
  {
    period: "2000 – 2003",
    title: "MCA — Masters in Computer Applications",
    org: "Osmania University",
    location: "Hyderabad, India",
    category: "education",
    Icon: GraduationCap,
    badge: "OU",
  },
  {
    period: "2003 – 2006",
    title: "Software Engineer",
    org: "Satyam · Merrill Lynch",
    location: "Hyderabad, India",
    category: "foundation",
    Icon: Code2,
    badge: "ML",
  },
  {
    period: "2006 – 2007",
    title: "IT Consultant",
    org: "McNeil (Johnson & Johnson)",
    location: "Hyderabad, India",
    category: "foundation",
    Icon: Briefcase,
    badge: "J&J",
  },
  {
    period: "2007 – 2010",
    title: "Sr. Software Engineer",
    org: "Credit Suisse",
    location: "Pune, India",
    category: "foundation",
    Icon: LineChart,
    badge: "CS",
  },
  {
    period: "2011 – 2012",
    title: "Business Analyst",
    org: "Ameriprise Financial",
    location: "Minneapolis, US",
    category: "foundation",
    Icon: TrendingUp,
    badge: "AMP",
  },
  {
    period: "2012 – 2017",
    title: "Product Manager",
    org: "Best Buy",
    location: "Minneapolis, US",
    category: "leadership",
    Icon: ShoppingBag,
    badge: "BBY",
  },
  {
    period: "2016 – 2022",
    title: "MBA",
    org: "Carlson School of Management · UMN",
    location: "Minneapolis, US",
    category: "education",
    Icon: Building2,
    badge: "UMN",
  },
  {
    period: "2017 – 2018",
    title: "Digital Product Manager",
    org: "Kohl's",
    category: "leadership",
    Icon: Smartphone,
    badge: "KSS",
  },
  {
    period: "2018 – 2023",
    title: "Lead Product Manager",
    org: "AT&T",
    location: "Plano, TX",
    category: "leadership",
    Icon: Network,
    badge: "AT&T",
  },
  {
    period: "2021 – Present",
    title: "MDP",
    org: "AT&T",
    category: "education",
    Icon: GraduationCap,
    badge: "MDP",
  },
  {
    period: "2023 – 2025",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business",
    location: "Dallas, TX",
    tag: "VP Events · Oasis · AT&T",
    category: "leadership",
    Icon: Target,
    badge: "AT&T",
  },
];

const categoryMeta: Record<
  Category,
  { label: string; dot: string; ring: string; accent: string; chip: string }
> = {
  leadership: {
    label: "Leadership & Pricing",
    dot: "bg-slate-900",
    ring: "ring-slate-900/15",
    accent: "text-slate-900 border-slate-900/10",
    chip: "bg-slate-900 text-white",
  },
  education: {
    label: "Education",
    dot: "bg-emerald-600",
    ring: "ring-emerald-600/15",
    accent: "text-emerald-800 border-emerald-600/15",
    chip: "bg-emerald-600 text-white",
  },
  foundation: {
    label: "Engineering Foundations",
    dot: "bg-amber-500",
    ring: "ring-amber-500/20",
    accent: "text-amber-900 border-amber-500/20",
    chip: "bg-amber-500 text-white",
  },
};

function ExecutiveJourney() {
  return (
    <div className="flex flex-col font-body bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
              Executive Journey
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Two Decades, One Trajectory
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 lg:text-lg">
              A chronological path from engineering foundations through business
              education into strategic product and pricing leadership.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <LegendChip color="bg-slate-200" label="Leadership & Pricing" />
              <LegendChip color="bg-emerald-400" label="Education" />
              <LegendChip color="bg-amber-400" label="Engineering Foundations" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-slate-50 py-12 sm:py-16 lg:py-20">
        {/* Faint geometric grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(15 23 42 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HorizontalTimeline />
          <MobileTimeline />
        </div>
      </section>
    </div>
  );
}

function LegendChip({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-inset ring-white/15">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </span>
  );
}

/* ---------- Desktop: horizontal zigzag rail ---------- */
function HorizontalTimeline() {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="hidden md:block">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          <Sparkles className="h-3.5 w-3.5" />
          2000 → Present
        </div>
        <p className="text-xs text-slate-500">Scroll horizontally to explore →</p>
      </div>

      <div
        ref={scrollerRef}
        className="relative overflow-x-auto overflow-y-hidden pb-6 [scrollbar-width:thin]"
      >
        <div
          className="relative mx-auto"
          style={{ width: `${milestones.length * 240 + 80}px`, minWidth: "100%" }}
        >
          {/* The rail */}
          <div className="relative h-[460px]">
            {/* horizontal axis */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            {/* progress accent */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-amber-400/0 via-emerald-500/40 to-slate-900/60" />

            {milestones.map((m, i) => {
              const top = i % 2 === 0; // alternate above/below
              const left = 40 + i * 240;
              return (
                <TimelineNode
                  key={i}
                  m={m}
                  index={i}
                  left={left}
                  position={top ? "top" : "bottom"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineNode({
  m,
  index,
  left,
  position,
}: {
  m: Milestone;
  index: number;
  left: number;
  position: "top" | "bottom";
}) {
  const meta = categoryMeta[m.category];
  const isTop = position === "top";

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -12 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="absolute"
      style={{ left, top: 0, height: "100%", width: 220 }}
    >
      {/* connector line */}
      <div
        className="absolute left-1/2 w-px bg-slate-300"
        style={
          isTop
            ? { top: "calc(50% - 70px)", height: 70 }
            : { top: "50%", height: 70 }
        }
      />

      {/* node dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`h-4 w-4 rounded-full ring-4 ${meta.dot} ${meta.ring} shadow-sm transition-transform duration-300 group-hover:scale-110`}
        />
      </div>

      {/* card */}
      <div
        className="group absolute left-1/2 -translate-x-1/2"
        style={isTop ? { top: 0 } : { bottom: 0 }}
      >
        <NodeCard m={m} meta={meta} />
      </div>
    </motion.div>
  );
}

function NodeCard({
  m,
  meta,
}: {
  m: Milestone;
  meta: (typeof categoryMeta)[Category];
}) {
  return (
    <div
      className={`w-[220px] rounded-xl border bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_16px_36px_-12px_rgba(15,23,42,0.25)] ${meta.accent}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide ${meta.chip}`}
        >
          {m.badge}
        </span>
        <span className="font-mono text-[10px] text-slate-500">{m.period}</span>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-700">
          <m.Icon className="h-3.5 w-3.5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold leading-snug text-slate-900">
            {m.title}
          </h3>
          <p className="mt-0.5 text-[12px] font-medium text-slate-600 truncate">
            {m.org}
          </p>
        </div>
      </div>

      {m.location && (
        <p className="mt-2 flex items-center gap-1 text-[11px] text-slate-500">
          <MapPin className="h-3 w-3" />
          {m.location}
        </p>
      )}

      {m.tag && (
        <p className="mt-2 rounded-md bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
          {m.tag}
        </p>
      )}
    </div>
  );
}

/* ---------- Mobile: vertical timeline ---------- */
function MobileTimeline() {
  return (
    <div className="md:hidden">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
        <ol className="space-y-6">
          {milestones.map((m, i) => {
            const meta = categoryMeta[m.category];
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: 0.03 * i }}
                className="relative pl-12"
              >
                <div
                  className={`absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
                />
                <NodeCard m={m} meta={meta} />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
