import Button from "./Button";

interface Props {
	title: string;
	description: string;
	backgroundImg: string | undefined;
	onClick: () => void;
}

const Card = ({ title, description, backgroundImg, onClick }: Props) => {
	return (
		<div className="card card-cover h-100 overflow-hidden text-bg-dark shadow-lg">
			<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-4">
				<img src={backgroundImg}></img>
				<h3 className="h-100 pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h3>
				<p className="h-50">{description}</p>
			</div>
			<div style={{ padding: 50 }}>
				<Button
					label="Select"
					color="warning"
					onClick={onClick}
					heightPctg={2}
					widthPctg={5}
					fontSize={22}
				/>
			</div>
		</div>
	);
};
export default Card;
