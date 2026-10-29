import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Database,
  Download, GraduationCap, Mail, MapPin, Menu,
  Phone, Server, Terminal, X
} from 'lucide-react'
import './index.css'

const navItems = [
  ['About', 'about'], ['Experience', 'experience'], ['Education', 'education'],
  ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact'],
]

function InitialsAvatar({ size = 'medium' }) {
  return (
    <div
      className={`initials-avatar initials-avatar--${size}`}
      role="img"
      aria-label="Nilesh Pawar initials avatar"
    >
      <span>NP</span>
    </div>
  )
}

const skillGroups = [
  { icon: Code2, title: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'PHP', 'JavaScript'] },
  { icon: Terminal, title: 'Web', items: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'] },
  { icon: Database, title: 'Databases', items: ['MySQL', 'MongoDB (Basic)'] },
  { icon: Server, title: 'Tools & OS', items: ['VS Code', 'GitHub', 'Canva', 'Figma', 'Windows', 'Linux (Basic)'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const resumeAvailable = true

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span>NP</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid container">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> Available for opportunities</p>
              <h1>Hi, I'm <strong>Nilesh Pawar</strong><br />React Developer</h1>
              <p className="hero-lede">
                I build responsive, user-focused web experiences with clean code and thoughtful interfaces.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">View my work <ArrowDown size={17} /></a>
                <a className="button secondary" href="#contact">Let's connect <ArrowUpRight size={17} /></a>
              </div>
              <div className="social-row" aria-label="Social profiles">
                <a href="https://github.com/nileshpawar28" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19} /></a>
                <a href="https://www.linkedin.com/in/nilesh-pawar-3122582a9/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a>
                <a href="mailto:nileshpawar28king@gmail.com" aria-label="Email"><Mail size={19} /></a>
              </div>
            </div>

            <div className="portrait-wrap reveal">
              <div className="portrait-ring">
                <InitialsAvatar size="large" />
              </div>
              <div className="orbit-chip chip-one"><Code2 size={16} /> React</div>
              <div className="orbit-chip chip-two"><Database size={16} /> Database</div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="kicker">01 / About</p>
              <h2>Building practical solutions,<br />one <em>line</em> at a time.</h2>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-avatar-row">
                  <InitialsAvatar size="small" />
                  <div><strong>Nilesh Pawar</strong><span>React Developer</span></div>
                </div>
                <p className="about-lede">
                  I'm a motivated computer applications student focused on programming, web development,
                  and database concepts.
                </p>
                <p>
                  I enjoy turning ideas into practical software solutions and am especially interested in
                  modern frontend technologies, responsive design, and collaborative development.
                </p>
              </div>
              <div className="facts-card">
                <div><MapPin size={20} /><span><small>Based in</small>Surat, Gujarat</span></div>
                <div><Mail size={20} /><span><small>Email</small><a href="mailto:nileshpawar28king@gmail.com">nileshpawar28king@gmail.com</a></span></div>
                <div><Phone size={20} /><span><small>Phone</small><a href="tel:+916353797932">+91 6353797932</a></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section tinted" id="experience">
          <div className="container">
            <div className="section-heading split">
              <div><p className="kicker">02 / Experience</p><h2>My journey so far</h2></div>
              <BriefcaseBusiness className="heading-icon" size={38} />
            </div>
            <div className="timeline">
              <article className="timeline-card">
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-meta"><p>November 2025 — December 2025</p><span>Internship</span></div>
                  <h3>React Developer Intern</h3>
                  <h4>Ciphernutz IT Services</h4>
                  <ul>
                    <li>Developed responsive and interactive interfaces using React.js, HTML5, and CSS3.</li>
                    <li>Implemented application functionality using JavaScript ES6+.</li>
                    <li>Integrated REST APIs to fetch and display dynamic data.</li>
                    <li>Used React Hooks, including useState and useEffect.</li>
                    <li>Assisted with debugging, testing, and improving application usability.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <div className="section-heading split">
              <div><p className="kicker">03 / Education</p><h2>Academic background</h2></div>
              <GraduationCap className="heading-icon" size={38} />
            </div>
            <div className="education-grid">
              <article className="education-card featured">
                <div className="degree-badge">MCA</div>
                <div><p>Currently Pursuing</p><h3>Master of Computer Applications</h3><span>Shrimad Rajchandra Institute of Management and Computer Application (SRIMCA), Uka Tarsadia University</span></div>
              </article>
              <article className="education-card">
                <div className="degree-badge">BCA</div>
                <div><p>Bachelor's Degree</p><h3>Bachelor of Computer Applications</h3><span>V. T. Poddar College, Veer Narmad South Gujarat University</span></div>
              </article>
              <article className="education-card">
                <div className="degree-badge small">HSC</div>
                <div><p>Higher Secondary</p><h3>Commerce</h3><span>Suman High School No. 11, Surat</span></div>
              </article>
              <article className="education-card">
                <div className="degree-badge small">SSC</div>
                <div><p>Secondary Education</p><h3>Secondary School</h3><span>Suman High School No. 11, Surat</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section tinted" id="skills">
          <div className="container">
            <div className="section-heading"><p className="kicker">04 / Skills</p><h2>Tools I work with</h2></div>
            <div className="skills-grid">
              {skillGroups.map(({ icon: Icon, title, items }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading"><p className="kicker">05 / Projects</p><h2>Selected work</h2></div>
            <article className="project-card">
              <div className="project-preview">
                <div className="window-bar"><span /><span /><span /></div>
                <div className="preview-content"><div className="food-visual"><span>🍔</span></div><div className="preview-lines"><b /><b /><b /></div></div>
              </div>
              <div className="project-info">
                <p className="project-label">Full-stack project</p>
                <h3>Food Delivery Website</h3>
                <p>A responsive food-ordering interface with cart management, item quantity controls, and an order-tracking UI.</p>
                <ul className="feature-list"><li>Add and remove items</li><li>Update item quantities</li><li>Responsive ordering experience</li></ul>
                <div className="project-actions">
                  <a className="button secondary muted-link" href="https://github.com/nileshpawar28" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub profile</a>
                  <span className="button secondary muted-link disabled" aria-disabled="true">Live demo coming soon</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section resume-section">
          <div className="container resume-card">
            <div><p className="kicker">Resume</p><h2>Want the full picture?</h2></div>
            {resumeAvailable ? (
              <a className="button light" href={`${import.meta.env.BASE_URL}assets/Nilesh_Pawar_Professional_Resume1.pdf`} download="Nilesh_Pawar_Resume.pdf"><Download size={18} /> Download resume</a>
            ) : (
              <button className="button light" type="button" disabled title="Resume PDF will be available after upload"><Download size={18} /> Resume coming soon</button>
            )}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div><p className="kicker">06 / Contact</p><h2>Let's build something<br />meaningful together.</h2></div>
            <div className="contact-links">
              <a href="mailto:nileshpawar28king@gmail.com"><span><Mail size={20} /></span><div><small>Email</small>nileshpawar28king@gmail.com</div><ArrowUpRight size={18} /></a>
              <a href="tel:+916353797932"><span><Phone size={20} /></span><div><small>Phone</small>+91 6353797932</div><ArrowUpRight size={18} /></a>
              <a href="https://github.com/nileshpawar28" target="_blank" rel="noreferrer"><span><Code2 size={20} /></span><div><small>GitHub</small>nileshpawar28</div><ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container"><p>© 2026 Nilesh Pawar</p><a href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a></div></footer>
    </>
  )
}

export default App

