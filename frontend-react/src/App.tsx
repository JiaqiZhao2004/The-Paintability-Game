import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReactLogo from "./assets/react.svg";
import GamePage from "./pages/GamePage";

function App() {
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
						<HomePage
							title="The Paintability Game"
							description="A single-player strategy game based on graph theory."
							onClickTutorial={() => {}}
							image={ReactLogo}
						/>
					}
				/>
				{/* <Route path="/tutorial" element={} /> */}
				<Route path="/play" element={<GamePage vL={K33_List} aM={K33} />} />

				{/* Catch-all route for undefined paths */}
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	);
}

export default App;
