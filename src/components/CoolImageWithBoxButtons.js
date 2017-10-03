import React from "react";
import BoxButtons from "./BoxButtons";

class CoolImageWithBoxButtons extends React.Component {
	render() {
		return (
			<div className="cool-image-with-box-buttons">
				<div className="float-container">
					<img src={require("../images/class_straight_title.png")} alt="no" />
					{/* <h1>David Anderson</h1> */}
				</div>
				<div className="float-container">
					<BoxButtons />
				</div>
			</div>
		);
	}
}

export default CoolImageWithBoxButtons;
