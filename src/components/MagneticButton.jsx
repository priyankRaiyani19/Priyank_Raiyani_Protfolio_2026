import { useMagnetic } from "../hooks/useMagnetic";

/**
 * Wraps an <a> or <button> with a subtle magnetic pull toward the cursor.
 * Renders as an <a> when `href` is given, otherwise a <button>.
 */
export function MagneticButton({ href, className = "", children, strength = 0.35, ...rest }) {
	const ref = useMagnetic(strength);
	const classes = `magnetic ${className}`.trim();

	if (href) {
		return (
			<a ref={ref} href={href} className={classes} {...rest}>
				<span className="magnetic-inner">{children}</span>
			</a>
		);
	}

	return (
		<button ref={ref} type="button" className={classes} {...rest}>
			<span className="magnetic-inner">{children}</span>
		</button>
	);
}

export default MagneticButton;
