import { Handle, NodeProps, Position } from "react-flow-renderer";
import fortressImg from "../assets/fortress.png";
import selectedfortressImg from "../assets/fortress_selected.png";

const CustomNode = ({ data }: NodeProps) => {
	return (
		<div
			style={{
				width: "100px", // Set a fixed width for the node
				padding: "5px",
				verticalAlign: "middle",
			}}
		>
			<strong>Health: {data.health}</strong>
			{/* Health Bar Container */}
			<div
				style={{
					width: "100%",
					height: "8px",
					backgroundColor: "#ddd",
					borderRadius: "1px",
					overflow: "hidden",
				}}
			>
				{/* Health Bar */}
				<div
					style={{
						width: `${(data.health / data.maxHealth) * 100}%`,
						height: "100%",
						backgroundColor:
							(data.health / data.maxHealth) * 100 > 50
								? "green"
								: (data.health / data.maxHealth) * 100 > 20
								? "orange"
								: "red",
					}}
				/>
			</div>

			{/* <div>Safe: {data.safe}</div> */}

			<img
				src={data.selected ? selectedfortressImg : fortressImg}
				alt="Fortress"
				style={{ width: "110%", height: "auto" }}
			/>

			{/* Handle components for connections */}
			<Handle
				type="source"
				position={Position.Top} // Position.Top is used, but we're overriding the style
				style={{
					background: "transparent",
					border: 0,
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)", // Center the handle
				}}
				id="center"
			/>
			<Handle
				type="target"
				position={Position.Top} // Position.Top is used, but we're overriding the style
				style={{
					background: "transparent",
					border: 0,
					color: "transparent",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)", // Center the handle
				}}
				id="center"
			/>
		</div>
	);
};

export default CustomNode;
