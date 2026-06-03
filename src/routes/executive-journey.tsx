import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const GOLD = "#D9A74A";

export const Route = createFileRoute("/executive-journey")({
  head: () => ({
    meta: [
      { title: "Executive Journey — Career Timeline" },
      {
        name: "description",
        content:
          "A chronological deep-dive into Shivaji Bojja's professional path — from software engineering and data analytics roots into product management and enterprise-scale executive leadership.",
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

type Milestone = {
  period: string;
  title: string;
  org: string;
  location?: string;
  bullets: string[];
  tags: string[];
};

const milestones: Milestone[] = [
  {
    period: "2025 – Present",
    title: "Masters in AI (In Progress)",
    org: "Woolf University · by Udacity",
    bullets: [
      "Advanced study of applied AI, machine learning systems, and generative architectures.",
      "Focus on enterprise-grade AI strategy, governance, and responsible deployment.",
    ],
    tags: ["AI Strategy", "Generative AI", "Continuous Learning"],
  },
  {
    period: "2023 – 2025",
    title: "Lead Strategic Pricing Manager",
    org: "AT&T Business",
    location: "Dallas, TX",
    bullets: [
      "Led strategic pricing for VP Events and the Oasis platform across the AT&T Business portfolio.",
      "Architected data-driven pricing frameworks unlocking measurable margin expansion.",
      "Partnered cross-functionally with product, finance, and sales leadership at executive scale.",
    ],
    tags: ["Pricing Strategy", "Executive Leadership", "B2B"],
  },
  {
    period: "2021",
    title: "Management Development Program (MDP)",
    org: "AT&T",
    bullets: [
      "Selective executive development program preparing leaders for enterprise-scale roles.",
    ],
    tags: ["Leadership Development"],
  },
  {
    period: "2018 – 2023",
    title: "Lead Product Manager",
    org: "AT&T",
    location: "Plano, TX",
    bullets: [
      "Led product strategy and execution across telecom digital platforms.",
      "Drove AI-enabled experiences and price optimization initiatives at scale.",
      "Built and mentored cross-functional product teams across geographies.",
    ],
    tags: ["Product Strategy", "AI Enablement", "Telecom"],
  },
  {
    period: "2017 – 2018",
    title: "Digital Product Manager",
    org: "Kohl's",
    location: "Milwaukee, WI",
    bullets: [
      "Owned digital product roadmap for omni-channel retail experiences.",
      "Shipped mobile and web initiatives improving conversion and engagement.",
    ],
    tags: ["Omni-channel", "Retail", "Mobile"],
  },
  {
    period: "2016 – 2020",
    title: "MBA",
    org: "Carlson School of Management · UMN",
    location: "Minneapolis, US",
    bullets: [
      "Graduate business education with focus on strategy, analytics, and product leadership.",
    ],
    tags: ["Strategy", "Analytics", "Leadership"],
  },
  {
    period: "2012 – 2017",
    title: "Product Manager",
    org: "Best Buy",
    location: "Minneapolis, US",
    bullets: [
      "Managed digital product portfolios spanning e-commerce and in-store experiences.",
      "Translated customer insights and data into shipped product outcomes.",
    ],
    tags: ["E-commerce", "Product Management", "Customer Insights"],
  },
  {
    period: "2010 – 2012",
    title: "Business Analyst",
    org: "Ameriprise Financial",
    location: "Minneapolis, US",
    bullets: [
      "Bridged business stakeholders and engineering teams on financial platforms.",
      "Translated analytical insights into product and operational requirements.",
    ],
    tags: ["Business Analysis", "Financial Services", "Requirements"],
  },
  {
    period: "2008 – 2010",
    title: "Sr. Software Engineer",
    org: "Credit Suisse",
    location: "Pune, India",
    bullets: [
      "Engineered data and analytics systems for global investment banking.",
      "Built high-reliability backends and reporting pipelines at scale.",
    ],
    tags: ["Data Engineering", "Advanced Analytics", "Software Engineering"],
  },
  {
    period: "2006 – 2008",
    title: "IT Consultant",
    org: "McNeil (Johnson & Johnson)",
    location: "Hyderabad, India",
    bullets: [
      "Delivered enterprise IT solutions for pharmaceutical operations.",
      "Hands-on systems analysis, integration, and engineering delivery.",
    ],
    tags: ["Enterprise IT", "Systems Analysis"],
  },
  {
    period: "2003 – 2006",
    title: "Software Engineer",
    org: "Satyam · Merrill Lynch",
    location: "Hyderabad, India",
    bullets: [
      "Built financial platforms and trading-adjacent applications.",
      "Foundational hands-on software engineering across the full stack.",
    ],
    tags: ["Software Engineering", "Financial Platforms"],
  },
  {
    period: "2000 – 2003",
    title: "MCA — Masters in Computer Applications",
    org: "Osmania University",
    location: "Hyderabad, India",
    bullets: [
      "Graduate degree in computer applications — formal engineering foundations.",
    ],
    tags: ["Computer Science", "Engineering Foundations"],
  },
];

function ExecutiveJourney() {
  return (
    <div className="bg-[#0B0F19] text-white">
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#D9A74A]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.35em]"
              style={{ color: GOLD }}
            >
              Career Timeline
            </p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              My Executive{" "}
              <em
                className="font-display italic font-medium"
                style={{ color: GOLD }}
              >
                Journey
              </em>
            </h1>
            <div
              className="mt-6 h-px w-24"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />
            <p className="mt-8 max-w-2xl font-body text-base leading-[1.8] text-slate-300">
              A chronological deep-dive into my professional path — tracing my
              evolution from hands-on software engineering, data engineering,
              and analytics roots into business transformation, product
              management, and enterprise-scale executive leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24">
          <div className="relative">
            {/* vertical rail */}
            <div
              aria-hidden="true"
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"
            />

            <ol className="space-y-12 md:space-y-16">
              {milestones.map((m, i) => (
                <TimelineItem key={`${m.title}-${i}`} m={m} index={i} />
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/"
            className="font-body text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: GOLD }}
          >
            ← Return to Home
          </Link>
          <Link
            to="/product-lab"
            className="font-body text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: GOLD }}
          >
            Explore the Product Lab →
          </Link>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ m, index }: { m: Milestone; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative md:grid md:grid-cols-2 md:gap-12"
    >
      {/* node marker */}
      <div
        aria-hidden="true"
        className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10"
      >
        <span className="block h-3 w-3 rounded-full bg-[#0B0F19] ring-1 ring-white/30 transition-all duration-300 group-hover:ring-[#D9A74A]" />
        <span
          className="absolute inset-0 m-auto h-3 w-3 rounded-full opacity-0 blur-[6px] transition-opacity duration-300 hover:opacity-100"
          style={{ backgroundColor: GOLD }}
        />
      </div>

      {/* spacer for alternating layout */}
      {!isLeft && <div className="hidden md:block" />}

      <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <article className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#D9A74A]/40">
          <p
            className="font-body text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: GOLD }}
          >
            {m.period}
          </p>
          <h3 className="mt-3 font-display text-xl font-medium leading-snug text-white">
            {m.title}
          </h3>
          <p className="mt-1 font-body text-sm text-white/80">
            {m.org}
            {m.location && (
              <span className="text-white/40"> · {m.location}</span>
            )}
          </p>

          <ul className="mt-5 space-y-2.5 font-body text-sm leading-[1.75] text-slate-300">
            {m.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {m.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {m.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-white/80 font-body"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>

      {isLeft && <div className="hidden md:block" />}
    </motion.li>
  );
}
