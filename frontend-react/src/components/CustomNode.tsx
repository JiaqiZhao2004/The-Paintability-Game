/**
 * @file CustomNode.tsx
 * @brief A React Flow custom node component representing a fortress with dynamic visuals and interactions.
 */

import { Handle, NodeProps, Position } from "react-flow-renderer";
import fortressImg from "../assets/fortress.png";
import fortressTargetedImg from "../assets/fortress_targeted.png";
import fortressProtectedImg from "../assets/fortress_defended.png";

/**
 * @component CustomNode
 * @brief A custom node component for React Flow that includes a dynamic health bar and customizable image.
 *
 * @param {NodeProps} data - The node data provided by React Flow, including health, maxHealth, selection, and isEvilRole state.
 *
 * @details
 * - The component visually represents a fortress node.
 * - It includes:
 *   - A health bar that updates its width and color based on health.
 *   - A conditionally rendered image that changes when the node is clicked, depending on the role of the player.
 *   - Input/output handles for connecting edges.
 * - The node's style and functionality are determined by the `data` prop.
 *
 * @example
 * ```
 * <CustomNode
 *   data={{
 *     health: 75,
 *     maxHealth: 100,
 *     selected: true,
 * 	   isEvilRole: true
 *   }}
 * />
 * ```
 */
const CustomNode = ({ data }: NodeProps) => {
	return (
		<div
			style={{
				width: "100px",
				padding: "5px",
				verticalAlign: "middle",
			}}
		>
			{/* Display health value */}
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
				{/* Dynamic Health Bar */}
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
			
			{/* Fortress Image */}
			<img
				src={data.selected ? (data.isEvilRole ? fortressTargetedImg : fortressProtectedImg) : fortressImg}
				alt="Fortress"
				style={{ width: "110%", height: "auto" }}
			/>

			{/* Source Handle at center*/}
			<Handle
				type="source"
				position={Position.Top}
				style={{
					background: "transparent",
					border: 0,
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				id="center"
			/>

			{/* Target Handle at center*/}
			<Handle
				type="target"
				position={Position.Top}
				style={{
					background: "transparent",
					border: 0,
					color: "transparent",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				id="center"
			/>
		</div>
	);
};

export default CustomNode;
