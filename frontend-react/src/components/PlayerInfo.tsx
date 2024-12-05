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

/**
 * @typedef Props
 * @brief Properties passed to the PlayerInfo component.
 *
 * @property {string} playerName - The name of the player to be displayed.
 * @property {boolean} isEvilRole - Indicates if the player's role is "Evil Mastermind".
 * @property {boolean} glow - Determines if the component should display a glowing effect based on the role.
 * @property {boolean} left - Determines if the role icon should appear to the left of the player's name.
 */

interface Props {
    playerName: string;
    isEvilRole: boolean;
    glow: boolean;
    left: boolean;
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
 * />
 * ```
 */

const PlayerInfo = ({ playerName, isEvilRole, glow, left }: Props) => {
    const roleColors: { [key: string]: string } = {
        red: "#ff4d4f", // Red
        blue: "#1890ff", // Blue
    };

    const glowColor = isEvilRole ? roleColors["red"] : roleColors["blue"];
    const noGlowColor = "#f9f9f9";

    const img = (
        <img
            src={isEvilRole ? EvilMastermindIcon : PoliceEnforcementIcon}
            alt={`${isEvilRole ? "EvilMastermindIcon" : "PoliceEnforcementIcon"}`}
            style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                border: `2px solid ${glow ? glowColor : noGlowColor}`,
            }}
        />
    );

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                border: `2px solid ${glow ? glowColor : noGlowColor}`,
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                maxWidth: "300px",
                boxShadow: `0 0 10px ${glow ? glowColor : noGlowColor}`,
                transition: "box-shadow 0.3s ease",
            }}
        >
            {left && img}
            <div style={{ textAlign: left ? "left" : "right" }}>
                <h3
                    style={{
                        margin: 0,
                        fontSize: "28px",
                        color: "#333",
                        fontWeight: "bold",
                    }}
                >
                    {playerName}
                </h3>
                <h3
                    style={{
                        margin: 0,
                        fontSize: "16px",
                        color: "#333",
                        fontWeight: "bold",
                        fontStyle: "italic",
                    }}
                >
                    {isEvilRole ? "Evil Mastermind" : "Police Enforcement"}
                </h3>
            </div>
            {!left && img}
        </div>
    );
};

export default PlayerInfo;
