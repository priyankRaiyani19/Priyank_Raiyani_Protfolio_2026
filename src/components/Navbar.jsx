import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { navLinks, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolledPast } from "../hooks/useScrolledPast";
import { scrollToHash } from "../utils/scroll";

const SECTION_IDS = navLinks.map((link) => link.hash.replace("#", ""));

export function Navbar() {
	const [open, setOpen] = useState(false);
	const scrolled = useScrolledPast(40);
	const navigate = useNavigate();
	const location = useLocation();
	const navRef = useRef(null);

	const onHome = location.pathname === "/";
	const active = useActiveSection(SECTION_IDS);

	// Close the mobile menu on Escape or on a click outside it.
	useEffect(() => {
		if (!open) return undefined;

		const onKeyDown = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		const onPointerDown = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) setOpen(false);
		};

		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("pointerdown", onPointerDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("pointerdown", onPointerDown);
		};
	}, [open]);

	// Lock body scroll while the mobile menu is open.
	useEffect(() => {
		document.body.classList.toggle("nav-open", open);
		return () => document.body.classList.remove("nav-open");
	}, [open]);

	const handleNavClick = (event, hash) => {
		event.preventDefault();
		setOpen(false);

		if (onHome) {
			scrollToHash(hash);
			window.history.replaceState(null, "", hash);
		} else {
			navigate(`/${hash}`);
		}
	};

	return (
		<nav ref={navRef} className={`navbar${scrolled ? " scrolled" : ""}`}>
			<div className="container navbar-inner">
				<a
					href="/#home"
					className="navbar-brand"
					onClick={(event) => handleNavClick(event, "#home")}
				>
					<span className="mark">P</span>
					<span className="brand-text">{site.owner.split(" ")[0]}</span>
				</a>

				<div id="primary-navigation" className={`navbar-nav${open ? " show" : ""}`}>
					{navLinks.map((link) => {
						const id = link.hash.replace("#", "");
						return (
							<a
								key={link.hash}
								href={`/${link.hash}`}
								className={`nav-item${onHome && active === id ? " is-active" : ""}`}
								onClick={(event) => handleNavClick(event, link.hash)}
							>
								{link.label}
							</a>
						);
					})}
					<a
						href="/#contact"
						className="nav-cta"
						onClick={(event) => handleNavClick(event, "#contact")}
					>
						Let&apos;s Talk
					</a>
				</div>

				<button
					type="button"
					className={`toggle${open ? " is-open" : ""}`}
					aria-expanded={open}
					aria-controls="primary-navigation"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((value) => !value)}
				>
					<span />
					<span />
					<span />
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
