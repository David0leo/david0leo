import React from "react";
import TopBoxButton from "./TopBoxButton";
import MiddleBoxButton from "./MiddleBoxButton";
import BottomBoxButton from "./BottomBoxButton";

class CoolImageWithBoxButtons extends React.Component {
	render() {
		return (
			<div className="cool-image-with-box-buttons">
				<div className="float-container">
					<img src={require("../images/IMG_4175.JPG")} alt="no" />
          <h1>David Anderson</h1>
				</div>
				<div className="float-container">
					<TopBoxButton />
				</div>
				<div className="float-container">
					<MiddleBoxButton />
				</div>
				<div className="float-container">
					<BottomBoxButton />
				</div>
			</div>
		);
	}
}

export default CoolImageWithBoxButtons;
