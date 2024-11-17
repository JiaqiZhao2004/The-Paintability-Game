// import StartPage from "./pages/StartPage";
import ReactLogo from "./assets/react.svg"; // adjust the path according to your file structure
import GamePage from "./pages/GamePage";
import { useState } from "react";
import StartPage from "./pages/StartPage";
function App() {

	const [page, setPage] = useState(2);

	let K33: number[][] = [[0,0,0,1,1,1], [0,0,0,1,1,1], [0,0,0,1,1,1], [1,1,1,0,0,0], [1,1,1,0,0,0], [1,1,1,0,0,0]];
	let K33_List: number[] = [2,2,2,2,2,2];

	return (
		<>
			{page === 0 && (
				<StartPage
					title="The Paintability Game"
					description="A single-player strategy game based on graph theory."
					onClickTutorial={() => setPage(1)}
					onClickPlay={() => {}}
					image={ReactLogo}
				/>
			)}
			{page === 2 && <GamePage vL={K33_List} aM={K33}  />}
		</>
	);
}

export default App;
