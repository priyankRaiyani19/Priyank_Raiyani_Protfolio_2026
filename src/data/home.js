export const typedStrings = ["Hi, I am Priyank.", "I am a Full Stack Developer.", "I Love Coding."];

// Short, factual chips shown near the hero heading.
export const heroHighlights = ["React.js", "Node.js", "Express.js", "MongoDB / MySQL"];

export const aboutCards = [
	{ icon: "mdi:responsive", label: "Responsive", delay: 0 },
	{ icon: "ic:baseline-design-services", label: "Design", delay: 80 },
	{ icon: "ion:rocket-outline", label: "Fast", delay: 160 },
	{ icon: "whh:seo", label: "SEO", delay: 240 },
];

// Categories are sourced from what is actually described in data/experience.js
// (Parsetu GmbH + Elixir Techne), so nothing here is invented.
export const skillGroups = [
	{
		title: "Frontend",
		skills: [
			{ name: "React JS", icon: "/img/skills/reactjs.svg" },
			{ name: "JavaScript", icon: "/img/skills/js.svg" },
			{ name: "TypeScript", icon: "logos:typescript-icon" },
			{ name: "Angular", icon: "/img/skills/angular.png" },
			{ name: "Redux", icon: "logos:redux" },
			{ name: "jQuery", icon: "/img/skills/jquery.svg" },
			{ name: "HTML5", icon: "/img/skills/html-5.svg" },
			{ name: "CSS3", icon: "/img/skills/css3.svg" },
			{ name: "SCSS", icon: "/img/skills/sass.svg" },
			{ name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
			{ name: "Bootstrap", icon: "/img/skills/bootstrap.svg" },
			{ name: "Material UI", icon: "logos:material-ui" },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node.js", icon: "/img/skills/nodejs.png" },
			{ name: "Express.js", icon: "/img/skills/express.png" },
			{ name: "REST APIs", icon: "mdi:api" },
			{ name: "GraphQL", icon: "logos:graphql" },
		],
	},
	{
		title: "Database",
		skills: [
			{ name: "MongoDB", icon: "/img/skills/mongo.png" },
			{ name: "MySQL", icon: "/img/skills/sql.png" },
		],
	},
	{
		title: "Tools",
		skills: [
			{ name: "Git", icon: "logos:git-icon" },
			{ name: "GitHub", icon: "logos:github-icon" },
		],
	},
];

export const skillsFlatCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);

// "How I Work" — the process section. Generic professional workflow, not
// tied to any specific client, so nothing here is invented.
export const processSteps = [
	{
		n: "01",
		title: "Discover",
		body: "Understand the idea, the business behind it, the audience and the real requirements before any code gets written.",
	},
	{
		n: "02",
		title: "Plan",
		body: "Define the feature set, the data model and the technical approach — React on the front end, Node/Express APIs where needed.",
	},
	{
		n: "03",
		title: "Design",
		body: "Shape a clean, responsive interface that matches the brand and holds up on every screen size.",
	},
	{
		n: "04",
		title: "Build",
		body: "Develop the frontend, backend, APIs and integrations, committed in small, reviewable pieces.",
	},
	{
		n: "05",
		title: "Test",
		body: "Check functionality, responsiveness and performance across browsers before anything ships.",
	},
	{
		n: "06",
		title: "Launch",
		body: "Deploy, hand over the finished product, and stay available for fixes and follow-up work.",
	},
];
