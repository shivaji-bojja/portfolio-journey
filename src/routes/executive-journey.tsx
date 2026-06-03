import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  ShoppingBag,
  Store,
  Cpu,
  TrendingUp,
  Landmark,
  Pill,
  LineChart,
  Building2,
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
          "A horizontal, premium chronological deep-dive into Shivaji Bojja's professional path — from engineering and analytics roots into enterprise-scale product and pricing leadership.",
      },
      { property: "og:title", content: "Executive Journey — Career Timeline" },
      {
        property: "og:description",
        content:
          "From engineering foundations to executive product and pricing leadership across Retail, Telecom, and Financial Services.",
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
  bullets: string[];
  tags: string[];
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
    period: "2023 — Present",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business · VP Events, Oasis",
    location: "Dallas, TX",
    bullets: [
      "Lead a $500M Next-Gen pricing optimization transformation leveraging AI-driven decisioning and enterprise pricing platform integrations.",
      "Built ETL pipelines using Azure, Databricks, Python, and Snowflake to automate data integration across Quote, Contract, Ordering, Customer, Billing, and Pricing systems.",
      "Automated channel conflict detection processes that generated over $20M in incremental revenue opportunities.",
    ],
    tags: ["Price Optimization", "AI Decisioning", "ETL Pipelines", "Snowflake"],
    category: "Leadership & Pricing",
    icon: TrendingUp,
    position: "top",
  },
  {
    id: "mdp",
    period: "2021",
    title: "MDP — Management Development Program",
    org: "AT&T",
    bullets: [
      "Completed AT&T's highly selective corporate leadership track focused on advanced enterprise management frameworks and strategic executive positioning.",
    ],
    tags: ["Executive Leadership", "Strategic Management"],
    category: "Leadership & Pricing",
    icon: Award,
    position: "bottom",
  },
  {
    id: "att-lpm",
    period: "2018 — 2023",
    title: "Lead Product Manager & Sr. Technical PM",
    org: "AT&T · Omnichannel Architecture & Strategic Platforms",
    location: "Plano / Dallas, TX",
    bullets: [
      "Led multi-year omnichannel order management transformations, modernizing legacy platforms into event-driven microservices using Kafka, GraphQL, and MuleSoft APIs.",
      "Shipped enhanced 'Pizza Tracker' order status experiences integrated with carrier APIs — reduced customer care calls by 1.5M annually and OpEx by $5M.",
      "Designed and launched a real-time unified inventory platform synchronizing store and warehouse nodes, improving digital conversion by 2%.",
      "Headed a cross-functional product organization leading 10 Product Managers across 10 Agile Scrum teams.",
    ],
    tags: ["Order Management (OMS)", "Microservices", "Kafka", "Product Leadership"],
    category: "Leadership & Pricing",
    icon: Briefcase,
    position: "top",
  },
  {
    id: "kohls",
    period: "2017 — 2018",
    title: "Product Manager",
    org: "Kohl's · In-store Digital Innovation",
    location: "Milwaukee, WI",
    bullets: [
      "Led product strategy and execution for retail digital transformation initiatives including self-checkout, mobile POS, and in-store customer experience modernization.",
      "Managed omnichannel retail initiatives from concept through pilot execution and enterprise rollout using Jira and Confluence.",
    ],
    tags: ["Digital Retail", "Mobile POS", "Agile Execution"],
    category: "Leadership & Pricing",
    icon: ShoppingBag,
    position: "bottom",
  },
  {
    id: "mba",
    period: "2016 — 2020",
    title: "Master of Business Administration (MBA)",
    org: "University of Minnesota · Carlson School of Management",
    location: "Minneapolis, MN",
    bullets: [
      "Executive management focus.",
      "Completed academic internship on image processing using k-cluster algorithms to identify objects in images.",
    ],
    tags: ["Business Strategy", "Algorithms"],
    category: "Education",
    icon: GraduationCap,
    position: "top",
  },
  {
    id: "bestbuy",
    period: "2012 — 2017",
    title: "Product Manager & Lead Product Analyst",
    org: "Best Buy · Ecommerce & Omnichannel Order Journey",
    location: "Minneapolis, MN",
    bullets: [
      "Spearheaded end-to-end product delivery of Best Buy's cornerstone Ship-from-Store capability, optimizing supply chain logistics and driving $1M in annual revenue.",
      "Led product roadmap initiatives optimizing eCommerce cart, checkout, and omnichannel experiences — improving commerce conversion by 10%.",
      "Integrated big data solution platforms to provide personalized shopping recommendations on mobile and dotcom channels.",
    ],
    tags: ["Ship-from-Store", "Checkout Optimization", "Big Data Personalization"],
    category: "Leadership & Pricing",
    icon: Store,
    position: "bottom",
  },
  {
    id: "mca",
    period: "MCA",
    title: "Master of Computer Applications",
    org: "University College of Engineering · Osmania University",
    location: "Hyderabad, India",
    bullets: [
      "Advanced graduate degree in computer science theory, systems architecture, application design, and robust database management.",
    ],
    tags: ["Computer Science", "Software Systems"],
    category: "Education",
    icon: GraduationCap,
    position: "top",
  },
];

type FoundationRole = {
  title: string;
  org: string;
  location?: string;
  detail: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
};

const foundations: FoundationRole[] = [
  {
    title: "Business Analyst",
    org: "Ameriprise Financial",
    location: "Minneapolis, US",
    detail:
      "Partnered with business units to map workflows, translate system requirements, and deliver technical solutions.",
    icon: LineChart,
  },
  {
    title: "IT Business Consultant",
    org: "Wells Fargo",
    detail:
      "Drove core platform support, financial application alignment, and compliance-driven IT architecture mappings.",
    icon: Building2,
  },
  {
    title: "Senior Software Engineer",
    org: "Credit Suisse",
    location: "Pune, India",
    detail:
      "Developed enterprise-grade financial software systems, managing core algorithms and transactional databases.",
    icon: Landmark,
  },
  {
    title: "IT Consultant",
    org: "Johnson & Johnson / McNeil",
    detail:
      "Handled platform engineering, system stabilization, and cross-functional technical deployments.",
    icon: Pill,
  },
  {
    title: "Software Engineer",
    org: "Merrill Lynch / Satyam",
    detail:
      "Maintained backend software logic, executed system migrations, and engineered custom database integrations.",
    icon: Cpu,
  },
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
          <div className="relative mx-auto max-w-[1600px] px-6 py-20">
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6">
              ↔ Scroll horizontally to explore the timeline
            </p>
            <div className="relative overflow-x-auto pb-10 [scrollbar-color:#D9A74A55_transparent]">
              <div className="relative" style={{ width: `${(milestones.length + 1) * 320}px` }}>
                <div className="relative h-[720px]">
                  {/* Horizontal rail */}
                  <div
                    aria-hidden
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10"
                  />
                  <div
                    aria-hidden
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-px transition-all duration-700"
                    style={{
                      width: active ? "100%" : "0%",
                      backgroundColor: GOLD,
                      opacity: active ? 0.55 : 0,
                      boxShadow: active ? `0 0 12px ${GOLD}` : "none",
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
                    <FoundationsNode
                      expanded={expanded}
                      onToggle={() => setExpanded((v) => !v)}
                      dimmed={foundationsDimmed}
                    />
                  </div>
                </div>
              </div>
            </div>

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
                    className="absolute left-4 top-6 -translate-x-1/2 block h-3 w-3 rounded-full bg-[#0B0F19]"
                    style={{ boxShadow: `0 0 0 1px ${GOLD}, 0 0 12px ${GOLD}66` }}
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
  const onTop = m.position === "top";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative flex flex-col items-center transition-opacity duration-500 ${
        dimmed ? "opacity-20" : "opacity-100"
      }`}
    >
      {/* TOP CARD */}
      {onTop && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 mb-10 w-[280px]">
          <MilestoneCard m={m} />
        </div>
      )}

      {/* Tick line */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 w-px bg-white/15"
        style={{
          height: "36px",
          top: onTop ? "calc(50% - 36px)" : "50%",
        }}
      />

      {/* Node */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-3 w-3 rounded-full bg-[#0B0F19] ring-1 ring-white/30 transition-all duration-300"
        style={{ boxShadow: dimmed ? "none" : `0 0 12px ${GOLD}66` }}
      />

      {/* BOTTOM CARD */}
      {!onTop && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 mt-10 w-[280px]">
          <MilestoneCard m={m} />
        </div>
      )}
    </motion.div>
  );
}

function MilestoneCard({ m }: { m: Milestone }) {
  const Icon = m.icon;
  return (
    <article className="group rounded-xl border border-white/10 bg-[#0B0F19]/95 backdrop-blur p-5 transition-all duration-300 hover:border-[#D9A74A]/60 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_-12px_#D9A74A33]">
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
      <h3 className="mt-3 font-display text-[15px] font-medium leading-snug text-white">
        {m.title}
      </h3>
      <p className="mt-1 font-body text-[11.5px] text-white/70 leading-snug">
        {m.org}
        {m.location && <span className="text-white/40"> · {m.location}</span>}
      </p>
      <ul className="mt-3 space-y-1.5 font-body text-[11px] leading-[1.6] text-slate-300/90">
        {m.bullets.map((b) => (
          <li key={b} className="flex items-start gap-1.5">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {m.tags.length > 0 && (
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
      transition={{ duration: 0.5, delay: 0.45 }}
      className={`relative flex flex-col items-center transition-opacity duration-500 ${
        dimmed ? "opacity-20" : "opacity-100"
      }`}
    >
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-3.5 w-3.5 rounded-full bg-[#0B0F19]"
        style={{ boxShadow: `0 0 0 1.5px ${GOLD}, 0 0 18px ${GOLD}99` }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-1/2 w-px bg-[#D9A74A]/40"
        style={{ height: "36px" }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 mt-10 w-[280px]">
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
      } border-[#D9A74A]/40 hover:border-[#D9A74A] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_-12px_#D9A74A55]`}
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
      <h3 className="mt-3 font-display text-[15px] font-medium leading-snug text-white">
        Present – 2012 and Beyond
      </h3>
      <p className="mt-1 font-body text-[11.5px] text-white/55 leading-snug">
        Foundational tech roles across financial services, healthcare, and enterprise IT.
      </p>
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
      className={`mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-10 transition-opacity duration-500 ${
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {foundations.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="rounded-xl border border-white/10 bg-[#0B0F19]/80 p-5 transition-colors hover:border-[#D9A74A]/40"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
                <Icon className="text-[#D9A74A]" size={18} />
              </span>
              <p className="mt-3 font-display text-sm font-medium text-white">{r.title}</p>
              <p className="mt-1 font-body text-xs text-white/65">{r.org}</p>
              {r.location && (
                <p className="font-body text-[11px] text-white/40">{r.location}</p>
              )}
              <p className="mt-3 font-body text-[11.5px] leading-[1.65] text-slate-300/85">
                {r.detail}
              </p>
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
