import { Reveal } from "../components/Reveal";
import { processSteps } from "../data/home";

export function Process() {
	return (
		<section id="process">
			<div className="container process">
				<div className="section-head">
					<div>
						<Reveal as="p" className="eyebrow" animation="fadeInUp">
							Process
						</Reveal>
						<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
							How I work
						</Reveal>
					</div>
					<Reveal as="p" className="section-sub process-sub" animation="fadeInUp" delay={120}>
						A straightforward path from idea to shipped product — no surprises along the way.
					</Reveal>
				</div>

				<div className="process-rail">
					{processSteps.map((step, index) => (
						<Reveal
							className="process-step"
							animation="fadeInUp"
							delay={120 + index * 80}
							key={step.n}
						>
							<span className="process-n">{step.n}</span>
							<h3>{step.title}</h3>
							<p>{step.body}</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

export default Process;
