import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Building2,
  ShoppingBag,
  Store,
  Cpu,
  TrendingUp,
  Landmark,
  Pill,
  LineChart,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const GOLD = "#D9A74A";

export const Route = createFileRoute("/executive-journey")({
  head: () => ({
    meta: [
      { title: "Executive Journey — Career Timeline" },
      {
        name: "description",
        content:
          "A horizontal, premium chronological deep-dive into Shivaji Bojja's professional path — from software engineering and data analytics roots into product management and enterprise-scale executive leadership.",
      },
      { property: "og:title", content: "Executive Journey — Career Timeline" },
      {
        property: "og:description",
        content:
          "From engineering foundations to executive product leadership across Retail, Telecom, and Supply Chain.",
      },
    ],
  }),
  component: ExecutiveJourney,
});

type Category = "Leadership & Pricing" | "Education" | "Engineering Foundations";

type Milestone = {
  id: string;
  period: string;
  title: string;
  org: string;
  location?: string;
  bullets?: string[];
  tags?: string[];
  category: Category;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  position: "top" | "bottom";
};

const milestones: Milestone[] = [
  {
    id: "mai",
    period: "2025 — Present",
    title: "Masters in AI (In Progress)",
    org: "Woolf University · by Udacity",
    bullets: [
      "Advanced study of applied AI, machine learning systems, and generative architectures.",
      "Focus on enterprise-grade AI strategy, governance, and responsible deployment.",
    ],
    tags: ["AI Strategy", "Generative AI", "Continuous Learning"],
    category: "Education",
    icon: GraduationCap,
    position: "bottom",
  },
  {
    id: "att-pricing",
    period: "2023 — 2025",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business · VP Events, Oasis",
    location: "Dallas, TX",
    bullets: [
      "Price optimization, commercial data insights, and scaling tech-enabled product solutions across enterprise business segments.",
    ],
    tags: ["Pricing Strategy", "Executive Leadership", "B2B"],
    category: "Leadership & Pricing",
    icon: TrendingUp,
    position: "top",
  },
  {
    id: "mdp",
    period: "2021",
    title: "MDP",
    org: "AT&T",
    bullets: [
      "Selective executive development program preparing leaders for enterprise-scale roles.",
    ],
    tags: ["Leadership Development"],
    category: "Leadership & Pricing",
    icon: Award,
    position: "bottom",
  },
  {
    id: "att-lpm",
    period: "2018 — 2023",
    title: "Lead Product Manager",
    org: "AT&T",
    location: "Plano, TX",
    bullets: [
      "Led product strategy and execution across telecom digital platforms.",
      "Drove AI-enabled experiences and price optimization initiatives at scale.",
    ],
    tags: ["Product Strategy", "AI Enablement", "Telecom"],
    category: "Leadership & Pricing",
    icon: Briefcase,
    position: "top",
  },
  {
    id: "kohls",
    period: "2017 — 2018",
    title: "Digital Product Manager",
    org: "Kohl's",
    location: "Milwaukee, WI",
    bullets: [
      "Owned digital product roadmap for omni-channel retail experiences.",
    ],
    tags: ["Omni-channel", "Retail"],
    category: "Leadership & Pricing",
    icon: ShoppingBag,
    position: "bottom",
  },
  {
    id: "mba",
    period: "2016 — 2020",
    title: "MBA",
    org: "Carlson School of Management · UMN",
    location: "Minneapolis, US",
    bullets: [
      "Graduate business education with focus on strategy, analytics, and product leadership.",
    ],
    tags: ["Strategy", "Analytics", "Leadership"],
    category: "Education",
    icon: GraduationCap,
    position: "top",
  },
  {
    id: "bestbuy",
    period: "2012 — 2017",
    title: "Product Manager",
    org: "Best Buy",
    location: "Minneapolis, US",
    bullets: [
      "Managed digital product portfolios spanning e-commerce and in-store experiences.",
    ],
    tags: ["E-commerce", "Customer Insights"],
    category: "Leadership & Pricing",
    icon: Store,
    position: "bottom",
  },
  {
    id: "mca",
    period: "MCA",
    title: "Masters in Computer Applications",
    org: "Osmania University",
    location: "Hyderabad, India",
    bullets: ["Graduate degree in computer applications — formal engineering foundations."],
    tags: ["Computer Science", "Engineering Foundations"],
    category: "Education",
    icon: GraduationCap,
    position: "top",
  },
];

type FoundationRole = {
  title: string;
  org: string;
  location: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
};

const foundations: FoundationRole[] = [
  { title: "Business Analyst", org: "Ameriprise Financial", location: "Minneapolis, US", icon: LineChart },
  { title: "Sr. Software Engineer", org: "Credit Suisse", location: "Pune, India", icon: Landmark },
  { title: "IT Consultant", org: "McNeil (Johnson & Johnson)", location: "Hyderabad, India", icon: Pill },
  { title: "Software Engineer", org: "Satyam · Merrill Lynch", location: "Hyderabad, India", icon: Cpu },
];

const FILTERS: Category[] = ["Leadership & Pricing", "Education", "Engineering Foundations"];

function ExecutiveJourney() {
  const [active, setActive] = useState<Category | null>(null);
  const [expanded, setExpanded] = useState(false);

  const isDimmed = (cat: Category) => active !== null && active !== cat;
  const foundationsDimmed = active !== null && active !== "Engineering Foundations";

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-hidden">
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[160px]"
        style={{ backgroundColor: `${GOLD}1A` }}
      />

      {/* HEADER */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              Career Timeline
            </p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              My Executive{" "}
              <em className="font-display italic font-medium" style={{ color: GOLD }}>
                Journey
              </em>
            </h1>
            <div className="mt-6 h-px w-24" style={{ backgroundColor: GOLD }} />
            <p className="mt-8 max-w-2xl font-body text-base leading-[1.8] text-slate-300">
              A chronological deep-dive into my professional path — tracing my evolution from
              hands-on software engineering, data engineering, and analytics roots into business
              transformation, product management, and enterprise-scale executive leadership.
            </p>
          </motion.div>

          {/* FILTERS */}
          <div className="mt-12 flex flex-wrap gap-3">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(isActive ? null : f)}
                  className={`group relative font-body text-xs uppercase tracking-[0.25em] px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-[#D9A74A] text-[#D9A74A] bg-[#D9A74A]/5"
                      : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              );
            })}
            {active && (
              <button
                onClick={() => setActive(null)}
                className="font-body text-xs uppercase tracking-[0.25em] px-3 py-2 text-white/40 hover:text-white/80 transition-colors"
              >
                Clear ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* DESKTOP HORIZONTAL TIMELINE */}
      <section className="relative border-t border-white/5">
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-[1600px] px-10 py-24">
            <div className="relative overflow-x-auto pb-6">
              <div className="relative min-w-[1600px]">
                {/* Horizontal rail */}
                <div className="relative h-[640px]">
                  <div
                    aria-hidden
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10"
                  />
                  <div
                    aria-hidden
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-px"
                    style={{
                      width: active ? "100%" : "0%",
                      backgroundColor: GOLD,
                      transition: "width 600ms ease",
                      opacity: active ? 0.6 : 0,
                    }}
                  />

                  <div
                    className="grid h-full"
                    style={{
                      gridTemplateColumns: `repeat(${milestones.length + 1}, minmax(0, 1fr))`,
                    }}
                  >
                    {milestones.map((m, i) => (
                      <HorizontalNode
                        key={m.id}
                        m={m}
                        index={i}
                        dimmed={isDimmed(m.category)}
                      />
                    ))}
                    {/* Engineering Foundations collapsed card */}
                    <FoundationsNode
                      expanded={expanded}
                      onToggle={() => setExpanded((v) => !v)}
                      dimmed={foundationsDimmed}
                    />
                  </div>
                </div>

                {/* Expanded panel */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <FoundationsPanel dimmed={foundationsDimmed} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET VERTICAL TIMELINE */}
        <div className="lg:hidden">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-4 top-0 bottom-0 w-px bg-white/10"
              />
              <ol className="space-y-10">
                {milestones.map((m) => (
                  <VerticalItem key={m.id} m={m} dimmed={isDimmed(m.category)} />
                ))}
                <li className="relative pl-12">
                  <span
                    className="absolute left-4 top-6 -translate-x-1/2 block h-3 w-3 rounded-full bg-[#0B0F19] ring-1"
                    style={{ boxShadow: `0 0 0 1px ${GOLD}` }}
                  />
                  <FoundationsCard
                    expanded={expanded}
                    onToggle={() => setExpanded((v) => !v)}
                    dimmed={foundationsDimmed}
                  />
                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden mt-4"
                      >
                        <FoundationsPanel dimmed={foundationsDimmed} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/"
            className="font-body text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: GOLD }}
          >
            ← Return to Home
          </Link>
          <Link
            to="/product-lab"
            className="font-body text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: GOLD }}
          >
            Explore the Product Lab →
          </Link>
        </div>
      </section>
    </div>
  );
}

function HorizontalNode({
  m,
  index,
  dimmed,
}: {
  m: Milestone;
  index: number;
  dimmed: boolean;
}) {
  const Icon = m.icon;
  const onTop = m.position === "top";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`relative flex flex-col items-center transition-opacity duration-500 ${
        dimmed ? "opacity-25" : "opacity-100"
      }`}
    >
      {/* TOP CARD */}
      {onTop && (
        <div className="absolute bottom-1/2 mb-8 w-[260px]">
          <MilestoneCard m={m} />
        </div>
      )}

      {/* Connector */}
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center">
        <span
          className="block h-3 w-3 rounded-full bg-[#0B0F19] ring-1 ring-white/30 transition-all duration-300 group-hover:ring-[#D9A74A]"
          style={{ boxShadow: dimmed ? "none" : `0 0 12px ${GOLD}55` }}
        />
      </div>

      {/* Tick line to card */}
      <div
        aria-hidden
        className="absolute top-1/2 w-px bg-white/15"
        style={{
          height: "32px",
          transform: onTop ? "translateY(-100%)" : "translateY(0)",
        }}
      />

      {/* BOTTOM CARD */}
      {!onTop && (
        <div className="absolute top-1/2 mt-8 w-[260px]">
          <MilestoneCard m={m} />
        </div>
      )}
    </motion.div>
  );
}

function MilestoneCard({ m }: { m: Milestone }) {
  const Icon = m.icon;
  return (
    <article className="group rounded-xl border border-white/10 bg-[#0B0F19]/95 backdrop-blur p-5 transition-all duration-300 hover:border-[#D9A74A]/50 hover:-translate-y-0.5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
          <Icon className="text-[#D9A74A]" size={16} />
        </span>
        <p
          className="font-body text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          {m.period}
        </p>
      </div>
      <h3 className="mt-3 font-display text-base font-medium leading-snug text-white">
        {m.title}
      </h3>
      <p className="mt-1 font-body text-xs text-white/70">
        {m.org}
        {m.location && <span className="text-white/40"> · {m.location}</span>}
      </p>
      {m.bullets && (
        <ul className="mt-3 space-y-1.5 font-body text-[11.5px] leading-[1.65] text-slate-300/90">
          {m.bullets.slice(0, 2).map((b) => (
            <li key={b} className="flex items-start gap-1.5">
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {m.tags && m.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {m.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[9.5px] font-medium tracking-wide text-white/70 font-body"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function FoundationsNode({
  expanded,
  onToggle,
  dimmed,
}: {
  expanded: boolean;
  onToggle: () => void;
  dimmed: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`relative flex flex-col items-center transition-opacity duration-500 ${
        dimmed ? "opacity-25" : "opacity-100"
      }`}
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 block h-3.5 w-3.5 rounded-full bg-[#0B0F19] ring-2"
        style={{ boxShadow: `0 0 16px ${GOLD}99`, borderColor: GOLD, color: GOLD }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 w-px bg-white/15"
        style={{ height: "32px" }}
      />
      <div className="absolute top-1/2 mt-8 w-[260px]">
        <FoundationsCard expanded={expanded} onToggle={onToggle} dimmed={false} />
      </div>
    </motion.div>
  );
}

function FoundationsCard({
  expanded,
  onToggle,
  dimmed,
}: {
  expanded: boolean;
  onToggle: () => void;
  dimmed: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className={`group w-full text-left rounded-xl border bg-[#0B0F19]/95 backdrop-blur p-5 transition-all duration-300 ${
        dimmed ? "opacity-25" : "opacity-100"
      } border-[#D9A74A]/40 hover:border-[#D9A74A] hover:-translate-y-0.5`}
      style={{ boxShadow: `inset 0 0 0 1px ${GOLD}10` }}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#D9A74A]/30 bg-[#D9A74A]/5">
          <Sparkles className="text-[#D9A74A]" size={16} />
        </span>
        <p
          className="font-body text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          Engineering Foundations
        </p>
      </div>
      <h3 className="mt-3 font-display text-base font-medium leading-snug text-white">
        Present – 2012 and Beyond
      </h3>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-body text-[11px] italic text-white/60">
          {expanded ? "Click to collapse" : "Click to view more"}
        </span>
        <ChevronDown
          size={16}
          className="text-[#D9A74A] transition-transform duration-300"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
    </button>
  );
}

function FoundationsPanel({ dimmed }: { dimmed: boolean }) {
  return (
    <div
      className={`mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8 transition-opacity duration-500 ${
        dimmed ? "opacity-30" : "opacity-100"
      }`}
    >
      <p
        className="font-body text-[10px] font-semibold uppercase tracking-[0.3em]"
        style={{ color: GOLD }}
      >
        Foundational Tech Roles
      </p>
      <h4 className="mt-2 font-display text-2xl font-medium text-white">
        Where the engineering instinct{" "}
        <em className="italic" style={{ color: GOLD }}>
          was forged.
        </em>
      </h4>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {foundations.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="rounded-xl border border-white/10 bg-[#0B0F19]/80 p-4 transition-colors hover:border-[#D9A74A]/40"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
                <Icon className="text-[#D9A74A]" size={18} />
              </span>
              <p className="mt-3 font-display text-sm font-medium text-white">{r.title}</p>
              <p className="mt-1 font-body text-xs text-white/65">{r.org}</p>
              <p className="font-body text-[11px] text-white/40">{r.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VerticalItem({ m, dimmed }: { m: Milestone; dimmed: boolean }) {
  return (
    <li
      className={`relative pl-12 transition-opacity duration-500 ${
        dimmed ? "opacity-25" : "opacity-100"
      }`}
    >
      <span
        className="absolute left-4 top-6 -translate-x-1/2 block h-3 w-3 rounded-full bg-[#0B0F19] ring-1 ring-white/30"
        style={{ boxShadow: dimmed ? "none" : `0 0 12px ${GOLD}55` }}
      />
      <MilestoneCard m={m} />
    </li>
  );
}
