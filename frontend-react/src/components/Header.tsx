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
	const navItems = items.map((item, index) => (
		<li key={index}>
			<a
				href={selectedIndex === index ? "" : "/" + redirects[index]} // no redirect if select same page
				className={
					selectedIndex === index ? "custom-active" : "custom-inactive"
				}
			>
				{item}
			</a>
		</li>
	));

	return (
		<header className="header">
			<a className="logo" href="/home">
				<img src={image} />
				<h2>{title}</h2>
			</a>

			<ul className="nav nav-pills custom-nav">{navItems}</ul>

			<div className="dropdown" id="dropdown-menu">
				<button className="button">Menu</button>
				<ul className="items">{navItems}</ul>
			</div>
		</header>
	);
};
export default Header;
