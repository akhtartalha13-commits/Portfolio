import React, { useEffect, useState } from 'react';
import { expertise, experience, otherWork, process, projects, tools } from './data.js';
import {
  AboutSection,
  CaseStudyDialog,
  ContactSection,
  ExperienceSection,
  ExpertiseSection,
  Footer,
  Header,
  Hero,
  ProcessSection,
  ProjectGrid,
  SectionHeading,
} from './components.jsx';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dialog-open', Boolean(activeProject));
    return () => document.body.classList.remove('dialog-open');
  }, [activeProject]);

  function openNextProject() {
    const currentIndex = projects.findIndex((project) => project.id === activeProject?.id);
    setActiveProject(projects[(currentIndex + 1) % projects.length]);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} />
      <main id="main">
        <Hero />
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="page-wrap section-inner">
            <SectionHeading number="01" eyebrow="Selected work" title="A few problems, made clearer." id="work-title" />
            <ProjectGrid projects={projects} onOpenProject={setActiveProject} />
            <div className="other-work">
              <p className="micro-label">Also in the mix</p>
              {otherWork.map((item) => (
                <p className="other-work-item" key={item.name}>
                  <span>{item.name}</span><span>{item.detail}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
        <AboutSection />
        <ExpertiseSection items={expertise} tools={tools} />
        <ProcessSection steps={process} />
        <ExperienceSection items={experience} />
        <section className="education-section page-wrap" aria-labelledby="education-title">
          <SectionHeading number="05b" eyebrow="Education & recognition" title="Learning stays in the work." id="education-title" compact />
          <div className="education-grid">
            <article className="education-item">
              <p className="micro-label">2026 — Present</p>
              <h3>MSc Data Science</h3>
              <p>Arden University · Berlin, Germany</p>
            </article>
            <article className="education-item">
              <p className="micro-label">2021 — 2025</p>
              <h3>BSc Computer Science</h3>
              <p>University of Central Punjab · Lahore, Pakistan</p>
              <p className="education-note">Human-Computer Interaction, web technologies, and databases</p>
            </article>
            <article className="education-item recognition-item">
              <p className="micro-label">Recognition</p>
              <h3>Performer of the Month</h3>
              <p>Multiple performance bonuses</p>
            </article>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <CaseStudyDialog project={activeProject} onClose={() => setActiveProject(null)} onNext={openNextProject} />
    </>
  );
}
