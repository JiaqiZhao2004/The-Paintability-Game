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

import Card from "../components/Card";

interface Props {
	/**
	 * @function onClickEvilCard
	 * @brief Callback function for role selection, set player role to EvilMastermind.
	 */
	onClickEvilCard: () => any;

	/**
	 * @function onClickPoliceCard
	 * @brief Callback function for role selection, set player role to PoliceEnforcement.
	 */
	onClickPoliceCard: () => any;

	/**
	 * @function onClickRandomCard
	 * @brief Callback function for role selection, randomly choose one out of the two.
	 */
	onClickRandomCard: () => any;
}

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
const RolePage = ({
	onClickEvilCard,
	onClickPoliceCard,
	onClickRandomCard,
}: Props) => {
	/**
	 * @var title
	 * @brief The title displayed at the top of the role selection page.
	 */
	const title: string = "Select Your Role";

	/**
	 * @constant EvilMasterMindCard
	 * @brief Configuration object for the "Evil Mastermind" role card.
	 *
	 * @property {string} title - Title of the role card.
	 * @property {string} description - Brief description of the role's mechanics.
	 * @property {string} backgroundImg - Placeholder for the card's background image.
	 * @property {function} onClick - Callback function triggered when the card is clicked.
	 */
	const EvilMasterMindCard = {
		title: "Evil Mastermind",
		description:
			"You select criminals, represented by vertices, to commit crimes on every turn.",
		backgroundImg: " ",
		onClick: onClickEvilCard,
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
		description:
			"You select criminals to be jailed on every turn, but you can only jail one criminal in a web of connected criminals.",
		backgroundImg: " ",
		onClick: onClickPoliceCard,
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
		backgroundImg: "",
		onClick: onClickRandomCard,
	};

	/**
	 * @var cards
	 * @brief Array of role card configurations.
	 */
	const cards = [EvilMasterMindCard, PoliceEnforcementCard, RandomRoleCard];

	return (
		<div className="container px-4 py-5" id="custom-cards">
			<h2 className="pb-2 border-bottom">{title}</h2>

			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				{cards.map((item, index) => (
					<div className="col" key={index}>
						<a href="/play">
							<Card {...item} />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};
export default RolePage;
