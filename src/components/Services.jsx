import { motion } from "framer-motion";

const SERVICES = [
  {
    no: "01",
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces crafted to convert visitors into loyal users.",
    icon: "diamond",
  },
  {
    no: "02",
    title: "Web Development",
    description: "Scalable, performant web applications built with cutting-edge stacks.",
    icon: "ring",
  },
  {
    no: "03",
    title: "E-Commerce",
    description: "Revenue-first storefronts engineered for maximum conversion rate.",
    icon: "half",
  },
  {
    no: "04",
    title: "Brand Identity",
    description: "Distinctive digital identities that make your brand unforgettable.",
    icon: "half-muted",
  },
];

function ServiceIcon({ kind }) {
  if (kind === "diamond") {
    return (
      <div
        className="w-3 h-3 rotate-45 border border-white/25 rounded-[2px]"
      />
    );
  }

  if (kind === "ring") {
    return (
      <div className="w-4 h-4 rounded-full border border-white/25" />
    );
  }

  if (kind === "half") {
    return (
      <div className="relative w-4 h-4 rounded-full overflow-hidden">
        <div className="absolute inset-0 border border-white/25 rounded-full" />
        <div className="absolute inset-0 bg-white/20 w-1/2" />
      </div>
    );
  }

  // half-muted
  return (
    <div className="relative w-4 h-4 rounded-full overflow-hidden">
      <div className="absolute inset-0 border border-white/25 rounded-full" />
      <div className="absolute inset-0 bg-white/20 w-1/2" />
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="service-tile group cursor-none"
    >
      <div className="service-tile-inner">
        <div className="flex items-start justify-between">
          <div className="service-tile-icon">
            <ServiceIcon kind={service.icon} />
          </div>
          <div className="service-tile-no">{service.no}</div>
        </div>

        <h3 className="service-tile-title">{service.title}</h3>
        <p className="service-tile-desc">{service.description}</p>

        <div className="service-tile-link">
          <span>Learn more</span>
          <span aria-hidden>→</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[0.7rem] tracking-[0.22em] uppercase font-semibold text-cyan-300/80 mb-4">
            What We Build
          </div>
          <h2
            className="font-display font-extrabold text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.3rem)" }}
          >
            Precision-engineered for the next decade.
          </h2>
          <p className="mt-5 text-slate-400/70 leading-relaxed max-w-xl">
            Three core disciplines, one obsessive standard: excellence at every pixel, every request, every millisecond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.no} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
