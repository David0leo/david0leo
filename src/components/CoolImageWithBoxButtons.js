import React from "react";
import TopBoxButton from './TopBoxButton'

class CoolImageWithBoxButtons extends React.Component {
	render() {
		return (
			<div 
        className="cool-image-with-box-buttons"
      >
        <div className="float-container">
          <img
            src={require("../images/IMG_4175.JPG")}
            alt="no"
          />
        </div>
        <div className="float-container">
          <TopBoxButton
            
          />
        </div>
			</div>
		);
	}
}

export default CoolImageWithBoxButtons;
