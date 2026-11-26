import { useEffect, useState } from "react";

const cache = new Map();

/**
 * Loads a script tag once per URL and reports its status. Used for the
 * CodersRank activity web component, which the original page loaded with a
 * plain <script> tag.
 */
export function useExternalScript(src) {
	const [status, setStatus] = useState(() => (cache.get(src) === "ready" ? "ready" : "loading"));

	useEffect(() => {
		if (!src) return undefined;

		if (cache.get(src) === "ready") {
			setStatus("ready");
			return undefined;
		}

		let element = document.querySelector(`script[src="${src}"]`);

		if (!element) {
			element = document.createElement("script");
			element.src = src;
			element.async = true;
			document.body.appendChild(element);
		}

		const onLoad = () => {
			cache.set(src, "ready");
			setStatus("ready");
		};
		const onError = () => {
			cache.set(src, "error");
			setStatus("error");
		};

		element.addEventListener("load", onLoad);
		element.addEventListener("error", onError);

		return () => {
			element.removeEventListener("load", onLoad);
			element.removeEventListener("error", onError);
		};
	}, [src]);

	return status;
}
