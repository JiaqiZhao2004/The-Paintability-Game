import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReactLogo from "./assets/react.svg";
import GamePage from "./pages/GamePage";
import { useState } from "react";

function App() {
	const [numNodes, setNumNodes] = useState(6);
	const [edgeDensity, setEdgeDensity] = useState(0.5);
	const [isEvilRole, setIsEvilRole] = useState(false);

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
							onClickEvilCard={() => setIsEvilRole(true)}
							onClickPoliceCard={() => setIsEvilRole(false)}
							onClickRandomCard={() => setIsEvilRole(Math.random() > 0.5)}
							image={ReactLogo}
						/>
					}
				/>
				{/* <Route path="/tutorial" element={} /> */}
				<Route
					path="/play"
					element={
						<GamePage n={numNodes} p={edgeDensity} isEvilRole={isEvilRole} />
					}
				/>

				{/* Catch-all route for undefined paths */}
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	);
}

export default App;
