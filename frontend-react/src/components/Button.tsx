interface Props {
	label: string;
	color?: "primary" | "secondary" | "danger" | "warning" | "outline-secondary";
	onClick: () => void;
	heightPctg?: number | string;
	widthPctg?: number | string;
	fontSize?: number;
}

const Button = ({ label="Button", color="primary", onClick=() => {}, heightPctg=1, widthPctg=1, fontSize=20 }: Props) => {
	return (
		<button
			type="button"
			className={"btn btn-" + color}
			onClick={onClick}
			style={{ padding: `${heightPctg}vh ${widthPctg}vw`, fontSize: fontSize }}
		>
			{label}
		</button>
	);
};

export default Button;
