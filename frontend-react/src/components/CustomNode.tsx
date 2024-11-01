import { Handle, NodeProps, Position } from "react-flow-renderer";
import fortressImg from '../assets/fortress.png';

const CustomNode = ({ data }: NodeProps) => {
	return (
		<div style={{ 
			width: '100px',  // Set a fixed width for the node
            padding: '10px', 
            border: '1px solid black', 
            borderRadius: '8px', 
            // backgroundColor: data.color || 'lightgray' 
        }}>
			<img src={fortressImg} alt="Fortress" style={{ width: '100%', height: '100%' }} />
			{/* <strong>{data.label}</strong> */}
			<strong>Health: {data.health}</strong>
			{/* <div>Safe: {data.safe}</div> */}

			{/* Handle components for connections */}
			<Handle
				type="source"
				position={Position.Top} // Position.Top is used, but we're overriding the style
				style={{
					background: "#555",
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
