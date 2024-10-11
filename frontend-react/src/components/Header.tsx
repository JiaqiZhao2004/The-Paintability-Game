import { useState } from "react";

interface Props {
	title: string;
	items: string[];
	onSelectItem: (item: string) => any;
	image: string | undefined;
}

const Header = ({ title, items, onSelectItem, image = undefined }: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(2);

	return (
		<div className="container">
			<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				>
					<svg className="bi me-2" width="40" height="32">
						{image}
					</svg>
					<span className="fs-4">{title}</span>
				</a>

				<ul className="nav nav-pills">
					{items.map((item, index) => (
						<li key={index} className="nav-item">
							<a
								href="#"
								className={
									selectedIndex === index ? "nav-link active" : "nav-link"
								}
								aria-current="page"
								onClick={() => {
									setSelectedIndex(index);
									onSelectItem(item);
								}}
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
};
export default Header;
