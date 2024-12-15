interface Props {
	title: string;
	description: string;
	backgroundImg: string | undefined;
	onClick: () => void;
}

const Card = ({ title, description, backgroundImg, onClick }: Props) => {
	const words = title.split(" ");

	return (
		<div
			className="card card-cover shadow-lg"
			style={{
				transition:
					"transform 0.3s ease-in-out, background-color 0.3s ease-in-out", // Smooth scaling effect
				transformOrigin: "center", // Scale from center
				backgroundColor: "#212529",
				color: "#e0e0e0",
			}}
			onClick={onClick}
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = "scale(1.03)"; // Enlarge on hover
				e.currentTarget.style.backgroundColor = "#32363b"; // Change color on hover
				e.currentTarget.style.color = "#e0e0e0";

				// Adjust child text colors explicitly
				const texts = e.currentTarget.querySelectorAll("h3, p");
				texts.forEach((el) => {
					(el as HTMLElement).style.color = e.currentTarget.style.color;
				});
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.backgroundColor = "#212529";
				e.currentTarget.style.color = "#e0e0e0";

				// Adjust child text colors explicitly
				const texts = e.currentTarget.querySelectorAll("h3, p");
				texts.forEach((el) => {
					(el as HTMLElement).style.color = e.currentTarget.style.color;
				});
			}} // Reset on hover out
		>
			<div className="d-flex flex-column p-5 text-white">
				<img
					src={backgroundImg}
					alt={title}
					style={{
						height: "60%",
						objectFit: "contain", // Ensure image fits within the card
						marginBottom: "10%", // Add spacing below the image
					}}
				></img>
				<h3 className="display-6 lh-1 pb-3 text-center fw-bold">
					{words.map((word) => (
						<>
							{word}
							<br />
						</>
					))}
				</h3>
				<p className="h-50">{description}</p>
			</div>
		</div>
	);
};
export default Card;
