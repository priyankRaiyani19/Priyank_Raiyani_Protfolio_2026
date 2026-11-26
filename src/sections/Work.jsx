import { Link } from "react-router-dom";

import { Reveal } from "../components/Reveal";
import { featuredProjects, projects } from "../data/projects";

export function Work() {
	return (
		<section id="work">
			<div className="container work">
				<div className="section-head">
					<div>
						<Reveal as="p" className="eyebrow" animation="fadeInUp">
							Work
						</Reveal>
						<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
							Selected work
						</Reveal>
					</div>
					<Reveal animation="fadeInUp" delay={120}>
						<Link to="/projects" className="btn btn-ghost btn-small">
							View all {projects.length} projects
						</Link>
					</Reveal>
				</div>

				<div className="work-list">
					{featuredProjects.map((project, index) => (
						<Reveal
							className={`work-row${index % 2 === 1 ? " work-row-reverse" : ""}`}
							animation="fadeInUp"
							delay={100}
							key={project.title}
						>
							<a
								href={project.href}
								target="_blank"
								rel="noreferrer noopener"
								className="work-media"
							>
								<img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
								<span className="work-media-arrow" aria-hidden="true">
									<svg viewBox="0 0 24 24" width="20" height="20">
										<path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
							</a>

							<div className="work-copy">
								<span className="work-index">0{index + 1}</span>
								<h3 className="work-title">{project.title}</h3>
								{project.description && <p className="work-desc">{project.description}</p>}
								<a
									href={project.href}
									target="_blank"
									rel="noreferrer noopener"
									className="work-link"
								>
									{project.type === "Source" ? "View source" : "View project"}
									<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
										<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

export default Work;
