import { Reveal } from "../components/Reveal";
import { site } from "../data/site";
import { useExternalScript } from "../hooks/useExternalScript";

/**
 * `<codersrank-activity>` is a custom element, so React passes these attributes
 * straight through to the DOM. The defining script ships with the project and
 * is loaded from /public/vendor.
 */
export function Activities() {
	const status = useExternalScript("/vendor/codersrank-activity.min.js");

	if (status === "error") return null;

	return (
		<section>
			<div className="container activities">
				<Reveal as="p" className="eyebrow" animation="fadeInUp">
					Activity
				</Reveal>
				<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
					Coding Activity
				</Reveal>

				<Reveal className="activities-panel" animation="fadeInUp" delay={140}>
					<codersrank-activity
						username={site.codersrankUsername}
						branding="false"
						labels=""
						tooltip=""
						weeks=""
					/>
				</Reveal>
			</div>
		</section>
	);
}

export default Activities;
