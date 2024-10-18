interface Props {
	title: string;
	description: string;
	backgroundImg: string | undefined;
	onClick: () => void;
}

const Card = ({ title, description, backgroundImg, onClick }: Props) => {
	return (
		<div
			className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
			style={{ backgroundImage: `url(${backgroundImg})` }}
			onClick={onClick}
		>
			<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
				<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
export default Card;
