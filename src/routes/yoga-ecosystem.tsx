import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sun, TreePine, Wind, Quote } from "lucide-react";

export const Route = createFileRoute("/yoga-ecosystem")({
  head: () => ({
    meta: [
      { title: "Yoga Ecosystem — Portfolio" },
      { name: "description", content: "A curated editorial space exploring Sanskrit roots, eastern philosophy, and holistic medicine." },
      { property: "og:title", content: "Yoga Ecosystem — Portfolio" },
      { property: "og:description", content: "A curated editorial space exploring Sanskrit roots, eastern philosophy, and holistic medicine." },
    ],
  }),
  component: YogaEcosystem,
});

interface Article {
  title: string;
  subtitle: string;
  sanskrit: string;
  category: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
}

const articles: Article[] = [
  {
    title: "The Etymology of Asana",
    subtitle: "From seat to posture — tracing the semantic evolution",
    sanskrit: "आसन",
    category: "Sanskrit Studies",
    readTime: "8 min read",
    excerpt: "The word asana derives from the Sanskrit root 'ās' meaning 'to sit' or 'to be present.' In Patanjali's Yoga Sutras, asana is described simply as 'sthira sukham asanam' — a posture that is steady and comfortable. This article traces how a word denoting meditation seat transformed into the expansive physical practice we know today.",
    tags: ["Sanskrit", "Etymology", "Patanjali"],
    featured: true,
  },
  {
    title: "Prana and the Subtle Body",
    subtitle: "Bridging Ayurvedic physiology with modern biophysics",
    sanskrit: "प्राण",
    category: "Holistic Medicine",
    readTime: "12 min read",
    excerpt: "Prana — the vital life force — occupies a unique space between metaphysics and measurable biology. Recent research in biofield science suggests that electromagnetic field interactions between organisms may offer a material correlate to what Ayurveda has described for millennia as the flow of prana through nadis.",
    tags: ["Ayurveda", "Biofield", "Subtle Anatomy"],
  },
  {
    title: "Dharma in a Digital Age",
    subtitle: "Reconciling ancient duty ethics with modern professional life",
    sanskrit: "धर्म",
    category: "Philosophy",
    readTime: "6 min read",
    excerpt: "The Bhagavad Gita's concept of svadharma — one's own duty — was never static. It was always contextual, responsive to time (kala), place (desh), and individual capacity. What does it mean to practice dharma when our professional lives are mediated by algorithms and distributed across time zones?",
    tags: ["Bhagavad Gita", "Ethics", "Work"],
  },
  {
    title: "The Science of Neti Neti",
    subtitle: "Apophatic reasoning in Advaita Vedanta and cognitive neuroscience",
    sanskrit: "नेति नेति",
    category: "Philosophy",
    readTime: "10 min read",
    excerpt: "'Not this, not this' — the via negativa of Advaita Vedanta — finds surprising resonance in predictive processing theories of consciousness. Both approaches define reality by progressively stripping away what it is not, arriving at a ground that transcends categorization.",
    tags: ["Advaita", "Consciousness", "Neuroscience"],
  },
  {
    title: "Rasa as Aesthetic Medicine",
    subtitle: "How the nine emotions of Natyashastra inform therapeutic practice",
    sanskrit: "रस",
    category: "Holistic Medicine",
    readTime: "7 min read",
    excerpt: "The rasa theory of Bharata Muni identifies nine fundamental emotional essences. In therapeutic contexts, understanding which rasa dominates a patient's presentation — whether it is the courage of vira or the terror of bhayanaka — provides a framework for holistic intervention.",
    tags: ["Natyashastra", "Therapy", "Emotions"],
  },
  {
    title: "The Architecture of a Surya Namaskar",
    subtitle: "Movement as prayer, sequence as scripture",
    sanskrit: "सूर्य नमस्कार",
    category: "Practice",
    readTime: "5 min read",
    excerpt: "Each of the twelve positions in Surya Namaskar corresponds to a bija mantra honoring the sun's journey across the zodiac. The sequence is not arbitrary — it mirrors the circadian rhythm, the cardiac cycle, and the solar year's progression through seasons.",
    tags: ["Surya Namaskar", "Mantra", "Movement"],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Sanskrit Studies": <BookOpen className="h-4 w-4" />,
  "Holistic Medicine": <Heart className="h-4 w-4" />,
  Philosophy: <Sun className="h-4 w-4" />,
  Practice: <TreePine className="h-4 w-4" />,
};

function YogaEcosystem() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-emerald-50 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-emerald-200 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-200 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 font-body">
              <Wind className="h-3.5 w-3.5" />
              Editorial Sandbox
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Yoga Ecosystem
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 font-body max-w-2xl">
              A living archive of eastern philosophy, Sanskrit etymology, and the
              integrative science of holistic medicine — written for the modern seeker.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 sm:p-12 lg:p-16"
            >
              <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="relative max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400 font-body">
                  Featured
                </div>
                <div className="mt-6 font-display text-sm font-medium tracking-widest text-emerald-400 uppercase">
                  {featured.sanskrit}
                </div>
                <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-2 text-lg text-slate-300 font-body italic">
                  {featured.subtitle}
                </p>
                <p className="mt-6 text-slate-400 font-body leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 font-body">
                    <BookOpen className="h-4 w-4" />
                    {featured.readTime}
                  </span>
                  <div className="flex gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300 font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Quote Block */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="mx-auto h-8 w-8 text-emerald-400" />
          <blockquote className="mt-6 font-display text-2xl font-medium text-foreground sm:text-3xl leading-relaxed">
            "Yoga is the journey of the self, through the self, to the self."
          </blockquote>
          <cite className="mt-4 block text-sm text-muted-foreground font-body not-italic">
            — Bhagavad Gita, 6.23
          </cite>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Recent Writings
            </h2>
            <span className="text-sm text-muted-foreground font-body">
              {rest.length} articles
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 font-body">
                    {categoryIcons[article.category]}
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    {article.readTime}
                  </span>
                </div>

                <div className="mt-4 font-display text-sm font-medium tracking-widest text-emerald-700 uppercase">
                  {article.sanskrit}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-card-foreground group-hover:text-amber-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground font-body italic">
                  {article.subtitle}
                </p>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed line-clamp-4">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sanskrit Glossary Teaser */}
      <section className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-card-foreground">
                  Sanskrit Root Explorer
                </h3>
                <p className="mt-2 text-muted-foreground font-body max-w-lg">
                  A reference tool tracing the etymological roots of key yogic terms
                  across Vedic, Classical, and Modern Sanskrit corpora.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-amber-500">120+</div>
                  <div className="text-xs text-muted-foreground font-body">Terms mapped</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-emerald-600">8</div>
                  <div className="text-xs text-muted-foreground font-body">Source texts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
