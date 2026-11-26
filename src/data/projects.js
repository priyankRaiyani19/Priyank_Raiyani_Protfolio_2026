/**
 * Single source of truth for every project link in the portfolio. Items with
 * a bundled screenshot are marked `featured` and get the large cards on the
 * homepage; everything else still appears in the full /projects grid with a
 * generated placeholder tile instead of a missing <img>.
 *
 * All titles, descriptions and links are taken as-is from the original
 * data/home.js (featuredWork) and data/projects.js — nothing invented.
 */

function linkType(href) {
  if (!href) return "Link";
  if (href.includes("github.com")) return "Source";
  if (href.includes("youtube.com")) return "Watch";
  return "Live";
}

const raw = [
  // Previously "featuredWork" — bundled screenshots live in /img/projects.
  {
    title: "Study Notion",
    description: "",
    image: "/img/projects/Studynotion.png",
    href: "https://studynotiontech.netlify.app/",
  },

  {
    title: "Task Management System",
    description: "",
    image: "/img/projects/tms.png",
    href: "https://taskengine.netlify.app/",
  },
  {
    title: "Otaku Verse",
    description: "",
    image: "/img/projects/otaku.png",
    href: "https://theotakuverse.netlify.app/",
  },
  {
    title: "Aprycot Restaurant",
    description: "",
    image: "/img/projects/aprycot.png",
    href: "https://burgerraja.netlify.app/",
  },
  // Previously the dedicated /projects page list.
//   {
//     title: "Warlimont & Nutt",
//     description: "Real Estate Agency Website",
//     image: null,
//     href: "https://www.wnre.com.au/",
//   },
//   {
//     title: "FactWise",
//     description: "FactWise's Landing Page",
//     image: null,
//     href: "https://factwise.io/",
//   },
//   {
//     title: "Hodges",
//     description: "Competition Application Website",
//     image: null,
//     href: "https://bmwcompetition.hodges.com.au/",
//   },
//   {
//     title: "Whiteboard",
//     description: "Whiteboard made in a Hackathon",
//     image: null,
//     href: "https://whiteboard-focussed.netlify.app/",
//   },
//   {
//     title: "Dan Hocking",
//     description: "Photographer's Portfolio",
//     image: null,
//     href: "https://www.danhocking.com.au/indexpage",
//   },
//   {
//     title: "Chintu Bot",
//     description: "Discord Bot's Landing Page",
//     image: null,
//     href: "https://chintubot.netlify.app/",
//   },
//   {
//     title: "Devsnest Lecture",
//     description: "Lecture on Frontend Development",
//     image: null,
//     href: "https://www.youtube.com/watch?v=j1xsalZjYQw",
//   },
//   {
//     title: "Javascript 30",
//     description: "#30daysofjavascript",
//     image: null,
//     href: "https://programmerPriyank.me/JavaScript30/",
//   },
];

export const projects = raw.map((project) => ({
  ...project,
  type: linkType(project.href),
}));

export const featuredProjects = projects.filter((project) =>
  Boolean(project.image),
);
export const otherProjects = projects.filter((project) => !project.image);
