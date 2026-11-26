import { useEffect } from "react";

function setMeta(attribute, key, value) {
	if (!value) return;

	let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

	if (!tag) {
		tag = document.createElement("meta");
		tag.setAttribute(attribute, key);
		document.head.appendChild(tag);
	}

	tag.setAttribute("content", value);
}

/**
 * Small stand-in for react-helmet. Each route renders one of these to keep the
 * per-page <title> and description the multi-page original had.
 */
export function Seo({ title, description, canonical }) {
	useEffect(() => {
		if (title) document.title = title;

		setMeta("name", "description", description);
		setMeta("property", "og:title", title);
		setMeta("property", "og:description", description);
		setMeta("name", "twitter:description", description);

		if (canonical) {
			let link = document.head.querySelector('link[rel="canonical"]');
			if (!link) {
				link = document.createElement("link");
				link.rel = "canonical";
				document.head.appendChild(link);
			}
			link.href = canonical;
		}
	}, [title, description, canonical]);

	return null;
}

export default Seo;
