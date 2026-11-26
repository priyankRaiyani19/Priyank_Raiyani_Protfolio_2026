import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";

function initials(title) {
	return title
		.split(" ")
		.map((word) => word[0])
		.filter(Boolean)
		.slice(0, 2)
		.join("")
		.toUpperCase();
}

export function Projects() {
	return (
		<>
			<Seo
				title="Programmer Priyank | Priyank Raiyani | Projects | Web Developer"
				description="Websites, landing pages and side projects built by Priyank — React, Angular, Express.js and vanilla JavaScript work."
				canonical="https://programmerPriyank.me/projects"
			/>

			<section className="projects-page">
				<div className="container">
					<Reveal as="p" className="eyebrow" animation="fadeInUp">
						Work
					</Reveal>
					<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
						All Projects
					</Reveal>
					<Reveal as="p" className="section-sub" animation="fadeInUp" delay={120}>
						{projects.length} sites and apps — client work, freelance builds and side projects.
					</Reveal>

					<div className="project-full-grid">
						{projects.map((project, index) => (
							<Reveal
								className="project-tile"
								animation="fadeInUp"
								delay={80 + (index % 4) * 90}
								key={`${project.title}-${project.href}`}
							>
								<a
									href={project.href}
									target="_blank"
									rel="noreferrer noopener"
									className="project-tile-link"
								>
									<div className="project-tile-media">
										{project.image ? (
											<img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
										) : (
											<span className="project-tile-fallback" aria-hidden="true">
												{initials(project.title)}
											</span>
										)}
										<div className="project-tile-overlay">
											<span className="project-cta">
												{project.type}
												<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
													<path
														d="M7 17L17 7M9 7h8v8"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
										</div>
									</div>
									<div className="project-tile-info">
										<h3>{project.title}</h3>
										{project.description && <p>{project.description}</p>}
									</div>
								</a>
							</Reveal>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
