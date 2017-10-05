import React from "react";
import TitleBar from "./TitleBar";
import WorkCard from "./WorkCard";

class WorkSection extends React.Component {
	render() {
		return (
			<div className="work-section" >
				<TitleBar title={"Work"}/>
				<WorkCard 
					imgSrc={require('../images/bike_graph.svg')}
					header={"Bike Rental Ridership Prediction"}
					details={
						`Neural Network, implemented in Python using numpy and pandas, trained on data from UCI Machine Learning Database to predict
					daily bike rental ridership.`
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/dlnd/project-1-your-first-neural-network"
					}
					linkText={
						"Source"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
			</div>
		);
	}
}

export default WorkSection;
