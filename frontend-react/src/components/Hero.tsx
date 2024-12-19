interface Props {
	title: string;
	description: string;
	image: string | undefined;
}

const Hero = ({ title, description, image }: Props) => {
	return (
		<>
			{image && <img
				className="d-block mx-auto mb-4"
				src={image}
				alt="game icon"
				width="110"
			/>}
			<h1 className="display-5 fw-bold text-body-emphasis">{title}</h1>
			<div className="col-lg-6 mx-auto">
				<p className="lead mb-4">{description}</p>
			</div>
		</>
	);
};
export default Hero;
