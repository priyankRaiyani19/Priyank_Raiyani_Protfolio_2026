import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * A small glow that follows the pointer on fine-pointer (mouse/trackpad)
 * desktops only. It never intercepts clicks (pointer-events: none) and is
 * fully skipped on touch devices or when reduced motion is requested.
 */
export function CursorGlow() {
	const dotRef = useRef(null);
	const ringRef = useRef(null);
	const [enabled, setEnabled] = useState(false);
	const reducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		const fine = window.matchMedia("(pointer: fine)").matches;
		setEnabled(fine && !reducedMotion);
	}, [reducedMotion]);

	useEffect(() => {
		if (!enabled) return undefined;

		let ringX = window.innerWidth / 2;
		let ringY = window.innerHeight / 2;
		let targetX = ringX;
		let targetY = ringY;
		let frame;

		const onMove = (event) => {
			targetX = event.clientX;
			targetY = event.clientY;
			if (dotRef.current) {
				dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
			}
		};

		const onDown = () => ringRef.current?.classList.add("is-active");
		const onUp = () => ringRef.current?.classList.remove("is-active");

		const onOverInteractive = (event) => {
			const interactive = event.target.closest("a, button, input, textarea, [role='button']");
			ringRef.current?.classList.toggle("is-hover", Boolean(interactive));
		};

		const tick = () => {
			ringX += (targetX - ringX) * 0.18;
			ringY += (targetY - ringY) * 0.18;
			if (ringRef.current) {
				ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
			}
			frame = window.requestAnimationFrame(tick);
		};

		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointermove", onOverInteractive);
		window.addEventListener("pointerdown", onDown);
		window.addEventListener("pointerup", onUp);
		frame = window.requestAnimationFrame(tick);

		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointermove", onOverInteractive);
			window.removeEventListener("pointerdown", onDown);
			window.removeEventListener("pointerup", onUp);
			window.cancelAnimationFrame(frame);
		};
	}, [enabled]);

	if (!enabled) return null;

	return (
		<>
			<div ref={ringRef} className="cursor-ring" aria-hidden="true" />
			<div ref={dotRef} className="cursor-dot" aria-hidden="true" />
		</>
	);
}

export default CursorGlow;
