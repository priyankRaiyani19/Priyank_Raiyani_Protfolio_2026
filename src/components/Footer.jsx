import { BackToTop } from "./BackToTop";
import { navLinks, site, socials } from "../data/site";
import { scrollToHash } from "../utils/scroll";

export function Footer() {
	const handleNavClick = (event, hash) => {
		if (window.location.pathname !== "/") return;
		event.preventDefault();
		scrollToHash(hash);
		window.history.replaceState(null, "", hash);
	};

	return (
		<footer>
			<div className="container footer-inner">
				<div className="footer-brand">
					<a href="/#home" className="footer-logo" onClick={(event) => handleNavClick(event, "#home")}>
						<span className="mark">P</span>
						{site.owner}
					</a>
					<p>{site.tagline}</p>
				</div>

				<nav className="footer-nav" aria-label="Footer">
					{navLinks.map((link) => (
						<a key={link.hash} href={`/${link.hash}`} onClick={(event) => handleNavClick(event, link.hash)}>
							{link.label}
						</a>
					))}
				</nav>

				<div className="footer-socials">
					{socials.map((social) => (
						<a
							key={social.name}
							title={social.title}
							target="_blank"
							rel="noreferrer noopener"
							href={social.href}
							className="soc"
						>
							<img src={social.icon} alt={`${social.name} profile`} className={social.className} />
						</a>
					))}
				</div>
			</div>

			<div className="copyright">
				<span>
					{site.owner} &copy; {site.year}
				</span>
			</div>

			<BackToTop />
		</footer>
	);
}

export default Footer;
