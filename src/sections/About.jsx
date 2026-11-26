import { Icon } from "@iconify/react";

import { Reveal } from "../components/Reveal";
import { experience } from "../data/experience";
import { aboutCards, skillsFlatCount } from "../data/home";
import { projects } from "../data/projects";
import { site } from "../data/site";

const stats = [
	{ value: `${experience.length}`, label: "Professional roles" },
	{ value: `${skillsFlatCount}+`, label: "Technologies used" },
	{ value: `${projects.length}`, label: "Projects shipped" },
];

export function About() {
	return (
		<section id="about">
			<div className="container about">
				<Reveal as="p" className="eyebrow" animation="fadeInUp">
					About
				</Reveal>
				<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
					A developer who cares about the details.
				</Reveal>

				<div className="about-grid">
					<Reveal className="about-text" animation="fadeInUp" delay={140}>
						<p>
							I&apos;m {site.firstName}, a {site.role.toLowerCase()} building interfaces and
							APIs with React, Node.js and Express. At Parsetu GmbH I work on SetuMES, a
							manufacturing execution platform, handling everything from responsive React
							interfaces to REST APIs, MongoDB/MySQL data and production workflows.
						</p>
						<p>
							Before that, as a frontend developer intern at Elixir Techne, I built reusable
							interfaces with React, TypeScript and Tailwind CSS, and connected them to REST
							and GraphQL services. Outside of client and product work, I take on freelance
							builds — landing pages, portfolios and small web apps — end to end.
						</p>

						<div className="about-stats">
							{stats.map((stat) => (
								<div className="stat" key={stat.label}>
									<span className="stat-value">{stat.value}</span>
									<span className="stat-label">{stat.label}</span>
								</div>
							))}
						</div>
					</Reveal>

					<div className="about-cards">
						{aboutCards.map((card, index) => (
							<Reveal
								className="about-card"
								animation="fadeInUp"
								delay={200 + index * 90}
								key={card.label}
							>
								<Icon icon={card.icon} aria-hidden="true" />
								<p>{card.label}</p>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
