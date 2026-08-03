export type Project = {
  name: string
  desc: string
  award: string
  url: string
  link: string
  video?: string
  poster?: string
}

export const PROJECTS: Project[] = [
  {
    name: "The Spectator App",
    desc: "iOS app for Columbia's student newspaper. Built with the Spectator's mobile team.",
    award: "Live on the App Store",
    url: "https://apps.apple.com/us/app/columbia-spectator/id6470171397",
    link: "View more",
    video: "/demos/spectator-demo.mp4",
    poster: "/demos/spectator-poster.jpg",
  },
  {
    name: "TheShaft",
    desc: "3D dorm room reconstruction and ideation with WorldLabs. Built with Ashlee Chae, Audrey Chan, Sunny Liu, and Lynsey Overturf.",
    award: "1st Place @ NYC Intern Hackathon 2026",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7476655026405412864/",
    link: "View more",
    video: "/demos/theshaft-demo.mp4",
    poster: "/demos/theshaft-poster.jpg",
  },
  {
    name: "Wonder",
    desc: "Interactive map where kids voice-chat with AI historical figures at 50 global landmarks. Built with Ashlee Chae.",
    award: "2nd Place Social Impact @ Yale Hackathon (YHack) 2026",
    url: "https://www.yourwonder.us/",
    link: "View more",
    video: "/demos/wonder-demo.mp4",
    poster: "/demos/wonder-poster.jpg",
  },
  {
    name: "Grey Matter",
    desc: "TRIBE V2 brain data rendered as ad insights. Built with Ashlee Chae, Audrey Chan, and Sunny Liu.",
    award: "2nd Place @ Columbia x NYU Claude Hackathon 2026",
    url: "https://devpost.com/software/grey-matter-l3e4ap",
    link: "View more",
    video: "/demos/greymatter-demo.mp4",
    poster: "/demos/greymatter-poster.jpg",
  },
  {
    name: "Noodle",
    desc: "AI drawing companion that watches kids' canvases and asks questions that spark visual creativity. Built with Ashlee Chae, Amelie Dequito, and Jenny Xie.",
    award: "Best Use of ElevenLabs @ Columbia Hackathon (DevFest) 2026",
    url: "https://noodle-draw.pages.dev",
    link: "View more",
    video: "/demos/noodle-demo.mp4",
    poster: "/demos/noodle-poster.jpg",
  },
  {
    name: "SuperStore",
    desc: "AI agents to simulate shopper behavior. Built with Ashlee Chae, Audrey Chan, Sunny Liu, and Lynsey Overturf.",
    award: "1st Place @ NYU EEG x Vercel Hackathon 2026",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7457816648155099136/",
    link: "View more",
    video: "/demos/superstore-demo.mp4",
    poster: "/demos/superstore-poster.jpg",
  },
]
