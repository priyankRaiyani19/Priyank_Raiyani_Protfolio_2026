import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Drop-in replacement for the `typed.js` instance in the original script.js.
 * Original options: typeSpeed 40, backSpeed 10, loop true.
 */
export function useTypewriter(
	strings,
	{ typeSpeed = 40, backSpeed = 10, backDelay = 1500, startDelay = 300, loop = true } = {}
) {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const started = useRef(false);
	const reducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (reducedMotion || !strings.length) return undefined;

		const full = strings[index % strings.length];
		const atEnd = !deleting && text === full;
		const atStart = deleting && text === "";

		let delay;
		if (!started.current) delay = startDelay;
		else if (atEnd) delay = backDelay;
		else delay = deleting ? backSpeed : typeSpeed;

		// Finished the last string with looping off — stop here.
		if (atEnd && !loop && index === strings.length - 1) return undefined;

		const timer = setTimeout(() => {
			started.current = true;

			if (atEnd) {
				setDeleting(true);
			} else if (atStart) {
				setDeleting(false);
				setIndex((value) => (value + 1) % strings.length);
			} else {
				setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
			}
		}, delay);

		return () => clearTimeout(timer);
	}, [text, index, deleting, strings, typeSpeed, backSpeed, backDelay, startDelay, loop, reducedMotion]);

	// With reduced motion the animation is skipped and the first line is shown outright.
	return reducedMotion ? strings[0] ?? "" : text;
}
