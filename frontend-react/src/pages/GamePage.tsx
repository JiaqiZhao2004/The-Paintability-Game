import Header from "../components/Header";
import Graph from "../components/Graph";

const GamePage = () => {
	const items = ["Home", "Tutorial", "Play"];
	const onSelectItem = (item: string) => console.log(item);
	return (
		<>
			<Header
				title="The Paintability Game"
				items={items}
				onSelectItem={onSelectItem}
				image={undefined}
			/>
			<Graph
				adjacencyMatrix={[
					[0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 1, 1],
					[0, 0, 0, 1, 1, 1],
					[1, 1, 1, 0, 0, 0],
					[1, 1, 1, 0, 0, 0],
					[1, 1, 1, 0, 0, 0],
				]}
				onSelectItem={onSelectItem}
			/>
		</>
	);
};
export default GamePage;
