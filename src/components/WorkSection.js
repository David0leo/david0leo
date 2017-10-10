import React from "react";
import TitleBar from "./TitleBar";
import WorkCard from "./WorkCard";

class WorkSection extends React.Component {
	render() {
		return (
			<div className="work-section" >
				<TitleBar title={"Work"}/>
				<WorkCard 
					imgSrc={require('../images/work_cards/dlnd/bike_graph.svg')}
					header={"Bike Rental Ridership Prediction"}
					details={
						`Neural Network, implemented in Python using numpy and pandas, trained on data from UCI Machine Learning Database to predict
					daily bike rental ridership.`
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/dlnd/project-1-your-first-neural-network"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
				<WorkCard
					imgSrc={require('../images/work_cards/dlnd/image_classification.svg')}
					header={"CNN Image Classification"}
					details={
						'Convolutional Neural Network using Tensorflow trained on CIFAR-10 images for classification.'
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/dlnd/project-2-image-classification"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
				<WorkCard
					imgSrc={require('../images/work_cards/dlnd/tv_scripts.svg')}
					header={'Generate TV Scripts'}
					details={
						'Recurrent neural network using Tensorflow trained on Kaggle\'s "The Simpsons by the Data" to generate new scripts.'
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/dlnd/project-3-generate-tv-scripts"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
				<WorkCard
					imgSrc={require('../images/work_cards/dlnd/translate.svg')}
					header={'Language Translation - French to English'}
					details={
						'Sequence-to-sequence recurrent neural network trained sentences with vocabulary of 227 words to translate French to English sentences.'
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/dlnd/project-4-language-translation"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
				<WorkCard
					imgSrc={require('../images/work_cards/dlnd/faces.svg')}
					header={'Celebrity Faces Generator'}
					details={
						'Generative adversarial network trained on CelebA dataset of celebrity faces to generate new faces.'
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/dlnd/project-5-face-generation-gan"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
				<WorkCard
					imgSrc={require('../images/work_cards/react/myreads.svg')}
					header={'MyReads - React Webapp'}
					details={
						'React webapp for tracking book reading progress.'
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/react/myreads"
					}
					linkImageSrc={
						require('../images/github.svg')
					}
				/>
				<WorkCard
					imgSrc={require('../images/work_cards/react/readable.svg')}
					header={'Readable - React + Redux'}
					details={
						'React webapp with Redux for state management. A Reddit-like posting and commenting app.'
					}
					sourceHref={
						"https://github.com/David0leo/Udacity-NanoDegrees/tree/master/react/readable"
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
