import { Handle, NodeProps, Position } from "react-flow-renderer";
import fortressImg from "../assets/fortress.png";

const CustomNode = ({ data }: NodeProps) => {
	return (
		<div
			style={{
				width: "100px", // Set a fixed width for the node
				padding: "10px",
				// border: "1px solid black",
				borderRadius: "8px",
			}}
		>
			<img
				src={fortressImg}
				alt="Fortress"
				style={{ width: "100%", height: "100%" }}
			/>

			{/* Health Bar Container */}
			<div
				style={{
					marginTop: "8px",
					width: "100%",
					height: "10px",
					backgroundColor: "#ddd",
					borderRadius: "5px",
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

			<strong>Health: {data.health}</strong>
			{/* <div>Safe: {data.safe}</div> */}

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
