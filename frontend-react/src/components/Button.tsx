interface Props {
	className?: string;
	label: string;
	color?: "primary" | "secondary" | "danger" | "warning" | "outline-secondary";
	onClick: () => void;
	heightPctg?: number | string;
	widthPctg?: number | string;
	fontSize?: number;
}

const Button = ({
	className = "",
	label = "Button",
	color = "primary",
	onClick = () => {},
	heightPctg = 100,
	widthPctg = 100,
	fontSize = 20,
}: Props) => {
	return (
		<button
			type="button"
			className={`btn btn-${color} ${className}`}
			onClick={onClick}
			style={{
				width: `${widthPctg}%`,
				height: `${heightPctg}%`,
				fontSize: fontSize,
			}}
		>
			{label}
		</button>
	);
};

export default Button;
