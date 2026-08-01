import Image from "next/image"
import ClientScripts from "@/components/ClientScripts"
import LetterboxdRecent from "@/components/LetterboxdRecent"

const EXPERIENCE = [
  { role: "AI/ML Fellow", org: "Break Through Tech", url: "https://www.breakthroughtech.org/", logo: "/logos/break-through-tech.png", date: "Mar 2026 – Present" },
  { role: "Undergraduate Researcher", org: "Columbia Digital Storytelling Lab", url: "https://www.digitalstorytellinglab.com/", logo: "/logos/columbia-dsl.png", date: "Jan 2026 – Present" },
  { role: "Product Designer", org: "The Columbia Spectator", url: "https://www.columbiaspectator.com/", logo: "/logos/columbia-spectator.png", date: "Sep 2025 – Present" },
  { role: "Founder & Head Tutor", org: "Li Tutors", url: "https://li-tutors.figma.site/", logo: "/logos/li-tutors.png", date: "Apr 2024 – Present" },
  { role: "Product Engineering Intern", org: "Flevy", url: "https://flevy.com/", logo: "/logos/flevy.png", date: "Nov – Dec 2025" },
  { role: "Product Research Intern", org: "Apply7.ai", url: "http://apply7.ai/", logo: "/logos/apply7.png", date: "Jul – Aug 2025" },
  { role: "Events & Liaison Intern", org: "Shanghai International Film Festival", url: "https://www.siff.com/english/", logo: "/logos/shanghai-international-film-festival.png", date: "May – Jun 2025" },
  { role: "Research Assistant", org: "Emory Dept. of Film and Media", url: "https://filmandmedia.emory.edu/", logo: "/logos/emory-film-media.png", date: "Jan – Apr 2025" },
]

const PROJECTS = [
  { name: "Wonder", desc: "Location-based AI voice chats that let kids talk to famous historical figures right where history happened.", award: "2nd Place Social Impact — YHack 2026", url: "https://www.yourwonder.us/", link: "yourwonder.us" },
  { name: "Noodle", desc: "An AI drawing buddy for kids ages 4–6 that listens, cheers them on, and asks questions that spark new ideas.", award: "Best Use of ElevenLabs — DevFest 2026", url: "https://devpost.com/software/noodle-2aotw6", link: "devpost" },
  { name: "The Turing Gallery", desc: "A mixed-methods study probing where human judgement slips between human and AI-made media.", award: "Columbia Digital Storytelling Lab", url: "https://turing-gallery.vercel.app/", link: "view study" },
  { name: "Imposter: A Party Game", desc: "A multiuser creative Turing test — everyone writes on a shared theme, one entry is AI. Find it.", award: "Columbia Digital Storytelling Lab", url: "https://partygame-ten.vercel.app/", link: "play" },
  { name: "VibeLens", desc: "A self-paced web app that teaches casual moviegoers to identify camera movements in film. Built with Laura Avila.", url: "https://github.com/jessie-qs-li/uidesign-filmmovements", link: "github" },
  { name: "Liondine", desc: "Dietary filters and UI improvements for Columbia's dining platform, with The Columbia Spectator.", url: "https://apps.apple.com/us/app/columbia-spectator/id6470171397", link: "App Store" },
  { name: "Pet Pomodoro", desc: "A focus timer with a cute avatar that turns sad whenever you break your flow.", url: "https://petpomodoro-draft.figma.site/", link: "try it" },
  { name: "Li Tutors", desc: "Brand and website for the tutoring company I founded with my twin brother.", url: "https://li-tutors.figma.site/", link: "site" },
  { name: "OptiBuy", desc: "A tool that tracks prices across e-commerce platforms so you can buy at the right time.", url: "https://www.optibuy.compare/", link: "optibuy.compare" },
]

const SKILLS = [
  "Product Design", "UX Research", "Design Engineering", "Prototyping",
  "React & Next.js", "Figma", "AI Products", "Final Cut Pro", "Film Writing",
]

const RECOGNITION = [
  { title: "2nd Place, Social Impact", org: "YHack — Yale Hackathon (Wonder)", year: "2026" },
  { title: "Best Use of ElevenLabs", org: "DevFest — Columbia Hackathon (Noodle)", year: "2026" },
  { title: "Annie Hall Award", org: "Double Exposure — film writing", year: "" },
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
            <p className="profile-role">Design engineer &amp; product manager. CS &amp; Film @ <a href="https://www.columbia.edu" target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>Columbia</a>.</p>
            <div className="avail-pill">Open to collaborations</div>
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
              <a className="contact-row" href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/><ellipse cx="12" cy="12" rx="2.5" ry="4"/></svg>
                letterboxd.com/qishan_li
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
                That belief drives most of what I build. I currently work on design and growth
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
              <p>
                I am always happy to connect and can be reached directly at jql2104 [at] columbia [dot] edu.
              </p>
            </div>
          </section>

          <section className="cv-section fade-in" id="skills">
            <span className="section-chip">Skills</span>
            <div className="skill-chips">
              {SKILLS.map(s => <span className="skill-chip" key={s}>{s}</span>)}
            </div>
          </section>

          <section className="cv-section fade-in" id="experience">
            <span className="section-chip">Experience</span>
            <div className="row-list">
              {EXPERIENCE.map(e => (
                <div className="cv-row" key={e.role + e.org}>
                  <Image className="row-logo" src={e.logo} alt="" width={34} height={34} aria-hidden />
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
                    {p.award && <div className="row-award">{p.award}</div>}
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
                <div className="row-body">
                  <div className="row-title">Columbia University</div>
                  <div className="row-sub">Computer Science &amp; Film</div>
                </div>
                <div className="row-right">Present</div>
              </div>
            </div>
          </section>

          <section className="cv-section fade-in" id="recognition">
            <span className="section-chip">Recognition</span>
            <div className="row-list">
              {RECOGNITION.map(r => (
                <div className="cv-row" key={r.title}>
                  <div className="row-body">
                    <div className="row-title">{r.title}</div>
                    <div className="row-sub">{r.org}</div>
                  </div>
                  {r.year && <div className="row-right">{r.year}</div>}
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section fade-in" id="beyond">
            <span className="section-chip">Beyond work</span>
            <div className="row-list">
              <div className="cv-row">
                <div className="row-body">
                  <div className="row-title">Film</div>
                  <div className="row-sub">huge cinephile — i watch and review ~120 films per year</div>
                </div>
                <a className="row-right" href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener">letterboxd ↗</a>
              </div>
              <div className="cv-row">
                <div className="row-body">
                  <div className="row-title">Writing</div>
                  <div className="row-sub">
                    <a href="https://www.doubleexposurecu.com/post/panoptic-patriarchy-in-raise-the-red-lantern" target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>panoptic patriarchy in raise the red lantern</a>
                    {" · "}
                    <a href="https://www.doubleexposurecu.com/post/the-birth-of-a-noir-consciousness-in-the-night-of-the-hunter" target="_blank" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>a noir consciousness in the night of the hunter</a>
                  </div>
                </div>
              </div>
              <div className="cv-row">
                <div className="row-body">
                  <div className="row-title">Videography</div>
                  <div className="row-sub">i shoot and cut in final cut pro</div>
                </div>
                <a className="row-right" href="https://www.youtube.com/watch?v=u2D_fjru0j0" target="_blank" rel="noopener">sample ↗</a>
              </div>
              <div className="cv-row">
                <div className="row-body">
                  <div className="row-title">Travel</div>
                  <div className="row-sub">5 continents and counting</div>
                </div>
                <a className="row-right" href="/travel">gallery ↗</a>
              </div>
              <div className="cv-row">
                <div className="row-body">
                  <div className="row-title">Mock trial</div>
                  <div className="row-sub">competed with the #4 ranked team in the country</div>
                </div>
              </div>
            </div>
            <div className="letterboxd-block">
              <div className="letterboxd-recent-label">recent watches</div>
              <LetterboxdRecent />
            </div>
          </section>

          <section className="cv-section fade-in" id="contact">
            <span className="section-chip">Contact</span>
            <p className="contact-blurb">
              i&apos;m always happy to chat about design, film, AI, education, or whatever else is on your
              mind. if you&apos;re working on something interesting or want to build something together,
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
