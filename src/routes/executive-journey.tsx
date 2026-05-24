import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
          "An interactive, premium serpentine timeline tracing 25 years across engineering, product, and strategic pricing leadership.",
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
  { period: "2000", title: "INS Viraat", org: "Indian Navy", location: "XYX", kind: "service", Icon: Anchor },
  { period: "2000 – 2003", title: "Masters in Computer Applications (MCA)", org: "Osmania University", location: "Hyderabad, India", kind: "education", Icon: GraduationCap },
  { period: "2003 – 2006", title: "Software Engineer", org: "Satyam · Merrill Lynch", location: "Hyderabad, India", kind: "engineering", Icon: Code2 },
  { period: "2006 – 2007", title: "IT Consultant", org: "McNeil (Johnson & Johnson)", location: "Hyderabad, India", kind: "consulting", Icon: Briefcase },
  { period: "2007 – 2010", title: "Sr. Software Engineer", org: "Credit Suisse", location: "Pune, India", kind: "engineering", Icon: LineChart },
  { period: "2011 – 2012", title: "Business Analyst", org: "Ameriprise Financial", location: "Minneapolis, US", kind: "consulting", Icon: TrendingUp },
  { period: "2012 – 2017", title: "Product Manager", org: "BestBuy", location: "Minneapolis, US", kind: "product", Icon: ShoppingBag },
  { period: "2016 – 2020", title: "MBA", org: "Carlson School of Management · UMN", location: "Minneapolis, US", kind: "education", Icon: Building2 },
  { period: "2017 – 2018", title: "Digital Product Manager", org: "Kohl's", kind: "product", Icon: Smartphone },
  { period: "2018 – 2023", title: "Lead Product Manager", org: "AT&T", location: "Plano, TX", tag: "MDP, AT&T", kind: "product", Icon: Network },
  { period: "2023 – 2025", title: "Lead Strategic Pricing Manager", org: "AT&T Business", location: "Dallas, TX", tag: "VP Events, Oasis, AT&T", kind: "strategy", Icon: Target },
];

const kindLabel: Record<Milestone["kind"], string> = {
  service: "Service",
  education: "Education",
  engineering: "Engineering",
  consulting: "Consulting",
  product: "Product",
  strategy: "Strategy",
};

const COLS = 4;

function ExecutiveJourney() {
  return (
    <div className="flex flex-col font-body">
      <section className="bg-slate-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Executive Journey
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              A Twenty‑Five Year Arc
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From the deck of the INS Viraat to enterprise pricing strategy at AT&amp;T — a serpentine
              path through engineering, consulting, product, and strategic leadership.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile */}
          <div className="md:hidden">
            <VerticalTimeline />
          </div>
          {/* Desktop Serpentine */}
          <div className="hidden md:block">
            <SerpentinePath />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- DESKTOP: Serpentine path with SVG snake ---------------- */
function SerpentinePath() {
  // Lay out 11 nodes into rows of 4: row 0 LTR, row 1 RTL, row 2 LTR
  const rows: Milestone[][] = [];
  for (let i = 0; i < milestones.length; i += COLS) {
    rows.push(milestones.slice(i, i + COLS));
  }

  return (
    <div className="relative">
      {/* SVG snake connector */}
      <SnakeConnector rowCount={rows.length} />

      <div className="relative z-10 flex flex-col gap-y-20">
        {rows.map((row, rowIdx) => {
          const reversed = rowIdx % 2 === 1;
          const ordered = reversed ? [...row].reverse() : row;
          return (
            <div
              key={rowIdx}
              className="grid grid-cols-4 gap-x-6 lg:gap-x-10"
            >
              {ordered.map((m, colIdx) => {
                const originalIndex = reversed
                  ? rowIdx * COLS + (row.length - 1 - colIdx)
                  : rowIdx * COLS + colIdx;
                return (
                  <motion.div
                    key={originalIndex}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: colIdx * 0.08 }}
                  >
                    <SerpentineCard m={m} index={originalIndex + 1} />
                  </motion.div>
                );
              })}
              {/* Fill empty cells in the last row to keep grid alignment */}
              {Array.from({ length: COLS - row.length }).map((_, k) => (
                <div key={`spacer-${k}`} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SnakeConnector({ rowCount }: { rowCount: number }) {
  // Approximate row vertical centers: each row ≈ 230px tall card + 80px gap
  const ROW_H = 230;
  const GAP = 80;
  const totalH = rowCount * ROW_H + (rowCount - 1) * GAP;

  // Column horizontal centers as percentages
  const colXs = [12.5, 37.5, 62.5, 87.5]; // 4 cols, center of each quarter

  // Build path: for each row, draw horizontal across, then S-curve down to next row's first col
  let d = "";
  for (let r = 0; r < rowCount; r++) {
    const y = r * (ROW_H + GAP) + ROW_H / 2;
    const ltr = r % 2 === 0;
    const startX = ltr ? colXs[0] : colXs[colXs.length - 1];
    const endX = ltr ? colXs[colXs.length - 1] : colXs[0];

    if (r === 0) d += `M ${startX} ${y} `;
    else d += `L ${startX} ${y} `;
    d += `L ${endX} ${y} `;

    if (r < rowCount - 1) {
      const nextY = (r + 1) * (ROW_H + GAP) + ROW_H / 2;
      const nextLtr = (r + 1) % 2 === 0;
      const nextStartX = nextLtr ? colXs[0] : colXs[colXs.length - 1];
      const midY = (y + nextY) / 2;
      // Cubic bezier S-curve to next row start
      d += `C ${endX} ${midY}, ${nextStartX} ${midY}, ${nextStartX} ${nextY} `;
    }
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 100 ${totalH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sage" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="url(#sage)"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeDasharray="1.4 1.2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function SerpentineCard({ m, index }: { m: Milestone; index: number }) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* Marker circle */}
      <div className="relative z-10 mb-4">
        <span className="absolute inset-0 -m-2 rounded-full bg-emerald-300/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-300/70 bg-slate-900 text-emerald-200 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.6)] transition-transform duration-300 group-hover:scale-110">
          <m.Icon className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-400 px-1 text-[10px] font-bold text-slate-900">
            {index}
          </span>
        </div>
      </div>

      {/* Card */}
      <div className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left text-slate-100 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.55)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-400/40 group-hover:shadow-[0_22px_50px_-20px_rgba(16,185,129,0.35)]">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            {kindLabel[m.kind]}
          </span>
          <span className="font-mono text-[10px] text-slate-400">{m.period}</span>
        </div>
        <h3 className="mt-2 text-sm font-semibold leading-snug text-white">{m.title}</h3>
        <p className="mt-1 text-xs font-medium text-slate-300">{m.org}</p>
        {m.location && <p className="mt-0.5 text-[11px] text-slate-400">{m.location}</p>}
        {m.tag && (
          <div className="mt-3 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
            {m.tag}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- MOBILE: vertical stacked timeline ---------------- */
function VerticalTimeline() {
  return (
    <ol className="relative space-y-6 border-l-2 border-dashed border-emerald-400/50 pl-6">
      {milestones.map((m, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="relative"
        >
          <span className="absolute -left-[34px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-300 bg-slate-900 text-emerald-200 shadow">
            <m.Icon className="h-3.5 w-3.5" />
          </span>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-100 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                {kindLabel[m.kind]}
              </span>
              <span className="font-mono text-[10px] text-slate-400">{m.period}</span>
            </div>
            <h3 className="mt-1.5 text-sm font-semibold text-white">{m.title}</h3>
            <p className="mt-0.5 text-xs text-slate-300">{m.org}</p>
            {m.location && <p className="text-[11px] text-slate-400">{m.location}</p>}
            {m.tag && (
              <div className="mt-2 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                {m.tag}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
