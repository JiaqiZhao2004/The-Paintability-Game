import React, { useCallback, useEffect } from "react";
import ReactFlow, {
	addEdge,
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	Edge,
} from "react-flow-renderer";
import { convertAdjacencyMatrixToGraph } from "../functions/convertAdjacencyMatrixToGraph";

interface Props {
	adjacencyMatrix: number[][];
	onSelectItem: (item: string) => any;
}

function Graph({adjacencyMatrix, onSelectItem }: Props) {

	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	// This effect runs whenever the adjacency matrix updates
	useEffect(() => {
		const { nodes, edges } = convertAdjacencyMatrixToGraph(adjacencyMatrix);
		setNodes(nodes);
		setEdges(edges);
		console.log(edges);
	}, [adjacencyMatrix])

	// const onConnect = useCallback(
	// 	(params: Edge) => setEdges((eds) => addEdge(params, eds)),
	// 	[setEdges]
	// );

	// //   const onNodeClick = (event, node) => {
	// const onNodeClick = (event, node: string) => {
	// 	console.log("Node clicked:", node);
	// 	// Add any custom logic here when a node is clicked
	// };

	return (
		<div style={{ height: 500 }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				// onNodesChange={onNodesChange}
				// onEdgesChange={onEdgesChange}
				// onNodeClick={onNodeClick}
				// onConnect={onConnect}
				fitView
			>
				<MiniMap />
				<Controls />
				<Background color="#aaa" gap={16} />
			</ReactFlow>
		</div>
	);
}

export default Graph;
