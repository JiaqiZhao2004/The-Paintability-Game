import Header from "../components/Header";
import step1 from "../assets/tutorial/01.png";
import step2 from "../assets/tutorial/02.png";
import step3 from "../assets/tutorial/03.png";
import step4 from "../assets/tutorial/04.png";
import step5 from "../assets/tutorial/05.png";
import step6 from "../assets/tutorial/06.png";
import step1_v from "../assets/tutorial/01-v.png";
import step2_v from "../assets/tutorial/02-v.png";
import step3_v from "../assets/tutorial/03-v.png";
import step4_v from "../assets/tutorial/04-v.png";
import step5_v from "../assets/tutorial/05-v.png";
import step6_v from "../assets/tutorial/06-v.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./TutorialPage.css";

interface Props {
	inSideBar: boolean;
}

const TutorialPageHeader = {
	title: "The Paintability Game",
	items: ["Home", "Tutorial", "Play"],
	redirects: ["home", "tutorial", "home#role-page"],
	selectedIndex: 1,
	image: undefined,
};

interface TutorialStep {
	subtitle: string;
	description: string;
	imageSrc: string | undefined;
	imageVSrc: string | undefined;
	altText: string;
}

const tutorialSteps: TutorialStep[] = [
	{
		subtitle: "Hint 1 of 6:",
		description:
			"You choose whether you want to play as the Evil Mastermind or Police Enforcement.",
		imageSrc: step1,
		imageVSrc: step1_v,
		altText: "Understanding the Game",
	},

	{
		subtitle: "Hint 2 of 6: ",
		description: "You start out with a graph. Each vertex has a health bar.",
		imageSrc: step2,
		imageVSrc: step2_v,
		altText: "Understanding the Game",
	},
	{
		subtitle: "Hint 3 of 6: ",
		description:
			"At the start of each turn, the Evil Mastermind chooses vertices to attack however they desire.",
		imageSrc: step3,
		imageVSrc: step3_v,
		altText: "Selecting Your Role",
	},
	{
		subtitle: "Hint 4 of 6: ",
		description:
			"The defender responds by protecing the attacked vertices. However, if two vertices share an edge, the defender can only protect one of them.",
		imageSrc: step4,
		imageVSrc: step4_v,
		altText: "Making Your Move",
	},
	{
		subtitle: "Hint 5 of 6: ",
		description:
			"Any unprotected vertex at the end of the turn loses 1 health. Any successfully proteced vertex cannot be attacked again.",
		imageSrc: step5,
		imageVSrc: step5_v,
		altText: "Winning the Game",
	},
	{
		subtitle: "Hint 6 of 6: ",
		description:
			"The attacker wins if any vertex has been reduced to zero health. The defender wins if all vertices are safe.",
		imageSrc: step6,
		imageVSrc: step6_v,
		altText: "Winning the Game",
	},
	{
		subtitle: "Trivia",
		description:
			"If the attacker uses the strategy of attacking all vertices each turn, then the graph is called k-colorable if the defender can win when all vertices have health k. The chromatic number of a graph is the minimum k such that a graph is k-colorable.",
		imageSrc: undefined,
		imageVSrc: undefined,
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
			<div className="tutorial-page">
				<h1>Welcome to The Paintability Game!</h1>
				<div id="carousel" className="carousel slide custom-carousel">
					<div className="carousel-inner">
						{tutorialSteps.map((step, index) => (
							<div
								className={
									index == 0 ? "carousel-item active" : "carousel-item"
								}
							>
								<h2>{step.subtitle}</h2>
								<p>{step.description}</p>

								{step.imageSrc && (
									<img
										src={
											window.innerWidth > 768 ? step.imageSrc : step.imageVSrc
										}
										alt={step.altText}
									/>
								)}
							</div>
						))}
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carousel"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carousel"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				{!inSideBar && (
					<div className="btn-return">
						<Button
							label="Return"
							color="outline-secondary"
							onClick={() => navigate("/home")}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default TutorialPage;
