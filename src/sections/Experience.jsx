import { Reveal } from "../components/Reveal";
import { experience } from "../data/experience";

export function Experience() {
	return (
		<section id="experience">
			<div className="container experience">
				<Reveal as="p" className="eyebrow" animation="fadeInUp">
					Experience
				</Reveal>
				<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
					Where I&apos;ve Worked
				</Reveal>

				<div className="timeline">
					{experience.map((job, index) => (
						<Reveal
							className="timeline-item"
							animation="fadeInUp"
							delay={120 + index * 120}
							key={`${job.company}-${job.period}`}
						>
							<div className="timeline-marker" aria-hidden="true">
								<span className="timeline-dot" />
								{index !== experience.length - 1 && <span className="timeline-line" />}
							</div>

							<div className="timeline-content">
								<div className="timeline-head">
									<h3>{job.role}</h3>
									<span className="timeline-period">{job.period}</span>
								</div>
								<p className="timeline-company">{job.company}</p>

								{job.points.length > 0 && (
									<ul>
										{job.points.map((point) => (
											<li key={point}>{point}</li>
										))}
									</ul>
								)}
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

export default Experience;
