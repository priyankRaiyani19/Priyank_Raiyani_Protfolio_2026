import { useEffect, useState } from "react";

/**
 * Watches a list of section ids and returns whichever one is currently most
 * visible near the top of the viewport. Backs the active nav-link indicator.
 */
export function useActiveSection(ids) {
	const [active, setActive] = useState(ids[0] ?? "");

	useEffect(() => {
		const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
		if (!elements.length || typeof IntersectionObserver === "undefined") return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: 0 }
		);

		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ids.join(",")]);

	return active;
}

export default useActiveSection;
