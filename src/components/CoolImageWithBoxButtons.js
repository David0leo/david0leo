import React from "react";

import BoxButtons from "./BoxButtons";


class CoolImageWithBoxButtons extends React.Component {
	render() {
		return (
			<div className="cool-image-with-box-buttons">
				<div className="float-container">
					<img src={require("../images/extended.png")} alt="no" />
					{/* <h1>David Anderson</h1> */}
				</div>
				<div className="float-container">
					<BoxButtons 
						topBoxCallback={this.props.topBoxCallback}
						middleBoxCallback={this.props.middleBoxCallback}
						bottomBoxCallback={this.props.bottomBoxCallback}
					/>
				</div>
			</div>
		);
	}

	// Not great flow, but if you want something
	// else to happen you can add it to these functions
	topBoxCallback = () => {
		this.props.topBoxCallback()
	}

	middleBoxCallback = () => {
		this.props.middleBoxCallback()
	}

	bottomBoxCallback = () => {
		this.props.bottomBoxCallback()
	}
}

export default CoolImageWithBoxButtons;
