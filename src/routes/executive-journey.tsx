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
const BG = "#0A0F1D";
const EDU_BG = "#1E1B4B";
const FOUNDATION_BG = "#1F2937";

export const Route = createFileRoute("/executive-journey")({
  head: () => ({
    meta: [
      { title: "Executive Journey — Career Timeline" },
      {
        name: "description",
        content:
          "A premium horizontal chronology of Shivaji Bojja's executive path — from product and pricing leadership to engineering foundations.",
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
    id: "att-pricing",
    period: "2023 — PRESENT",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business",
    location: "Dallas, TX",
    bullets: [
      "Lead a $500M Next Gen pricing optimization transformation initiative leveraging AI-driven decisioning.",
    ],
    tags: ["Price Optimization", "AI Decisioning", "Databricks"],
    category: "Leadership & Pricing",
    icon: TrendingUp,
    position: "top",
  },
  {
    id: "mai",
    period: "2026 — PRESENT",
    title: "Masters in AI (In Progress)",
    org: "Woolf University · Udacity",
    bullets: [
      "Advanced graduate study of applied AI, machine learning systems, and generative architectures.",
    ],
    tags: ["AI Strategy", "Generative AI"],
    category: "Education",
    icon: GraduationCap,
    position: "bottom",
  },
  {
    id: "att-lpm",
    period: "2018 — 2023",
    title: "Lead Product Manager & Senior Technical Product Manager",
    org: "AT&T",
    location: "Plano / Dallas, TX",
    bullets: [
      "Led multi-year omnichannel order management transformation into modern event-driven microservices.",
    ],
    tags: ["Order Management", "Microservices", "Product Leadership"],
    category: "Leadership & Pricing",
    icon: Briefcase,
    position: "top",
  },
  {
    id: "mdp",
    period: "2021",
    title: "MDP — Management Development Program",
    org: "AT&T",
    bullets: [
      "Selected for AT&T's premier corporate leadership track focusing on strategic executive alignment.",
    ],
    tags: ["Executive Leadership", "Strategy"],
    category: "Education",
    icon: Award,
    position: "bottom",
  },
  {
    id: "kohls",
    period: "2017 — 2018",
    title: "Digital Product Manager",
    org: "Kohl's",
    location: "Milwaukee, WI",
    bullets: [
      "Led digital transformation strategy for self-checkout, mobile POS, and store experience modernization.",
    ],
    tags: ["Digital Retail", "Mobile POS", "Agile"],
    category: "Leadership & Pricing",
    icon: ShoppingBag,
    position: "top",
  },
  {
    id: "mba",
    period: "2016 — 2020",
    title: "MBA",
    org: "Carlson School of Management — UMN",
    location: "Minneapolis, US",
    bullets: [
      "Executive management focus, with applied work in algorithms and image processing.",
    ],
    tags: ["Executive Management", "Strategy"],
    category: "Education",
    icon: GraduationCap,
    position: "bottom",
  },
  {
    id: "bestbuy",
    period: "2012 — 2017",
    title: "Product Manager & Lead Product Analyst",
    org: "Best Buy",
    location: "Minneapolis, US",
    bullets: [
      "Delivered Ship-from-Store ($1M annual revenue) and optimized eCommerce checkout, lifting conversion by 10%.",
    ],
    tags: ["eCommerce", "Omnichannel", "Analytics"],
    category: "Leadership & Pricing",
    icon: Store,
    position: "top",
  },
  {
    id: "mca",
    period: "",
    title: "MCA — Masters in Computer Applications",
    org: "Osmania University",
    location: "Hyderabad, India",
    bullets: [
      "Graduate foundation in computer science, algorithms, and software systems.",
    ],
    tags: ["Computer Science", "Software Systems"],
    category: "Education",
    icon: GraduationCap,
    position: "bottom",
  },
];

type FoundationRole = {
  title: string;
  org: string;
  bullet: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  position: "top" | "bottom";
};

const foundations: FoundationRole[] = [
  {
    title: "Business Analyst",
    org: "Ameriprise Financial",
    bullet:
      "Gathered business requirements and translated workflow logic for financial system integrations.",
    icon: LineChart,
    position: "bottom",
  },
  {
    title: "IT Business Consultant",
    org: "Wells Fargo",
    bullet:
      "Managed core platform alignment, financial workflows, and compliance-driven technical architecture mapping.",
    icon: Building2,
    position: "top",
  },
  {
    title: "Senior Software Engineer",
    org: "Credit Suisse",
    bullet:
      "Developed core transactional database algorithms and engineered backend logic for financial software systems.",
    icon: Landmark,
    position: "bottom",
  },
  {
    title: "IT Consultant",
    org: "Johnson & Johnson / McNeil",
    bullet:
      "Handled systems stabilization, platform configurations, and technical framework deployments.",
    icon: Pill,
    position: "top",
  },
  {
    title: "Software Engineer",
    org: "Satyam / Merrill Lynch",
    bullet:
      "Maintained legacy codebases, executed data migrations, and engineered custom database scripts.",
    icon: Cpu,
    position: "bottom",
  },
];

const FILTERS: Category[] = ["Leadership & Pricing", "Education", "Engineering Foundations"];

const CONTAINER = "mx-auto w-full max-w-[1600px] px-6 lg:px-12";

function ExecutiveJourney() {
  const [active, setActive] = useState<Category | null>(null);
  const [expanded, setExpanded] = useState(false);

  const isDimmed = (cat: Category) => active !== null && active !== cat;
  const foundationsDimmed = active !== null && active !== "Engineering Foundations";

  const baseNodes = milestones.length + 1; // milestones + foundations master
  const totalDesktopNodes = baseNodes + (expanded ? foundations.length : 0);

  return (
    <div className="relative min-h-screen text-white overflow-hidden" style={{ backgroundColor: BG }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[160px]"
        style={{ backgroundColor: `${GOLD}1A` }}
      />

      {/* HEADER */}
      <section className="relative">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
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
            <p className="mt-8 max-w-2xl font-body text-base leading-[1.8] text-[#E2E8F0]">
              A chronological path through executive product and pricing leadership — anchored by
              decades of engineering, data, and analytics foundations.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-3">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(isActive ? null : f)}
                  className={`group relative font-body text-xs uppercase tracking-[0.25em] px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#D9A74A] text-[#D9A74A] bg-[#D9A74A]/5"
                      : "border-white/15 text-[#E2E8F0]/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              );
            })}
            {active && (
              <button
                onClick={() => setActive(null)}
                className="font-body text-xs uppercase tracking-[0.25em] px-3 py-2 text-white/40 hover:text-white/80 transition-colors cursor-pointer"
              >
                Clear ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* DESKTOP HORIZONTAL TIMELINE */}
      <section className="relative">
        <div className="hidden lg:block">
          <div className={`${CONTAINER} pb-16`}>
            {/* Subheading floating above timeline, aligned with rail start */}
            <p
              className="font-body text-[11px] font-semibold uppercase tracking-[0.4em] mb-4"
              style={{ color: GOLD }}
            >
              Present — 2012 and Beyond
            </p>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-[#E2E8F0]/40 mb-6">
              ↔ Scroll horizontally to explore the timeline
            </p>

            <div className="relative overflow-x-auto pb-10 [scrollbar-color:#D9A74A55_transparent]">
              <motion.div
                className="relative"
                animate={{ width: `${totalDesktopNodes * 340}px` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ width: `${totalDesktopNodes * 340}px` }}
              >
                <div className="relative h-[760px]">
                  {/* Gold horizontal rail */}
                  <div
                    aria-hidden
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px transition-all duration-500"
                    style={{
                      backgroundColor: GOLD,
                      opacity: active ? 0.95 : 0.55,
                      boxShadow: active ? `0 0 14px ${GOLD}` : `0 0 6px ${GOLD}66`,
                    }}
                  />

                  <div
                    className="grid h-full transition-all duration-500 ease-in-out"
                    style={{
                      gridTemplateColumns: `repeat(${totalDesktopNodes}, minmax(0, 1fr))`,
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
                    <AnimatePresence>
                      {expanded &&
                        foundations.map((r, i) => (
                          <FoundationMiniNode
                            key={r.title}
                            role={r}
                            index={i}
                            dimmed={foundationsDimmed}
                          />
                        ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET VERTICAL TIMELINE */}
        <div className="lg:hidden">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <p
              className="font-body text-[11px] font-semibold uppercase tracking-[0.4em] mb-8"
              style={{ color: GOLD }}
            >
              Present — 2012 and Beyond
            </p>
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ backgroundColor: `${GOLD}55` }}
              />
              <ol className="space-y-10">
                {milestones.map((m) => (
                  <VerticalItem key={m.id} m={m} dimmed={isDimmed(m.category)} />
                ))}
                <li className="relative pl-12">
                  <span
                    className="absolute left-4 top-6 -translate-x-1/2 block h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: BG,
                      boxShadow: `0 0 0 1px ${GOLD}, 0 0 12px ${GOLD}66`,
                    }}
                  />
                  <FoundationsCard
                    expanded={expanded}
                    onToggle={() => setExpanded((v) => !v)}
                    dimmed={foundationsDimmed}
                  />
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.ol
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden mt-6 space-y-6"
                      >
                        {foundations.map((r) => (
                          <li key={r.title} className="relative pl-8">
                            <span
                              className="absolute left-0 top-4 block h-2 w-2 rounded-full"
                              style={{ backgroundColor: GOLD }}
                            />
                            <FoundationMiniCard role={r} />
                          </li>
                        ))}
                      </motion.ol>
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
        <div className={`${CONTAINER} py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`}>
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
      {onTop && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 mb-10 w-[300px]">
          <MilestoneCard m={m} />
        </div>
      )}

      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{
          height: "36px",
          top: onTop ? "calc(50% - 36px)" : "50%",
          backgroundColor: `${GOLD}55`,
        }}
      />

      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-3 w-3 rounded-full transition-all duration-300"
        style={{
          backgroundColor: GOLD,
          boxShadow: dimmed ? "none" : `0 0 12px ${GOLD}`,
        }}
      />

      {!onTop && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 mt-10 w-[300px]">
          <MilestoneCard m={m} />
        </div>
      )}
    </motion.div>
  );
}

function MilestoneCard({ m }: { m: Milestone }) {
  const Icon = m.icon;
  const isEducation = m.category === "Education";

  // Work cards = bright white. Education = deep indigo.
  const cardBg = isEducation ? EDU_BG : "#FFFFFF";
  const cardBorder = isEducation ? "border-indigo-300/20" : "border-white/30";
  const titleColor = isEducation ? "text-white" : "text-[#0A0F1D]";
  const orgColor = isEducation ? "text-slate-200" : "text-[#1F2937]";
  const orgMuted = isEducation ? "text-slate-400" : "text-[#6B7280]";
  const bulletColor = isEducation ? "text-slate-200" : "text-[#374151]";
  const tagBorder = isEducation ? "border-white/15" : "border-[#0A0F1D]/15";
  const tagBg = isEducation ? "bg-white/[0.04]" : "bg-[#0A0F1D]/[0.04]";
  const tagText = isEducation ? "text-slate-200" : "text-[#374151]";
  const iconBoxBg = isEducation ? "bg-white/[0.04]" : "bg-[#0A0F1D]/[0.04]";
  const iconBoxBorder = isEducation ? "border-white/10" : "border-[#0A0F1D]/10";

  return (
    <article
      className={`group rounded-xl border ${cardBorder} p-5 transition-all duration-300 hover:border-[#D9A74A]/60 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_-12px_#D9A74A33]`}
      style={{ backgroundColor: cardBg }}
    >
      <div className="flex items-center gap-2.5">
        <span className={`flex h-8 w-8 items-center justify-center rounded-md border ${iconBoxBorder} ${iconBoxBg}`}>
          <Icon className="text-[#D9A74A]" size={16} />
        </span>
        {m.period && (
          <p
            className="font-body text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: GOLD }}
          >
            {m.period}
          </p>
        )}
      </div>
      <h3 className={`mt-3 font-display text-[15px] font-medium leading-snug ${titleColor}`}>
        {m.title}
      </h3>
      <p className={`mt-1 font-body text-[11.5px] leading-snug ${orgColor}`}>
        {m.org}
        {m.location && <span className={orgMuted}> · {m.location}</span>}
      </p>
      <ul className={`mt-3 space-y-1.5 font-body text-[11.5px] leading-[1.65] ${bulletColor}`}>
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
              className={`rounded-full border ${tagBorder} ${tagBg} px-2 py-0.5 text-[9.5px] font-medium tracking-wide ${tagText} font-body`}
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 mb-10 w-[300px]">
        <FoundationsCard expanded={expanded} onToggle={onToggle} dimmed={false} />
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{ height: "36px", top: "calc(50% - 36px)", backgroundColor: `${GOLD}88` }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-3.5 w-3.5 rounded-full"
        style={{
          backgroundColor: GOLD,
          boxShadow: `0 0 18px ${GOLD}`,
        }}
      />
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
      className={`group w-full text-left rounded-xl border p-5 transition-all duration-300 cursor-pointer ${
        dimmed ? "opacity-25" : "opacity-100"
      } border-[#D9A74A]/40 hover:border-[#D9A74A] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_-12px_#D9A74A55]`}
      style={{ backgroundColor: FOUNDATION_BG }}
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
        Foundational Engineering Tier
      </h3>
      <p className="mt-1 font-body text-[11.5px] text-[#E2E8F0]/75 leading-snug">
        Five formative roles across financial services, healthcare, and telecom.
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-body text-[11px] italic text-[#E2E8F0]/70">
          {expanded ? "Click to collapse" : "Expand timeline →"}
        </span>
        <ChevronDown
          size={16}
          className="text-[#D9A74A] transition-transform duration-500"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
    </button>
  );
}

function FoundationMiniNode({
  role,
  index,
  dimmed,
}: {
  role: FoundationRole;
  index: number;
  dimmed: boolean;
}) {
  const onTop = role.position === "top";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.08 }}
      className={`relative flex flex-col items-center transition-opacity duration-500 ${
        dimmed ? "opacity-25" : "opacity-100"
      }`}
    >
      {onTop && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 mb-10 w-[280px]">
          <FoundationMiniCard role={role} />
        </div>
      )}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{
          height: "36px",
          top: onTop ? "calc(50% - 36px)" : "50%",
          backgroundColor: `${GOLD}55`,
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: GOLD, boxShadow: `0 0 10px ${GOLD}` }}
      />
      {!onTop && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 mt-10 w-[280px]">
          <FoundationMiniCard role={role} />
        </div>
      )}
    </motion.div>
  );
}

function FoundationMiniCard({ role }: { role: FoundationRole }) {
  const Icon = role.icon;
  return (
    <article
      className="rounded-xl border border-dashed border-[#D9A74A]/30 p-4 transition-all duration-300 hover:border-[#D9A74A]/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
      style={{ backgroundColor: FOUNDATION_BG }}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#D9A74A]/30 bg-[#D9A74A]/5">
          <Icon className="text-[#D9A74A]" size={14} />
        </span>
        <p
          className="font-body text-[9.5px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          Foundations
        </p>
      </div>
      <h4 className="mt-2.5 font-display text-[14px] font-medium leading-snug text-white">
        {role.title}
      </h4>
      <p className="mt-1 font-body text-[11.5px] text-slate-300">{role.org}</p>
      <p className="mt-2.5 font-body text-[11px] leading-[1.6] text-slate-400">
        {role.bullet}
      </p>
    </article>
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
        className="absolute left-4 top-6 -translate-x-1/2 block h-3 w-3 rounded-full"
        style={{
          backgroundColor: GOLD,
          boxShadow: dimmed ? "none" : `0 0 12px ${GOLD}`,
        }}
      />
      <MilestoneCard m={m} />
    </li>
  );
}
