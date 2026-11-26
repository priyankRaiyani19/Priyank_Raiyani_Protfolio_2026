import { useEffect, useRef, useState } from "react";

/**
 * Replaces WOW.js. The original markup used `class="wow fadeInUp"` plus a
 * `data-wow-delay` attribute; here an IntersectionObserver adds the animation
 * class once the element scrolls into view, and never removes it.
 */
export function Reveal({
	children,
	animation = "fadeInUp",
	delay = 0,
	className = "",
	as: Tag = "div",
	...rest
}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return undefined;

		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					setVisible(true);
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	const classes = ["reveal", visible ? `is-visible ${animation}` : "", className]
		.filter(Boolean)
		.join(" ");

	return (
		<Tag ref={ref} className={classes} style={{ animationDelay: `${delay}ms` }} {...rest}>
			{children}
		</Tag>
	);
}

export default Reveal;
