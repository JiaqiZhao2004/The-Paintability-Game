import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import RolePage from "./RolePage";

interface Props {
	title: string;
	description: string;
	onClickTutorial: () => any;
	image: string | undefined;
}

const StartPage = ({
	title,
	description,
	onClickTutorial,
	image = undefined,
}: Props) => {
	const [showRoleSelection, setShowRoleSelection] = useState(false);

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="text-center w-100">
				<Hero title={title} description={description} image={showRoleSelection ? "" : image} />
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					{showRoleSelection ? (
						<Button
							label="Return"
              color="secondary"
							onClick={() => {
								setShowRoleSelection(false);
							}}
							widthPctg={5}
						/>
					) : (
						<Button
							label="Play"
							onClick={() => {
								setShowRoleSelection(true);
							}}
							widthPctg={5}
						/>
					)}
					<Button
						label="Tutorial"
						color="outline-secondary"
						onClick={onClickTutorial}
						widthPctg={4}
					/>
				</div>
        {showRoleSelection && <RolePage />}
			</div>
      
		</div>
    
	);
};
export default StartPage;
