import React from "react";

const BottomBoxButton = ({ primaryColor = "black", size = 200, style }) => {
	return (
		<div className="bottom-box-button">
			<svg width="18.3%" viewBox="0 0 125 80">
				<text
					fontSize="25"
					fontWeight="normal"
					fill="currentColor"
					x="20%"
					y="70%"
				>
					Contact
				</text>
				<path
					d="M3.73 18.51C4.21 19.31 4.83 20.02 5.56 20.59C6.36 21.23 8.17 22.67 9.1 23.4C9.38 23.62 9.76 23.62 10.04 23.41C10.14 23.33 9.82 23.58 9.88 23.53C10.28 23.22 10.45 22.71 10.34 22.23C10.04 20.97 9.28 17.82 8.08 12.79L16.5 19.08L15.28 77.32L0 61.51C0.33 35.06 0.55 18.52 0.63 11.91C0.63 11.81 0.77 11.78 0.81 11.88C1.13 12.76 1.54 13.89 1.77 14.51C2.21 15.71 2.75 16.86 3.41 17.96C3.62 18.31 3.47 18.07 3.73 18.51Z"
					id="bottom-box-side"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M16.5 19.35L120.15 21.68L120.96 78.24L15.54 77.59L16.5 19.35Z"
					id="bottom-box-front"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
				<path
					d="M16.85 3.09L122.91 5.98L122.64 21.23L17.06 18.93C12.48 15.45 9.62 13.27 8.48 12.4C7.99 12.03 7.7 11.46 7.69 10.85C7.64 8.65 7.5 2.61 7.45 0.31C7.44 0.1 7.65 -0.05 7.85 0.02C9.05 0.43 12.05 1.45 16.85 3.09Z"
					id="bottom-box-top"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
        <path
          d="M16.5 3.16L16 18.86L16.5 3.16Z"
					id="bottom-box-top-corner-line"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
        />
			</svg>
		</div>
	);
};

export default BottomBoxButton;
