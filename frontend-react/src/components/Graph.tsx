import ReactFlow, {
	Node,
	Edge,
	MiniMap,
	Controls,
	Background,
	NodeMouseHandler
} from "react-flow-renderer";
import CustomNode from "./CustomNode";

interface Props {
	nodes: Node[];
	edges: Edge[];
	handleNodeClick: NodeMouseHandler;
}

const nodeTypes = {
    customNode: CustomNode,
};

function Graph({ nodes,  edges, handleNodeClick }: Props) {

	return (
		<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
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
