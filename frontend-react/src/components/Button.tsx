interface Props {
	className?: string;
	label: string;
	color?:
		| "primary"
		| "secondary"
		| "danger"
		| "warning"
		| "outline-secondary"
		| "outline-dark"
		| "dark";
	onClick?: () => void;
}

const Button = ({
	className = "",
	label = "Button",
	color = "primary",
	onClick = () => {},
}: Props) => {
	return (
		<button
			type="button"
			className={`btn btn-${color} ${className}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
