import Header from "../components/Header";

const GamePage = () => {
  const items = ["Home", "Tutorial", "Play"];
  const onSelectItem = (item: string) => (console.log(item));
  return <Header
    title="The Paintability Game"
    items={items}
    onSelectItem={onSelectItem}
    image={undefined}
  />;
};
export default GamePage;
