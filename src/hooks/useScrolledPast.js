import { useEffect, useState } from "react";

/**
 * Replaces the `window.addEventListener("scroll", ...)` block in script.js that
 * mutated navbar inline styles. Returns true once the page is scrolled past
 * `offset` pixels; the Navbar turns that into a CSS class.
 */
export function useScrolledPast(offset = 100) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		let frame = null;

		const onScroll = () => {
			if (frame !== null) return;
			frame = window.requestAnimationFrame(() => {
				frame = null;
				setScrolled(window.pageYOffset > offset);
			});
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame !== null) window.cancelAnimationFrame(frame);
		};
	}, [offset]);

	return scrolled;
}
