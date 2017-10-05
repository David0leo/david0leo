import React from "react";

const WorkCard = ({
	imgSrc,
	header,
	details,
	sourceHref,
	linkText,
	linkImageSrc
}) => {
	return (
		<div className="work-card">
			<img src={imgSrc} alt="[work-card-image]" />
			<div className="work-card-body">
				<h1>{header}</h1>
				<p>{details}</p>
				<a href={sourceHref}>
					<img src={linkImageSrc} alt={"[link-image]"} />
				</a>
			</div>
		</div>
	);
};

export default WorkCard;
