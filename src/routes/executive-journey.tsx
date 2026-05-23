import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, BarChart3, Database, Bot, Shield, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/executive-journey")({
  head: () => ({
    meta: [
      { title: "Executive Journey — Portfolio" },
      { name: "description", content: "Interactive timeline of leadership in pricing strategy, data platforms, and AI workflows." },
      { property: "og:title", content: "Executive Journey — Portfolio" },
      { property: "og:description", content: "Interactive timeline of leadership in pricing strategy, data platforms, and AI workflows." },
    ],
  }),
  component: ExecutiveJourney,
});

interface Milestone {
  year: string;
  quarter: string;
  title: string;
  company: string;
  category: "pricing" | "data" | "ai";
  description: string;
  impact: string;
  skills: string[];
}

const milestones: Milestone[] = [
  {
    year: "2024",
    quarter: "Q3–Q4",
    title: "AI Workflow Orchestration Platform",
    company: "Vertex AI Labs",
    category: "ai",
    description: "Led the design and deployment of an enterprise AI workflow engine that reduced manual process time by 68%.",
    impact: "68% reduction in process time; $2.1M annual savings",
    skills: ["Agent Architecture", "LangChain", "Process Mining", "Change Management"],
  },
  {
    year: "2024",
    quarter: "Q1–Q2",
    title: "Dynamic Pricing Engine 2.0",
    company: "Meridian Commerce",
    category: "pricing",
    description: "Architected a real-time pricing optimization system using reinforcement learning across 12 markets.",
    impact: "+14% margin improvement; 3.2M pricing decisions automated",
    skills: ["Reinforcement Learning", "Price Elasticity", "Go-to-Market", "Revenue Ops"],
  },
  {
    year: "2023",
    quarter: "Q3–Q4",
    title: "Unified Data Platform",
    company: "Meridian Commerce",
    category: "data",
    description: "Consolidated 47 disparate data sources into a single lakehouse architecture with real-time streaming.",
    impact: "99.97% uptime; 400% faster query performance",
    skills: ["Data Mesh", "Databricks", "Kafka", "Data Governance"],
  },
  {
    year: "2023",
    quarter: "Q1–Q2",
    title: "Predictive Pricing Intelligence",
    company: "Meridian Commerce",
    category: "pricing",
    description: "Built ML models to predict competitor pricing moves 72 hours in advance with 89% accuracy.",
    impact: "89% prediction accuracy; captured $4.7M in competitive opportunities",
    skills: ["Time-Series Forecasting", "Competitive Intelligence", "MLOps"],
  },
  {
    year: "2022",
    quarter: "Full Year",
    title: "Enterprise Data Lake Migration",
    company: "Nexus Data Systems",
    category: "data",
    description: "Directed the migration of on-premise Hadoop clusters to cloud-native Delta Lake architecture.",
    impact: "$1.8M infrastructure savings; compliance certification achieved",
    skills: ["Cloud Architecture", "Delta Lake", "GDPR Compliance", "Team Leadership"],
  },
  {
    year: "2021",
    quarter: "Q2–Q4",
    title: "Revenue Operations Transformation",
    company: "Nexus Data Systems",
    category: "pricing",
    description: "Redesigned quote-to-cash processes with embedded pricing analytics and approval workflows.",
    impact: "Quote cycle reduced from 14 days to 48 hours",
    skills: ["Salesforce CPQ", "Revenue Operations", "Process Design"],
  },
];

const categoryMeta = {
  pricing: { label: "Pricing Strategy", icon: BarChart3, color: "bg-amber-500", text: "text-amber-600" },
  data: { label: "Data Platforms", icon: Database, color: "bg-slate-700", text: "text-slate-700" },
  ai: { label: "AI Workflows", icon: Bot, color: "bg-emerald-600", text: "text-emerald-700" },
};

function ExecutiveJourney() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filtered = activeCategory
    ? milestones.filter((m) => m.category === activeCategory)
    : milestones;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Executive Journey
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80 font-body">
              A decade of building pricing intelligence, data platforms, and AI-driven operations
              at the intersection of technology and commercial strategy.
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="mt-10 flex flex-wrap gap-3">
            <FilterButton
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
              label="All"
              icon={<Zap className="h-4 w-4" />}
            />
            {(Object.entries(categoryMeta) as [keyof typeof categoryMeta, typeof categoryMeta["pricing"]][]).map(
              ([key, meta]) => (
                <FilterButton
                  key={key}
                  active={activeCategory === key}
                  onClick={() => setActiveCategory(key)}
                  label={meta.label}
                  icon={<meta.icon className="h-4 w-4" />}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            {filtered.map((milestone, index) => {
              const meta = categoryMeta[milestone.category];
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-16 ${isLeft ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-card md:left-1/2">
                    <div className={`h-3 w-3 rounded-full ${meta.color}`} />
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 ${isLeft ? "md:mr-10" : "md:ml-10"}`}>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full text-left group"
                    >
                      <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                        <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${meta.text} font-body`}>
                          <meta.icon className="h-4 w-4" />
                          {meta.label}
                        </div>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="inline-block rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground font-body">
                            {milestone.year} · {milestone.quarter}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-semibold text-card-foreground">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground font-body">
                          {milestone.company}
                        </p>

                        <p className="mt-3 text-muted-foreground font-body leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Expandable content */}
                        <motion.div
                          initial={false}
                          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 5 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-border">
                            <div className="flex items-start gap-2">
                              <Shield className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
                              <div>
                                <p className="text-sm font-semibold text-foreground font-body">Impact</p>
                                <p className="text-sm text-muted-foreground font-body">{milestone.impact}</p>
                              </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {milestone.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground font-body"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>

                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-amber-500 group-hover:text-amber-600 font-body transition-colors">
                          {isExpanded ? "Show less" : "Show details"}
                          <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all font-body ${
        active
          ? "bg-amber-500 text-slate-900 shadow-sm"
          : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
