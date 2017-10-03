import React from "react";

const BottomBoxButton = ({ primaryColor = "black", size = 200, style }) => {
	return (
		<div className="bottom-box-button">
      <svg viewBox="0 0 1920 2560">
				<g>
					<text
						fontSize="80"
						fontWeight="normal"
						fill="currentColor"
						x="1160"
						y="1930"
					>
						Contact
					</text>
					<path
						d="M1119.11 1827.16C1120.45 1829.41 1122.19 1831.39 1124.25 1833C1126.52 1834.79 1131.67 1838.84 1134.31 1840.91C1135.08 1841.52 1136.17 1841.52 1136.94 1840.92C1137.22 1840.7 1136.33 1841.39 1136.51 1841.26C1137.62 1840.4 1138.12 1838.96 1137.79 1837.6C1136.94 1834.06 1134.81 1825.23 1131.4 1811.09L1155.23 1828.76L1151.79 1994.99L1108.53 1950.7C1109.49 1874.92 1110.08 1827.55 1110.32 1808.61C1110.33 1808.32 1110.73 1808.25 1110.83 1808.52C1111.74 1811.01 1112.91 1814.18 1113.55 1815.92C1114.79 1819.28 1116.33 1822.52 1118.17 1825.59C1118.76 1826.59 1118.37 1825.93 1119.11 1827.16Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1155.23 1829.53L1448.53 1836.14L1450.83 1996.93L1152.53 1995.07L1155.23 1829.53Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1156.02 1783.84L1454.12 1791.95L1453.36 1834.79L1156.61 1828.34C1143.75 1818.56 1135.72 1812.45 1132.51 1810C1131.13 1808.95 1130.26 1807.36 1130.13 1805.63C1129.63 1799 1128.25 1780.62 1127.73 1773.68C1127.69 1773.12 1128.25 1772.7 1128.78 1772.92C1132.41 1774.37 1141.49 1778.02 1156.02 1783.84Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
          <path
						d="M1155.23 1784.02L1153.83 1828.13L1155.23 1784.02Z"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
				</g>
			</svg>

			{/* <svg width="18.3%" viewBox="0 0 125 80">
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
			</svg> */}
		</div>
	);
};

export default BottomBoxButton;
