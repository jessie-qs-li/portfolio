import type { Metadata } from "next"
import localFont from "next/font/local"
import Image from "next/image"
import Deck from "@/components/Deck"
import DemoCard from "@/components/DemoCard"
import TikTokLogo from "@/components/TikTokLogo"
import DecryptText from "@/components/DecryptText"
import ClientScripts from "@/components/ClientScripts"
import MoreDetails from "@/components/MoreDetails"
import { PROJECTS } from "@/lib/projects"
import "./deck.css"

// Interview supplement, not part of the public site: kept out of search.
export const metadata: Metadata = {
  title: "Jessie Li × TikTok",
  robots: { index: false, follow: false },
}

// TikTok Sans (OFL, licence in app/fonts) replaces the site font on this page only.
const tiktokSans = localFont({
  src: [
    { path: "../fonts/TikTokSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/TikTokSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/TikTokSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/TikTokSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/TikTokSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/TikTokSans-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-tiktok",
  display: "swap",
})

const project = (name: string) => PROJECTS.find(p => p.name === name)!

const Arrow = () => (
  <svg className="arrow-ne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
)


// Deck-only Spectator caption; the homepage tile keeps the short one.
const SPECTATOR_DESC =
  "I am the PM for the iOS app of our campus newspaper, the Columbia Spectator."
// Fuller Grey Matter description for the deck; the homepage tile keeps the short one.
const GREY_MATTER_DESC =
  "Grey Matter uses Meta’s TRIBE V2 model to predict brain responses to video ads, then translates those predictions into editing recommendations."

// The Microsoft win has no demo clip, so it lives here rather than in the homepage grid.
// Tools from my projects and work, grouped for the creative & media tech slide.
const TOOLING = [
  { label: "AI", tools: ["Claude API", "Claude Agent SDK", "Claude Code", "Gemini API", "Google Flow", "Meta TRIBE V2"] },
  { label: "Video & audio", tools: ["ElevenLabs", "FFmpeg", "MediaPipe", "Parakeet MLX", "CapCut", "Final Cut Pro"] },
  { label: "3D, AR & canvas", tools: ["World Labs", "Snap Camera Kit", "Google Street View API", "Leaflet", "tldraw", "Fabric.js"] },
  { label: "Growth & design", tools: ["TikTok Ads Manager", "Meta Ads", "Figma MCP", "Mixpanel", "GrowthBook"] },
  { label: "Build stack", tools: ["Next.js", "React", "Vite", "Tailwind", "FastAPI", "Supabase", "PostgreSQL", "Vercel", "GCP", "AWS"] },
]

// Deck version of The Marquee's description: the purpose line replaces the team credit.
const MARQUEE_DESC =
  "Listings board for every indie cinema screening in NYC and Boston. Built to help indie film lovers like me find better screenings."

const HACKATHONS = [
  ...PROJECTS.filter(p => /place|best use/i.test(p.award)),
  {
    name: "Mastercard Outreach Discovery System",
    award: "2nd Place + Best Presentation @ Microsoft NYC Hackathon 2026",
    url: "https://docs.google.com/presentation/d/1yJGcSW7rdbCeZPLTEhX1sagU3Qfem_Omd5zCiyU9FCg/edit?usp=sharing",
  },
]

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
    <div className={`${tiktokSans.variable} tt-font`}>
      <button className="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        <span id="theme-icon"></span>
      </button>

      <Deck topLeft="jessieli.me/tiktok" corner={<><span>Jessie Li</span><span className="deck-corner-x">×</span><TikTokLogo className="deck-corner-logo" /></>}>
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
              I&apos;m a PM, builder, and researcher exploring <em>how creative work finds its audience</em>
            </h2>
            <div className="row-list cover-agenda">
              <div className="cv-row">
                <Image className="row-logo" src="/logos/columbia-crown.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
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
                <Image className="row-logo" src="/logos/columbia-dsl.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                <div className="row-body"><div className="row-title">
                  Researcher @ <a href="https://www.digitalstorytellinglab.com/" target="_blank" rel="noopener">Columbia Digital Storytelling Lab</a>
                </div></div>
              </div>
              <div className="cv-row">
                <Image className="row-logo" src="/logos/design-tools-lab.svg" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                <div className="row-body"><div className="row-title">
                  Researcher @ <a href="https://designtoolslab.org/" target="_blank" rel="noopener">Columbia Design Tools Lab</a>
                </div></div>
              </div>
              <div className="cv-row">
                <Image className="row-logo" src="/logos/boldvoice-tile.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                <div className="row-body"><div className="row-title">
                  Former Product Manager Intern @ <a href="https://www.boldvoice.com/" target="_blank" rel="noopener">BoldVoice</a> (YC 2021)
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 CREATIVE WORK */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">02 · Creative work</span>
            <h2 className="statement">I&apos;ve built products and run research to understand <em>what makes creative work land</em></h2>
          </header>
          <div className="slide-grid">
            <div className="slide-col">
              <DemoCard p={{ ...project("Grey Matter"), desc: GREY_MATTER_DESC }} open />
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-head">
                  <Image className="row-logo" src="/logos/columbia-dsl.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body">
                    <div className="row-title">Columbia Digital Storytelling Lab</div>
                    <div className="row-sub">Undergraduate Researcher</div>
                  </div>
                </div>
                <p className="panel-text">
                  Presented at NY Tech Week
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
              </div>
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-head">
                  <Image className="row-logo" src="/logos/boldvoice-tile.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body">
                    <div className="row-title">BoldVoice (YC S21)</div>
                    <div className="row-sub">Product &amp; Growth</div>
                  </div>
                </div>
                <div className="metric-row">
                  <div className="metric"><span className="metric-num">3x</span><span className="metric-label">I scaled organic content output by building an asset auto-generation pipeline</span></div>
                  <div className="metric"><span className="metric-num">$30k+</span><span className="metric-label">I drove in ARR from organic social at zero CAC</span></div>
                </div>
                <ul className="panel-list">
                  <li>I wrote push and social content for an audience of 500k+</li>
                  <li>I ran AI-assisted analyses of our Instagram organic social campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03 BUILDER */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">03 · Builder</span>
            <h2 className="statement">I build well with AI, <em>especially AI and video</em>, and I&apos;ve shipped to real customers</h2>
          </header>
          <div className="slide-grid">
            <div className="slide-col">
              <div className="panel">
                <div className="stat">7x</div>
                <div className="row-title">hackathon winner</div>
                <div className="row-list stat-list">
                  {HACKATHONS.map(p => (
                    <div className="cv-row" key={p.name}>
                      <div className="row-body">
                        <div className="row-title"><a href={p.url} target="_blank" rel="noopener">{p.name}</a></div>
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
                  <Image className="row-logo" src="/logos/boldvoice-tile.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body">
                    <div className="row-title">BoldVoice video pipeline</div>
                    <div className="row-sub">Internal tooling for video post-production</div>
                  </div>
                </div>
                <p className="panel-text">
                  Built internal tooling that automated video processing and made video post-production
                  substantially faster.
                </p>
                <div className="metric-row">
                  <div className="metric"><span className="metric-num">6</span><span className="metric-label">APIs unified behind one QA dashboard</span></div>
                  <div className="metric"><span className="metric-num">80%</span><span className="metric-label">less time to produce a lesson</span></div>
                </div>
                <MoreDetails title="BoldVoice video pipeline: how it works">
                  <ul className="panel-list">
                    <li>Directed CMS, Skiv/Muse, Google Docs and Sheets API integrations, plus Adobe speech enhancement and HLS hosting</li>
                    <li>Parakeet MLX for local word-level transcripts; ~40s silence-aligned chunks fixed timestamp drift</li>
                    <li>MediaPipe Face Mesh mouth framing, zoom capped at 2× to stay sharp</li>
                    <li>One-pass FFmpeg: trim, mouth crop, 3D LUT, −16 LUFS, 10ms fades, H.264</li>
                    <li>Keyboard-driven coach review with ~2s recuts; alternate takes replaced 20 of 27 rejected clips</li>
                  </ul>
                </MoreDetails>
              </div>
            </div>

            <div className="slide-col">
              <DemoCard
                p={{ ...project("The Spectator App"), desc: SPECTATOR_DESC }}
                open
                footer={
                  <MoreDetails title="The Spectator App: more of my work">
                    <ul className="panel-list">
                      <li>Shipped iOS dietary-restriction filters for campus menus after usability testing, driving 5x section visits</li>
                      <li>Scoped New Student Mode with 20+ interviews and affinity mapping across users, internal teams and admins; Figma prototype greenlit for build</li>
                    </ul>
                  </MoreDetails>
                }
              />
            </div>
          </div>
        </section>

        {/* 04 CREATIVE + MEDIA TECH */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">04 · Creative &amp; media tech</span>
            <h2 className="statement">I&apos;ve shown real interest in creative and media technology, <em>and a good understanding of the industry</em></h2>
          </header>
          <div className="slide-grid">
            <div className="slide-col">
              <DemoCard p={{ ...project("The Marquee"), desc: MARQUEE_DESC }} open />
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-label">In the room</div>
                <ul className="panel-list">
                  <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7454862076730159106/" target="_blank" rel="noopener">I helped organize the Global AI Film Hack at MIT</a></li>
                  <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7452975612475961344/" target="_blank" rel="noopener">I was selected for a masterclass with Google DeepMind Creative Lab</a></li>
                </ul>
                <div className="room-photos">
                  <Image src="/photos/ai-film-hack-mit.jpg" alt="Organizers and participants of the Global AI Film Hack at MIT" width={1280} height={853} sizes="320px" loading="eager" />
                  <Image src="/photos/creative-frontier-masterclass.jpg" alt="A speaker presenting at the Creative Frontier masterclass" width={1280} height={960} sizes="320px" loading="eager" style={{ objectPosition: "55% 62%" }} />
                </div>
              </div>
            </div>

            <div className="slide-col">
              <div className="panel">
                <div className="panel-label">People I learn from</div>
                <p className="panel-text">
                  I regularly talk with people building in creative tech: <a href="https://www.linkedin.com/in/z0ey/" target="_blank" rel="noopener">Zoey Zhang</a>, founder
                  of Flick (YC 2026), an AI filmmaking platform; <a href="https://www.linkedin.com/in/kaiwenli/" target="_blank" rel="noopener">Kaiwen Li</a>, CEO of ChatCut, an
                  agentic video editor; <a href="https://www.linkedin.com/in/rithik-kundu/" target="_blank" rel="noopener">Rithik Kundu</a>, a VC and Google Flow Resident;
                  and <a href="https://www.linkedin.com/in/khushihora/" target="_blank" rel="noopener">Khushi Hora</a>, an award-winning AI filmmaker.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 TOOLKIT */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">05 · Toolkit</span>
            <h2 className="statement">Tooling I&apos;ve built with, <em>from AI models to video, 3D and growth</em></h2>
          </header>
          <div className="tool-grid">
            {TOOLING.map(g => (
              <div className="panel tool-group" key={g.label}>
                <div className="panel-label">{g.label}</div>
                <div className="skill-chips">
                  {g.tools.map(t => <span className="skill-chip" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 WHY I CARE */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">06 · Why I care</span>
            <h2 className="statement">Creative isn&apos;t just a market to me, <em>it&apos;s what I love</em></h2>
          </header>
          <div className="why-grid">
            <div className="panel">
              <div className="row-list">
                <div className="cv-row">
                  <Image className="row-logo" src="/logos/columbia-crown.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body"><div className="row-title">I minor in Film Studies at Columbia</div></div>
                </div>
                <div className="cv-row">
                  <Image className="row-logo" src="/logos/shanghai-international-film-festival.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body"><div className="row-title">I worked events at the <a href="https://www.siff.com/english/" target="_blank" rel="noopener">Shanghai International Film Festival</a></div></div>
                </div>
                <div className="cv-row">
                  <span className="row-logo row-logo--icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                  </span>
                  <div className="row-body"><div className="row-title">I shoot and edit video in CapCut (<a href="https://www.youtube.com/watch?v=u2D_fjru0j0" target="_blank" rel="noopener">sample</a>)</div></div>
                </div>
                <div className="cv-row">
                  <Image className="row-logo" src="/logos/emory-film-media.png" alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
                  <div className="row-body"><div className="row-title">I won the <span className="hl-accent">Annie Hall Award</span> for <a href="https://www.doubleexposurecu.com/post/panoptic-patriarchy-in-raise-the-red-lantern" target="_blank" rel="noopener">best undergrad film essay</a></div></div>
                </div>
                <div className="cv-row">
                  <span className="row-logo row-logo--icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
                  </span>
                  <div className="row-body"><div className="row-title">I&apos;ve rated 800+ movies on <a href="https://letterboxd.com/qishan_li/" target="_blank" rel="noopener">Letterboxd</a></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 BYTESTYLE */}
        <section className="slide">
          <header className="slide-head">
            <span className="section-chip hover-fill">07 · ByteStyle</span>
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
    </div>
  )
}
