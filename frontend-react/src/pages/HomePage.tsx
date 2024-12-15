/**
 * @file HomePage.tsx
 * @class HomePage
 * @brief Renders the main starting page for "The Paintability Game."
 *
 * The `HomePage` component serves as the entry point of the game, allowing users to:
 * - View the title and description of the game.
 * - Navigate to the role selection screen.
 * - Access the tutorial for the game.
 *
 * Dependencies:
 * - Button: Custom button component for user interaction.
 * - Hero: Component for displaying the title, description, and optional image.
 * - RolePage: Component to display available roles for the game.
 *
 * @module HomePage
 */

import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import RolePage from "./RolePage";
import { useNavigate } from "react-router-dom";

interface Props {
	/**
	 * @property {string} title
	 * @brief The main title displayed on the HomePage.
	 */
	title: string;

	/**
	 * @property {string} description
	 * @brief A brief description of the game displayed on the HomePage.
	 */
	description: string;

	/**
	 * @property {string | undefined} image
	 * @brief Path to an optional image displayed on the Hero component.
	 */
	image: string | undefined;
}

/**
 * @function HomePage
 * @brief Renders the HomePage component with role selection and tutorial options.
 *
 * @details
 * This component includes:
 * - A hero section displaying the game's title, description, and an optional image.
 * - Buttons to navigate to the tutorial or role selection screen.
 * - Conditional rendering of the RolePage when role selection is enabled.
 *
 * **Structure:**
 * - **Hero Section:** Displays the game's title, description, and an optional image.
 * - **Buttons:**
 *   - "Play" button toggles the role selection screen.
 *   - "Tutorial" button redirects to tutorial page.
 * - **RolePage:** Dynamically displayed below the buttons when role selection is active.
 *
 * @param {Props} props - Properties passed to the HomePage component.
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = ({ title, description, image = undefined }: Props) => {
	/**
	 * @var {boolean} showRoleSelection
	 * @brief State variable to toggle whether to show the role selection screen (hidden at first).
	 */
	const [showRoleSelection, setShowRoleSelection] = useState(false);

	/**
	 * @var navigate
	 * @brief Part of react-router-dom to enable redirects to Game Page when a Card is clicked.
	 */
	const navigate = useNavigate();

	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="text-center w-100">
				<Hero
					title={title}
					description={description}
					image={showRoleSelection ? undefined : image}
				/>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					{showRoleSelection ? (
						<Button
							label="Return"
							color="secondary"
							onClick={() => {
								setShowRoleSelection(false);
							}}
							widthPctg={5}
						/>
					) : (
						<Button
							label="Play"
							onClick={() => {
								setShowRoleSelection(true);
							}}
							widthPctg={5}
						/>
					)}
					<Button
						label="Tutorial"
						color="outline-secondary"
						onClick={() => navigate("/tutorial")}
						widthPctg={4}
					/>
				</div>
				{showRoleSelection && <RolePage />}
			</div>
		</div>
	);
};
export default HomePage;
