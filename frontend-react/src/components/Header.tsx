import { Link } from "react-router-dom";
import FortressImg from "../assets/fortress.png";
import "./Header.css";

interface Props {
	title: string;
	items: string[];
	redirects: string[];
	selectedIndex: number;
	image?: string;
}

const Header = ({
	title,
	items,
	redirects,
	selectedIndex,
	image = FortressImg,
}: Props) => {
	return (
		<header className="header">
			<Link className="logo" to="/home">
				<img src={image} />
				<h2>{title}</h2>
			</Link>

			<ul className="nav nav-pills custom-nav">
				{items.map((item, index) => (
					<li key={index}>
						<Link
							to={selectedIndex === index ? "" : "/" + redirects[index]} // no redirect if select same page
							className={
								selectedIndex === index ? "custom-active" : "custom-inactive"
							}
							aria-current="page"
						>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};
export default Header;
