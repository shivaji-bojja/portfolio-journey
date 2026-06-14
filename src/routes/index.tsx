import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Linkedin,
  Briefcase,
  FlaskConical,
  Brain,
  Sparkles,
  Globe2,
  TrendingUp,
} from "lucide-react";
import type { FileRouteTypes } from "@/routeTree.gen";

//const CHATBOT_VISIBLE_HEIGHT = 640;
//const GRADIO_FOOTER_CLIP = 48;
import headshot from "@/assets/shivaji-headshot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivaji Bojja — Portfolio & Product Sandbox" },
      { name: "description", content: "Executive portfolio and product lab of Shivaji Bojja — product, AI, and digital transformation leadership." },
      { property: "og:title", content: "Shivaji Bojja — Portfolio & Product Sandbox" },
      { property: "og:description", content: "Executive portfolio and product lab of Shivaji Bojja." },
      { property: "og:url", content: "https://shivajibojja.com/" },
    ],
    links: [{ rel: "canonical", href: "https://shivajibojja.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shivaji Bojja",
          jobTitle: "Product Leader",
          url: "https://shivajibojja.com/",
          sameAs: [
            "https://www.linkedin.com/in/shivajibojja/",
            "https://github.com/shivaji-bojja",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Shivaji Bojja — Portfolio",
          url: "https://shivajibojja.com/",
          description: "Executive portfolio and product lab of Shivaji Bojja.",
        }),
      },
    ],
  }),
  component: Index,
});

const metrics = [
  { value: "15+", label: "Years Experience" },
  { value: "4", label: "Industries" },
  { value: "$500M+", label: "Revenue Impact" },
  { value: "B2B + B2C", label: "Environments" },
];

const profileBadges = ["Dallas, TX", "B2B & B2C", "Global Industries"];

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
    <div className="bg-[#0b111e] text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-[#D9A74A]/10 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#D9A74A]/5 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="space-y-4 max-w-3xl">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-amber-500 font-medium font-body">
                    About Me
                  </span>
                  <h2 className="text-xl font-medium text-zinc-400 font-body">
                    Shivaji Bojja
                  </h2>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-zinc-100 leading-tight">
                  Architecting intelligence.
                  <br />
                  Delivering velocity.
                  <br />
                  <span className="italic font-serif text-amber-500/90">Driving growth.</span>
                </h1>

                <div className="space-y-3 text-zinc-400 text-sm md:text-base leading-relaxed font-body">
                  <p>
                    I am a purpose-driven Product and Technology Leader with a career spanning hands-on Software Engineering, Business Analysis, Product Management, and Executive Leadership. I specialize in driving AI-enabled digital and business transformations across complex global industries — Retail, E-commerce, Telecom, and Supply Chain.
                  </p>
                  <p>
                    By blending deep technical expertise with commercial acumen, I build data-driven, customer-centric strategies that unlock measurable business value. My expertise lies at the intersection of product innovation, price optimization, and modern omni-channel experiences.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-zinc-900 mt-5">
                  {metrics.map((m) => (
                    <div key={m.label} className="space-y-1">
                      <div className="text-2xl md:text-3xl font-serif text-amber-500">{m.value}</div>
                      <div className="text-xs tracking-wider text-zinc-500 uppercase font-body">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Link
                  to="/executive-journey"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-body text-sm font-semibold text-zinc-950 transition-all hover:bg-amber-600 hover:shadow-[0_10px_30px_-10px_rgba(217,167,74,0.6)]"
                >
                  Explore Career Journey <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/product-lab"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-transparent px-6 py-3 font-body text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/60 hover:text-amber-500"
                >
                  Enter the Lab <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://linkedin.com/in/shivajibojja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-transparent px-6 py-3 font-body text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/60 hover:text-amber-500"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
              </div>
            </motion.div>

            {/* RIGHT — Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="flex flex-col items-center lg:items-end gap-3"
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
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#121215] p-3 shadow-[0_30px_80px_-20px_rgba(217,167,74,0.35)]">
                  <img
                    src={headshot}
                    alt="Shivaji Bojja headshot"
                    loading="eager"
                    decoding="async"
                    className="w-full h-[300px] sm:h-[340px] object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 px-4 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-amber-500">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Open to Opportunities
              </span>

              <div className="flex flex-col items-center lg:items-end gap-2">
                {profileBadges.map((b) => (
                  <span
                    key={b}
                    className="inline-block rounded-full border border-slate-800 bg-slate-900/40 px-3 py-1 font-mono text-[11px] tracking-wide text-slate-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="relative border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-medium font-body">
              Core Expertise
            </span>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl lg:text-[2.75rem]">
              Capabilities at the Intersection of{" "}
              <em className="italic font-serif text-amber-500/90">
                Technology, Product & Business
              </em>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl border border-zinc-800/80 bg-[#121215] p-5 transition-colors hover:border-amber-500/40"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-800 text-amber-500">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div className="leading-tight">
                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                        {card.eyebrow}
                      </p>
                      <p className="mt-1 font-serif text-base font-medium text-zinc-100">
                        {card.title}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 font-body text-sm text-zinc-400">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
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
      <section className="relative border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-medium font-body">
              Explore Further
            </span>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl lg:text-[2.75rem]">
              Dive Deeper Into My Work
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
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

      {/* CHATBOT */}
      <section className="relative border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-medium font-body">
              Ask Me Anything
            </span>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-tight text-zinc-100 sm:text-4xl lg:text-[2.75rem]">
              Chat with my AI Assistant
            </h2>
            <p className="mt-3 font-body text-sm leading-[1.75] text-zinc-400">
              Ask about my experience, projects, or leadership approach — powered by a custom resume chatbot.
            </p>
          </div>

          {/* <div
            className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#121215] shadow-xl"
            style={{ height: CHATBOT_VISIBLE_HEIGHT }}
            //style={{ height: "600px" }} // hardcoded height to fix issue with chatbot
          > */}
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#121215] shadow-xl h-[520px] sm:h-[640px]">
            <iframe
              src="https://shivaji79-resume-chatbot.hf.space?__theme=dark"
              title="Resume Chatbot"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
              className="w-full h-full border-0 pointer-events-auto"
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
  to: FileRouteTypes["to"];
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  prefix: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: "easeOut" }}>
      <Link
        to={to}
        className="group block h-full rounded-2xl border border-zinc-800/80 bg-[#121215] p-6 transition-all hover:border-amber-500/40 hover:bg-[#16161a]"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors group-hover:text-amber-500 group-hover:border-amber-500/50">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <ArrowRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:text-amber-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="mt-5 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-500">
          {prefix}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-medium text-zinc-100">
          {title}
        </h3>
        <p className="mt-3 font-body text-sm leading-[1.75] text-zinc-400 max-w-md">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-amber-500">
          Explore <span aria-hidden="true">→</span>
        </span>
      </Link>
    </motion.div>
  );
}
