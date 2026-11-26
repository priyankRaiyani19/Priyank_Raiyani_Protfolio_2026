import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { CursorGlow } from "./components/CursorGlow";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";
import { scrollToHash } from "./utils/scroll";

function ScrollManager() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			window.scrollTo(0, 0);
			return undefined;
		}

		// Sections mount with the route, so retry briefly until the target exists.
		let attempts = 0;
		const timer = setInterval(() => {
			attempts += 1;
			if (scrollToHash(hash) || attempts > 20) clearInterval(timer);
		}, 50);

		return () => clearInterval(timer);
	}, [pathname, hash]);

	return null;
}

export function App() {
	return (
		<>
			<a className="skip-link visually-hidden" href="#main">
				Skip to content
			</a>

			<ScrollManager />
			<ScrollProgress />
			<CursorGlow />
			<Navbar />

			<main id="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>

			<Footer />
		</>
	);
}

export default App;
