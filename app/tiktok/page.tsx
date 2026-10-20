import type { Metadata } from "next"
import Image from "next/image"
import Deck from "@/components/Deck"
import DemoCard from "@/components/DemoCard"
import TikTokLogo from "@/components/TikTokLogo"
import DecryptText from "@/components/DecryptText"
import ClientScripts from "@/components/ClientScripts"
import { PROJECTS } from "@/lib/projects"
import "./deck.css"

// Interview supplement, not part of the public site: kept out of search.
export const metadata: Metadata = {
  title: "Jessie Li × TikTok",
  robots: { index: false, follow: false },
}

const project = (name: string) => PROJECTS.find(p => p.name === name)!

const Arrow = () => (
  <svg className="arrow-ne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
)


const HACKATHONS = PROJECTS.filter(p => /place|best use/i.test(p.award))

// ByteDance's ByteStyle values, each paired with where it shows up in my work.
const BYTESTYLE = [
  { name: "Always Day 1", proof: "Transferred from Emory to Columbia after discovering CS, and keep picking up new creative tools at hackathons, from ElevenLabs to World Labs." },
  { name: "Aim for the Highest", proof: "7x hackathon winner, and my essay on Raise the Red Lantern won first place in the Annie Hall Awards." },
  { name: "Be Grounded and Courageous", proof: "Reached out to a professor to propose my own research on AI imitation, then grounded it in 100+ trials of real play." },
  { name: "Be Open and Humble", proof: "Iterate through playtesting and user interviews, and coffee chat people across creative tech to learn how they work." },
  { name: "Be Candid and Clear", proof: "As a PM, I align engineers, designers, and administrators on one plan, and I write for Columbia's film journal." },
  { name: "Champion Diversity and Inclusion", proof: "Bilingual in English and Mandarin. I mentor ESL students through Li Tutors and built Wonder to bring world history to kids." },
]

export default function TikTokDeck() {
  return (
    <>
      <button className="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        <span id="theme-icon"></span>
      </button>

      <Deck corner={<><span>Jessie Li</span><span className="deck-corner-x">×</span><TikTokLogo className="deck-corner-logo" /></>}>
        {/* COVER */}
        <section className="slide slide--cover">
          <div className="side-card side-card--profile cover-card">
            <Image className="profile-photo" src="/hero-portrait.jpg" alt="Jessie Li on the Brooklyn Bridge at dusk" width={1200} height={1200} sizes="330px" priority />
            <div className="side-card-body">
              <div className="profile-head">
                <h1 className="profile-name"><span>Jessie Li</span></h1>
                <p className="profile-loc">New York, NY</p>
              </div>
            </div>
          </div>
          <div className="cover-main">
            <h2 className="statement">
              Builder, researcher, and cinephile exploring <em>how creative work finds its audience</em>
            </h2>
            <div className="row-list cover-agenda">
              <div className="cv-row">
                <Image className="row-logo" src="/logos/columbia-crown.png" alt="" width={34} height={34} unoptimized aria-hidden />
                <div className="row-body"><div className="row-title">
                  CS &amp; Film @ <a href="https://www.columbia.edu" target="_blank" rel="noopener">Columbia</a>, 3.9 GPA
                </div></div>
              </div>
              <div className="cv-row">
                <span className="row-logo row-logo--icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/></svg>
                </span>
                <div className="row-body"><div className="row-title">
                  <a href="#3">7x hackathon winner</a>
                </div></div>
              </div>
              <div className="cv-row">
                <span className="row-logo-pair">
                  <Image className="row-logo" src="/logos/columbia-dsl.png" alt="" width={34} height={34} unoptimized aria-hidden />
                  <Image className="row-logo" src="/logos/design-tools-lab.svg" alt="" width={34} height={34} unoptimized aria-hidden />
                </span>
                <div className="row-body"><div className="row-title">
                  Researcher at the <a href="https://www.digitalstorytellinglab.com/" target="_blank" rel="noopener">Columbia Digital Storytelling Lab</a> and{" "}
                  <a href="https://designtoolslab.org/" target="_blank" rel="noopener">Columbia Design Tools Lab</a>
                </div></div>
              </div>
              <div className="cv-row">
                <Image className="row-logo" src="/logos/boldvoice-tile.png" alt="" width={34} height={34} unoptimized aria-hidden />
                <div className="row-body"><div className="row-title">
                  Former Product Manager Intern @ <a href="https://www.boldvoice.com/" target="_blank" rel="noopener">BoldVoice</a> (YC 2021)
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 01 CREATIVE WORK */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">01 · Creative work</span>
            <h2 className="statement">I&apos;ve built products and run research to understand <em>what makes creative work land</em></h2>
          </header>
          <div className="slide-grid">
            <div className="slide-col">
              <DemoCard p={project("Grey Matter")} open />
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-head">
                  <Image className="row-logo" src="/logos/columbia-dsl.png" alt="" width={34} height={34} unoptimized aria-hidden />
                  <div className="row-body">
                    <div className="row-title">Columbia Digital Storytelling Lab</div>
                    <div className="row-sub">Undergraduate Researcher</div>
                  </div>
                </div>
                <p className="panel-text">
                  Through game simulations, I studied whether AI can meaningfully imitate the work of acknowledged masters,
                  and whether it can mimic having had human experience: can people tell, and what gives it away? I
                  presented the findings at NY Tech Week.
                </p>
                <a className="rr" href="https://theturinggallery.com" target="_blank" rel="noopener">
                  <div className="rr-body">
                    <div className="rr-top"><DecryptText className="tg-title">The Turing Gallery</DecryptText><span className="rr-meta"><Arrow /></span></div>
                    <p className="rr-desc">Spot the human master vs. the AI imitation across literature, art, and music.</p>
                  </div>
                </a>
                <a className="rr" href="https://www.imposter.live/" target="_blank" rel="noopener">
                  <div className="rr-body">
                    <div className="rr-top"><span className="im-title">IMPOSTOR</span><span className="rr-meta"><Arrow /></span></div>
                    <p className="rr-desc">A party game where an AI player mimics your friends&apos; voices.</p>
                  </div>
                </a>
                <p className="panel-foot">100+ trials</p>
              </div>
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-head">
                  <Image className="row-logo" src="/logos/boldvoice-tile.png" alt="" width={34} height={34} unoptimized aria-hidden />
                  <div className="row-body">
                    <div className="row-title">BoldVoice (YC S21)</div>
                    <div className="row-sub">Product &amp; Growth</div>
                  </div>
                </div>
                <div className="metric-row">
                  <div className="metric"><span className="metric-num">3x</span><span className="metric-label">organic content output with auto-generated assets</span></div>
                  <div className="metric"><span className="metric-num">$30k+</span><span className="metric-label">ARR from organic social at zero CAC</span></div>
                </div>
                <ul className="panel-list">
                  <li>Wrote push and social content, and tracked what performed</li>
                  <li>Ran TikTok Ads campaigns and owned organic social strategy</li>
                </ul>
              </div>
              <div className="panel">
                <div className="panel-label">Why I care</div>
                <div className="skill-chips">
                  <span className="skill-chip">Film Studies minor</span>
                  <a className="skill-chip" href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener">Letterboxd reviewer</a>
                  <span className="skill-chip">Writer, Double Exposure film journal</span>
                  <span className="skill-chip skill-chip--hl">Annie Hall Prize winner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 BUILDER */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">02 · Builder</span>
            <h2 className="statement">I build well with AI, <em>especially AI and video</em>, and I&apos;ve shipped to real customers</h2>
          </header>
          <div className="slide-grid">
            <div className="slide-col">
              <div className="panel">
                <div className="stat">7x</div>
                <div className="row-title">hackathon winner</div>
                <div className="panel-label stat-label">A few of them</div>
                <div className="row-list stat-list">
                  {HACKATHONS.map(p => (
                    <div className="cv-row" key={p.name}>
                      <div className="row-body">
                        <div className="row-title">{p.name}</div>
                        <div className="row-sub">{p.award}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-head">
                  <Image className="row-logo" src="/logos/boldvoice-tile.png" alt="" width={34} height={34} unoptimized aria-hidden />
                  <div className="row-body">
                    <div className="row-title">BoldVoice video pipeline</div>
                    <div className="row-sub">Internal tooling for lesson production</div>
                  </div>
                </div>
                <p className="panel-text">
                  Built internal tooling that automated video processing and made lesson production
                  substantially faster.
                </p>
                <div className="metric-row">
                  <div className="metric"><span className="metric-num">6</span><span className="metric-label">APIs unified behind one QA dashboard</span></div>
                  <div className="metric"><span className="metric-num">80%</span><span className="metric-label">less time to produce a lesson</span></div>
                </div>
              </div>
            </div>

            <div className="slide-col">
              <DemoCard p={project("The Spectator App")} />
              <p className="slide-note">I lead the Spectator&apos;s mobile team as PM. Our dining filters drove 5x growth in section visits.</p>
            </div>
          </div>
        </section>

        {/* 03 CREATIVE + MEDIA TECH */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">03 · Creative &amp; media tech</span>
            <h2 className="statement">I&apos;ve shown real interest in creative and media technology, <em>and a good understanding of the industry</em></h2>
          </header>
          <div className="slide-grid">
            <div className="slide-col">
              <DemoCard p={project("The Marquee")} />
              <p className="slide-note">Built to help indie film lovers like me find better screenings.</p>
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-label">Creative tooling I&apos;ve built with</div>
                <div className="row-list">
                  <div className="cv-row">
                    <div className="row-body"><div className="row-title">ElevenLabs</div><div className="row-sub">150 voice agents of historical figures in Wonder</div></div>
                  </div>
                  <div className="cv-row">
                    <div className="row-body"><div className="row-title">World Labs</div><div className="row-sub">3D dorm room reconstruction in TheShaft</div></div>
                  </div>
                  <div className="cv-row">
                    <div className="row-body"><div className="row-title">tldraw</div><div className="row-sub">Research at the Columbia Design Tools Lab</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-label">In the room</div>
                <ul className="panel-list">
                  <li>Google DeepMind filmmaking event</li>
                  <li>Volunteered at the Shanghai International Film Festival</li>
                </ul>
              </div>
              <div className="panel">
                <div className="panel-label">Coffee chats with people in creative tech</div>
                <div className="skill-chips">
                  <span className="skill-chip">Khushi Hora</span>
                  <span className="skill-chip">Zoey Zhou</span>
                  <span className="skill-chip">Rithik Kundu</span>
                  <span className="skill-chip">ChatCut</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 BYTESTYLE */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">04 · ByteStyle</span>
            <h2 className="statement">How what I&apos;ve done <em>maps to ByteStyle</em></h2>
          </header>
          <div className="byte-grid">
            {BYTESTYLE.map(b => (
              <div className="panel" key={b.name}>
                <div className="byte-name">{b.name}</div>
                <p className="panel-text">{b.proof}</p>
              </div>
            ))}
          </div>
        </section>
      </Deck>

      <ClientScripts />
    </>
  )
}
