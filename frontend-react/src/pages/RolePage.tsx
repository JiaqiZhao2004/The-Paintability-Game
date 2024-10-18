import Card from "../components/Card";

// Parameters for the 3 Cards: Evil Mastermind, Police Enforcement, Random
const EvilMasterMindCard = {
	title: "Evil Mastermind",
	description:
		"You select criminals, represented by vertices, to commit crimes on every turn.",
	backgroundImg: " ",
	onClick: () => {},
};

const PoliceEnforcementCard = {
	title: "Police Enforcement",
	description:
		"You select criminals to be jailed on every turn, with the restriction that no two connected criminals can be jailed in the same turn.",
	backgroundImg: " ",
	onClick: () => {},
};

const RandomRoleCard = {
	title: "Random Role",
	description: "We will choose a role for you.",
	backgroundImg: "",
	onClick: () => {},
};

const RolePage = () => {
	const title: string = "Select Your Role";
	const cards = [EvilMasterMindCard, PoliceEnforcementCard, RandomRoleCard];

	return (
		<div className="container px-4 py-5" id="custom-cards">
			<h2 className="pb-2 border-bottom">{title}</h2>

			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				{cards.map((item, index) => (
					<div className="col" key={index}>
						<Card {...item} />
					</div>
				))}
			</div>
		</div>
	);
};
export default RolePage;
