/**
 * @file RolePage.tsx
 * @class RolePage
 * @brief Role selection page for "The Paintability Game."
 *
 * The RolePage component allows players to select their role in the game.
 * It displays three cards for the available roles: "Evil Mastermind," "Police Enforcement," and "Random Role."
 * Each card provides a brief description of the role and offers a click action for role selection.
 *
 * Dependencies:
 * - Card: Custom component to render individual role cards.
 *
 * @module RolePage
 */

import { useNavigate } from "react-router-dom";
import RoleCard from "../components/RoleCard";
import policeEnforcementImg from "../assets/police-enforcement.jpg";
import evilMastermindImg from "../assets/evil-mastermind.jpg";
import centerFortressImg from "../assets/fortress-center.png";
import "./RolePage.css";

/**
 * @function RolePage
 * @brief Renders the role selection page.
 *
 * @details
 * This page displays a title and three role selection cards, each representing a different player role.
 * Players can click on a card to select their desired role. The roles include:
 * - Evil Mastermind: Choose vertices to commit crimes.
 * - Police Enforcement: Jail vertices while following adjacency restrictions.
 * - Random Role: The game assigns a random role to the player.
 *
 * **Structure:**
 * - Title: "Select Your Role."
 * - Cards: Rendered in a responsive grid layout using Bootstrap classes.
 *
 * @returns {JSX.Element} The rendered role selection page.
 */
const RolePage = () => {
	/**
	 * @var navigate
	 * @brief Part of react-router-dom to enable redirects to Game Page when a Card is clicked.
	 */
	const navigate = useNavigate();

	/**
	 * @var title
	 * @brief The title displayed at the top of the role selection page.
	 */
	const title: string = "Select Your Role";

	/**
	 * @constant EvilMastermindCard
	 * @brief Configuration object for the "Evil Mastermind" role card.
	 *
	 * @property {string} title - Title of the role card.
	 * @property {string} description - Brief description of the role's mechanics.
	 * @property {string} backgroundImg - Placeholder for the card's background image.
	 * @property {function} onClick - Callback function triggered when the card is clicked.
	 */
	const EvilMastermindCard = {
		title: "Evil Mastermind",
		description: "Select vertices to attack each turn.",
		backgroundImg: evilMastermindImg,
		onClick: () => navigate("/play/evil"),
	};

	/**
	 * @constant PoliceEnforcementCard
	 * @brief Configuration object for the "Police Enforcement" role card.
	 *
	 * @property {string} title - Title of the role card.
	 * @property {string} description - Brief description of the role's mechanics.
	 * @property {string} backgroundImg - Placeholder for the card's background image.
	 * @property {function} onClick - Callback function triggered when the card is clicked.
	 */
	const PoliceEnforcementCard = {
		title: "Police Enforcement",
		description: "Select vertices to protect each turn.",
		backgroundImg: policeEnforcementImg,
		onClick: () => navigate("/play/police"),
	};

	/**
	 * @constant RandomRoleCard
	 * @brief Configuration object for the "Random Role" card.
	 *
	 * @property {string} title - Title of the role card.
	 * @property {string} description - Brief description indicating a random role will be selected.
	 * @property {string} backgroundImg - Placeholder for the card's background image.
	 * @property {function} onClick - Callback function triggered when the card is clicked.
	 */
	const RandomRoleCard = {
		title: "Random Role",
		description: "We will choose a role for you.",
		backgroundImg: centerFortressImg,
		onClick: () => navigate("/play/random"),
	};

	/**
	 * @var cards
	 * @brief Array of role card configurations.
	 */
	const cards = [EvilMastermindCard, PoliceEnforcementCard, RandomRoleCard];

	return (
		<div className="role-page">
			<h2 id="role-page">{title}</h2>
			<div className="cards-section">
				{cards.map((item) => (
					<div className="card">
						<RoleCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
};
export default RolePage;
