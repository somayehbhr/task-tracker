import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer>
			<p>Copyright &copy</p>
			<Link to="/about">About</Link>
		</footer>
	);
};
