import React from "react";

const MiddleBoxButton = ({ primaryColor = "black", size = 200, style }) => {
	return (
		<div className="middle-box-button">
			<svg width="18.3%" viewBox="0 0 125 80">
				<text
					fontSize="25"
					fontWeight="normal"
					fill="currentColor"
					x="27%"
					y="60%"
				>
					About
				</text>
				<path
					d="M13.41 7.4L16.05 1.05C15.68 38.62 15.45 62.11 15.36 71.5C15.35 71.89 14.96 72.15 14.6 72C13.45 71.53 10.36 70.26 9.11 69.74C8.94 69.67 8.81 69.55 8.73 69.38C8.52 68.93 8.75 69.43 8.73 69.38C8.03 67.86 7.16 66.43 6.14 65.11C5.97 64.89 6.29 65.3 5.94 64.85C5.52 64.3 5.22 63.67 5.07 62.99C4.94 62.39 4.87 62.07 4.77 61.58C4.54 60.53 3.97 59.58 3.15 58.89C2.7 58.5 2.14 58.03 1.57 57.55C1.14 57.18 0.89 56.63 0.89 56.06C0.89 50.4 0.89 36.24 0.89 13.58L13.41 7.4Z"
					id="middle-box-side"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M120.58 74.92L119.59 3.99L16.05 1.05C15.68 39 15.44 62.71 15.35 72.2C15.35 72.26 15.4 72.31 15.46 72.31C29.48 72.66 64.51 73.53 120.58 74.92Z"
					id="middle-box-front"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M15.35 0.88L13.41 7.76L0 13.4L0 0L15.35 0.88Z"
					id="middle-box-side-flap"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
			</svg>
		</div>
	);
};

export default MiddleBoxButton;
