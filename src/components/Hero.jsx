import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const WORDS = ["Digital", "Immersive", "Scalable", "Frontier"];

function useTypewriter(words) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => {
          setDisplay(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 55);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [charIdx, deleting, wordIdx, words]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(WORDS);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-[5%] pt-32 pb-16 overflow-hidden"
    >
      <div className="hero-grid" />

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          top: -100,
          left: -100,
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
          bottom: -50,
          right: -50,
          animation: "float 10s ease-in-out 2s infinite reverse",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            color: "#3b82f6",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            style={{ animation: "pulseDot 2s infinite" }}
          />
          Web Development & IT Solutions
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
        >
          <span className="text-white">Engineering the</span>
          <br />
          <span className="gradient-text">{typed}</span>
          <span
            className="inline-block w-[3px] bg-cyan-400 align-middle ml-1"
            style={{ height: "0.85em", animation: "blink 1s infinite" }}
          />
          <br />
          <span className="text-white">Frontier.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-xl mb-12 text-lg font-light leading-relaxed"
          style={{ color: "#64748b" }}
        >
          We craft immersive digital experiences that push boundaries - blending
          performance engineering with human-centred design to launch products
          that lead markets.
        </motion.p>
      </motion.div>
    </section>
  );
}
