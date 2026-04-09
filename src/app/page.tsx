"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconPlane = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const IconMoon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconGift = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1014.25 3H12m0 1.875V21M12 4.875A2.625 2.625 0 109.75 3H12m-9 4.5h18M6.75 7.5h10.5a1.5 1.5 0 011.5 1.5v.75H5.25v-.75a1.5 1.5 0 011.5-1.5z" />
  </svg>
);

const IconReceipt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-[#C8A96A]/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Niyya Safar" width={44} height={44} className="object-contain" />
          <div className="hidden sm:block">
            <span
              className="text-lg"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#0F6F5C",
                letterSpacing: "0.02em",
              }}
            >
              <strong>Niyya</strong>{" "}
              <span style={{ fontWeight: 300 }}>Safar</span>
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#mission" className="nav-link" style={{ fontFamily: "var(--font-cormorant)" }}>Notre mission</a>
          <a href="#comment" className="nav-link" style={{ fontFamily: "var(--font-cormorant)" }}>Comment ça marche</a>
          <a href="#transparence" className="nav-link" style={{ fontFamily: "var(--font-cormorant)" }}>Transparence</a>
          <a href="#candidater" className="nav-link" style={{ fontFamily: "var(--font-cormorant)" }}>Candidater</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#don"
            className="hidden sm:flex btn-gold items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
          >
            <IconHeart />
            Faire un don
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-px bg-[#C8A96A] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-[#C8A96A] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#C8A96A] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-[#C8A96A]/10 mt-3 px-6 py-6 flex flex-col gap-5">
          {["mission", "comment", "transparence", "candidater"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="nav-link capitalize text-base"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {id === "comment" ? "Comment ça marche" : id === "mission" ? "Notre mission" : id === "transparence" ? "Transparence" : "Candidater"}
            </a>
          ))}
          <a
            href="#don"
            onClick={() => setMenuOpen(false)}
            className="btn-gold flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <IconHeart />
            Faire un don
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="glow-gold top-0 left-1/4 -translate-x-1/2 -translate-y-1/4" />
      <div className="glow-green bottom-0 right-1/4 translate-x-1/2 translate-y-1/4" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Star dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#C8A96A]"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.1,
              animationDelay: Math.random() * 5 + "s",
              animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="animate-fade-in delay-1 inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-pulse-gold" />
          <span
            className="text-[#C8A96A] text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
          >
            Association Loi 1901 · Non lucratif
          </span>
        </div>

        {/* Title */}
        <h1
          className="animate-fade-in-up delay-2 text-5xl sm:text-7xl md:text-8xl leading-none mb-6"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          De l&rsquo;
          <span className="text-gold">intention</span>
          <br />
          au{" "}
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#0F6F5C",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            voyage
          </span>
        </h1>

        {/* Ornament */}
        <div className="animate-fade-in-up delay-3 ornament max-w-xs mx-auto mb-8">
          <span>نية سفر</span>
        </div>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up delay-4 text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
        >
          Nous finançons les pèlerinages Hajj et Omra de musulmans franciliens
          en situation de précarité. Transparence absolue, zéro commission.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#don"
            className="btn-gold flex items-center gap-3 px-8 py-4 rounded-full text-lg w-full sm:w-auto justify-center"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}
          >
            <IconHeart />
            Faire un don
          </a>
          <a
            href="#candidater"
            className="btn-outline flex items-center gap-3 px-8 py-4 rounded-full text-lg w-full sm:w-auto justify-center"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem" }}
          >
            <IconPlane />
            Soumettre ma candidature
          </a>
        </div>

        {/* Stats preview */}
        <div className="animate-fade-in-up delay-6 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { n: 0, suffix: "%", label: "de commission" },
            { n: 66, suffix: "%", label: "déduction fiscale" },
            { n: 100, suffix: "%", label: "transparent" },
          ].map(({ n, suffix, label }) => (
            <div key={label} className="glass rounded-2xl p-4 text-center">
              <div
                className="text-2xl sm:text-3xl text-gold font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <Counter end={n} suffix={suffix} />
              </div>
              <div
                className="text-white/50 text-sm mt-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span
          className="text-white/30 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
        >
          Découvrir
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C8A96A]/50 to-transparent" />
      </div>
    </section>
  );
}

// ─── Mission ──────────────────────────────────────────────────────────────────
function Mission() {
  return (
    <section id="mission" className="relative py-32 overflow-hidden">
      <div className="glow-green top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="ornament max-w-xs mb-12">
          <span>Notre mission</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2
              className="text-4xl sm:text-5xl leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              Des milliers de niyyas{" "}
              <span className="text-gold">en attente</span>
            </h2>
            <div
              className="space-y-6 text-white/65 text-xl leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              <p>
                En Île-de-France, des milliers de musulmans portent depuis des
                décennies l&rsquo;intention sincère d&rsquo;accomplir le Hajj ou la Omra.
                Leur foi est intacte. Leur niyya est pure. Mais les barrières
                économiques les en empêchent.
              </p>
              <p>
                <strong className="text-white font-medium">1 500 – 2 000 €</strong> pour une Omra.{" "}
                <strong className="text-white font-medium">6 000 – 8 000 €</strong> pour le Hajj.
                Pour des familles précaires, ces chiffres sont une frontière infranchissable.
              </p>
              <p>
                Niyya Safar n&rsquo;est pas une organisation caritative classique. Nous sommes
                un <em className="text-[#C8A96A] not-italic">pont humain</em> — entre des donateurs généreux
                et des candidats vérifiés, authentiques, dont chaque histoire mérite d&rsquo;être entendue.
              </p>
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <IconMoon />,
                title: "Hajj",
                desc: "Le cinquième pilier de l'Islam. Un voyage obligatoire une fois dans sa vie pour tout musulman en capacité.",
                color: "#C8A96A",
              },
              {
                icon: <IconPlane />,
                title: "Omra",
                desc: "Le petit pèlerinage. Un voyage spirituel intense, accessible toute l'année, souvent le premier rêve.",
                color: "#0F6F5C",
              },
              {
                icon: <IconUsers />,
                title: "Candidats vérifiés",
                desc: "Chaque candidat passe un entretien vidéo en face à face avec notre équipe. Aucun anonymat.",
                color: "#C8A96A",
              },
              {
                icon: <IconShield />,
                title: "Dons protégés",
                desc: "100% de votre don va au voyage. Zéro commission prélevée. Comptabilité publique.",
                color: "#0F6F5C",
              },
            ].map(({ icon, title, desc, color }) => (
              <div
                key={title}
                className="glass card-lift rounded-2xl p-6 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, color }}
                >
                  {icon}
                </div>
                <h3
                  className="text-white text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
                >
                  {title}
                </h3>
                <p
                  className="text-white/50 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: "📝",
      title: "Dépôt de candidature",
      desc: "Le candidat soumet un dossier complet : situation financière, motivation spirituelle, parcours de vie. Chaque mot compte.",
      color: "#C8A96A",
    },
    {
      n: "02",
      icon: "🎥",
      title: "Entretien vidéo",
      desc: "Notre équipe rencontre le candidat en visioconférence. Une vraie conversation, humaine et sincère. Filmée et publiée.",
      color: "#0F6F5C",
    },
    {
      n: "03",
      icon: "🌐",
      title: "Profil publié",
      desc: "Photo, vidéo de l'entretien, histoire personnelle. Le candidat devient visible auprès de milliers de donateurs potentiels.",
      color: "#C8A96A",
    },
    {
      n: "04",
      icon: "❤️",
      title: "Les dons arrivent",
      desc: "Les donateurs choisissent librement le candidat qu'ils souhaitent financer. Chaque don est tracé et transparent.",
      color: "#0F6F5C",
    },
    {
      n: "05",
      icon: "✈️",
      title: "Le voyage a lieu",
      desc: "Quand l'objectif est atteint, nous organisons le voyage. Le pèlerin partage son expérience en temps réel.",
      color: "#C8A96A",
    },
    {
      n: "06",
      icon: "🤲",
      title: "Le témoignage",
      desc: "Au retour, le pèlerin partage son vécu. Un cycle complet de transparence et de gratitude.",
      color: "#0F6F5C",
    },
  ];

  return (
    <section id="comment" className="relative py-32 overflow-hidden">
      <div className="glow-gold top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="ornament max-w-xs mx-auto mb-8">
            <span>Le processus</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Comment ça{" "}
            <span className="text-gold">marche</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ n, icon, title, desc, color }) => (
            <div key={n} className="glass card-lift rounded-2xl p-8 group relative overflow-hidden">
              {/* Number watermark */}
              <div
                className="absolute top-4 right-6 text-6xl font-bold opacity-[0.04] select-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair)", color }}
              >
                {n}
              </div>

              <div className="text-3xl mb-6">{icon}</div>

              <div
                className="text-sm mb-2 tracking-widest uppercase"
                style={{ color, fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
              >
                Étape {n}
              </div>

              <h3
                className="text-white text-xl mb-3"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
              >
                {title}
              </h3>

              <p
                className="text-white/55 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                {desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Transparency ─────────────────────────────────────────────────────────────
function Transparency() {
  const points = [
    {
      icon: <IconGift />,
      title: "0% de commission",
      desc: "100% de votre don va directement au financement du voyage. Aucun intermédiaire ne se sert. Jamais.",
      highlight: "0%",
    },
    {
      icon: <IconReceipt />,
      title: "Reçu fiscal",
      desc: "En tant qu'association loi 1901 reconnue d'intérêt général, nous émettons des reçus ouvrant droit à 66% de déduction d'impôts.",
      highlight: "66%",
    },
    {
      icon: <IconEye />,
      title: "Comptabilité publique",
      desc: "Nos comptes sont publiés et accessibles à tous. Chaque euro reçu, chaque euro dépensé, visible par n'importe qui.",
      highlight: "Open",
    },
    {
      icon: <IconShield />,
      title: "Candidats vérifiés",
      desc: "Chaque candidat est rencontré en face à face. Entretien filmé, situation vérifiée. Aucun profil anonyme.",
      highlight: "100%",
    },
  ];

  return (
    <section id="transparence" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0F1A17] to-[#0B0B0B]" />
      <div className="glow-green top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="ornament max-w-xs mx-auto mb-8">
            <span>Notre engagement</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Une transparence{" "}
            <span className="text-gold">absolue</span>
          </h2>
          <p
            className="text-white/55 text-xl max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            La confiance se construit par les actes, pas les promesses.
            Voici concrètement ce que nous garantissons.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {points.map(({ icon, title, desc, highlight }) => (
            <div
              key={title}
              className="glass card-lift rounded-2xl p-8 flex gap-6 group"
            >
              {/* Highlight number */}
              <div className="flex-shrink-0 text-center">
                <div
                  className="text-3xl font-bold text-gold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {highlight}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C8A96A]">{icon}</span>
                  <h3
                    className="text-white text-xl"
                    style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className="text-white/55 text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="glass rounded-3xl p-10 max-w-3xl mx-auto">
          <h3
            className="text-2xl text-center mb-8 text-white"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
          >
            Ce que vous ne trouverez jamais chez nous
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Des frais cachés",
              "Des profils anonymes",
              "De la rétention d'informations",
              "Des commissions déguisées",
              "Des candidats non vérifiés",
              "Des comptes opaques",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C8A96A]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A96A] text-xs">✕</span>
                </div>
                <span
                  className="text-white/60 text-lg"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Donate CTA ───────────────────────────────────────────────────────────────
function DonateCTA() {
  const amounts = [20, 50, 100, 200, 500];
  const [selected, setSelected] = useState<number | null>(100);
  const [custom, setCustom] = useState("");

  return (
    <section id="don" className="relative py-32 overflow-hidden">
      <div className="glow-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "800px", height: "800px" }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="ornament max-w-xs mx-auto mb-8">
          <span>Agir maintenant</span>
        </div>

        <h2
          className="text-4xl sm:text-5xl leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          Transformez une{" "}
          <span className="text-gold">niyya</span>
          <br />
          en réalité
        </h2>

        <p
          className="text-white/55 text-xl mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
        >
          Chaque don, même modeste, rapproche un pèlerin de La Mecque.
          Votre générosité sera vérifiable, traçable, et fiscalement déductible.
        </p>

        <div className="glass rounded-3xl p-8 sm:p-10 text-left">
          <p
            className="text-white/60 text-sm tracking-widest uppercase mb-5"
            style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
          >
            Choisir un montant
          </p>

          {/* Amount selector */}
          <div className="flex flex-wrap gap-3 mb-6">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => { setSelected(a); setCustom(""); }}
                className={`px-5 py-3 rounded-xl text-lg transition-all duration-300 ${
                  selected === a && !custom
                    ? "bg-[#C8A96A] text-[#0B0B0B] font-bold"
                    : "glass text-white/70 hover:text-white hover:border-[#C8A96A]/40"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {a} €
              </button>
            ))}
            <div className="flex-1 min-w-[120px]">
              <input
                type="number"
                placeholder="Autre montant"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="input-line text-center text-lg"
                style={{ fontFamily: "var(--font-cormorant)" }}
              />
            </div>
          </div>

          {/* Fiscal info */}
          {(selected || custom) && (
            <div className="flex items-center gap-3 glass rounded-xl px-5 py-3 mb-6">
              <IconReceipt />
              <span
                className="text-[#C8A96A] text-base"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Après déduction fiscale, ce don ne vous coûte réellement que{" "}
                <strong>
                  {Math.round((selected || parseFloat(custom) || 0) * 0.34)} €
                </strong>
              </span>
            </div>
          )}

          <button
            className="btn-gold w-full flex items-center justify-center gap-3 py-5 rounded-2xl text-xl"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem" }}
          >
            <IconHeart />
            Faire un don de {custom || selected || "..."} €
            <IconArrow />
          </button>

          <p
            className="text-center text-white/35 text-sm mt-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Paiement sécurisé · Reçu fiscal automatique · 0% de commission prélevée
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Apply CTA ────────────────────────────────────────────────────────────────
function ApplyCTA() {
  return (
    <section id="candidater" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#0a1210] to-[#0B0B0B]" />
      <div className="glow-green top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="ornament max-w-xs mb-8">
              <span>Candidater</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              Votre niyya{" "}
              <span style={{ color: "#0F6F5C", fontStyle: "italic", fontWeight: 400 }}>mérite</span>
              <br />
              d&rsquo;être entendue
            </h2>
            <p
              className="text-white/55 text-xl leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Vous rêvez du Hajj ou de la Omra depuis des années mais les
              moyens manquent ? Soumettez votre candidature. Notre équipe vous
              contactera pour un entretien confidentiel et bienveillant.
            </p>

            <div className="space-y-4">
              {[
                "Dossier simple et confidentiel",
                "Entretien vidéo humain (pas un formulaire froid)",
                "Aucun jugement — juste votre histoire",
                "Profil publié avec votre accord uniquement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0F6F5C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0F6F5C]"><IconCheck /></span>
                  </div>
                  <span
                    className="text-white/70 text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Mini form */}
          <div className="glass rounded-3xl p-8">
            <h3
              className="text-2xl text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 600 }}
            >
              Première étape
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  className="text-white/40 text-sm tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
                >
                  Prénom & nom
                </label>
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  className="input-line"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                />
              </div>
              <div>
                <label
                  className="text-white/40 text-sm tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.fr"
                  className="input-line"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                />
              </div>
              <div>
                <label
                  className="text-white/40 text-sm tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
                >
                  Pèlerinage souhaité
                </label>
                <div className="flex gap-3 mt-2">
                  {["Omra", "Hajj"].map((p) => (
                    <button
                      key={p}
                      className="flex-1 py-3 glass rounded-xl text-white/60 hover:text-[#C8A96A] text-lg transition-colors"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label
                  className="text-white/40 text-sm tracking-widest uppercase mb-2 block"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
                >
                  Votre message (facultatif)
                </label>
                <textarea
                  placeholder="Quelques mots sur votre intention..."
                  rows={3}
                  className="input-line resize-none"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                />
              </div>

              <button
                className="btn-gold w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-xl"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}
              >
                Soumettre ma candidature
                <IconArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Niyya Safar" width={40} height={40} className="object-contain" />
              <span
                className="text-xl"
                style={{ fontFamily: "var(--font-playfair)", color: "#0F6F5C" }}
              >
                <strong>Niyya</strong>{" "}
                <span style={{ fontWeight: 300 }}>Safar</span>
              </span>
            </div>
            <p
              className="text-white/40 text-lg leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Association loi 1901 · Non lucratif · Île-de-France
              <br />
              <em className="text-[#C8A96A]/70">« De l&rsquo;intention au voyage »</em>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white/80 text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Notre mission", href: "#mission" },
                { label: "Comment ça marche", href: "#comment" },
                { label: "Transparence", href: "#transparence" },
                { label: "Candidater", href: "#candidater" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-[#C8A96A] transition-colors text-lg"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-white/80 text-sm tracking-widest uppercase mb-5"
              style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em" }}
            >
              Légal
            </h4>
            <ul className="space-y-3">
              {["Mentions légales", "Politique de confidentialité", "Statuts de l'association", "Rapports financiers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-[#C8A96A] transition-colors text-lg"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 text-base"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            © 2025 Niyya Safar. Tous droits réservés.
          </p>
          <p
            className="text-white/25 text-base flex items-center gap-2"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Fait avec <IconHeart /> pour la communauté
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Transparency />
        <DonateCTA />
        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
