import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ReactLogo from "./assets/react.svg"; // adjust the path according to your file structure
import GamePage from "./pages/GamePage";
import { useState } from "react";

function App() {
	const [page, setPage] = useState(2);

	let K33: number[][] = [
		[0, 0, 0, 1, 1, 1],
		[0, 0, 0, 1, 1, 1],
		[0, 0, 0, 1, 1, 1],
		[1, 1, 1, 0, 0, 0],
		[1, 1, 1, 0, 0, 0],
		[1, 1, 1, 0, 0, 0],
	];
	let K33_List: number[] = [2, 2, 2, 2, 2, 2];

	return (
		<Router>
			<Routes>
				<Route
					path="/home"
					element={
						<StartPage
							title="The Paintability Game"
							description="A single-player strategy game based on graph theory."
							onClickTutorial={() => setPage(1)}
							onClickPlay={() => {}}
							image={ReactLogo}
						/>
					}
				/>
				{/* <Route path="/tutorial" element={} /> */}
				<Route path="/game" element={<GamePage vL={K33_List} aM={K33} />} />
			</Routes>
		</Router>
	);
}

export default App;
