import { Link } from "react-router-dom";

import { Seo } from "../components/Seo";

export function NotFound() {
	return (
		<>
			<Seo title="Page not found | Programmer Priyank" description="This page does not exist." />
			<section>
				<div className="container notfound">
					<p className="notfound-code">404</p>
					<h2>Page not found</h2>
					<p>
						That link does not point anywhere. Head back to the{" "}
						<Link to="/">homepage</Link> or browse the <Link to="/projects">projects</Link>.
					</p>
					<Link to="/" className="btn btn-primary">
						Back to home
					</Link>
				</div>
			</section>
		</>
	);
}

export default NotFound;
