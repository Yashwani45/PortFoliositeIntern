import { useEffect, useRef, useState } from "react";
import {
  //Github,
  //Linkedin,
  Mail,
  //Twitter,
  Download,
  ArrowRight,
  Code2,
  Database,
  Palette,
  Cloud,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-reveal]");
    targets.forEach((t) => t.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("reveal-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = links.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass card-shadow" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold">
          <span className="text-gradient">Yashwani</span>Kushwaha
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                active === l.href.slice(1) ? "text-primary" : "text-muted"
              }`}>
              {l.label}
              {active === l.href.slice(1) && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-primary rounded-full" />
              )}
            </a>
          ))}
        </nav>
        <button aria-label="Toggle menu" className="lg:hidden rounded-md border border-border p-2" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden glass border-t border-border">
          <div className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-reveal>
          {eyebrow && <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>}
          <h2 className="text-4xl md:text-5xl font-bold"><span className="text-gradient">{title}</span></h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-primary" />
        </div>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-20 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted">Available for new projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="text-gradient">Yashwani Kushwaha</span>
          </h1>
          <p className="text-lg text-muted max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Full-stack developer & designer focused on crafting fast, accessible, and thoughtful web products with React, TypeScript, and a sharp eye for detail.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="inline-flex items-center rounded-lg bg-gradient-primary text-background font-semibold px-6 py-3 hover:opacity-90 glow-shadow">
              View Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-border px-6 py-3 font-semibold hover:bg-surface">
              <Download className="mr-2 h-4 w-4" /> Get in Touch
            </a>
          </div>
          {/* <div className="flex gap-4 pt-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-border p-2.5 text-muted transition-all hover:text-primary hover:border-primary hover:scale-110">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>
        <div className="relative mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative h-72 w-72 md:h-96 md:w-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-40" />
            <div className="relative h-full w-full rounded-full bg-gradient-primary p-1.5 glow-shadow">
              {/* <div className="h-full w-full rounded-full bg-surface flex items-center justify-center">
                <div className="text-9xl font-display font-bold text-gradient">A</div>
              </div> */}
              <div className="h-full w-full rounded-full overflow-hidden flex items-center justify-center">
  <img
    src="./src/assets/profile.jpeg"
    alt="Profile"
    className="h-full w-full object-cover"
  />
</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-sm font-medium animate-float" style={{ animationDelay: "1s" }}>⚛️ React</div>
            <div className="absolute top-1/3 -left-8 glass rounded-2xl px-4 py-2 text-sm font-medium animate-float" style={{ animationDelay: "2s" }}>🚀 TypeScript</div>
            <div className="absolute -bottom-4 right-8 glass rounded-2xl px-4 py-2 text-sm font-medium animate-float" style={{ animationDelay: "3s" }}>🎨 Design</div>
          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2" data-reveal>
          <div className="relative aspect-square rounded-3xl bg-gradient-primary p-1 card-shadow">
            <div className="h-full w-full rounded-3xl bg-surface flex items-center justify-center">
              <div className="text-center p-8">
                
                {/* UPDATED BLOCK */}
                <div className="text-5xl font-display font-bold text-gradient mb-2">
                  2+
                </div>
                <p className="text-muted">
                  Years of Learning<br />
                  & Building Projects
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-5" data-reveal>
          <h3 className="text-2xl font-semibold">
            Crafting <span className="text-gradient">meaningful</span> Web Applications.
          </h3>

          <p className="text-muted leading-relaxed">
            I'm a Computer Science student passionate about full-stack development.
            I enjoy building clean, responsive, and user-friendly web applications using React, Java, and modern web tools.
          </p>

          <p className="text-muted leading-relaxed">
            I focus on improving my problem-solving skills (DSA) and building real-world projects that solve practical problems.
            Currently exploring backend development and scalable system design.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { k: "Name", v: "Yashwani Kushwaha" },
              { k: "Email", v: "yashwanikushwaha1@gmail.com" },
              { k: "Location", v: "Bhopal, India" },
              { k: "Status", v: "Student Developer" },
            ].map((i) => (
              <div key={i.k}>
                <p className="text-xs uppercase tracking-wider text-muted">{i.k}</p>
                <p className="font-medium">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { year: "2021", title: "10th from MP Board",  desc: "Completed Secondary School Education (Class 10) with strong academic performance in core subjects." },
    { year: "2023", title: "12th from MP Board",  desc: "Completed Higher Secondary Education (Class 12) with Physics, Chemistry, and Mathematics (PCM)." },
    { year: "2023", title: "Bansal College of engineering ", desc: "Pursuing B.Tech in Computer Science and Engineering (CSE), building skills in programming, DSA, and full-stack development."},
  ];
  return (
    <Section id="education" eyebrow="My Journey" title="Education">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
        {items.map((it, i) => (
          <div key={i} data-reveal className={`relative mb-10 flex flex-col md:flex-row md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary glow-shadow ring-4 ring-background" />
            <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div className="glass rounded-2xl p-6 card-shadow hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                  <GraduationCap className="h-4 w-4" />{it.year}
                </div>
                <h3 className="text-xl font-semibold mb-1">{it.title}</h3>
                <p className="text-accent text-sm mb-3">{it.org}</p>
                <p className="text-sm text-muted">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    { icon: Code2, title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"] },
    { icon: Database, title: "Backend", skills: ["Node.js", "PostgreSQL", "GraphQL", "Prisma", "tRPC"] },
    { icon: Cloud, title: "DevOps", skills: ["AWS", "Docker", "Vercel", "GitHub Actions"] },
    { icon: Palette, title: "Design", skills: ["Figma", "Design Systems", "UI/UX", "Accessibility"] },
  ];
  return (
    <Section id="skills" eyebrow="What I do" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.title} data-reveal className="group glass rounded-2xl p-6 card-shadow transition-all hover:-translate-y-2">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-background group-hover:scale-110 transition-transform">
              <g.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="rounded-full bg-surface px-3 py-1 text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    { role: "MERN Stack developer", company: "Codsoft", period: "2025 ", desc: "Leading frontend architecture and real-time Web application development.", tags: ["React", "Node.js", "MongoDB","Express"] },
    
  ];
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <div className="space-y-6 max-w-4xl mx-auto">
        {items.map((it, i) => (
          <div key={i} data-reveal className="glass rounded-2xl p-6 md:p-8 card-shadow transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Briefcase className="h-4 w-4" /><span className="text-sm font-medium">{it.company}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{it.role}</h3>
              </div>
              <span className="text-sm text-muted rounded-full bg-surface px-3 py-1 self-start">{it.period}</span>
            </div>
            <p className="text-muted mb-4">{it.desc}</p>
            <div className="flex flex-wrap gap-2">
              {it.tags.map((t) => <span key={t} className="text-xs rounded-md bg-primary/10 text-primary px-2 py-1">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


function Projects() {
  const items = [
    {
      title: "PathPilot AI",
      desc: "AI Powered Career Guidance & Job Recommendation Platform.",
      tags: ["React.js", "TypeScript", "Node.js", "MongoDB"],
      gradient: "from-cyan-400 to-blue-500",
      image: "/pathpilot.png",
    },
    {
      title: "AI InterviewHub",
      desc: "Real-time Interview Preparation Platform.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
      gradient: "from-fuchsia-400 to-purple-500",
      image: "/interviewhub.png",
    },
    {
      title: "Lexora",
      desc: "Personalized Legal Assistant for Bharat.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI"],
      gradient: "from-amber-400 to-rose-500",
      image: "/lexora.png",
    },
    {
      title: "PayNova",
      desc: "Digital Payment Solutions for Modern Business",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI", "CRDT", "WebRTC"],
      gradient: "from-emerald-400 to-teal-500",
      image: "/paynova.png",
    },
  ];

  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p) => (
          <article
            key={p.title}
            data-reveal
            className="group glass rounded-3xl overflow-hidden card-shadow transition-all hover:-translate-y-2"
          >
            {/* IMAGE SECTION */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30" />

              {/* TITLE INITIAL */}
              <div className="absolute bottom-4 left-6 text-5xl font-display font-bold text-white/90">
                {p.title.charAt(0)}
              </div>

              {/* ICON */}
              <div className="absolute top-4 right-4 rounded-full bg-black/30 backdrop-blur p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-muted mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-md bg-surface px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const items = [
    { title: "GeeksForGeeks 160 Days DSA ", org: "GeeksForGeeks", year: "2025" },
    { title: "Generative AI ", org: "Oracle", year: "2025" },
    { title: "Codictive 3.0 State Level Hackathon", org: "Sheriyans Coding School", year: "2024" },
    { title: "Certified Frontend Developer", org: "Codsoft", year: "2024" },
    
  ];
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((c) => (
          <div key={c.title} data-reveal className="glass rounded-2xl p-6 card-shadow flex items-start gap-4 transition-all hover:-translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-background">
              <Award className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <div className="flex justify-between text-sm">
                <span className="text-accent">{c.org}</span>
                <span className="text-muted">{c.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Work Together">
      <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <p className="text-muted">
            Available for freelance and Internships. I respond within 24 hours.
          </p>

          <div className="space-y-4">
            <p>📧 yourmail@gmail.com</p>
            <p>📞 9009xxxxxx</p>
            <p>📍 Bhopal, Madhya Pradesh</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
  action="https://formspree.io/f/xpqedllk"
  method="POST"
  className="glass rounded-3xl p-6 md:p-8 card-shadow space-y-4"
>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-surface border"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-surface border"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-surface border"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-surface border h-32"
          />

          <button
            type="submit"
            className="w-full bg-gradient-primary text-white py-3 rounded-lg hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Yashwani Kushwaha. All rights Reserved.</p>
        <div className="flex gap-3">
          {/* {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <a key={i} href="#" className="rounded-full border border-border p-2 text-muted hover:text-primary hover:border-primary transition-all">
              <Icon className="h-4 w-4" />
            </a> */}
          {/* ))} */}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const ref = useReveal();
  return (
    <div ref={ref} className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
