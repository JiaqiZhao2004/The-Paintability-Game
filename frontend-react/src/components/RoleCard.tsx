import "./RoleCard.css";

interface Props {
	title: string;
	description: string;
	backgroundImg: string | undefined;
	onClick: () => void;
}

const RoleCard = ({ title, description, backgroundImg, onClick }: Props) => {
	const words = title.split(" ");

	return (
		<div className="role-card" onClick={onClick}>
			<img src={backgroundImg} alt={title} />
			<div className="text-section">
				<h3>
					{words.map((word) => (
						<>
							{word}
							<br />
						</>
					))}
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
export default RoleCard;
