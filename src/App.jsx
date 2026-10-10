import { useEffect, useState } from 'react';
import { androidApps, profile, projects } from './data';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'misc', label: 'Misc' },
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.dataset.theme = theme;
    else delete root.dataset.theme;
    try {
      if (theme) localStorage.setItem('theme', theme);
      else localStorage.removeItem('theme');
    } catch {
      // storage unavailable; theme still applies for this visit
    }
  }, [theme]);

  const toggle = () => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = theme ?? (systemDark ? 'dark' : 'light');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  return toggle;
}

function Header() {
  const toggleTheme = useTheme();
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">MP</a>
        <nav>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="hero">
      <p className="eyebrow">Hello, world</p>
      <h1>
        I’m {profile.name}, a <span className="accent">{profile.role.toLowerCase()}</span>.
      </h1>
      <p className="lede">
        I studied computer science at Thompson Rivers University. Below are some projects I’ve built along
        the way. For more, see my resume or send me an email.
      </p>
      <div className="actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const bodyId = `${project.id}-details`;

  return (
    <article className={`card${open ? ' is-open' : ''}`}>
      <div className="card-cover">
        <img src={project.cover} alt="" loading="lazy" />
      </div>
      <div className="card-main">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tags">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="card-actions">
          <button className="link-btn" aria-expanded={open} aria-controls={bodyId} onClick={() => setOpen(!open)}>
            {open ? 'Show less' : 'Read more'}
            <span className="chev" aria-hidden="true">›</span>
          </button>
          {project.link && (
            <a className="link-btn" href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} ↗
            </a>
          )}
        </div>
      </div>
      {open && (
        <div id={bodyId} className="card-body">
          {project.body.map((block, i) =>
            block.img ? (
              <figure key={i}>
                <img src={block.img} alt={block.alt} loading="lazy" />
              </figure>
            ) : (
              <p key={i}>{block.text}</p>
            ),
          )}
        </div>
      )}
    </article>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="cards">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}

function Misc() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="misc">
      <h2 className="section-title">Misc</h2>

      <div className="panel">
        <h3>Travelling salesman, solved with a genetic algorithm</h3>
        <p>
          An interactive JavaScript demo that evolves a route through random cities. New to the
          problem? <a href="https://simple.wikipedia.org/wiki/Travelling_salesman_problem" target="_blank" rel="noreferrer">Here’s a primer</a>.
        </p>
        {showDemo ? (
          <iframe className="demo-frame" src="/AI/ArtificialIntelligence.html" title="Travelling salesman genetic algorithm demo" />
        ) : (
          <button className="btn btn-primary" onClick={() => setShowDemo(true)}>Launch demo</button>
        )}
      </div>

      <div className="panel">
        <h3>Android apps <span className="muted">(retired)</span></h3>
        <ul className="app-list">
          {androidApps.map((a) => (
            <li key={a.name}>
              <a href={a.href} target="_blank" rel="noreferrer">{a.name} ↗</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top" className="wrap">
        <About />
        <Projects />
        <Misc />
      </main>
      <footer className="wrap site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </>
  );
}
