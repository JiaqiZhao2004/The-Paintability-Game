import ReactFlow, {
	Node,
	Edge,
	MiniMap,
	Controls,
	Background,
	NodeMouseHandler
} from "react-flow-renderer";

interface Props {
	nodes: Node[];
	edges: Edge[];
	handleNodeClick: NodeMouseHandler;
}

function Graph({ nodes,  edges, handleNodeClick }: Props) {

	return (
		<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodeClick={handleNodeClick}
				fitView
			>
				<MiniMap />
				<Controls />
				<Background color="#aaa" gap={16} />
			</ReactFlow>
	);
}

export default Graph;
