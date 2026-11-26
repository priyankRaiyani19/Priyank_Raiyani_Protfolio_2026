import { useState } from "react";

import { Reveal } from "../components/Reveal";
import { site, socials } from "../data/site";

const EMPTY = { name: "", message: "" };

export function Contact() {
	const [values, setValues] = useState(EMPTY);
	const [error, setError] = useState("");
	const [sent, setSent] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues((current) => ({ ...current, [name]: value }));
		if (error) setError("");
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const name = values.name.trim();
		const message = values.message.trim();

		if (!name || !message) {
			setError("Add your name and a message before sending.");
			return;
		}

		// Same destination as the original script.js, with the values encoded.
		const text = encodeURIComponent(`Hi I'm ${name}, ${message}`);
		const url = `https://wa.me/${site.whatsapp}?text=${text}`;
		const opened = window.open(url, "_blank", "noopener,noreferrer");

		if (!opened) {
			setError("Your browser blocked the WhatsApp window. Allow pop-ups and send again.");
			return;
		}

		setValues(EMPTY);
		setSent(true);
	};

	return (
		<section className="bg" id="contact">
			<div className="container contact">
				<Reveal as="p" className="eyebrow" animation="fadeInUp">
					Contact
				</Reveal>
				<Reveal as="h2" className="section-heading" animation="fadeInUp" delay={80}>
					Have a project in mind?
				</Reveal>
				<Reveal as="p" className="section-sub" animation="fadeInUp" delay={120}>
					I&apos;m open to freelance work, collaborations and full-time roles. Send a message and
					I&apos;ll get back to you.
				</Reveal>

				<div className="contact-grid">
					<Reveal className="contact-form-card" animation="fadeInUp" delay={160}>
						<form className="form" onSubmit={handleSubmit} noValidate>
							<h3>Let&apos;s Chat</h3>

							<div className="field">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									value={values.name}
									onChange={handleChange}
									autoComplete="name"
									placeholder="Your name"
									required
								/>
							</div>

							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									value={values.message}
									onChange={handleChange}
									placeholder="Tell me about your project..."
									rows={5}
									required
								/>
							</div>

							{error && (
								<p role="alert" className="form-error">
									{error}
								</p>
							)}
							{sent && !error && (
								<p role="status" className="form-success">
									Opening WhatsApp — thanks for reaching out!
								</p>
							)}

							<button type="submit" className="btn btn-primary">
								Send on WhatsApp
							</button>
						</form>
					</Reveal>

					<Reveal className="contact-side" animation="fadeInUp" delay={220}>
						<a href={`mailto:${site.email}`} className="contact-email">
							<span className="label">Email</span>
							<span className="value">{site.email}</span>
						</a>

						<div className="contact-socials">
							<span className="label">Find me on</span>
							<div className="contact-social-list">
								{socials.map((social) => (
									<a
										key={social.name}
										href={social.href}
										title={social.title}
										target="_blank"
										rel="noreferrer noopener"
										className="contact-social"
									>
										<img src={social.icon} alt={`${social.name} profile`} />
										<span>{social.name}</span>
									</a>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

export default Contact;
