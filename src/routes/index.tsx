import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import controlRoom from "@/assets/control-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evognix A.I. Pvt Ltd — Precision AI for Institutions" },
      {
        name: "description",
        content:
          "Domain AI applications for law, medical and education; AI-powered hardware integration and import/export; multi-vendor interdomain collaboration. Contact: contact@evoginx.com",
      },
      {
        property: "og:title",
        content: "Evognix A.I. Pvt Ltd — Precision AI for Institutions",
      },
      {
        property: "og:description",
        content:
          "Domain AI applications, AI hardware integration, and multi-vendor interdomain collaboration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Hardware", href: "#hardware" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const DOMAIN_TILES = [
  { label: "Law", detail: "Case & contract intelligence" },
  { label: "Medical", detail: "Clinical decision support" },
  { label: "Education", detail: "Adaptive learning systems" },
  { label: "Industry", detail: "Manufacturing & trade" },
];

const SOLUTIONS = [
  {
    tag: "Law",
    title: "Contract & case intelligence",
    body: "Automated review, precedent retrieval, and risk flagging for legal teams operating at scale.",
  },
  {
    tag: "Medical",
    title: "Clinical decision support",
    body: "Diagnostic assistance and documentation workflows built for hospital-grade reliability.",
  },
  {
    tag: "Education",
    title: "Adaptive learning systems",
    body: "Personalised curricula and assessment engines for universities and training bodies.",
  },
];

const HARDWARE_POINTS = [
  "Medtech device integration & certification",
  "Manufacturing line automation",
  "Import / export of AI hardware",
];

const COLLABORATION = [
  {
    tag: "Inter-domain",
    body: "AI dependencies mapped across sectors so models, data, and hardware stay interoperable.",
  },
  {
    tag: "Multi-vendor",
    body: "Open integrations across vendors and parties — no single-point lock-in, ever.",
  },
  {
    tag: "Governance",
    body: "Clear ownership, audit trails, and compliance for every shared system.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-[3px] bg-ink font-mono text-xs font-medium text-ink-foreground">
            E
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight">
              EVOGNIX A.I.
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Pvt Ltd · Engineering
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-[3px] bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-foreground transition-colors hover:bg-primary"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="rise-in font-mono text-[11px] uppercase tracking-[0.25em] text-ink-foreground/50">
          Cross-domain AI · Engineering · Nepal
        </div>
        <h1
          className="rise-in mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight [animation-delay:80ms]"
          style={{ animationDelay: "80ms" }}
        >
          <span className="grad-text">Precision AI</span>
          <br />
          for institutions.
        </h1>
        <p
          className="rise-in mt-8 max-w-[52ch] text-lg text-pretty text-ink-foreground/70"
          style={{ animationDelay: "160ms" }}
        >
          Evognix A.I. builds and deploys AI systems across law, medicine, education, and
          industry — software, hardware, and the partnerships that bind them.
        </p>
        <div
          className="rise-in mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#solutions"
            className="rounded-[3px] bg-accent px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-accent-foreground transition hover:brightness-110"
          >
            Explore solutions
          </a>
          <a
            href="#contact"
            className="rounded-[3px] border border-ink-foreground/25 px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-foreground transition hover:bg-ink-foreground/10"
          >
            contact@evoginx.com
          </a>
        </div>
        <div
          className="rise-in mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-ink-foreground/15 bg-ink-foreground/15 md:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {DOMAIN_TILES.map((tile) => (
            <div key={tile.label} className="bg-ink p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-foreground/40">
                {tile.label}
              </div>
              <div className="mt-2 font-display text-lg font-semibold leading-snug">
                {tile.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between border-b border-border pb-4">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            (a) Solutions
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance">
            Domain AI applications
          </h2>
        </div>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:block">
          Software · On-prem &amp; cloud
        </div>
      </div>
      <div className="mt-8 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border md:grid-cols-3">
        {SOLUTIONS.map((item) => (
          <div key={item.tag} className="bg-panel p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {item.tag}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Hardware() {
  return (
    <section id="hardware" className="border-y border-border bg-panel">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            (b) Hardware
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance">
            AI hardware integration
          </h2>
          <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground text-pretty">
            We embed AI into medtech devices, manufacturing lines, and trade infrastructure —
            and manage the import and export of AI-powered hardware across borders.
          </p>
          <ul className="mt-6 space-y-3">
            {HARDWARE_POINTS.map((point, i) => (
              <li key={point} className="flex gap-3 text-sm">
                <span className="pt-0.5 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={controlRoom}
          alt="Industrial control room with machined metal panels and labelled dials"
          width={1024}
          height={768}
          loading="lazy"
          className="w-full rounded-[4px] object-cover outline-1 -outline-offset-1 outline-black/5 aspect-[4/3]"
        />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-b border-border pb-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          (c) Collaboration
        </div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance">
          Multi-vendor, multi-party by design
        </h2>
      </div>
      <div className="mt-8 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border md:grid-cols-3">
        {COLLABORATION.map((item) => (
          <div key={item.tag} className="bg-panel p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {item.tag}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const INTEREST_OPTIONS = [
  "AI software (law / medical / education / industry)",
  "AI hardware integration",
  "Import / export of AI hardware",
  "Partnership or multi-vendor collaboration",
  "Other",
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: INTEREST_OPTIONS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();
    if (!name || !email) {
      setError("Please fill in your name and email so we can reply.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = `Enquiry — ${name}${form.organization.trim() ? ` (${form.organization.trim()})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
      form.organization.trim() ? `Organization: ${form.organization.trim()}` : null,
      `Interest: ${form.interest}`,
      "",
      "Message:",
      form.message.trim() || "(no message)",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:contact@evoginx.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const fieldClass =
    "w-full rounded-[3px] border border-ink-foreground/20 bg-ink-foreground/[0.04] px-3 py-2.5 text-sm text-ink-foreground placeholder:text-ink-foreground/35 outline-none transition focus:border-accent focus:bg-ink-foreground/[0.07]";

  return (
    <section id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            (d) Contact
          </div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-balance">
            Start a conversation.
          </h2>
          <p className="mt-4 max-w-[42ch] leading-relaxed text-pretty text-ink-foreground/70">
            Tell us a little about your project and the engineering team will get back to you
            directly.
          </p>
          <a
            href="mailto:contact@evoginx.com"
            className="mt-8 inline-block font-display text-xl font-bold tracking-tight text-balance transition-colors hover:text-accent md:text-2xl"
          >
            contact@evoginx.com
          </a>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-foreground/40">
            Evognix A.I. Pvt Ltd · Registered in Nepal
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[4px] border border-ink-foreground/15 bg-ink-foreground/[0.03] p-6 md:p-8"
          noValidate
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/50">
            Enquiry form
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/50">
                Name *
              </span>
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                maxLength={100}
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/50">
                Email *
              </span>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                maxLength={255}
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/50">
                Phone
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="Optional"
                maxLength={30}
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/50">
                Organization
              </span>
              <input
                type="text"
                value={form.organization}
                onChange={update("organization")}
                placeholder="Company or institution"
                maxLength={120}
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/50">
                I'm interested in
              </span>
              <select value={form.interest} onChange={update("interest")} className={fieldClass}>
                {INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-foreground">
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/50">
                Message
              </span>
              <textarea
                value={form.message}
                onChange={update("message")}
                placeholder="A short note about your project, timeline, or requirements"
                rows={4}
                maxLength={1000}
                className={`${fieldClass} resize-y`}
              />
            </label>
          </div>

          {error ? (
            <p className="mt-4 rounded-[3px] border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive-foreground">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-6 w-full rounded-[3px] bg-accent px-6 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-accent-foreground transition hover:brightness-110"
          >
            Send enquiry
          </button>
          {sent ? (
            <p className="mt-3 text-center text-xs text-ink-foreground/50">
              Your email client should open with the enquiry ready to send to contact@evoginx.com.
            </p>
          ) : (
            <p className="mt-3 text-center text-xs text-ink-foreground/35">
              Details go straight to contact@evoginx.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-foreground/15 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-[3px] bg-ink-foreground/10 font-mono text-sm font-medium text-ink-foreground outline outline-1 outline-ink-foreground/20">
                E
              </div>
              <div className="leading-tight">
                <div className="font-display text-[15px] font-bold tracking-tight">
                  EVOGNIX A.I.
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-foreground/40">
                  Pvt Ltd · Engineering
                </div>
              </div>
            </a>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-ink-foreground/55">
              Cross-domain AI systems — software, hardware, and the multi-vendor partnerships
              that bind them. Built to be reliable and scalable.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/40">
              Company
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-ink-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/40">
              Capabilities
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              <li>Domain AI software</li>
              <li>AI hardware integration</li>
              <li>Import &amp; export of AI hardware</li>
              <li>Multi-vendor collaboration</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/40">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-foreground/70">
              <li>
                <a
                  href="mailto:contact@evoginx.com"
                  className="transition-colors hover:text-ink-foreground"
                >
                  contact@evoginx.com
                </a>
              </li>
              <li className="text-ink-foreground/55">Registered in Nepal</li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-block rounded-[3px] border border-ink-foreground/25 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground transition hover:border-accent hover:text-accent"
            >
              Send an enquiry
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-ink-foreground/10 py-6 sm:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-foreground/40">
            © {year} Evognix A.I. Pvt Ltd. All rights reserved.
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-foreground/40">
            Reliable · Scalable · Cross-domain
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-display text-foreground">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Hardware />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
