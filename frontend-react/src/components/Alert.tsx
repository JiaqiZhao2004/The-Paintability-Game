/**
 * @unused This component is unused
 */

import { ReactNode } from "react";

interface Props {
	text: ReactNode;
}

const Alert = ({ text }: Props) => {
	return (
		<div className="alert alert-primary">
			{text}
			<button type="button" className="btn" data-dismiss="alert"></button>
		</div>
	);
};

export default Alert;
