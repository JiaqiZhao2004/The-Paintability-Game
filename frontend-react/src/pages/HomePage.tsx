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

import Button from "../components/Button";
import Hero from "../components/Hero";
import RolePage from "./RolePage";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useEffect } from "react";

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

	/**
	 * @callback scroll
	 * @brief detect when the #hash changes and scroll to the corresponding element.
	 */
	useEffect(() => {
		if (location.hash) {
			const element = document.querySelector(location.hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return (
		<>
			<section className="top-half">
				<div className="hero">
					<Hero title={title} description={description} image={image} />
				</div>
				<div className="button-row">
					<Button
						label={"Play"}
						color="dark"
						onClick={() => (window.location.href = "#role-page")}
					/>
					<Button
						label="Tutorial"
						color="outline-secondary"
						onClick={() => navigate("/tutorial")}
					/>
				</div>
			</section>
			<section className="bottom-half">
				<div className="colored-triangle" />
				<RolePage />
			</section>
		</>
	);
};
export default HomePage;
