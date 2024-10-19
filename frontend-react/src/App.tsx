// import StartPage from "./pages/StartPage";
import ReactLogo from "./assets/react.svg"; // adjust the path according to your file structure
import GamePage from "./pages/GamePage";
import Header from "./components/Header";
import RolePage from "./pages/RolePage";
import { useState } from "react";
import StartPage from "./pages/StartPage";
function App() {
	const items = ["Home", "Tutorial", "Play"]; // elements in the header
	const redirects = ["home", "tutorial", "play"]; // corresponding url endpoints
	const [page, setPage] = useState(0);

	return (
		<>
			{page != 0 && (
				<Header
					title="The Paintability Game"
					items={items}
					redirects={redirects}
					selectedIndex={page}
					image={undefined}
				/>
			)}
			{page === 0 && (
				<StartPage
					title="The Paintability Game"
					description="A single-player strategy game based on graph theory."
					onClickTutorial={() => setPage(1)}
					onClickPlay={() => setPage(2)}
					image={ReactLogo}
				/>
			)}
			{page === 2 && <GamePage/>}
		</>
	);
}

export default App;
