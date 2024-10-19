import { useEffect, useState } from "react";
import Graph from "../components/Graph";
import {
	useNodesState,
	useEdgesState,
	NodeMouseHandler,
} from "react-flow-renderer";
import { convertAdjacencyMatrixToGraph } from "../functions/convertAdjacencyMatrixToGraph";
import Button from "../components/Button";
import useFetchAdjacencyMatrix from "../hooks/useFetchAdjacencyMatrix";


const GamePage = () => {
	// Get initial random adjacency matrix
	const [adjacencyMatrix, setAdjacencyMatrix] = useFetchAdjacencyMatrix(
		"http://localhost:5173/mockAdjacencyMatrix.json"
	);

	const [nodes, setNodes] = useNodesState([]);
	const [edges, setEdges] = useEdgesState([]);
	const [selectedNodeIds, setSelectedNodeIds] = useState<Set<string>>(new Set());

	// This effect runs whenever the adjacency matrix updates
	useEffect(() => {
		const { nodes, edges } = convertAdjacencyMatrixToGraph(
			adjacencyMatrix,
			"default"
		);
		setNodes(nodes);
		setEdges(edges);
		console.log(edges);
	}, [adjacencyMatrix]);

	useEffect(() => {
		console.log("Selected nodes:", selectedNodeIds);

		setNodes((prevNodes) =>
			prevNodes.map((n) => {
				let includes = selectedNodeIds.has(n.id);
				return {
					...n,
					active: includes,
					style: {
						...n.style,
						backgroundColor: includes ? "black" : "white",
						color: includes ? "white" : "black",
					},
				};
			})
		);
	}, [selectedNodeIds]);

	const handleSubmit = () => {
		// send request
		setSelectedNodeIds(new Set());
	};

	// append the id of the node clicked into selectedNodes[]. if it exists already, remove it.
	const handleNodeClick: NodeMouseHandler = (_, node) => {
		setSelectedNodeIds((prevSelectedNodeIds) => {
			const newSelectedNodeIds = new Set(prevSelectedNodeIds);
			if (newSelectedNodeIds.has(node.id)) {
				newSelectedNodeIds.delete(node.id);
			} else {
				newSelectedNodeIds.add(node.id);
			}
			return newSelectedNodeIds;
		});
	};

	return (
		<div
			style={{
				height: "90vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center", // Vertically center all content
				gap: "100px", // Add spacing between elements
				padding: "100px", // Add some padding to the container for spacing
			}}
		>
			<Graph nodes={nodes} edges={edges} handleNodeClick={handleNodeClick} />
			<Button
				label="End Turn"
				color="warning"
				onClick={handleSubmit}
				heightPctg={2}
				widthPctg={10}
			/>{" "}
		</div>
	);
};
export default GamePage;
