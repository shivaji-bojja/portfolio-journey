import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FlaskConical,
  Brain,
  Sparkles,
  Globe2,
  TrendingUp,
} from "lucide-react";
import headshot from "@/assets/shivaji-headshot.jpg";

const GOLD = "#D9A74A";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivaji Bojja — Portfolio & Product Sandbox" },
      { name: "description", content: "Executive portfolio and product lab of Shivaji Bojja — product, AI, and digital transformation leadership." },
      { property: "og:title", content: "Shivaji Bojja — Portfolio & Product Sandbox" },
      { property: "og:description", content: "Executive portfolio and product lab of Shivaji Bojja." },
    ],
  }),
  component: Index,
});

const capabilityTags = [
  "AI & Data Strategy",
  "Digital Transformation",
  "Executive Leadership",
  "B2B & B2C",
];

const expertise = [
  {
    icon: Brain,
    eyebrow: "STRATEGIC LEADERSHIP",
    title: "Product & AI Strategy",
    bullets: [
      "Product Strategy",
      "Product Management Leadership",
      "AI Strategy",
      "Data Strategy",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "TRANSFORMATION & INNOVATION",
    title: "Digital Transformation",
    bullets: [
      "Business & Digital Transformation",
      "Tech & AI-Enabled Solutions",
      "Purpose-Driven Leadership",
    ],
  },
  {
    icon: Globe2,
    eyebrow: "INDUSTRY DOMAIN DEPTH",
    title: "Sector Expertise",
    bullets: [
      "Retail & E-commerce",
      "Telecom",
      "Supply Chain",
      "Omni-channel Systems",
    ],
  },
  {
    icon: TrendingUp,
    eyebrow: "VALUE CREATION",
    title: "Outcomes & Governance",
    bullets: [
      "Price Optimization",
      "Data Insights",
      "B2C & B2B Solutions",
      "AI & Data Governance",
    ],
  },
];

function Index() {
  return (
    <div className="bg-[#0B0F19] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-[#D9A74A]/10 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#D9A74A]/5 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p
                className="font-body text-xs font-medium uppercase tracking-[0.35em]"
                style={{ color: GOLD }}
              >
                About Me
              </p>

              <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Architecting intelligence. Delivering velocity.{" "}
                <em
                  className="font-display italic font-medium"
                  style={{ color: GOLD }}
                >
                  Driving growth.
                </em>
              </h1>

              <div
                className="mt-6 h-px w-24"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />

              <div className="mt-8 space-y-5 font-body text-base leading-[1.8] text-slate-300 max-w-2xl">
                <p>
                  I am a purpose-driven Product Leader whose executive
                  leadership and product strategy are deeply rooted in my
                  hands-on background across Software Engineering, Data
                  Engineering, and Advanced Analysis.
                </p>
                <p>
                  I specialize in driving AI-enabled digital and business
                  transformations across complex global industries, including
                  Retail, E-commerce, Telecom, and Supply Chain. By blending
                  deep technical expertise with commercial acumen, I build
                  data-driven, customer-centric strategies that unlock
                  measurable business value.
                </p>
                <p>
                  My expertise lies at the intersection of product innovation,
                  price optimization, and modern omni-channel experiences. As
                  a champion of continuous learning, I focus on scaling robust
                  AI & Data Strategies, establishing strong AI & Data
                  Governance, and leading cross-functional teams from vision
                  to execution in both B2B and B2C environments.
                </p>
              </div>


              <div className="mt-9 flex flex-wrap gap-3">
                {capabilityTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/executive-journey"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-white transition-colors hover:text-[#D9A74A]"
                >
                  Explore Journey <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/product-lab"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-white/70 transition-colors hover:text-[#D9A74A]"
                >
                  Enter the Lab <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://linkedin.com/in/shivajibojja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 transition-colors hover:text-[#D9A74A]"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="flex flex-col items-center lg:items-end gap-5"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative w-full max-w-[340px]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(217,167,74,0.35) 0%, rgba(217,167,74,0) 70%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 shadow-[0_30px_80px_-20px_rgba(217,167,74,0.35)]">
                  <img
                    src={headshot}
                    alt="Shivaji Bojja headshot"
                    loading="eager"
                    decoding="async"
                    className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.2em]"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
                Open to Opportunities
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              Core Expertise
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Capabilities at the Intersection of{" "}
              <em
                className="font-display italic font-medium"
                style={{ color: GOLD }}
              >
                Technology, Product & Business
              </em>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#D9A74A]/40"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10"
                      style={{ color: GOLD }}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div className="leading-tight">
                      <p
                        className="font-body text-[10px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: GOLD }}
                      >
                        {card.eyebrow}
                      </p>
                      <p className="mt-1 font-display text-base font-medium text-white">
                        {card.title}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2.5 font-body text-sm text-slate-300">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: GOLD }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE FURTHER */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              Explore Further
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Dive Deeper Into My Work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ExploreCard
              to="/executive-journey"
              icon={Briefcase}
              prefix="01 — Timeline"
              title="Career Journey"
              description="A chronological deep-dive into my professional path — from software engineering roots to executive leadership across global industries and complex transformations."
            />
            <ExploreCard
              to="/product-lab"
              icon={FlaskConical}
              prefix="02 — Showcase"
              title="Portfolio — Product Lab"
              description="A curated showcase of product innovations, AI-driven solutions, and digital transformation initiatives that have delivered measurable business value."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ExploreCard({
  to,
  icon: Icon,
  prefix,
  title,
  description,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  prefix: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }}>
      <Link
        to={to}
        className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[#D9A74A]/40 hover:bg-white/[0.04]"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors group-hover:text-[#D9A74A] group-hover:border-[#D9A74A]/50">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-[#D9A74A] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
        <p
          className="mt-8 font-body text-[11px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: GOLD }}
        >
          {prefix}
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium text-white">
          {title}
        </h3>
        <p className="mt-4 font-body text-sm leading-[1.75] text-slate-300/90 max-w-md">
          {description}
        </p>
        <span
          className="mt-8 inline-flex items-center gap-1.5 font-body text-sm font-medium"
          style={{ color: GOLD }}
        >
          Explore <span aria-hidden="true">→</span>
        </span>
      </Link>
    </motion.div>
  );
}
