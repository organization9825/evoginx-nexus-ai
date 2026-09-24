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
          Cross-domain AI · Engineering · India
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

function Contact() {
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
            For partnerships, procurement, or a scoped engagement, reach the engineering team
            directly.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="mailto:contact@evoginx.com"
            className="font-display text-2xl font-bold tracking-tight text-balance transition-colors hover:text-accent md:text-3xl"
          >
            contact@evoginx.com
          </a>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-foreground/40">
            Evognix A.I. Pvt Ltd · India
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-foreground/15 bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-foreground/40">
          © 2026 Evognix A.I. Pvt Ltd
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-foreground/40">
          Reliable · Scalable · Cross-domain
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
