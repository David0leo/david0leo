import React from "react";
import TopBoxButton from './TopBoxButton'

class CoolImageWithBoxButtons extends React.Component {
	render() {
		return (
			<div 
        className="cool-image-with-box-buttons"
        style={
          {
            display: "table",
          }
        }
      >
				<img
					src={require("../images/IMG_4175.JPG")}
					alt="no"
					style={
            {
              transform: "rotate(90deg)",
              width: "100%",
              position: "absolute", 
            }
          }
				/>
        <TopBoxButton
          style={
            {
              position: "absolute",
              transform: "translate(430%, 394%)"
            }
          }
        />
        <span
          style={
            {
              fontSize: "3vw",
              position: "absolute",
              transform: "translate(850%, 1050%)"
            }
          }
        >Work</span>
			</div>
		);
	}
}

export default CoolImageWithBoxButtons;
