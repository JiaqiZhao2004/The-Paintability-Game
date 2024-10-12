import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
	addEdge,
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	Edge,
	NodeMouseHandler,
} from "react-flow-renderer";
import { convertAdjacencyMatrixToGraph } from "../functions/convertAdjacencyMatrixToGraph";
import Button from "./Button";

interface Props {
	adjacencyMatrix: number[][];
	onSelectItem: (item: string) => any;
}

function Graph({ adjacencyMatrix, onSelectItem }: Props) {
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

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
		console.log("Selected nodes:", selectedNodes);

		setNodes((prevNodes) =>
			prevNodes.map((n) => {
				let includes = selectedNodes.includes(n.id);
				return {
					...n,
					active: includes,
					style: {
						backgroundColor: includes ? "black" : "white",
						color: includes ? "white" : "black"
					},
				};
			})
		);
	}, [selectedNodes]);

	const handleSubmit = () => {
		// send request
		setSelectedNodes([]);
	};

	// append the id of the node clicked into selectedNodes[]. if it exists already, remove it.
	const handleNodeClick: NodeMouseHandler = (_, node) => {
		setSelectedNodes((prevNodes) => {
			if (prevNodes.includes(node.id)) {
				return prevNodes.filter((nodeId) => nodeId != node.id);
			} else {
				return [...prevNodes, node.id];
			}
		});
	};

	return (
		<div style={{ height: 500 }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				// onNodesChange={onNodesChange}
				// onEdgesChange={onEdgesChange}
				onNodeClick={handleNodeClick}
				// onConnect={onConnect}
				fitView
			>
				<MiniMap />
				<Controls />
				<Background color="#aaa" gap={16} />
			</ReactFlow>

			<Button
				label="End Turn"
				color="warning"
				onClick={handleSubmit}
				heightPctg={2}
				widthPctg={10}
			/>
		</div>
	);
}

export default Graph;
