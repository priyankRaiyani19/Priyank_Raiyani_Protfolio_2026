import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Subtle "magnetic" pull toward the cursor, fine-pointer desktop only.
 * Attach the returned ref to any button/link. Never affects touch or
 * reduced-motion users, and never blocks the element's own click handler.
 */
export function useMagnetic(strength = 0.35) {
	const ref = useRef(null);
	const reducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (reducedMotion) return undefined;
		const fine = window.matchMedia("(pointer: fine)").matches;
		if (!fine) return undefined;

		const el = ref.current;
		if (!el) return undefined;

		const onMove = (event) => {
			const rect = el.getBoundingClientRect();
			const x = event.clientX - (rect.left + rect.width / 2);
			const y = event.clientY - (rect.top + rect.height / 2);
			el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
		};

		const onLeave = () => {
			el.style.transform = "translate(0, 0)";
		};

		el.addEventListener("pointermove", onMove);
		el.addEventListener("pointerleave", onLeave);

		return () => {
			el.removeEventListener("pointermove", onMove);
			el.removeEventListener("pointerleave", onLeave);
		};
	}, [reducedMotion, strength]);

	return ref;
}

export default useMagnetic;
