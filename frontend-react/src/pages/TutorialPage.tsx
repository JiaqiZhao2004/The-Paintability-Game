import Header from "../components/Header";
import step1 from "../assets/tutorial/01.png";
import step2 from "../assets/tutorial/02.png";
import step3 from "../assets/tutorial/03.png";
import step4 from "../assets/tutorial/04.png";
import step5 from "../assets/tutorial/05.png";
import step6 from "../assets/tutorial/06.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface Props {
	inSideBar: boolean;
}

const TutorialPageHeader = {
	title: "The Paintability Game",
	items: ["Home", "Tutorial", "Play"],
	redirects: ["home", "tutorial", "play"],
	selectedIndex: 1,
	image: undefined,
};

interface TutorialStep {
	subtitle: string;
	description: string;
	imageSrc: string | undefined;
	altText: string;
}

const tutorialSteps: TutorialStep[] = [
	{
		subtitle: "Step 1 of 6:",
		description:
			"You choose whether you want to play as the Evil Mastermind or Police Enforcement.",
		imageSrc: step1,
		altText: "Understanding the Game",
	},

	{
		subtitle: "Step 2 of 6: ",
		description: "You start out with a graph. Each vertex has a health bar.",
		imageSrc: step2,
		altText: "Understanding the Game",
	},
	{
		subtitle: "Step 3 of 6: ",
		description:
			"At the start of each turn, the Evil Mastermind chooses vertices to attack however they desire.",
		imageSrc: step3,
		altText: "Selecting Your Role",
	},
	{
		subtitle: "Step 4 of 6: ",
		description:
			"The defender responds by protecing the attacked vertices. However, if two vertices share an edge, the defender can only protect one of them.",
		imageSrc: step4,
		altText: "Making Your Move",
	},
	{
		subtitle: "Step 5 of 6: ",
		description:
			"Any unprotected vertex at the end of the turn loses 1 health. Any successfully proteced vertex cannot be attacked again.",
		imageSrc: step5,
		altText: "Winning the Game",
	},
	{
		subtitle: "Step 6 of 6: ",
		description:
			"The attacker wins if any vertex has been reduced to zero health. The defender wins if all vertices are safe.",
		imageSrc: step6,
		altText: "Winning the Game",
	},
	{
		subtitle: "Trivia",
		description:
			"If the attacker uses the strategy of attacking all vertices each turn, then the graph is called k-colorable if the defender can win when all vertices have health k. The chromatic number of a graph is the minimum k such that a graph is k-colorable.",
		imageSrc: undefined,
		altText: "Winning the Game",
	},
];

const TutorialPage = ({ inSideBar }: Props) => {
	/**
	 * @var navigate
	 * @brief Part of react-router-dom to enable redirects to Game Page when a Card is clicked.
	 */
	const navigate = useNavigate();

	return (
		<>
			{!inSideBar && <Header {...TutorialPageHeader} />}
			<div
				style={{
					padding: "40px",
					maxWidth: "840px",
					margin: "0 auto",
					textAlign: "center",
					paddingBottom: "100px",
				}}
			>
				<h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
					Welcome to The Paintability Game!
				</h1>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "30px",
						paddingBottom: "40px",
					}}
				>
					{tutorialSteps.map((step, index) => (
						<div
							key={index}
							style={{
								border: "1px solid #ddd",
								borderRadius: "10px",
								padding: "15px",
								textAlign: "left",
								backgroundColor: "#f9f9f9",
								boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
							}}
						>
							<h2 style={{ fontSize: "24px", color: "#333" }}>
								{step.subtitle}
							</h2>
							<p
								style={{
									fontSize: "20px",
									color: "#555",
									marginBottom: "15px",
								}}
							>
								{step.description}
							</p>
							{step.imageSrc && (
								<img
									src={step.imageSrc}
									alt={step.altText}
									style={{
										width: "100%",
										maxHeight: "450px",
										objectFit: "contain",
										borderRadius: "5px",
										border: "1px solid #ddd",
									}}
								/>
							)}
						</div>
					))}
				</div>
				{!inSideBar && (
					<Button
						label="Return"
						color="outline-secondary"
						onClick={() => navigate("/home")}
						widthPctg={20}
					/>
				)}
			</div>
		</>
	);
};

export default TutorialPage;
