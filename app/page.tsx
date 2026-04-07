import Image from "next/image"
import HeroHeadline from "@/components/HeroHeadline"
import ClientScripts from "@/components/ClientScripts"
import TravelGlobe from "@/components/TravelGlobe"
import LetterboxdRecent from "@/components/LetterboxdRecent"
import HeroMouseTrail from "@/components/HeroMouseTrail"

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">Jessie Li</a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
            <span id="theme-icon"></span>
          </button>
          <button className="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div className="mobile-nav" id="mobile-nav" aria-hidden="true">
        <a href="#about" className="mobile-nav-link">About</a>
        <a href="#work" className="mobile-nav-link">Work</a>
        <a href="#experience" className="mobile-nav-link">Experience</a>
        <a href="#writing" className="mobile-nav-link">Writing</a>
        <a href="#contact" className="mobile-nav-link">Contact</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <HeroMouseTrail />
        <div className="hero-content">
          <div className="hero-eyebrow">
            CS &amp; Film @ <a href="https://www.columbia.edu" target="_blank" rel="noopener">Columbia</a>
          </div>
          <HeroHeadline />
          <a href="#work" className="btn-primary" style={{ marginTop: 30 }}>See my work →</a>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="two-col">
            <div className="fade-in" id="thinking-section">
              <div className="col-heading">what I think about</div>
              <div className="thinking-item">
                <span className="thinking-num">01</span>
                <p>how to create engaging, novel, and interesting digital experiences in the age of AI slop</p>
              </div>
              <div className="thinking-item">
                <span className="thinking-num">02</span>
                <p>how to make education inspiring and fun, especially in a multimodal way</p>
              </div>
              <div className="thinking-item">
                <span className="thinking-num">03</span>
                <p>how to use tech to support the discovery of films, books, and other content that enrich and inspire</p>
              </div>
            </div>
            <div className="fade-in" id="currently-section" style={{ transitionDelay: "0.15s" }}>
              <div className="col-heading">currently</div>
              <div className="currently-item">
                <div className="currently-dot"></div>
                <p>building a film discovery product (stealth)</p>
              </div>
              <div className="currently-item">
                <div className="currently-dot"></div>
                <p>conducting HCI research with the <a href="https://www.digitalstorytellinglab.com/" target="_blank" rel="noopener">Columbia Digital Storytelling Lab</a></p>
              </div>
              <div className="currently-item">
                <div className="currently-dot"></div>
                <p>designing products and leading UX research across early-stage startups</p>
              </div>
              <div className="currently-item">
                <div className="currently-dot"></div>
                <p>mentoring students ~6 hours/week through <a href="https://li-tutors.figma.site/" target="_blank" rel="noopener">Li Tutors</a>, the tutoring company I founded with my twin brother <a href="https://www.linkedin.com/in/ethan-li-121121121121121121121/" target="_blank" rel="noopener">Ethan</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* PROJECTS */}
      <section id="work">
        <div className="container">
          <div className="col-heading fade-in">selected projects</div>
          <div className="projects-grid">

            {/* Wonder (featured) */}
            <div className="project-card featured fade-in">
              <div
                className="project-card-gradient project-card-gradient--wonder wonder-slideshow"
                data-wonder-slideshow=""
                data-slide="0"
                role="region"
                aria-roledescription="carousel"
                aria-label="Wonder screenshots"
              >
                <Image className="wonder-slide wonder-slide-a" src="/wonder-map.png" alt="" width={1200} height={675} loading="lazy" aria-hidden="true" />
                <Image className="wonder-slide wonder-slide-b" src="/wonder-detail.png" alt="" width={1200} height={675} loading="lazy" aria-hidden="true" />
                <div className="wonder-slideshow-arrows">
                  <button type="button" className="wonder-arrow wonder-arrow-prev" aria-label="Previous screenshot"><span aria-hidden="true">‹</span></button>
                  <button type="button" className="wonder-arrow wonder-arrow-next" aria-label="Next screenshot"><span aria-hidden="true">›</span></button>
                </div>
              </div>
              <div className="project-card-body">
                <div className="project-name">Wonder</div>
                <div className="project-tagline">Explore the world in a different way</div>
                <div className="project-award">2nd Place Social Impact, <a href="https://devpost.com/software/wonder-the-new-way-to-explore-the-world" target="_blank" rel="noopener">Yale Hackathon (YHack 2026)</a></div>
                <div className="project-desc">Location-based AI voice chats that let kids talk to famous historical figures right where history happened.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">AI</span>
                    <span className="tag">Voice</span>
                    <span className="tag">Education</span>
                  </div>
                  <a href="https://www.yourwonder.us/" target="_blank" rel="noopener" className="project-link">yourwonder.us ↗</a>
                </div>
              </div>
            </div>

            {/* Turing Gallery */}
            <div className="project-card project-card--turing fade-in">
              <div className="project-card-gradient project-card-gradient--turing">
                <Image className="turing-preview-img" src="/turing-gallery.png" alt="The Turing Gallery UI" width={1600} height={900} loading="lazy" />
              </div>
              <div className="project-card-body">
                <div className="project-name">The Turing Gallery</div>
                <div className="project-tagline">You&apos;ll know it when you see it. Or will you?</div>
                <div className="project-award"><a href="https://www.digitalstorytellinglab.com/" target="_blank" rel="noopener">Columbia Digital Storytelling Lab</a></div>
                <div className="project-desc">A mixed-methods study probing the limits of human perception. Participants move through a curated gallery of text, audio, and visual media — some human, some AI — while behavioral data capture exactly where our judgement slips.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">AI</span>
                    <span className="tag">Games</span>
                    <span className="tag">Research</span>
                    <span className="tag">Creativity</span>
                  </div>
                  <a href="https://turing-gallery.vercel.app/" target="_blank" rel="noopener" className="project-link">view study ↗</a>
                </div>
              </div>
            </div>

            {/* Imposter */}
            <div className="project-card project-card--imposter fade-in">
              <div className="project-card-gradient project-card-gradient--imposter">
                <Image
                  className="imposter-preview-img"
                  src="/imposter-party-game.png"
                  alt="Imposter: A Party Game — menu to host or join a room"
                  width={1024}
                  height={550}
                  loading="lazy"
                />
              </div>
              <div className="project-card-body">
                <div className="project-name">Imposter: A Party Game</div>
                <div className="project-tagline">The AI is in the room</div>
                <div className="project-award"><a href="https://www.digitalstorytellinglab.com/" target="_blank" rel="noopener">Columbia Digital Storytelling Lab</a></div>
                <div className="project-desc">What makes human creativity recognizably human? In this multiuser creative turing test, every player writes something about a shared human theme. One piece is made by AI. The group&apos;s job is to figure out which one!</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">AI</span>
                    <span className="tag">Games</span>
                    <span className="tag">Research</span>
                    <span className="tag">Creativity</span>
                  </div>
                  <a href="https://partygame-ten.vercel.app/" target="_blank" rel="noopener" className="project-link">imposter ↗</a>
                </div>
              </div>
            </div>

            {/* Noodle */}
            <div className="project-card project-card--noodle fade-in">
              <div className="project-card-gradient project-card-gradient--noodle">
                <Image className="noodle-preview-img" src="/noodle.png" alt="Noodle drawing app" width={1600} height={900} loading="lazy" />
              </div>
              <div className="project-card-body">
                <div className="project-name">Noodle</div>
                <div className="project-tagline">AI that hands kids the pen</div>
                <div className="project-award">Best Use of ElevenLabs, <a href="https://devpost.com/software/noodle-2aotw6" target="_blank" rel="noopener">Columbia Hackathon (DevFest 2026)</a></div>
                <div className="project-desc">An AI drawing buddy for kids ages 4–6. As children draw and talk through their ideas, Noodle listens, cheers them on, and asks questions that spark new ideas.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">AI</span>
                    <span className="tag">Education</span>
                    <span className="tag">Creative Tools</span>
                  </div>
                  <a href="https://devpost.com/software/noodle-2aotw6" target="_blank" rel="noopener" className="project-link">devpost ↗</a>
                </div>
              </div>
            </div>

            {/* Liondine */}
            <div className="project-card project-card--liondine fade-in">
              <div className="project-card-gradient project-card-gradient--liondine">
                <Image className="liondine-preview-img" src="/liondine.png" alt="Liondine dining app" width={1200} height={2600} loading="lazy" />
              </div>
              <div className="project-card-body">
                <div className="project-name">Liondine</div>
                <div className="project-tagline">The Columbia Spectator</div>
                <div className="project-desc">Designed dietary information filters and UI improvements for Columbia&apos;s dining platform, making it easier for students to find food that works for them.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">Product Design</span>
                    <span className="tag">UX</span>
                  </div>
                  <a href="https://apps.apple.com/us/app/columbia-spectator/id6470171397" target="_blank" rel="noopener" className="project-link">App Store ↗</a>
                </div>
              </div>
            </div>

            {/* Pet Pomodoro */}
            <div className="project-card project-card--petpomodoro fade-in">
              <div className="project-card-gradient project-card-gradient--petpomodoro">
                <Image className="petpomodoro-preview-img" src="/pet-pomodoro.png" alt="Pet Pomodoro timer" width={1200} height={900} loading="lazy" />
              </div>
              <div className="project-card-body">
                <div className="project-name">Pet Pomodoro</div>
                <div className="project-tagline">A pomodoro timer with feelings</div>
                <div className="project-desc">A focus timer with a cute avatar that turns sad whenever you break your flow.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">UI Design</span>
                    <span className="tag">Fun</span>
                  </div>
                  <a href="https://petpomodoro-draft.figma.site/" target="_blank" rel="noopener" className="project-link">petpomodoro ↗</a>
                </div>
              </div>
            </div>

            {/* Li Tutors */}
            <div className="project-card project-card--no-preview fade-in">
              <div className="project-card-body">
                <div className="project-name">Li Tutors</div>
                <div className="project-tagline">Website for my tutoring company</div>
                <div className="project-desc">Designed and built the site for Li Tutors, my tutoring company where I teach and mentor students across subjects.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">Web Design</span>
                    <span className="tag">Branding</span>
                  </div>
                  <a href="https://li-tutors.figma.site/" target="_blank" rel="noopener" className="project-link">li-tutors.figma.site ↗</a>
                </div>
              </div>
            </div>

            {/* OptiBuy */}
            <div className="project-card project-card--no-preview fade-in">
              <div className="project-card-body">
                <div className="project-name">OptiBuy</div>
                <div className="project-tagline">Price tracker for e-commerce products</div>
                <div className="project-desc">A tool that tracks prices across e-commerce platforms so you can buy at the right time.</div>
                <div className="project-footer">
                  <div className="project-tags">
                    <span className="tag">Web App</span>
                    <span className="tag">Utility</span>
                  </div>
                  <a href="https://www.optibuy.compare/" target="_blank" rel="noopener" className="project-link">optibuy.compare ↗</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className="col-heading fade-in">experience</div>
          <table className="exp-table">
            <tbody>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;AI/ML Fellow</td>
                <td className="exp-org">
                  <a href="https://www.breakthroughtech.org/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/break-through-tech.png"
                      alt=""
                      width={22}
                      height={22}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Break Through Tech</span>
                  </a>
                </td>
                <td className="exp-date">Mar 2026 – Present<span className="exp-present"></span></td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Undergraduate Researcher</td>
                <td className="exp-org">
                  <a href="https://www.digitalstorytellinglab.com/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/columbia-dsl.png"
                      alt=""
                      width={200}
                      height={40}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Columbia Digital Storytelling Lab</span>
                  </a>
                </td>
                <td className="exp-date">Jan 2026 – Present<span className="exp-present"></span></td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Product Designer</td>
                <td className="exp-org">
                  <a href="https://www.columbiaspectator.com/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/columbia-spectator.png"
                      alt=""
                      width={22}
                      height={22}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">The Columbia Spectator</span>
                  </a>
                </td>
                <td className="exp-date">Sep 2025 – Present<span className="exp-present"></span></td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Founder &amp; Head Tutor</td>
                <td className="exp-org">
                  <a href="https://li-tutors.figma.site/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/li-tutors.png"
                      alt=""
                      width={22}
                      height={22}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Li Tutors</span>
                  </a>
                </td>
                <td className="exp-date">Apr 2024 – Present<span className="exp-present"></span></td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Product Engineering Intern</td>
                <td className="exp-org">
                  <a href="https://flevy.com/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/flevy.png"
                      alt=""
                      width={200}
                      height={200}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Flevy</span>
                  </a>
                </td>
                <td className="exp-date">Nov – Dec 2025</td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Product Research Intern</td>
                <td className="exp-org">
                  <a href="http://apply7.ai/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/apply7.png"
                      alt=""
                      width={200}
                      height={200}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Apply7.ai</span>
                  </a>
                </td>
                <td className="exp-date">Jul – Aug 2025</td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Events &amp; Liaison Intern</td>
                <td className="exp-org">
                  <a href="https://www.siff.com/english/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/shanghai-international-film-festival.png"
                      alt=""
                      width={330}
                      height={330}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Shanghai International Film Festival</span>
                  </a>
                </td>
                <td className="exp-date">May – Jun 2025</td>
              </tr>
              <tr className="exp-row fade-in">
                <td className="exp-role">&nbsp;&nbsp;Research Assistant</td>
                <td className="exp-org">
                  <a href="https://filmandmedia.emory.edu/" target="_blank" rel="noopener" className="exp-org-with-logo">
                    <Image
                      src="/logos/emory-film-media.png"
                      alt=""
                      width={918}
                      height={908}
                      className="exp-org-logo"
                      aria-hidden
                    />
                    <span className="exp-org-link-text">Emory Dept. of Film and Media</span>
                  </a>
                </td>
                <td className="exp-date">Jan – Apr 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* WRITING */}
      <section id="writing">
        <div className="container">
          <div className="col-heading fade-in">other</div>
          <div className="writing-grid">
            <a href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener" className="writing-card fade-in" id="other-letterboxd">
              <div className="writing-title">letterboxd</div>
              <div className="writing-desc">i&apos;m a huge cinephile! i watch and review ~120 films per year</div>
              <div className="letterboxd-recent-label">recent watches:</div>
              <LetterboxdRecent />
              <span className="writing-link">MY LETTERBOXD →</span>
            </a>
            <div className="writing-card fade-in" id="other-writing">
              <div className="writing-title">writing</div>
              <div className="writing-desc" style={{ marginBottom: 12 }}>film reviews, articles, and other thoughts</div>
              <div className="letterboxd-recent-label" style={{ marginBottom: 8 }}>recent pieces:</div>
              <a href="https://www.doubleexposurecu.com/post/panoptic-patriarchy-in-raise-the-red-lantern" target="_blank" rel="noopener" style={{ display: "block", fontSize: 13, color: "var(--text2)", textDecoration: "underline", textUnderlineOffset: 3, marginBottom: 6 }}>
                panoptic patriarchy in raise the red lantern — WINNER, ANNIE HALL AWARD
              </a>
            </div>
          </div>
          <div className="more-grid fade-in">
            <div className="more-chip" id="other-videography">
              <div className="more-chip-title">videography</div>
              <div className="more-chip-desc" style={{ marginBottom: "12px" }}>i use final cut pro. sample work:</div>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
                <iframe
                  src="https://www.youtube.com/embed/u2D_fjru0j0"
                  title="Videography sample"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
            <div className="more-chip" id="other-mocktrial">
              <div className="more-chip-title">mock trial</div>
              <div className="more-chip-desc" style={{ marginBottom: "12px" }}>i used to compete with the #4 ranked team in the country!</div>
              <div className="mock-trial-carousel">
                <div className="mock-trial-window" id="mockTrialWindow">
                  <img src="/mock-trial-1.jpg" alt="Mock trial competition" className="mock-trial-img active" data-index="0" />
                  <img src="/mock-trial-2.jpg" alt="Mock trial team" className="mock-trial-img" data-index="1" />
                </div>
                <button className="mock-trial-arrow mock-trial-prev" id="mockTrialPrev" aria-label="Previous">&#8592;</button>
                <button className="mock-trial-arrow mock-trial-next" id="mockTrialNext" aria-label="Next">&#8594;</button>
              </div>
            </div>
            <div className="more-chip" id="other-travel">
              <div className="more-chip-title">travel</div>
              <div className="more-chip-desc">5 continents and counting — <a href="/travel" style={{ textDecoration: "underline", color: "inherit" }}>travel gallery</a></div>
              <TravelGlobe />
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider"></div></div>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-orb contact-orb-1"></div>
        <div className="contact-orb contact-orb-2"></div>
        <div className="container">
          <h2 className="contact-headline fade-in">let&apos;s talk!</h2>
          <p className="contact-body fade-in">i&apos;m always happy to chat about design, film, AI, education, or whatever else is on your mind. if you&apos;re working on something interesting or want to work on something together, please feel free to reach out</p>
          <a href="mailto:jql2104@columbia.edu" className="btn-gradient fade-in">Get in touch →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="social-links">
              <a href="https://github.com/jessie-qs-li" target="_blank" rel="noopener" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
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
          </div>
        </div>
      </footer>

      <ClientScripts />
    </>
  )
}
