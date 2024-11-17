import { Link } from "react-router-dom";

interface Props {
	title: string;
	items: string[];
	redirects: string[];
	selectedIndex: number;
	image?: string;
}

const Header = ( {title, items, redirects, selectedIndex, image = undefined} : Props) => {


	return (
		<div className="container"
		style ={{height: "10vh",}}
		>
			<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<Link
					to="/home"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				>
					<svg className="bi me-2" width="40" height="32">
						{image}
					</svg>
					<span className="fs-4">{title}</span>
				</Link>

				<ul className="nav nav-pills">
					{items.map((item, index) => (
						<li key={index} className="nav-item">
							<Link
								to={'/' + redirects[index]}
								className={
									selectedIndex === index ? "nav-link active" : "nav-link"
								}
								aria-current="page"
							>
								{item}
							</Link>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
};
export default Header;
