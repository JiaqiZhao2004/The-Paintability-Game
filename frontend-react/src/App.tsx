import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ReactLogo from "./assets/react.svg";
import HomePage from "./pages/HomePage";
import TutorialPage from "./pages/TutorialPage";
import GamePage from "./pages/GamePage";
// import { useState } from "react";

function App() {
	// const [numNodes, setNumNodes] = useState(7);
	// const [edgeDensity, setEdgeDensity] = useState(0.6);
	const numNodes = 6;
	const edgeDensity = 0.5;

	return (
		<Router>
			<Routes>
				<Route
					path="/home"
					element={
						<HomePage
							title="The Paintability Game"
							description="A single-player strategy game based on graph theory."
							image={ReactLogo}
						/>
					}
				/>
				<Route path="/tutorial" element={<TutorialPage inSideBar={false} />} />
				<Route
					path="/play/evil"
					element={<GamePage n={numNodes} p={edgeDensity} isEvilRole={true} />}
				/>
				<Route
					path="/play/police"
					element={<GamePage n={numNodes} p={edgeDensity} isEvilRole={false} />}
				/>

				<Route
					path="/play/random"
					element={
						<GamePage
							n={numNodes}
							p={edgeDensity}
							isEvilRole={Math.random() > 0.5}
						/>
					}
				/>

				{/* Catch-all route for undefined paths */}
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	);
}

export default App;
