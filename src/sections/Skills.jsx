import { Icon } from "@iconify/react";

import { Reveal } from "../components/Reveal";
import { skillGroups } from "../data/home";

function SkillIcon({ icon, name }) {
	// Local icon paths (svg/png in /public) vs. Iconify icon names.
	if (icon.startsWith("/")) {
		return <img src={icon} alt="" loading="lazy" />;
	}
	return <Icon icon={icon} aria-hidden="true" />;
}

export function Skills() {
	return (
		<section id="skills">
			<div className="container skills">
				<Reveal as="p" className="eyebrow" animation="fadeInUp">
					Skills
				</Reveal>
				<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
					My Superpowers
				</Reveal>

				<div className="skills-groups">
					{skillGroups.map((group, groupIndex) => (
						<Reveal
							className="skill-group"
							animation="fadeInUp"
							delay={120 + groupIndex * 80}
							key={group.title}
						>
							<h3 className="skill-group-title">{group.title}</h3>
							<div className="skill-chips">
								{group.skills.map((skill) => (
									<div className="skill-chip" key={skill.name}>
										<span className="skill-chip-icon">
											<SkillIcon icon={skill.icon} name={skill.name} />
										</span>
										<span>{skill.name}</span>
									</div>
								))}
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
