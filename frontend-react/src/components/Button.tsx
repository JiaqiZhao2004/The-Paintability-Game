interface Props {
	label: string;
	color?: "primary" | "secondary" | "danger" | "warning";
	onClick: () => void;
	heightPctg?: number | string;
	widthPctg?: number | string;
	fontSize?: number;
}

const Button = ({ label, color, onClick, heightPctg, widthPctg, fontSize }: Props) => {
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
