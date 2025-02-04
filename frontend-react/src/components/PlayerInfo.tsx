/**
 * @file PlayerInfo.tsx
 * @brief React component for displaying player information, including their name, role, and icon.
 *
 * @details
 * This component renders the player's information including their name, role (Evil Mastermind or Police Enforcement),
 * and an icon representing their role. The component also includes a glowing effect that highlights the player's
 * affiliation based on their role. The layout can be adjusted to display the icon either to the left or right of the text.
 *
 * @module PlayerInfo
 */

import EvilMastermindIcon from "../assets/evil-mastermind.jpg";
import PoliceEnforcementIcon from "../assets/police-enforcement.jpg";
import "./PlayerInfo.css";

/**
 * @typedef Props
 * @brief Properties passed to the PlayerInfo component.
 *
 * @property {string} playerName - The name of the player to be displayed.
 * @property {boolean} isEvilRole - Indicates if the player's role is "Evil Mastermind".
 * @property {boolean} glow - Determines if the component should display a glowing effect based on the role.
 * @property {boolean} left - Determines if the role icon should appear to the left of the player's name.
 * @property {boolean} won - Determines if this player has won.
 */

interface Props {
	playerName: string;
	isEvilRole: boolean;
	glow: boolean;
	left: boolean;
	won: boolean;
}

/**
 * @function PlayerInfo
 * @brief Renders the player information, including the name, role, and role-specific icon.
 *
 * @param {Props} props - The properties required to configure the PlayerInfo component.
 *
 * @returns {JSX.Element} A styled component displaying the player's name, role, and icon.
 *
 * @details
 * **Key Features**:
 * - Displays the player's name and role (Evil Mastermind or Police Enforcement).
 * - Shows a glowing effect around the component when the `glow` property is enabled.
 * - Customizable icon position, allowing the icon to appear either to the left or right of the text.
 *
 * **Styles**:
 * - Glowing and border colors are determined by the player's role:
 *   - Red for "Evil Mastermind".
 *   - Blue for "Police Enforcement".
 * - Includes transition effects for smoother visual updates.
 *
 * Example Usage:
 * ```jsx
 * <PlayerInfo
 *   playerName="Player 1"
 *   isEvilRole={true}
 *   glow={true}
 *   left={true}
 *   won={false}
 * />
 * ```
 */

const PlayerInfo = ({ playerName, isEvilRole, glow, left, won }: Props) => {
	const roleColors: { [key: string]: string } = {
		red: "#ff4d4f", // Red
		blue: "#1890ff", // Blue
		won: "#ffd700", // Gold
	};

	const glowColor = won
		? roleColors["won"]
		: isEvilRole
		? roleColors["red"]
		: roleColors["blue"];
	const noGlowColor = "#f9f9f9";

	const img = (
		<img
			src={isEvilRole ? EvilMastermindIcon : PoliceEnforcementIcon}
			alt={`${isEvilRole ? "EvilMastermindIcon" : "PoliceEnforcementIcon"}`}
			style={{
				border: `0.15rem solid ${glow ? glowColor : noGlowColor}`,
			}}
		/>
	);

	return (
		<div
			className="player-info"
			style={{
				justifyContent: left ? "start" : "end",
				border: `0.15rem solid ${glow ? glowColor : noGlowColor}`,
				backgroundColor: won ? "#ffef99" : "#f9f9f9",
				boxShadow: `0 0 10px ${glow ? glowColor : noGlowColor}`,
			}}
		>
			{left && img}
			<div
				style={{
					textAlign: left ? "left" : "right",
					paddingLeft: left ? "0" : "0.5rem",
					paddingRight: left ? "0.5rem" : "0",
				}}
			>
				<h3>{playerName}</h3>
				<h4>{isEvilRole ? "Evil\u00A0Mastermind" : "Police\u00A0Enforcement"}</h4>
			</div>
			{!left && img}
		</div>
	);
};

export default PlayerInfo;
