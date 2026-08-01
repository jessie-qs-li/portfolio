import Image from "next/image"
import ClientScripts from "@/components/ClientScripts"
import LetterboxdRecent from "@/components/LetterboxdRecent"

const EXPERIENCE = [
  { role: "Product & Growth", org: "BoldVoice (YC S21)", url: "https://www.boldvoice.com/", logo: "/logos/boldvoice-tile.png", date: "2026 – Present" },
  { role: "AI/ML Fellow", org: "Break Through Tech", url: "https://www.breakthroughtech.org/", logo: "/logos/break-through-tech.png", date: "Mar 2026 – Present" },
  { role: "Undergraduate Researcher", org: "Columbia Digital Storytelling Lab", url: "https://www.digitalstorytellinglab.com/", logo: "/logos/columbia-dsl.png", date: "Jan 2026 – May 2026" },
  { role: "Product Manager", org: "The Columbia Spectator", url: "https://www.columbiaspectator.com/", logo: "/logos/columbia-spectator.png", date: "Sep 2025 – Present" },
  { role: "Founder & Head Tutor", org: "Li Tutors", url: "https://li-tutors.figma.site/", logo: "/logos/li-tutors.png", date: "Apr 2024 – Present" },
  { role: "Product Manager Intern", org: "Apply7.ai", url: "http://apply7.ai/", logo: "/logos/apply7.png", date: "Jul – Aug 2025" },
  { role: "Events & Liaison Intern", org: "Shanghai International Film Festival", url: "https://www.siff.com/english/", logo: "/logos/shanghai-international-film-festival.png", date: "May – Jun 2025" },
  { role: "Research Assistant", org: "Emory Dept. of Film and Media", url: "https://filmandmedia.emory.edu/", logo: "/logos/emory-film-media.png", date: "Jan – Apr 2025" },
]

const PROJECTS = [
  { name: "TheShaft", desc: "3D dorm room reconstruction and ideation with WorldLabs.", award: "1st Place @ NYC Intern Hackathon 2026", url: "https://www.linkedin.com/feed/update/urn:li:activity:7476655026405412864/", link: "View more" },
  { name: "SuperStore", desc: "AI agents to simulate shopper behavior.", award: "1st Place @ NYU EEG x Vercel Hackathon 2026", url: "https://www.linkedin.com/feed/update/urn:li:activity:7457816648155099136/", link: "View more" },
  { name: "Grey Matter", desc: "TRIBE V2 brain data rendered as ad insights.", award: "2nd Place @ Columbia x NYU Claude Hackathon 2026", url: "https://devpost.com/software/grey-matter-l3e4ap", link: "View more" },
  { name: "Wonder", desc: "Interactive map where kids voice-chat with AI historical figures at 50 global landmarks.", award: "2nd Place Social Impact @ Yale Hackathon (YHack) 2026", url: "https://www.yourwonder.us/", link: "View more" },
  { name: "Noodle", desc: "AI drawing companion that watches kids' canvases and asks questions that spark visual creativity.", award: "Best Use of ElevenLabs @ Columbia Hackathon (DevFest) 2026", url: "https://devpost.com/software/noodle-2aotw6", link: "View more" },
]

export default function Home() {
  return (
    <>
      <button className="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        <span id="theme-icon"></span>
      </button>

      <div className="cv-shell">
        {/* SIDEBAR */}
        <aside className="cv-side">
          <div className="side-card fade-in">
            <Image className="profile-photo" src="/hero-portrait.jpg" alt="Jessie Li on the Brooklyn Bridge at dusk" width={1200} height={1200} priority />
            <h1 className="profile-name">Hello, I&apos;m<br /><span>Jessie Li</span></h1>
            <p className="profile-role">Product manager &amp; design engineer. CS &amp; Film @ <a href="https://www.columbia.edu" target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>Columbia</a>.</p>
            <div className="avail-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              5x hackathon winner
            </div>
            <div className="profile-loc">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              New York, NY
            </div>
          </div>

          <div className="side-card fade-in">
            <div className="contact-list">
              <a className="contact-row" href="mailto:jql2104@columbia.edu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                jql2104@columbia.edu
              </a>
              <a className="contact-row" href="https://www.linkedin.com/in/jessie-qi-shan-li/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                linkedin.com/in/jessie-qi-shan-li
              </a>
              <a className="contact-row" href="https://github.com/jessie-qs-li" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.2.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                github.com/jessie-qs-li
              </a>
            </div>
            <a href="mailto:jql2104@columbia.edu" className="btn btn-dark">Contact me</a>
            <a href="https://www.linkedin.com/in/jessie-qi-shan-li/" target="_blank" rel="noopener" className="btn btn-light">LinkedIn</a>
          </div>
        </aside>

        {/* MAIN */}
        <main className="cv-main">
          <section className="cv-section fade-in" id="about">
            <span className="section-chip">About</span>
            <div className="about-text">
              <p>
                I think the most interesting design problems right now are about human experience in a
                world increasingly shaped by AI: how we discover, learn, create, connect, and find meaning.
              </p>
              <p>
                That belief drives most of what I build. I currently work on product and growth
                at <a href="https://www.boldvoice.com/" target="_blank" rel="noopener">BoldVoice</a>, an
                AI-powered accent coaching app. At Columbia, I conduct HCI research on AI perception,
                design human-centered products for early-stage startups, and compete in hackathons where
                my teams have built tools for AI-powered video analysis, children&apos;s visual creativity,
                and location-based historical storytelling. I also run <a href="https://li-tutors.figma.site/" target="_blank" rel="noopener">Li Tutors</a>,
                a tutoring company I founded with my twin brother.
              </p>
              <p>
                Outside of building, I&apos;m a cinephile! I love visiting NYC&apos;s indie cinemas and think
                a lot about how stories move people. I&apos;m hoping to extend that curiosity into spatial
                and multimodal experiences, especially in XR.
              </p>
            </div>
          </section>

          <section className="cv-section fade-in" id="experience">
            <span className="section-chip">Experience</span>
            <div className="row-list">
              {EXPERIENCE.map(e => (
                <div className="cv-row" key={e.role + e.org}>
                  <Image className="row-logo" src={e.logo} alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body">
                    <div className="row-title"><a href={e.url} target="_blank" rel="noopener">{e.org}</a></div>
                    <div className="row-sub">{e.role}</div>
                  </div>
                  <div className="row-right">{e.date}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section fade-in" id="projects">
            <span className="section-chip">Projects</span>
            <div className="row-list">
              {PROJECTS.map(p => (
                <div className="cv-row" key={p.name}>
                  <div className="row-body">
                    <div className="row-title"><a href={p.url} target="_blank" rel="noopener">{p.name}</a></div>
                    {p.award && (
                      <div className="row-award">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                        {p.award}
                      </div>
                    )}
                    <div className="row-sub">{p.desc}</div>
                  </div>
                  <a className="row-right" href={p.url} target="_blank" rel="noopener">{p.link} ↗</a>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section fade-in" id="education">
            <span className="section-chip">Education</span>
            <div className="row-list">
              <div className="cv-row">
                <Image className="row-logo" src="/logos/columbia-crown.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                <div className="row-body">
                  <div className="row-title">Columbia University</div>
                  <div className="row-sub">Computer Science &amp; Film</div>
                </div>
                <div className="row-right">Expected 2028</div>
              </div>
            </div>
          </section>

          <section className="cv-section fade-in" id="beyond">
            <span className="section-chip">Beyond work</span>
            <div className="row-list">
              <div className="cv-row">
                <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
                <div className="row-body">
                  <div className="row-title">Film</div>
                  <div className="row-sub">Huge cinephile — I watch and review ~120 films per year</div>
                </div>
                <a className="row-right" href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener">Letterboxd ↗</a>
              </div>
              <div className="cv-row">
                <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <div className="row-body">
                  <div className="row-title">Writing</div>
                  <div className="row-sub">
                    <a href="https://www.doubleexposurecu.com/post/panoptic-patriarchy-in-raise-the-red-lantern" target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>Panoptic Patriarchy in Raise the Red Lantern</a>
                    {" · "}
                    <a href="https://www.doubleexposurecu.com/post/the-birth-of-a-noir-consciousness-in-the-night-of-the-hunter" target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>A Noir Consciousness in The Night of the Hunter</a>
                  </div>
                </div>
              </div>
              <div className="cv-row">
                <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                <div className="row-body">
                  <div className="row-title">Videography</div>
                  <div className="row-sub">I shoot and cut in Final Cut Pro</div>
                </div>
                <a className="row-right" href="https://www.youtube.com/watch?v=u2D_fjru0j0" target="_blank" rel="noopener">Sample ↗</a>
              </div>
              <div className="cv-row">
                <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <div className="row-body">
                  <div className="row-title">Travel</div>
                  <div className="row-sub">5 continents and counting</div>
                </div>
                <a className="row-right" href="/travel">Gallery ↗</a>
              </div>
              <div className="cv-row">
                <svg className="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
                <div className="row-body">
                  <div className="row-title">Mock trial</div>
                  <div className="row-sub">Competed with the #4 ranked team in the country</div>
                </div>
              </div>
            </div>
            <div className="letterboxd-block">
              <div className="letterboxd-recent-label">Recent watches</div>
              <LetterboxdRecent />
            </div>
          </section>

          <section className="cv-section fade-in" id="contact">
            <span className="section-chip">Contact</span>
            <p className="contact-blurb">
              I&apos;m always happy to chat about design, film, AI, education, or whatever else is on your
              mind. If you&apos;re working on something interesting or want to build something together,
              reach out.
            </p>
            <div className="contact-actions">
              <a href="mailto:jql2104@columbia.edu" className="btn btn-dark">Get in touch →</a>
            </div>
          </section>
        </main>
      </div>

      <footer className="cv-footer">
        <span>© Jessie Li {new Date().getFullYear()}</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jessie-qi-shan-li/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener" className="social-link" aria-label="Letterboxd">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/><ellipse cx="12" cy="12" rx="2.5" ry="4"/></svg>
          </a>
          <a href="mailto:jql2104@columbia.edu" className="social-link" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </footer>

      <ClientScripts />
    </>
  )
}
