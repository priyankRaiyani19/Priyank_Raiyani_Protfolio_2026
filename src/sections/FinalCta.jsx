import { MagneticButton } from "../components/MagneticButton";
import { Reveal } from "../components/Reveal";

export function FinalCta() {
	return (
		<section className="final-cta" aria-labelledby="final-cta-heading">
			<div className="final-cta-glow" aria-hidden="true" />
			<div className="container final-cta-inner">
				<Reveal as="p" className="eyebrow" animation="fadeInUp">
					<span className="dot" /> Available for freelance work
				</Reveal>

				<Reveal animation="fadeInUp" delay={80}>
					<h2 id="final-cta-heading" className="final-cta-heading">
						Your idea.
						<br />
						My code.
						<br />
						<span className="accent-text">Let&apos;s build it.</span>
					</h2>
				</Reveal>

				<Reveal as="p" className="final-cta-sub" animation="fadeInUp" delay={140}>
					Tell me what you&apos;re building and I&apos;ll tell you what it takes to ship it.
				</Reveal>

				<Reveal animation="fadeInUp" delay={200}>
					<MagneticButton href="/#contact" className="btn btn-primary btn-lg">
						Start a project
						<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
							<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</MagneticButton>
				</Reveal>
			</div>
		</section>
	);
}

export default FinalCta;
