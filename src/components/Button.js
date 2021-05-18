import propTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
	return (
		<button onClick={onClick} style={{ backgroundColor: color }} className="btn">
			{text}
		</button>
	);
};
Button.defaultProps = {
	color: 'steelblue',
};
Button.prototypes = {
	color: propTypes.string,
	text: propTypes.string,
	onClick: propTypes.func.isRequired,
};
export default Button;
