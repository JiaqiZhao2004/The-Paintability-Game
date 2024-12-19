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
	 * @var navigate
	 * @brief Part of react-router-dom to enable redirects to Game Page when a Card is clicked.
	 */
	const navigate = useNavigate();

	return (
		<div className="d-flex flex-column">
			<section className="d-flex flex-column align-items-center justify-content-center text-center vh-100">
				<div className="w-100">
					<Hero title={title} description={description} image={image} />
				</div>
				<div className="container justify-content-center mb-4">
					<a href={"#role-page"} style={{ textDecoration: "none" }}>
						<Button
							className={`me-4`}
							label={"Play"}
							color="dark"
							widthPctg={18}
							heightPctg={120}
						/>
					</a>
					<Button
						label="Tutorial"
						color="outline-secondary"
						onClick={() => navigate("/tutorial")}
						widthPctg={18}
						heightPctg={120}
					/>
				</div>
			</section>
				<section className="vh-100">
					<RolePage />
				</div>
				</section>
		</div>
	);
};
export default HomePage;
