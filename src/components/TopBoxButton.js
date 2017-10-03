import React from "react";

const TopBoxButton = ({ primaryColor = "black", size = 200, style }) => {
	return (
		<div className="top-box-button">
			<svg viewBox="0 0 1920 2560">
				<g>
					<text
						width="10"
						fontSize="80"
						fontWeight="normal"
						fill="currentColor"
						x="1240"
						y="1270"
						transform="rotate(2.5)"
					>
						Work
					</text>
					<path
						d="M1131.29 1386.25L1426.5 1400.11L1426.5 1204.37L1134.46 1194.06L1131.29 1386.25Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1130.9 1387.72L1151.08 1387.72L1124.45 1402.66L1110.4 1401.06L1130.9 1387.72Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1110.4 1231.51L1134.04 1195.38L1134.04 1210.8L1108.95 1267.21L1110.4 1231.51Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1130.94 1386.81C1132.59 1284.03 1133.63 1219.8 1134.04 1194.1C1134.04 1194 1133.9 1193.96 1133.85 1194.04C1130.72 1199.04 1122.9 1211.53 1110.4 1231.51L1110.4 1400.11L1130.94 1386.81Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
				</g>
			</svg>

			{/* <svg width="17.5%" viewBox="0 0 120 80">
				<text
					fontSize="25"
					fontWeight="normal"
					fill="currentColor"
					x="27%"
					y="53%"
					transform="rotate(2.5)"
				>
					Work
				</text>
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
			</svg> */}
		</div>
	);
};

export default TopBoxButton;
