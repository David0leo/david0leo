import React from "react";

const TopBoxButton = ({ primaryColor = "black", size = 200, style }) => {
	return (
		<div className="top-box-button">
			<svg width="13%" viewBox="0 0 120 80">
				<path
					d="M7.3 67.89C7.89 31.7 8.26 9.09 8.4 0.04C8.4 0 8.36 -0.01 8.34 0.02C7.22 1.78 4.45 6.17 0 13.21L0 72.57L7.3 67.89Z"
					id="top-box-side"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M7.43 67.69L112.32 72.57L112.32 3.65L8.56 0.02L7.43 67.69Z"
					id="top-box-front"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M7.71 68.21L14.46 68.21L5.55 73.67L0.84 73.09L7.71 68.21Z"
					id="top-box-bottom"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M0.52 13.21L8.92 0.48L8.92 5.92L0 25.78L0.52 13.21Z"
					id="top-box-side-line"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
			</svg>
			<span>Work</span>
		</div>

		// <svg height={size} width={size} style={{position: "absolute"}}>
		//   <defs>
		//     <mask id="mask" x="0" y="0" width={size} height={size}>
		//       <rect
		//         id="alpha"
		//         x="0"
		//         y="0"
		//         width={size}
		//         height={size}
		//         fill="white"
		//       />
		//         <path d="M7.3 67.89C7.89 31.7 8.26 9.09 8.4 0.04C8.4 0 8.36 -0.01 8.34 0.02C7.22 1.78 4.45 6.17 0 13.21L0 72.57L7.3 67.89Z" id="top-box-side" stroke="black" stroke-width="3" fill="none"></path>
		//         <path d="M7.43 67.69L112.32 72.57L112.32 3.65L8.56 0.02L7.43 67.69Z" id="top-box-front"></path>
		//         <path d="M7.71 68.21L14.46 68.21L5.55 73.67L0.84 73.09L7.71 68.21Z" id="top-box-bottom"></path>
		//       </mask>
		//   </defs>
		//   <rect
		//     id="base"
		//     x="0"
		//     y="0"
		//     width={size}
		//     height={size}
		//     fill={primaryColor}
		//     style={{mask: "url(#mask)"}}
		//   >
		//   </rect>
		// </svg>
	);
};

export default TopBoxButton;
