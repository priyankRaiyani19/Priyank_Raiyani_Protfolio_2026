import { useEffect, useState } from "react";

export function useScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let frame = null;

		const onScroll = () => {
			if (frame !== null) return;
			frame = window.requestAnimationFrame(() => {
				frame = null;
				const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
				const max = scrollHeight - clientHeight;
				setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
			});
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame !== null) window.cancelAnimationFrame(frame);
		};
	}, []);

	return progress;
}

export default useScrollProgress;
