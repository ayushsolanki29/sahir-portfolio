import React, { useState } from "react";

function Icon({ children, className = "" }) {
  return (
    <span
      className={[
        "inline-flex size-11 items-center justify-center rounded-2xl",
        "bg-white/6 ring-1 ring-white/12 backdrop-blur",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5 text-sky-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

function Chip({ children, color = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-white/7 px-3 py-1 text-xs font-medium text-white/75 ring-1 ring-white/12 ${color}`}>
      {children}
    </span>
  );
}

function Service({ title, icon }) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/7 hover:ring-white/18">
      <div className="shrink-0">{icon}</div>
      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
    </div>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        {icon}
        <span className="text-xs text-white/40 font-medium tracking-wide">↑ Active</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-white/55 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function ProcessStep({ step, title, desc, icon }) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 ring-1 ring-sky-300/25 text-sky-200 text-xs font-bold">
          {step}
        </div>
        <div className="mt-2 w-px flex-1 bg-white/10" />
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="text-sm font-semibold text-white/90">{title}</h3>
        </div>
        <p className="text-xs leading-5 text-white/55">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, location, text, rating }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="size-4 text-sky-300 fill-current">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-xs leading-5 text-white/65 flex-1">"{text}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <div className="size-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-xs font-bold text-sky-200">
          {name[0]}
        </div>
        <div>
          <p className="text-xs font-semibold text-white/85">{name}</p>
          <p className="text-xs text-white/45">{location}</p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-sm font-semibold text-white/90">{question}</span>
        <span className={`shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg viewBox="0 0 24 24" className="size-4 text-sky-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-xs leading-5 text-white/55">{answer}</p>
        </div>
      )}
    </div>
  );
}

function BrandLogo({ name }) {
  const logos = {
    Hikvision: (
      <svg viewBox="0 0 130 32" className="h-7 w-auto text-white" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.5" fill="#E2231A">HIK</text>
        <text x="42" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5" fill="#FFFFFF">VISION</text>
      </svg>
    ),
    Dahua: (
      <svg viewBox="0 0 110 32" className="h-7 w-auto text-white" fill="currentColor">
        <path d="M12 6C7.6 6 4 9.6 4 14c0 4.4 3.6 8 8 8c2.2 0 4.2-.9 5.6-2.4l-2.4-2.4c-.8.8-1.9 1.3-3.2 1.3-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c1.3 0 2.4.5 3.2 1.3l2.4-2.4C16.2 6.9 14.2 6 12 6z" fill="#E2231A" />
        <circle cx="17.5" cy="14" r="2.8" fill="#E2231A" />
        <text x="32" y="23" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="18" fill="#FFFFFF" letterSpacing="-0.5">alhua</text>
      </svg>
    ),
    "CP Plus": (
      <svg viewBox="0 0 110 32" className="h-7 w-auto text-white" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="0.5">CP</text>
        <text x="34" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" fill="#E2231A" letterSpacing="1">PLUS</text>
        <circle cx="28" cy="9" r="3.2" fill="#E2231A" />
      </svg>
    ),
    TVT: (
      <svg viewBox="0 0 120 32" className="h-7 w-auto text-white" fill="currentColor">
        <text x="0" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#00A1E9" letterSpacing="2">TVT</text>
        <text x="68" y="23" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9" fill="#FFFFFF" letterSpacing="1" opacity="0.8">DIGITAL</text>
      </svg>
    ),
    "TP-Link": (
      <svg viewBox="0 0 130 32" className="h-7 w-auto text-white" fill="none">
        <g transform="scale(0.9) translate(0, 2)">
          <path d="M15.185 0C10.218 0 6.25 3.984 6.25 8.903V10.8h4.99V8.903c0-2.135 1.736-3.863 3.946-3.863 2.187 0 3.708 1.536 3.708 3.815 0 2.257-1.64 3.912-3.827 3.912h-1.878v5.039h1.878c4.874 0 8.819-4.007 8.819-8.952C23.885 3.72 20.2 0 15.185 0zM.115 12.6v4.103c0 .624.523 1.248 1.236 1.248h4.753v4.801c0 .624.523 1.248 1.236 1.248h4.065V12.6Z" fill="#38BDF8" />
        </g>
        <text x="28" y="23" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="18" fill="#FFFFFF" letterSpacing="-0.2">tp-link</text>
      </svg>
    ),
    Ubiquiti: (
      <svg viewBox="0 0 120 32" className="h-7 w-auto text-white" fill="none">
        <path d="M14 6c-4.4 0-8 3.6-8 8 0 3.5 2.2 6.4 5.3 7.5l-1.3-3.9c-1-.7-1.7-1.9-1.7-3.3 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.4-.7 2.6-1.7 3.3l-1.3 3.9c3.1-1.1 5.3-4 5.3-7.5 0-4.4-3.6-8-8-8zm-4 8c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="#00A3E0" />
        <text x="28" y="23" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="17" fill="#FFFFFF" letterSpacing="0.2">UBIQUITI</text>
      </svg>
    ),
  };

  return (
    <div className="flex items-center justify-center rounded-2xl bg-white/5 px-6 py-4 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/15">
      {logos[name] || <span className="text-xs font-semibold text-white/45 tracking-widest uppercase">{name}</span>}
    </div>
  );
}

export default function App() {
  const phoneNumber = "6354270509";
  const whatsappNumber = "916354270509";
  const whatsappText = encodeURIComponent(
    "Hi Sahir, mujhe CCTV / WiFi / Networking ke liye visit book karna hai."
  );

  const services = [
    {
      title: "HD & IP CCTV Installation",
      icon: (
        <Icon>
          <path d="M3 11l9-5 9 5-9 5-9-5Z" />
          <path d="M7 13v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4" />
          <path d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </Icon>
      ),
    },
    {
      title: "Server / NVR Setup",
      icon: (
        <Icon className="text-indigo-200">
          <path d="M5 5h14v6H5z" />
          <path d="M5 13h14v6H5z" />
          <path d="M8 8h.01M8 16h.01" />
          <path d="M12 8h5M12 16h5" />
        </Icon>
      ),
    },
    {
      title: "Long‑Range Cameras",
      icon: (
        <Icon>
          <path d="M4 12a8 8 0 0 1 16 0" />
          <path d="M7 12a5 5 0 0 1 10 0" />
          <path d="M10 12a2 2 0 0 1 4 0" />
          <path d="M12 15v2" />
        </Icon>
      ),
    },
    {
      title: "WiFi / Networking",
      icon: (
        <Icon>
          <path d="M5 12.5a10 10 0 0 1 14 0" />
          <path d="M8 15a6 6 0 0 1 8 0" />
          <path d="M11 17.5a2 2 0 0 1 2 0" />
          <path d="M12 20h.01" />
        </Icon>
      ),
    },
    {
      title: "Routing / Switching",
      icon: (
        <Icon className="text-cyan-200">
          <path d="M4 7h16v4H4z" />
          <path d="M7 11v6h10v-6" />
          <path d="M8 9h.01M11 9h.01M14 9h.01M17 9h.01" />
        </Icon>
      ),
    },
    {
      title: "AMC Maintenance",
      icon: (
        <Icon>
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" />
          <path d="M9 12l2 2 4-4" />
        </Icon>
      ),
    },
  ];

  const stats = [
    {
      value: "200+",
      label: "Installations Done",
      icon: (
        <Icon>
          <path d="M3 11l9-5 9 5-9 5-9-5Z" />
          <path d="M14 12a2 2 0 1 1-4 0" />
        </Icon>
      ),
    },
    {
      value: "5yr+",
      label: "Experience",
      icon: (
        <Icon className="text-indigo-200">
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" />
        </Icon>
      ),
    },
    {
      value: "1hr",
      label: "Avg Response Time",
      icon: (
        <Icon className="text-cyan-200">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </Icon>
      ),
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: (
        <Icon>
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </Icon>
      ),
    },
  ];

  const packages = [
    {
      name: "Basic",
      badge: null,
      price: "Call for price",
      features: [
        "2 HD Cameras",
        "1 NVR / DVR Unit",
        "Basic Cable Routing",
        "1 Year Warranty",
        "Remote Setup Guide",
      ],
      cta: "Book Basic",
    },
    {
      name: "Standard",
      badge: "Popular",
      price: "Call for price",
      features: [
        "4–6 HD / IP Cameras",
        "NVR + HDD Storage",
        "Neat Concealed Wiring",
        "WiFi Network Setup",
        "Mobile App Access",
        "1 Free AMC Visit",
      ],
      cta: "Book Standard",
    },
    {
      name: "Premium",
      badge: null,
      price: "Call for price",
      features: [
        "8+ IP / 4K Cameras",
        "Server Rack + NVR",
        "Full Network + Routing",
        "Long‑Range Coverage",
        "Dedicated Support",
        "Annual AMC Contract",
      ],
      cta: "Book Premium",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Book a Call / WhatsApp",
      desc: "Drop a message on WhatsApp or give a call. Describe your location — home, shop, or office — and what you need.",
      icon: (
        <Icon>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.58-1.12a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
        </Icon>
      ),
    },
    {
      step: "02",
      title: "Site Survey Visit",
      desc: "Sahir visits your site, checks placement, counts camera points, evaluates cabling routes and network requirements.",
      icon: (
        <Icon>
          <path d="M12 21s-7-4.35-7-11a7 7 0 0 1 14 0c0 6.65-7 11-7 11Z" />
          <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </Icon>
      ),
    },
    {
      step: "03",
      title: "Quote & Confirmation",
      desc: "You get a transparent breakdown of parts and labour. No hidden charges. Confirm and we schedule the install day.",
      icon: (
        <Icon className="text-cyan-200">
          <path d="M8 7h8M7 11h10M9 15h6M6 5h12v14H6z" />
        </Icon>
      ),
    },
    {
      step: "04",
      title: "Clean Installation",
      desc: "Cameras mounted, wires routed neatly, NVR / server configured, mobile access set up. Your space stays tidy.",
      icon: (
        <Icon className="text-indigo-200">
          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" />
          <path d="M9 12l2 2 4-4" />
        </Icon>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Patel",
      location: "Shop Owner, Ahmedabad",
      text: "Sahir installed 6 cameras in my shop within a day. Very clean wiring, zero mess. Mobile app works perfectly. Highly recommend.",
      rating: 5,
    },
    {
      name: "Neha Shah",
      location: "Homeowner, Gandhinagar",
      text: "WiFi was dead in half the house. He set up a mesh network and now every room has full signal. Quick and professional.",
      rating: 5,
    },
    {
      name: "Irfan Mansuri",
      location: "Office, Kalol",
      text: "NVR setup with remote access was done neatly. AMC contract is very affordable too. Will call again for expansion.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Which areas are covered under your standard visits?",
      answer: "We primarily cover Ahmedabad, Gandhinagar, and Kalol, including all their surrounding local areas (like Gota, Chandkheda, Motera, Bopal, etc.). For custom projects, please get in touch on WhatsApp to discuss.",
    },
    {
      question: "What brands do you install?",
      answer: "Hikvision, Dahua, CP Plus, TVT, and other branded IP / HD cameras and NVRs. We recommend based on your budget and site.",
    },
    {
      question: "Do you offer AMC (Annual Maintenance)?",
      answer: "Yes. AMC covers periodic health checks, cleaning, firmware updates, and priority support visits at a flat annual rate.",
    },
    {
      question: "How long does a typical installation take?",
      answer: "A 4-camera home setup usually takes 3–5 hours. Larger office or shop projects are completed in 1–2 days depending on scope.",
    },
    {
      question: "Can I view cameras on my phone?",
      answer: "Absolutely. We configure remote mobile access (iOS and Android) as part of every installation at no extra cost.",
    },
  ];

  const brands = ["Hikvision", "Dahua", "CP Plus", "TVT", "TP-Link", "Ubiquiti"];

  return (
    <div className="min-h-screen text-white">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 -top-24 size-[440px] rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute -right-24 top-10 size-[440px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-[999px] bg-white/5 blur-3xl" />
        <div className="absolute top-[60%] -left-20 size-[360px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* ── HEADER ── */}
      <header className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <svg viewBox="0 0 24 24" className="size-7 text-sky-200" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 8h14v8H5z" />
                <path d="M8 16v3h8v-3" />
                <path d="M10 12h4" />
                <path d="M8 8l-2-2" />
                <path d="M16 8l2-2" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/60">CCTV & IT SOLUTIONS</p>
              <p className="text-lg font-semibold leading-tight text-white">Riyansh SecureTech</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Chip>Part-Time</Chip>
            <Chip>On-Call Visits</Chip>
            <Chip>Home • Shop • Office</Chip>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 space-y-10">

        {/* ── HERO ── */}
        <section className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-400/20 mb-4">
              <span className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
              CCTV & IT Solutions Specialist
            </div>
            <h1 className="text-balance text-3xl font-bold leading-tight sm:text-5xl bg-gradient-to-r from-white via-white to-sky-300 bg-clip-text text-transparent">
              Secure Your Home, Shop & Office with Expert CCTV & IT Setup
            </h1>
            <p className="mt-4 text-pretty text-sm leading-6 text-white/70 sm:text-base">
              Hi, I am <strong>Sahir Solanki</strong> — a professional CCTV & IT Engineer handling large-scale enterprise projects. I am available for part-time local installations, smart setup, and troubleshooting in Ahmedabad, Gandhinagar, and Kalol at local budget-friendly prices.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={`tel:+91${phoneNumber}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/60">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.58-1.12a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
                </svg>
                Call
                <span className="text-xs font-semibold opacity-80">+91 {phoneNumber}</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-200/30">
                <svg viewBox="0 0 24 24" className="size-5 text-sky-200" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.43.01.05 5.39.04 12c0 2.12.56 4.19 1.62 6.01L0 24l6.19-1.62A11.97 11.97 0 0 0 12 24h.01c6.62 0 12-5.38 12-12a11.9 11.9 0 0 0-3.49-8.52ZM12 22a9.96 9.96 0 0 1-5.09-1.4l-.36-.21-3.68.96.98-3.59-.24-.37A9.93 9.93 0 0 1 2.04 12C2.05 6.49 6.52 2.02 12.04 2.02A9.93 9.93 0 0 1 22 12c0 5.51-4.49 10-10 10Zm5.8-7.52c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.22-.32.32-.54.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.01-2.43-.27-.64-.54-.56-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.12-1.14 2.73 0 1.61 1.17 3.16 1.33 3.38.16.22 2.3 3.52 5.57 4.93.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.63-.38Z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon>
                  <path d="M12 21s-7-4.35-7-11a7 7 0 0 1 14 0c0 6.65-7 11-7 11Z" />
                  <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </Icon>
                <div>
                  <p className="text-xs font-semibold text-white/85">On‑Site</p>
                  <p className="text-xs text-white/60">Visit</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon className="text-indigo-200">
                  <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" />
                  <path d="M9 12l2 2 4-4" />
                </Icon>
                <div>
                  <p className="text-xs font-semibold text-white/85">Secure</p>
                  <p className="text-xs text-white/60">Setup</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <Icon>
                  <path d="M8 7h8" />
                  <path d="M7 11h10" />
                  <path d="M9 15h6" />
                  <path d="M6 5h12v14H6z" />
                </Icon>
                <div>
                  <p className="text-xs font-semibold text-white/85">Support</p>
                  <p className="text-xs text-white/60">AMC</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="absolute -right-10 -top-10 size-52 rounded-full bg-sky-400/14 blur-2xl" />
              <div className="absolute -bottom-16 -left-14 size-60 rounded-full bg-indigo-400/12 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60">SERVICES</p>
                <h2 className="mt-2 text-xl font-semibold">Quick Icons</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <Service key={s.title} title={s.title} icon={s.icon} />
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">Book Visit</p>
                      <p className="mt-1 text-xs text-white/65">Call / WhatsApp</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={`tel:+91${phoneNumber}`} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/15 transition hover:bg-white/15">
                        <span className="inline-flex size-7 items-center justify-center rounded-lg bg-sky-400/20 ring-1 ring-sky-300/20">
                          <svg viewBox="0 0 24 24" className="size-4 text-sky-200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.58-1.12a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        Call
                      </a>
                      <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-white/8 to-white/3 p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-white/60">VISUAL</p>
                      <p className="mt-1 text-sm font-semibold text-white/90">CCTV • Network • Server Rack</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/7 px-3 py-1 text-xs text-white/70 ring-1 ring-white/12">
                      <span className="size-1.5 rounded-full bg-sky-300" />
                      Live‑Ready Setup
                    </span>
                  </div>
                  <svg className="mt-4 h-36 w-full" viewBox="0 0 520 160" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="wire" x1="0" y1="0" x2="520" y2="0">
                        <stop offset="0" stopColor="rgba(56,189,248,0.0)" />
                        <stop offset="0.25" stopColor="rgba(56,189,248,0.55)" />
                        <stop offset="0.5" stopColor="rgba(99,102,241,0.55)" />
                        <stop offset="0.75" stopColor="rgba(34,211,238,0.55)" />
                        <stop offset="1" stopColor="rgba(34,211,238,0.0)" />
                      </linearGradient>
                    </defs>
                    <rect x="18" y="20" width="150" height="120" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                    <rect x="46" y="42" width="94" height="38" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
                    <path d="M70 62c10-12 36-12 46 0" stroke="rgba(56,189,248,0.9)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="93" cy="64" r="10" stroke="rgba(255,255,255,0.25)" />
                    <circle cx="93" cy="64" r="4" fill="rgba(56,189,248,0.9)" />
                    <rect x="46" y="90" width="94" height="34" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
                    <path d="M58 107h70" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M58 114h52" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinecap="round" />
                    <rect x="196" y="18" width="150" height="124" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                    <path d="M222 48c22-18 76-18 98 0" stroke="rgba(99,102,241,0.9)" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M242 68c18-14 56-14 74 0" stroke="rgba(34,211,238,0.9)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="271" cy="96" r="8" fill="rgba(56,189,248,0.85)" />
                    <circle cx="294" cy="96" r="8" fill="rgba(99,102,241,0.75)" />
                    <circle cx="317" cy="96" r="8" fill="rgba(34,211,238,0.75)" />
                    <rect x="226" y="112" width="90" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
                    <rect x="374" y="10" width="128" height="140" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                    <rect x="392" y="28" width="92" height="16" rx="8" fill="rgba(255,255,255,0.07)" />
                    <rect x="392" y="52" width="92" height="16" rx="8" fill="rgba(255,255,255,0.07)" />
                    <rect x="392" y="76" width="92" height="16" rx="8" fill="rgba(255,255,255,0.07)" />
                    <rect x="392" y="100" width="92" height="16" rx="8" fill="rgba(255,255,255,0.07)" />
                    <rect x="392" y="124" width="92" height="16" rx="8" fill="rgba(255,255,255,0.07)" />
                    <circle cx="404" cy="36" r="3" fill="rgba(56,189,248,0.9)" />
                    <circle cx="404" cy="60" r="3" fill="rgba(99,102,241,0.85)" />
                    <circle cx="404" cy="84" r="3" fill="rgba(34,211,238,0.85)" />
                    <circle cx="404" cy="108" r="3" fill="rgba(56,189,248,0.8)" />
                    <circle cx="404" cy="132" r="3" fill="rgba(99,102,241,0.75)" />
                    <path d="M168 84c20 0 36 0 56 0" stroke="url(#wire)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M346 84c12 0 16 0 28 0" stroke="url(#wire)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">BY THE NUMBERS</p>
          <h2 className="mt-2 text-xl font-semibold">Track Record</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} icon={s.icon} />
            ))}
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">PRICING</p>
          <h2 className="mt-2 text-xl font-semibold">Packages</h2>
          <p className="mt-1 text-sm text-white/55">Call or WhatsApp for exact pricing — customised per site.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col gap-4 rounded-3xl p-6 ring-1 transition ${
                  pkg.badge
                    ? "bg-gradient-to-b from-sky-400/12 to-white/4 ring-sky-300/30"
                    : "bg-white/5 ring-white/10"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-sky-400 px-3 py-0.5 text-xs font-bold text-slate-950">
                    {pkg.badge}
                  </span>
                )}
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/50">{pkg.name.toUpperCase()}</p>
                  <p className="mt-1 text-2xl font-bold text-white">{pkg.price}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/65">
                      <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-sky-300" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Sahir, I'm interested in the ${pkg.name} package.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-2 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    pkg.badge
                      ? "bg-sky-400 text-slate-950 hover:bg-sky-300"
                      : "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60">PROCESS</p>
            <h2 className="mt-2 text-xl font-semibold">How It Works</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              From first call to final handover — a simple, transparent 4-step process.
            </p>
            <div className="mt-8">
              {process.map((step) => (
                <ProcessStep key={step.step} {...step} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 h-full">
              <div className="absolute -right-10 -bottom-10 size-52 rounded-full bg-indigo-400/14 blur-2xl" />
              <div className="absolute -left-10 -top-10 size-40 rounded-full bg-sky-400/10 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60">SERVICE AREAS</p>
                <h3 className="mt-2 text-lg font-semibold">Local Coverage</h3>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Ahmedabad",
                    "Gandhinagar",
                    "Kalol",
                    "Chandkheda",
                    "Motera",
                    "Gota",
                    "Bopal",
                    "Thaltej",
                    "Adalaj",
                    "Sargasan",
                    "Kudasan",
                    "Chhatral",
                  ].map((city) => (
                    <div key={city} className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-3 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/15">
                      <span className={`size-1.5 rounded-full shrink-0 ${
                        ["Ahmedabad", "Gandhinagar", "Kalol"].includes(city) ? "bg-sky-400 size-2" : "bg-sky-300/60"
                      }`} />
                      <span className={`text-xs font-medium ${
                        ["Ahmedabad", "Gandhinagar", "Kalol"].includes(city) ? "text-white font-semibold" : "text-white/75"
                      }`}>{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 p-4 ring-1 ring-white/10">
                  <div className="flex items-start gap-3">
                    <Icon>
                      <path d="M12 21s-7-4.35-7-11a7 7 0 0 1 14 0c0 6.65-7 11-7 11Z" />
                      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </Icon>
                    <div>
                      <p className="text-sm font-semibold text-white/90">Need service in nearby areas?</p>
                      <p className="mt-1 text-xs text-white/55 leading-5">If your shop, office, or home is located in a nearby society or village, we can visit. WhatsApp or call to confirm availability.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">TRUSTED BRANDS</p>
          <h2 className="mt-2 text-xl font-semibold">We Work With</h2>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {brands.map((b) => (
              <BrandLogo key={b} name={b} />
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">REVIEWS</p>
          <h2 className="mt-2 text-xl font-semibold">What Clients Say</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60">FAQ</p>
            <h2 className="mt-2 text-xl font-semibold">Common Questions</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Still have questions? Drop a WhatsApp message and get a reply fast.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Ask on WhatsApp
            </a>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-3">
            {faqs.map((f) => (
              <FAQItem key={f.question} {...f} />
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">On‑site visit • quick support</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <Icon>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.58-1.12a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
                  </Icon>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/60">MOBILE</p>
                    <a className="text-sm font-semibold text-white hover:text-sky-200" href={`tel:+91${phoneNumber}`}>
                      +91 {phoneNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <Icon>
                    <path d="M12 21s-7-4.35-7-11a7 7 0 0 1 14 0c0 6.65-7 11-7 11Z" />
                    <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </Icon>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/60">VISITS</p>
                    <p className="text-sm font-semibold text-white/90">On-Site • Consultation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 transition hover:bg-sky-300">
                WhatsApp to Book Visit
              </a>
              <a href={`tel:+91${phoneNumber}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15">
                Call for Pricing
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-8 pb-8 text-center text-xs text-white/50 space-y-2">
          <p>© {new Date().getFullYear()} Sahir Solanki • CCTV & IT Solutions</p>
          <p className="opacity-75">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <a 
              href="https://www.ayushsolanki.site/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sky-300 hover:text-sky-200 transition underline decoration-sky-300/30 underline-offset-4 font-medium"
            >
              Ayush Solanki
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
