import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BellRing,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  FileText,
  HardHat,
  Menu,
  MessageSquareText,
  ShieldCheck,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/buildtrack-hero.jpg";
import teamImage from "@/assets/buildtrack-site-team.jpg";
import handoverImage from "@/assets/buildtrack-handover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildTrack | Construction Project Management" },
      { name: "description", content: "Track projects, site progress, buyer requests, documents, and possession in one construction management platform." },
      { property: "og:title", content: "BuildTrack | Every Project. One Clear View." },
      { property: "og:description", content: "Bring construction teams, company admins, and buyers together from foundation to possession." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BuildTrackLanding,
});

const navItems = [
  ["Product", "#product"], ["How It Works", "#how-it-works"], ["For Companies", "#companies"], ["For Buyers", "#buyers"], ["Pricing", "#pricing"],
];

const phases = [
  { name: "Foundation", value: 100 }, { name: "Structure", value: 100 }, { name: "Plastering", value: 84 }, { name: "Finishing", value: 42 }, { name: "Inspection", value: 0 }, { name: "Possession", value: 0 },
];

const previewTabs = ["Progress", "Buyer portal", "Requests", "Documents"] as const;
type PreviewTab = (typeof previewTabs)[number];

const revealDelays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4", "reveal-delay-5"];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`scroll-reveal ${revealDelays[Math.min(delay, 5)]} ${className}`}>{children}</div>;
}

function BrandMark() {
  return <span className="grid size-9 grid-cols-2 gap-0.5 border border-current p-1" aria-hidden="true"><span className="bg-primary"/><span className="bg-current"/><span className="bg-current"/><span className="border border-current"/></span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/15 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-foreground" aria-label="BuildTrack home"><BrandMark/><span className="font-display text-xl font-bold">BuildTrack</span></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost"><Link to="/login">Sign In</Link></Button>
          <Button asChild variant="construction"><Link to="/signup">Get Started <ArrowRight/></Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</Button>
      </div>
      <div className={`grid overflow-hidden bg-background transition-[grid-template-rows,opacity] duration-300 lg:hidden ${open ? "grid-rows-[1fr] border-t border-border opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`} aria-hidden={!open}><div className="min-h-0"><nav className="flex flex-col gap-1 px-5 py-5">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-border py-3 font-medium">{label}</a>)}<div className="mt-4 grid grid-cols-2 gap-3"><Button asChild variant="constructionOutline"><Link to="/login">Sign In</Link></Button><Button asChild variant="construction"><Link to="/signup">Get Started</Link></Button></div></nav></div></div>
    </header>
  );
}

function ProjectPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`border border-foreground/20 bg-card text-card-foreground shadow-2xl ${compact ? "p-4" : "p-5 md:p-6"}`}>
      <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
        <div><p className="text-xs font-semibold uppercase text-primary">Active project</p><h3 className="mt-1 text-lg font-semibold">Aster Heights · Tower B</h3><p className="mt-1 text-xs text-muted-foreground">Sector 76, Gurugram</p></div>
        <span className="border border-progress/30 bg-progress-soft px-2 py-1 text-xs font-semibold text-progress">On track</span>
      </div>
      <div className="mt-5 flex items-end justify-between"><div><p className="text-xs text-muted-foreground">Overall progress</p><p className="font-display text-4xl font-semibold">68%</p></div><p className="text-right text-xs text-muted-foreground">Updated today<br/>from site</p></div>
      <div className="mt-3 h-2 bg-muted"><div className="progress-fill h-full w-[68%] bg-progress"/></div>
      <div className="mt-5 space-y-3">
        {phases.slice(0, compact ? 4 : 6).map((phase, i) => <div key={phase.name} className="grid grid-cols-[90px_1fr_34px] items-center gap-3 text-xs"><span className="font-medium">{phase.name}</span><div className="h-1.5 bg-muted"><div className={`${i < 2 ? "bg-progress" : i < 4 ? "bg-primary" : "bg-border"} progress-fill h-full`} style={{ width: `${phase.value}%`, transitionDelay: `${240 + i * 90}ms` }}/></div><span className="text-right text-muted-foreground">{phase.value}%</span></div>)}
      </div>
      <div className="mt-5 grid grid-cols-3 border-t border-border pt-4 text-xs"><div><b className="block text-base">12</b><span className="text-muted-foreground">Site updates</span></div><div><b className="block text-base">4</b><span className="text-muted-foreground">Open requests</span></div><div><b className="block text-base">28</b><span className="text-muted-foreground">Documents</span></div></div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[720px] overflow-hidden bg-surface-dark text-primary-foreground md:min-h-[760px]">
      <img src={heroImage} alt="Site engineer reviewing a residential tower under construction" width={1920} height={1280} className="hero-image-drift absolute inset-0 h-full w-full object-cover object-[62%_center]" fetchPriority="high"/>
      <div className="hero-shade absolute inset-0"/><div className="blueprint-grid absolute inset-0 opacity-25"/>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-20 md:pt-28 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="hero-reveal hero-delay-1 mb-6 flex items-center gap-3 text-xs font-semibold uppercase"><span className="h-px w-10 bg-primary"/>Construction, clearly connected</div>
          <h1 className="hero-reveal hero-delay-2 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">Every project.<br/>Every update.<br/><span className="text-primary">One clear view.</span></h1>
          <p className="hero-reveal hero-delay-3 mt-7 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">BuildTrack brings construction teams, company admins, and buyers together from foundation to possession.</p>
          <div className="hero-reveal hero-delay-4 mt-9 flex flex-wrap gap-3"><Button asChild variant="construction" size="lg"><Link to="/signup">Get Started <ArrowRight/></Link></Button><Button asChild variant="constructionLight" size="lg"><a href="#how-it-works">See How It Works</a></Button></div>
          <div className="hero-reveal hero-delay-5 mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/20 pt-5 text-xs text-primary-foreground/70"><span className="flex items-center gap-2"><Check className="text-primary"/> No fragmented updates</span><span className="flex items-center gap-2"><Check className="text-primary"/> Role-based access</span><span className="flex items-center gap-2"><Check className="text-primary"/> From plan to handover</span></div>
        </div>
        <div className="hero-panel-enter self-end lg:translate-y-20"><ProjectPanel compact/></div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const trustItems: Array<[LucideIcon, string]> = [[ShieldCheck,"Controlled access"],[ClipboardCheck,"Verified updates"],[FileText,"Organised records"]];
  return <section className="border-b border-border bg-card"><div className="mx-auto grid max-w-7xl md:grid-cols-[1.2fr_1fr_1fr_1fr]"><p className="flex items-center px-5 py-6 text-sm font-semibold lg:px-8">A reliable record for every project stage</p>{trustItems.map(([Icon,label], i) => <div key={label} className={`trust-item flex items-center gap-3 border-t border-border px-5 py-5 md:border-l md:border-t-0 ${revealDelays[i]}`}><Icon className="text-primary"/><span className="text-sm text-muted-foreground">{label}</span></div>)}</div></section>;
}

const stakeholders: Array<{ n: string; icon: LucideIcon; title: string; copy: string }> = [
  { n: "01", icon: Building2, title: "Company admins", copy: "Control projects, clients, teams, subscriptions, and portfolio progress from one operational view." },
  { n: "02", icon: HardHat, title: "Site teams", copy: "See assigned work, record field updates, add photo evidence, and keep milestones moving." },
  { n: "03", icon: Users, title: "Property buyers", copy: "Follow timelines, access documents, raise requests, and stay informed through possession." },
];

function Stakeholders() {
  return <section id="companies" className="bg-background py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal className="grid gap-8 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase text-primary">One shared source of truth</p><h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Every stakeholder sees what matters to them.</h2></div><p className="max-w-lg self-end text-lg leading-8 text-muted-foreground">Replace disconnected chats, spreadsheets, and file folders with a structured record everyone can trust.</p></Reveal><div className="mt-14 grid border-y border-border md:grid-cols-3">{stakeholders.map(({n,icon:Icon,title,copy},i)=><Reveal key={title} delay={i} className={i>0?"border-t border-border md:border-l md:border-t-0":""}><article className="motion-panel group h-full py-8 md:px-7"><div className="flex items-center justify-between"><span className="text-xs text-muted-foreground">{n} / 03</span><Icon className="text-primary transition-transform duration-300 group-hover:-translate-y-1"/></div><h3 className="mt-12 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p></article></Reveal>)}</div></div></section>;
}

function Workflow() {
  const steps = ["Plan","Build","Update","Communicate","Handover"];
  return <section id="how-it-works" className="overflow-hidden bg-surface-dark py-24 text-primary-foreground md:py-32"><div className="blueprint-grid mx-auto max-w-7xl px-5 lg:px-8"><Reveal><p className="text-xs font-bold uppercase text-primary">The complete project journey</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">One continuous record, from first plan to final key.</h2></Reveal><div className="mt-16 grid gap-0 md:grid-cols-5">{steps.map((step,i)=><Reveal key={step} delay={i}><div className="motion-panel relative h-full border-l border-primary-foreground/20 px-5 py-5"><span className={`mb-8 flex size-9 items-center justify-center border ${i<3?"border-primary bg-primary text-primary-foreground":"border-primary-foreground/30"}`}>{i<3?<Check/>:i+1}</span><p className="font-display text-xl font-semibold">{step}</p><p className="mt-2 text-sm leading-6 text-primary-foreground/55">{["Set milestones and teams","Track every work phase","Capture proof from site","Keep buyers informed","Manage possession records"][i]}</p>{i<4&&<ArrowRight className="workflow-arrow absolute -right-3 top-8 hidden text-primary md:block"/>}</div></Reveal>)}</div></div></section>;
}

function ProductPreview() {
  const [tab,setTab]=useState<PreviewTab>("Progress");
  return <section id="product" className="bg-background py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><Reveal><div><p className="text-xs font-bold uppercase text-primary">Project control room</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Know exactly where work stands.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Monitor construction by project, tower, floor, and phase—then share the right detail with each stakeholder.</p><div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Product views">{previewTabs.map(item=><Button key={item} variant={tab===item?"construction":"constructionOutline"} onClick={()=>setTab(item)} role="tab" aria-selected={tab===item}>{item}</Button>)}</div></div></Reveal><Reveal delay={1}><div className="border border-border bg-secondary p-3 md:p-8"><div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]"><ProjectPanel/><aside key={tab} className="tab-enter min-h-[310px] border border-border bg-card p-5"><p className="text-xs font-bold uppercase text-muted-foreground">{tab}</p>{tab==="Progress"&&<><h3 className="mt-3 text-xl">Recent site activity</h3>{["Floor 18 slab completed","Tower B plastering update","Safety inspection logged"].map((x,i)=><div key={x} className="flex gap-3 border-b border-border py-4"><CircleCheck className={i===0?"text-progress":"text-primary"}/><div><p className="text-sm font-medium">{x}</p><p className="mt-1 text-xs text-muted-foreground">{i+1} day{i?"s":""} ago</p></div></div>)}</>}{tab==="Buyer portal"&&<><h3 className="mt-3 text-xl">Your home journey</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Apartment B-1804 · Next milestone: Finishing review</p><div className="mt-5 border-l-2 border-progress pl-4"><p className="text-sm font-medium">Latest update</p><p className="mt-1 text-xs text-muted-foreground">Interior flooring underway</p></div></>}{tab==="Requests"&&<><h3 className="mt-3 text-xl">Open requests</h3>{["Kitchen finish query","Parking allocation","Site visit booking"].map((x,i)=><div key={x} className="border-b border-border py-4"><div className="flex justify-between gap-3 text-sm font-medium"><span>{x}</span><span className={i===0?"text-primary":"text-progress"}>{i===0?"New":"In review"}</span></div></div>)}</>}{tab==="Documents"&&<><h3 className="mt-3 text-xl">Project files</h3>{["Approved floor plan.pdf","Construction NOC.pdf","Payment schedule.pdf","Possession checklist.pdf"].map(x=><div key={x} className="flex items-center gap-3 border-b border-border py-4"><FileText className="text-primary"/><span className="text-sm">{x}</span></div>)}</>}</aside></div></div></Reveal></div></div></section>;
}

const features: Array<[LucideIcon, string, string]> = [
  [ClipboardCheck,"Live progress","Track work by tower, floor, phase, and milestone."], [Users,"Team coordination","Assign teams and turn field activity into a clear record."], [FileText,"Secure documents","Keep plans, NOCs, letters, and project files organised."], [BellRing,"Timely alerts","Notify the right people when milestones or requests change."], [MessageSquareText,"Buyer requests","Manage questions and issues with status and accountability."], [ShieldCheck,"Possession tracking","Coordinate inspections, documents, and final handover."],
];

function Features() { return <section className="border-y border-border bg-card py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-xs font-bold uppercase text-primary">Built for daily operations</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Clarity at every construction phase.</h2></div><div className="mt-14 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">{features.map(([Icon,title,copy])=><article key={String(title)} className="border-b border-border p-7 sm:border-r"><Icon className="text-primary"/><h3 className="mt-10 text-xl font-semibold">{String(title)}</h3><p className="mt-3 leading-7 text-muted-foreground">{String(copy)}</p></article>)}</div></div></section> }

function UseCases() { return <><section className="grid lg:grid-cols-2"><div className="relative min-h-[480px]"><img src={teamImage} alt="Construction team reviewing building plans on site" loading="lazy" width={1408} height={1056} className="absolute inset-0 h-full w-full object-cover"/></div><div className="blueprint-grid flex items-center bg-background px-6 py-20 lg:px-16" id="companies-detail"><div className="max-w-xl"><p className="text-xs font-bold uppercase text-primary">For construction companies</p><h2 className="mt-4 text-4xl font-semibold">Run every project with one operating picture.</h2><p className="mt-5 leading-7 text-muted-foreground">Give leadership portfolio-level oversight while site teams get focused tools for the work in front of them.</p><ul className="mt-8 space-y-4">{["Multi-project and client management","Team roles and work assignments","Photo-backed progress reports","Milestone and request oversight"].map(x=><li key={x} className="flex gap-3"><Check className="text-progress"/><span>{x}</span></li>)}</ul></div></div></section><section id="buyers" className="grid lg:grid-cols-2"><div className="order-2 flex items-center bg-surface-dark px-6 py-20 text-primary-foreground lg:order-1 lg:px-16"><div className="max-w-xl"><p className="text-xs font-bold uppercase text-primary">For property buyers</p><h2 className="mt-4 text-4xl font-semibold">Confidence, from booking to possession.</h2><p className="mt-5 leading-7 text-primary-foreground/65">Make progress visible, important documents easy to find, and every request traceable—without chasing updates.</p><Button asChild variant="constructionLight" size="lg" className="mt-8"><Link to="/signup">Open your workspace <ArrowRight/></Link></Button></div></div><div className="relative order-1 min-h-[480px] lg:order-2"><img src={handoverImage} alt="Property buyers visiting a completed residential development" loading="lazy" width={1408} height={1056} className="absolute inset-0 h-full w-full object-cover"/></div></section></> }

const faqs = [
  ["Who is BuildTrack designed for?","BuildTrack connects developer and construction company administrators, site teams, property buyers, and platform operators in one structured workspace."],
  ["Can buyers see internal construction information?","No. Role-based access lets companies decide exactly which updates, timelines, documents, and requests are visible to each buyer."],
  ["What project documents can be managed?","Teams can organise floor plans, NOCs, possession letters, inspection records, progress photos, and other project files."],
  ["Can BuildTrack manage more than one project?","Yes. Company teams can manage multiple projects, towers, clients, internal teams, and buyers from a consolidated view."],
];

function FAQ() { return <section className="bg-background py-24 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><div><p className="text-xs font-bold uppercase text-primary">FAQ</p><h2 className="mt-4 text-4xl font-semibold">Questions, answered clearly.</h2></div><div>{faqs.map(([q,a])=><details key={q} className="group border-t border-border py-6 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold focus-visible:outline-2 focus-visible:outline-primary">{q}<ChevronDown className="shrink-0 transition-transform group-open:rotate-180"/></summary><p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section> }

function FinalCTA() { return <section id="pricing" className="bg-primary py-20 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 lg:flex-row lg:items-end lg:px-8"><div><p className="text-xs font-bold uppercase">Built around your portfolio</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">Start with one project. Build one source of truth.</h2><p className="mt-5 max-w-2xl leading-7 text-primary-foreground/80">Create your workspace and bring your projects, teams, buyers, and documents into focus.</p></div><Button asChild variant="constructionLight" size="lg" className="shrink-0"><Link to="/signup">Get Started <ArrowRight/></Link></Button></div></section> }

function Footer() { return <footer className="bg-surface-dark py-14 text-primary-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-10 border-b border-primary-foreground/20 pb-10 md:flex-row"><div><div className="flex items-center gap-3"><BrandMark/><span className="font-display text-xl font-bold">BuildTrack</span></div><p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/55">Construction progress, communication, and handover—connected.</p></div><nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm" aria-label="Footer navigation">{navItems.slice(0,4).map(([l,h])=><a key={h} href={h} className="text-primary-foreground/65 hover:text-primary-foreground">{l}</a>)}<Link to="/login" className="text-primary-foreground/65 hover:text-primary-foreground">Sign In</Link></nav></div><p className="pt-6 text-xs text-primary-foreground/45">© {new Date().getFullYear()} BuildTrack. All rights reserved.</p></div></footer> }

function BuildTrackLanding() {
  return <div className="min-h-screen overflow-x-hidden"><Header/><main><Hero/><TrustStrip/><Stakeholders/><Workflow/><ProductPreview/><Features/><UseCases/><FAQ/><FinalCTA/></main><Footer/></div>;
}