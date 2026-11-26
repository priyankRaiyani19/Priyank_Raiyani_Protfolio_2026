import { useEffect, useRef } from "react";

import { MagneticButton } from "../components/MagneticButton";
import { heroHighlights, typedStrings } from "../data/home";
import { site, socials } from "../data/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTypewriter } from "../hooks/useTypewriter";

const SOCIAL_ORDER = ["Github", "LinkedIn", "Instagram", "Facebook"];

export function 	Hero() {
	const typed = useTypewriter(typedStrings, { typeSpeed: 40, backSpeed: 10, loop: true });
	const reducedMotion = usePrefersReducedMotion();
	const stageRef = useRef(null);

	// Very subtle parallax tilt on the hero visual, desktop pointer only.
	useEffect(() => {
		if (reducedMotion) return undefined;
		const fine = window.matchMedia("(pointer: fine)").matches;
		if (!fine) return undefined;

		const stage = stageRef.current;
		if (!stage) return undefined;

		const onMove = (event) => {
			const rect = stage.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width - 0.5;
			const y = (event.clientY - rect.top) / rect.height - 0.5;
			stage.style.setProperty("--tiltX", `${(-y * 6).toFixed(2)}deg`);
			stage.style.setProperty("--tiltY", `${(x * 8).toFixed(2)}deg`);
		};
		const onLeave = () => {
			stage.style.setProperty("--tiltX", "0deg");
			stage.style.setProperty("--tiltY", "0deg");
		};

		window.addEventListener("pointermove", onMove);
		stage.addEventListener("pointerleave", onLeave);

		return () => {
			window.removeEventListener("pointermove", onMove);
			stage.removeEventListener("pointerleave", onLeave);
		};
	}, [reducedMotion]);

	const socialByName = Object.fromEntries(socials.map((social) => [social.name, social]));

	return (
		<section className="hero" id="home">
			<div className="hero-bg" aria-hidden="true">
				<div className="hero-grid" />
				<div className="hero-mesh" />
			</div>

			<div className="container hero-inner">
				<div className="hero-copy">
					<p className="eyebrow">
						<span className="dot" /> Available for freelance &amp; full-time work
					</p>

					<h2 className="visually-hidden">{typedStrings.join(" ")}</h2>

					<h1 className="hero-heading" aria-hidden="true">
						<span className="line">{typed}</span>
						<span className="cursor">|</span>
					</h1>

					<p className="hero-lede">{site.tagline}</p>

					<div className="hero-stack" aria-label="Core technologies">
						{heroHighlights.map((tech) => (
							<span className="stack-chip" key={tech}>
								{tech}
							</span>
						))}
					</div>

					<div className="hero-actions">
						<MagneticButton href="/#contact" className="btn btn-primary">
							Start a project
							<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
								<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</MagneticButton>
						<a href="/#work" className="btn btn-ghost">
							View selected work
						</a>
					</div>

					<div className="hero-socials">
						{SOCIAL_ORDER.filter((name) => socialByName[name]).map((name) => {
							const social = socialByName[name];
							return (
								<a
									key={social.name}
									href={social.href}
									title={social.title}
									target="_blank"
									rel="noreferrer noopener"
									className="hero-social"
								>
									<img src={social.icon} alt={`${social.name} profile`} />
								</a>
							);
						})}
						<a href={`mailto:${site.email}`} className="hero-social" title="Email me">
							<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
								<path
									d="M4 6h16v12H4z M4 6l8 7 8-7"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</div>
				</div>

				<div className="hero-visual" ref={stageRef}>
					<div className="code-panel">
						<div className="code-panel-bar">
							<span className="tl-dot red" />
							<span className="tl-dot yellow" />
							<span className="tl-dot green" />
							<span className="code-panel-title">developer.js</span>
						</div>
						<pre className="code-panel-body">
							<code>
								<span className="tok-kw">const</span> <span className="tok-var">developer</span> = {"{"}
								{"\n"}  name: <span className="tok-str">&apos;{site.firstName}&apos;</span>,{"\n"}  role: <span className="tok-str">&apos;{site.role}&apos;</span>,{"\n"}  stack: [<span className="tok-str">&apos;React&apos;</span>, <span className="tok-str">&apos;Node&apos;</span>, <span className="tok-str">&apos;Express&apos;</span>],{"\n"}  loves: <span className="tok-str">&apos;clean, fast UI&apos;</span>,{"\n"}
								{"}"};{"\n"}
								{"\n"}<span className="tok-kw">export default</span> developer;
							</code>
						</pre>
					</div>
					<div className="floating-badge badge-a">⚛️ React</div>
					<div className="floating-badge badge-b">🟢 Node.js</div>
					<div className="floating-badge badge-c">🍃 MongoDB</div>
				</div>
			</div>

			<a href="/#about" className="scroll-cue" aria-label="Scroll to About section">
				<span />
			</a>
		</section>
	);
}

export default Hero;
