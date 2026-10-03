import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from 'lucide-react';

const navigation = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

export function Header({ menuOpen, onToggleMenu, onNavigate }) {
  return (
    <header className="site-header" id="top">
      <div className="page-wrap header-inner">
        <a className="wordmark" href="#main" onClick={onNavigate} aria-label="Talha Akhtar, home">
          <span className="wordmark-mark">TA</span>
          <span>Talha Akhtar<span className="wordmark-dot">.</span></span>
        </a>
        <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={onNavigate}>{label}</a>
          ))}
          <a className="nav-resume" href="/assets/talha-akhtar-resume.pdf" target="_blank" rel="noreferrer" onClick={onNavigate}>
            Résumé <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
        <button className="menu-toggle" type="button" onClick={onToggleMenu} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export function SectionHeading({ number, eyebrow, title, id, compact = false }) {
  return (
    <div className={`section-heading${compact ? ' is-compact' : ''}`}>
      <p className="section-kicker"><span>{number}</span><span>{eyebrow}</span></p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero page-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability"><span className="availability-dot" /> Available for UI/UX roles <span className="availability-divider">·</span> Berlin, Germany</p>
        <h1 id="hero-title">Complex products.<br /><span>Clear by design.</span></h1>
        <p className="hero-intro">I’m Talha, a product and UI/UX designer shaping data-heavy digital experiences across healthcare, education, and SaaS.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="text-link" href="mailto:akhtartalha13@gmail.com">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="hero-meta">
          <div><span className="micro-label">Experience</span><strong>2+ years</strong></div>
          <div><span className="micro-label">Currently</span><strong>MSc Data Science</strong></div>
          <div><span className="micro-label">Working from</span><strong>Berlin, DE</strong></div>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-frame">
          <img src="/assets/talha-akhtar.jpg" alt="Talha Akhtar, product and UI/UX designer" width="1772" height="2362" fetchPriority="high" />
        </div>
        <div className="portrait-note"><span className="note-spark">✳</span><span>People first.<br />Structure always.</span></div>
        <div className="portrait-index"><span>52°31′12″N</span><span>13°24′18″E</span></div>
      </div>
      <a className="hero-scroll" href="#work"><span>Scroll to explore</span><ArrowDown size={14} aria-hidden="true" /></a>
    </section>
  );
}

function ProductPreview({ image, name }) {
  return (
    <div className="product-preview">
      <img className="project-overview-image" src={image} alt={`${name} project overview`} loading="lazy" decoding="async" />
    </div>
  );
}

export function ProjectGrid({ projects, onOpenProject }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className={`project-card project-${project.accent}`} key={project.id}>
          <button className="project-visual-button" type="button" onClick={() => onOpenProject(project)} aria-label={`Open ${project.name} case study`}>
            <ProductPreview image={project.image} name={project.name} />
            <span className="visual-open"><ArrowUpRight size={19} aria-hidden="true" /></span>
          </button>
          <div className="project-copy">
            <div className="project-meta"><span>{project.number} / {project.label}</span><span>{project.year}</span></div>
            <div className="project-title-row"><h3>{project.name}</h3><button className="icon-link" type="button" onClick={() => onOpenProject(project)} aria-label={`Read the ${project.name} case study`}><ArrowUpRight size={20} /></button></div>
            <p>{project.description}</p>
            <button className="case-link" type="button" onClick={() => onOpenProject(project)}>Read case study <ArrowRight size={15} aria-hidden="true" /></button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="about-section page-wrap" id="about" aria-labelledby="about-title">
      <SectionHeading number="02" eyebrow="A little about me" title="I like getting involved before the screens." id="about-title" />
      <div className="about-layout">
        <div className="about-lead"><p>Most of my work starts before any interface exists. I break down complex requirements, learn how people actually use a product, and map how every part connects.</p><p>Then I turn that structure into something clear, considered, and genuinely useful.</p></div>
        <div className="about-details"><p>I’ve designed web apps, dashboards, and mobile products across healthcare, education, SaaS, and fintech. My Computer Science background and MSc in Data Science help me design with a practical understanding of how products are built.</p><p>I work closely with developers through handoff, and use AI tools thoughtfully to move from product architecture to screen production with more focus.</p>
          <div className="about-facts"><div><span className="micro-label">Industries</span><p>Healthcare · Education · SaaS · FinTech · Marketplaces</p></div><div><span className="micro-label">Languages</span><p>English · Urdu · Punjabi · German (beginner)</p></div></div>
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection({ items, tools }) {
  return (
    <section className="expertise-section" aria-labelledby="expertise-title">
      <div className="page-wrap section-inner">
        <SectionHeading number="03" eyebrow="Expertise" title="What I bring to a team." id="expertise-title" />
        <div className="expertise-grid">{items.map((item, index) => <article className="expertise-item" key={item.title}><span className="expertise-number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
        <div className="tool-row"><span className="micro-label">Tools I work with</span><div className="tool-list">{tools.map((tool) => <span className="tool-tag" key={tool}>{tool}</span>)}</div></div>
      </div>
    </section>
  );
}

export function ProcessSection({ steps }) {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="page-wrap section-inner">
        <SectionHeading number="04" eyebrow="How I work" title="Structure first. Pixels second." id="process-title" />
        <p className="process-intro">Every screen has a purpose. I map the roles, rules, and connections before moving into visual design.</p>
        <ol className="process-list">{steps.map(([title, detail], index) => <li key={title}><span className="process-index">0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol>
      </div>
    </section>
  );
}

export function ExperienceSection({ items }) {
  return (
    <section className="experience-section page-wrap" id="experience" aria-labelledby="experience-title">
      <SectionHeading number="05" eyebrow="Experience" title="Where I’ve been putting it to work." id="experience-title" />
      <div className="experience-list">{items.map((item) => <article className="experience-row" key={item.company}><div className="experience-date"><span>{item.dates}</span><span>{item.place}</span></div><div className="experience-content"><div className="experience-heading"><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.detail}</p></div><span className="experience-marker" aria-hidden="true" /></article>)}</div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-wrap contact-inner">
        <div className="contact-copy"><p className="section-kicker"><span>06</span><span>Contact</span></p><h2 id="contact-title">Have a complex product to make clearer?</h2><p>I’m open to full-time product and UI/UX roles, along with select freelance collaborations.</p><a className="button button-light" href="mailto:akhtartalha13@gmail.com">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        <div className="contact-links"><a href="mailto:akhtartalha13@gmail.com"><span>Email</span><strong>akhtartalha13@gmail.com</strong><ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/talhaakhtar4/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>in/talhaakhtar4</strong><ArrowUpRight size={16} /></a><a href="https://www.behance.net/talhaakhtar5" target="_blank" rel="noreferrer"><span>Behance</span><strong>talhaakhtar5</strong><ArrowUpRight size={16} /></a><a href="tel:+4915733371599"><span>Phone</span><strong>+49 157 33371599</strong><ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer className="site-footer"><div className="page-wrap footer-inner"><a className="footer-mark" href="#main">TA<span>.</span></a><p>Talha Akhtar · Product & UI/UX Designer · Berlin, Germany</p><div><a href="https://www.linkedin.com/in/talhaakhtar4/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.behance.net/talhaakhtar5" target="_blank" rel="noreferrer">Behance</a><a href="mailto:akhtartalha13@gmail.com">Email</a></div><small>© {new Date().getFullYear()} Talha Akhtar</small></div></footer>;
}

export function CaseStudyDialog({ project, onClose, onNext }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog className="case-dialog" ref={dialogRef} onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="case-title">
      {project && <>
        <div className="dialog-toolbar"><span className="micro-label">Case study · {project.number}</span><button className="dialog-close" type="button" onClick={onClose} aria-label="Close case study"><X size={20} /></button></div>
        <div className="dialog-content">
          <p className="case-eyebrow">{project.label} <span>·</span> {project.year}</p>
          <h2 id="case-title">{project.name}</h2>
          <p className="case-overview">{project.overview}</p>
          <div className="case-facts"><div><span className="micro-label">My role</span><p>{project.role}</p></div><div><span className="micro-label">Tools</span><p>{project.tools.join(' · ')}</p></div></div>
          <div className="case-block"><span className="micro-label">The challenge</span><p>{project.challenge}</p></div>
          <div className="case-block"><span className="micro-label">What I worked on</span><ul>{project.contributions.map((item) => <li key={item}><span className="list-check"><Check size={13} /></span>{item}</li>)}</ul></div>
          <div className="case-outcome"><span className="micro-label">Outcome</span><p>{project.outcome}</p></div>
          <button className="case-next" type="button" onClick={onNext}><span>Next project</span><ArrowRight size={17} aria-hidden="true" /></button>
        </div>
      </>}
    </dialog>
  );
}
