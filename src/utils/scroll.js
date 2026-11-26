/**
 * Replaces the `document.querySelectorAll('a[href^="#"]')` handler from
 * script.js. Returns true when a matching section was found and scrolled to.
 */
export function scrollToHash(hash) {
	if (!hash) return false;

	const id = hash.startsWith("#") ? hash.slice(1) : hash;
	const target = document.getElementById(id);

	if (!target) return false;

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	target.scrollIntoView({
		behavior: reduced ? "auto" : "smooth",
		block: "center",
	});

	return true;
}
