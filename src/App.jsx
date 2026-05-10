/*
  Olimax Rail — Landing Page
  Stack: React + Tailwind CSS + Framer Motion + Lucide React
  Font: add <link> for Inter in index.html for best results
*/

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Train, Package, Layers, Mail, Phone,
  Building2, Send, ChevronDown, ArrowRight,
  CheckCircle, Radar,
} from 'lucide-react';

/* ── helpers ── */
function useCounter(target, duration, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/92 backdrop-blur-sm border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/images/icon.png" alt="Olimax Rail icon" className="h-7 w-auto" />
          <span className="text-white text-xs font-light tracking-[0.25em] uppercase">
            Olimax <strong className="font-bold">Rail</strong>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[['Usługi', '#services'], ['Trasy', '#map'], ['Kontakt', '#contact']].map(([l, h]) => (
            <a key={l} href={h}
              className="text-white/40 hover:text-white text-[11px] tracking-[0.18em] uppercase transition-colors duration-200">
              {l}
            </a>
          ))}
          <a href="#contact"
            className="text-[11px] tracking-[0.18em] uppercase border border-white/20 hover:bg-white hover:text-black text-white px-4 py-2.5 transition-all duration-300">
            Wyceń Trasę
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/videos/rail-transport.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.035]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 mt-[50px]"
        >
          <img
            src="/images/olimax_rail_white.png"
            alt="Olimax Rail"
            className="mb-6 w-auto mx-auto"
            style={{ maxHeight: 'clamp(3.5rem, 11vw, 9rem)' }}
          />

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-12"
        >
          Łączymy Europę z Azją · Bezpiecznie · Terminowo · Globalnie
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact"
            className="group flex items-center gap-2.5 bg-white text-black text-[11px] tracking-[0.22em] uppercase font-bold px-7 py-4 hover:bg-white/90 transition-colors">
            Wyceń Transport
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services"
            className="border border-white/20 text-white text-[11px] tracking-[0.22em] uppercase px-7 py-4 hover:border-white/50 transition-colors">
            Nasze Usługi
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/20 text-[9px] tracking-[0.35em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════
   STATS
══════════════════════════════════════ */
function StatItem({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCounter(value, 2200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#080808] flex flex-col items-center py-10 px-6 text-center"
    >
      <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {count.toLocaleString('pl-PL')}{suffix}
      </span>
      <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase mt-2.5">{label}</span>
    </motion.div>
  );
}

function Stats() {
  const items = [
    { value: 11000, suffix: '+', label: 'Kilometrów Trasy',      delay: 0    },
    { value: 15,    suffix: '',  label: 'Obsługiwanych Krajów',   delay: 0.1  },
    { value: 500,   suffix: '+', label: 'Składów Miesięcznie',    delay: 0.2  },
    { value: 99,    suffix: '%', label: 'Terminowość Dostaw',     delay: 0.3  },
  ];
  return (
    <section className="border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
        {items.map(s => <StatItem key={s.label} {...s} />)}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   SERVICES
══════════════════════════════════════ */
function ServiceCard({ icon: Icon, title, description, features, index }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.75, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`relative p-8 lg:p-10 bg-black transition-colors duration-300 cursor-default ${
        hov ? 'bg-white/[0.025]' : ''
      }`}
    >
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-white"
        animate={{ width: hov ? '100%' : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className={`w-11 h-11 border mb-8 grid place-items-center transition-all duration-300 ${
        hov ? 'border-white bg-white' : 'border-white/15'
      }`}>
        <Icon size={18} className={`transition-colors duration-300 ${hov ? 'text-black' : 'text-white/50'}`} />
      </div>

      <h3 className="text-white text-lg font-semibold tracking-tight mb-3">{title}</h3>
      <p className="text-white/35 text-sm leading-relaxed mb-7">{description}</p>

      <ul className="space-y-2 mb-8">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2.5 text-white/40 text-xs">
            <div className={`w-[3px] h-[3px] rounded-full transition-colors duration-300 ${
              hov ? 'bg-white/70' : 'bg-white/25'
            }`} />
            {f}
          </li>
        ))}
      </ul>

      <div className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
        hov ? 'text-white' : 'text-white/20'
      }`}>
        Więcej
        <ArrowRight size={10} className={`transition-transform duration-300 ${hov ? 'translate-x-1' : ''}`} />
      </div>
    </motion.article>
  );
}

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Package,
      title: 'Transport Kontenerowy',
      description: 'Kompleksowy przewóz kontenerów 20\' i 40\' na trasach eurazjatyckich. Obsługa ładunków standardowych, ponadgabarytowych i chłodniczych.',
      features: ["Kontenery 20' i 40' TEU", 'Ładunki ponadgabarytowe', 'Transport chłodniczy', 'Pełna obsługa celna'],
    },
    {
      icon: Layers,
      title: 'Logistyka Terminalna',
      description: 'Profesjonalna obsługa terminali przeładunkowych na kluczowych węzłach kolejowych Eurazji z zachowaniem najwyższych standardów.',
      features: ['Załadunek i rozładunek', 'Magazynowanie buforowe', 'Konsolidacja ładunków', 'Zarządzanie flotą wagonów'],
    },
    {
      icon: Radar,
      title: 'Śledzenie Przesyłek',
      description: 'System monitorowania w czasie rzeczywistym z pełną widocznością na każdym etapie tranzytu — od punktu nadania do odbioru.',
      features: ['GPS tracking 24/7', 'Portal klienta online', 'Alerty SMS i e-mail', 'Prognozowanie ETA'],
    },
  ];

  return (
    <section id="services" className="bg-black py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-white/25" />
            <span className="text-white/30 text-[10px] tracking-[0.38em] uppercase">Co oferujemy</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.05]">
            Usługi klasy<br />
            <span className="font-extralight text-white/40">światowej</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ROUTE MAP
══════════════════════════════════════ */
function RouteMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cities = [
    { x: 92,  y: 172, name: 'Rotterdam'     },
    { x: 192, y: 158, name: 'Warszawa'      },
    { x: 282, y: 140, name: 'Moskwa'        },
    { x: 390, y: 124, name: 'Jekaterynburg' },
    { x: 490, y: 164, name: 'Nur-Sułtan'   },
    { x: 620, y: 175, name: 'Ałmaty'        },
    { x: 720, y: 188, name: 'Urumczi'       },
    { x: 812, y: 204, name: "Xi'an"         },
    { x: 907, y: 219, name: 'Szanghaj'      },
  ];

  const routeD =
    'M 92,172 C 142,165 168,155 192,158 C 216,161 260,133 282,140 ' +
    'C 304,147 362,116 390,124 C 418,132 464,168 490,164 ' +
    'C 516,160 592,180 620,175 C 648,170 696,186 720,188 ' +
    'C 744,190 788,202 812,204 C 836,206 880,217 907,219';

  return (
    <section id="map" className="bg-[#030303] py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-white/25" />
            <span className="text-white/30 text-[10px] tracking-[0.38em] uppercase">Sieć połączeń</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.05]">
            Europa — Azja<br />
            <span className="font-extralight text-white/40">11 000+ km magistrali</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative border border-white/8 bg-[#060606] overflow-hidden"
        >
          {/* Stat badges */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            {[['Czas tranzytu', '14–18 dni'], ['Krajów', '15'], ['Terminale', '28+']].map(([k, v]) => (
              <div key={k} className="bg-black/80 border border-white/10 backdrop-blur-sm px-3 py-1.5">
                <div className="text-white/30 text-[9px] tracking-widest uppercase">{k}</div>
                <div className="text-white text-xs font-semibold">{v}</div>
              </div>
            ))}
          </div>

          <svg viewBox="0 0 1000 360" className="w-full" style={{ minHeight: 240 }}>
            <defs>
              <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0L0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.2" opacity="0.35" />
              </pattern>
              <linearGradient id="land-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#141414" />
                <stop offset="50%"  stopColor="#0d0d0d" />
                <stop offset="100%" stopColor="#131313" />
              </linearGradient>
              <filter id="route-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            <rect width="1000" height="360" fill="#060606" />
            <rect width="1000" height="360" fill="url(#map-grid)" />

            {/* Simplified Eurasia landmass */}
            <path
              d="M 20,200 L 42,182 L 56,168 L 62,152 L 78,142 L 96,138 L 110,126
                 L 122,116 L 140,110 L 158,106 L 174,98  L 192,94  L 208,103
                 L 222,96  L 238,90  L 252,98  L 264,90  L 280,83  L 300,78
                 L 322,73  L 348,66  L 372,70  L 394,63  L 418,58  L 442,55
                 L 466,52  L 492,49  L 516,47  L 542,45  L 568,42  L 594,40
                 L 620,42  L 646,38  L 672,41  L 698,46  L 724,49  L 748,54
                 L 772,60  L 796,68  L 820,78  L 842,90  L 860,104 L 874,118
                 L 885,134 L 892,150 L 895,168 L 890,186 L 880,204 L 868,220
                 L 852,236 L 834,250 L 814,263 L 792,276 L 768,287 L 744,296
                 L 718,304 L 692,310 L 666,312 L 640,310 L 614,305 L 588,297
                 L 562,289 L 536,280 L 510,274 L 484,272 L 460,278 L 440,288
                 L 418,295 L 396,292 L 374,282 L 352,268 L 330,253 L 308,241
                 L 286,236 L 262,242 L 238,250 L 215,258 L 192,254 L 168,242
                 L 144,230 L 120,227 L 96,234  L 72,244  L 50,250  L 30,242
                 L 18,228 Z"
              fill="url(#land-grad)"
              stroke="#1c1c1c"
              strokeWidth="0.8"
            />

            {/* Inland water bodies */}
            <ellipse cx="444" cy="212" rx="11" ry="21" fill="#060606" opacity="0.95" /> {/* Caspian */}
            <ellipse cx="148" cy="108" rx="14" ry="7"  fill="#060606" opacity="0.8" transform="rotate(-20 148 108)" /> {/* Baltic */}
            <ellipse cx="267" cy="186" rx="18" ry="8"  fill="#060606" opacity="0.8" /> {/* Black Sea */}

            {/* Background dim route */}
            <path d={routeD} fill="none" stroke="white" strokeWidth="0.8"
              opacity="0.07" strokeDasharray="5 4" />

            {/* Route glow */}
            <path d={routeD} fill="none" stroke="white" strokeWidth="10"
              opacity="0.02" filter="url(#route-glow)" />

            {/* Animated route line */}
            <motion.path
              d={routeD}
              fill="none"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 3, delay: 0.6, ease: 'easeInOut' }}
            />

            {/* City nodes */}
            {cities.map((city, i) => (
              <motion.g key={city.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1 + i * 0.2, duration: 0.35, type: 'spring', stiffness: 300 }}
              >
                <motion.circle cx={city.x} cy={city.y} r="8"
                  fill="none" stroke="white" strokeWidth="0.4"
                  animate={{ r: [6, 14, 6], opacity: [0.25, 0, 0.25] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.4, ease: 'easeInOut' }}
                />
                <circle cx={city.x} cy={city.y} r="3"   fill="white" />
                <circle cx={city.x} cy={city.y} r="1.4" fill="#060606" />
                <text x={city.x} y={city.y - 9} textAnchor="middle"
                  fill="white" fontSize="6.5" fontFamily="system-ui, sans-serif"
                  opacity="0.6" letterSpacing="0.5">
                  {city.name}
                </text>
              </motion.g>
            ))}

            <text x="20" y="350" fill="white" fontSize="7" fontFamily="system-ui"
              opacity="0.1" letterSpacing="2">
              OLIMAX RAIL — EURASIAN RAIL NETWORK
            </text>
          </svg>
        </motion.div>

        {/* City strip */}
        <div className="mt-5 flex items-center overflow-x-auto pb-2">
          {cities.map((c, i) => (
            <React.Fragment key={c.name}>
              <div className="flex-shrink-0 px-3 py-2">
                <div className="text-white text-xs font-medium whitespace-nowrap">{c.name}</div>
              </div>
              {i < cities.length - 1 && (
                <div className="flex-1 min-w-[1rem] border-t border-dashed border-white/15" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   CONTACT
══════════════════════════════════════ */
function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({
    company: '', name: '', email: '', phone: '',
    origin: '', destination: '', containers: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const set = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const field =
    'w-full bg-transparent border border-white/10 text-white text-sm px-4 py-3 ' +
    'focus:outline-none focus:border-white/35 transition-colors placeholder:text-white/20';

  return (
    <section id="contact" className="bg-black py-24 lg:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

          {/* Left — info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-white/25" />
              <span className="text-white/30 text-[10px] tracking-[0.38em] uppercase">Zapytanie o wycenę</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.05] mb-8">
              Połączmy<br />
              <span className="font-extralight text-white/40">kontynenty</span>
            </h2>
            <p className="text-white/35 text-sm leading-relaxed mb-12 max-w-sm">
              Nasz zespół specjalistów przygotuje indywidualną wycenę w ciągu
              24 godzin, dostosowaną do Twoich potrzeb i harmonogramu.
            </p>
            <div className="space-y-5">
              {[
                { Icon: Mail,      label: 'E-mail',    val: 'test@email.com'     },
                { Icon: Phone,     label: 'Telefon',   val: '+48 22 123 456 789'           },
                { Icon: Building2, label: 'Siedziba',  val: 'ul. Kolejowa 1, 00-001 Warszawa' },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/10 grid place-items-center flex-shrink-0">
                    <Icon size={13} className="text-white/35" />
                  </div>
                  <div>
                    <div className="text-white/25 text-[9px] tracking-[0.3em] uppercase mb-0.5">{label}</div>
                    <div className="text-white text-sm">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={e => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Firma *</label>
                      <input name="company" value={form.company} onChange={set} required
                        placeholder="Nazwa firmy" className={field} />
                    </div>
                    <div>
                      <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Osoba kontaktowa *</label>
                      <input name="name" value={form.name} onChange={set} required
                        placeholder="Imię i nazwisko" className={field} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">E-mail *</label>
                      <input type="email" name="email" value={form.email} onChange={set} required
                        placeholder="email@firma.com" className={field} />
                    </div>
                    <div>
                      <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Telefon</label>
                      <input type="tel" name="phone" value={form.phone} onChange={set}
                        placeholder="+48 000 000 000" className={field} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Punkt nadania *</label>
                      <input name="origin" value={form.origin} onChange={set} required
                        placeholder="np. Rotterdam" className={field} />
                    </div>
                    <div>
                      <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Punkt odbioru *</label>
                      <input name="destination" value={form.destination} onChange={set} required
                        placeholder="np. Szanghaj" className={field} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Kontenery / Typ ładunku</label>
                    <input name="containers" value={form.containers} onChange={set}
                      placeholder="np. 2× 40' HC — elektronika" className={field} />
                  </div>

                  <div>
                    <label className="block text-white/25 text-[9px] tracking-[0.3em] uppercase mb-1.5">Dodatkowe informacje</label>
                    <textarea name="message" value={form.message} onChange={set} rows={3}
                      placeholder="Data wysyłki, wymagania specjalne…"
                      className={`${field} resize-none`} />
                  </div>

                  <button type="submit"
                    className="group w-full flex items-center justify-center gap-3 bg-white text-black text-[11px] tracking-[0.22em] uppercase font-bold py-4 hover:bg-white/90 transition-colors">
                    Wyślij zapytanie
                    <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    className="w-16 h-16 border border-white/20 grid place-items-center mb-8"
                  >
                    <CheckCircle size={26} className="text-white" />
                  </motion.div>
                  <h3 className="text-white text-2xl font-semibold mb-3">Zapytanie wysłane</h3>
                  <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                    Nasz zespół odpowie w ciągu 24&nbsp;godzin z dedykowaną wyceną trasy.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/images/icon.png" alt="Olimax Rail icon" className="h-7 w-auto" />
          <div>
            <div className="text-white text-xs tracking-[0.22em] font-light uppercase">
              Olimax <strong className="font-bold">Rail</strong>
            </div>
            <div className="text-white/20 text-[10px]">© 2024 Wszelkie prawa zastrzeżone</div>
          </div>
        </div>

        <div className="flex gap-8">
          {['Polityka Prywatności', 'Regulamin', 'Kontakt'].map(l => (
            <a key={l} href="#"
              className="text-white/20 hover:text-white/50 text-[10px] tracking-wider transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="text-white/10 text-[9px] tracking-[0.3em] uppercase">
          Transport · Logistyka · Eurazja
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════
   ROOT
══════════════════════════════════════ */
export default function OlimaxRail() {
  return (
    <div className="bg-black text-white antialiased selection:bg-white selection:text-black"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <RouteMap />
      <Contact />
      <Footer />
    </div>
  );
}
