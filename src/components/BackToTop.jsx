import { useScrolledPast } from "../hooks/useScrolledPast";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function BackToTop() {
	const visible = useScrolledPast(600);
	const reducedMotion = usePrefersReducedMotion();

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
	};

	return (
		<button
			type="button"
			className={`back-to-top${visible ? " is-visible" : ""}`}
			onClick={handleClick}
			aria-label="Back to top"
			tabIndex={visible ? 0 : -1}
		>
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
				<path
					d="M12 5l-7 7h4.5v7h5v-7H19z"
					fill="currentColor"
				/>
			</svg>
		</button>
	);
}

export default BackToTop;
