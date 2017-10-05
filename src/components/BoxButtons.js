import React from "react";

const BoxButtons = (props) => {
	return (
		<div className="box-buttons">
			<svg width="100%" height="100%" viewBox="0 0 1920 2560">
				<g className="top-box" onClick={props.topBoxCallback}>
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
            id="top-box-front"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1130.9 1387.72L1151.08 1387.72L1124.45 1402.66L1110.4 1401.06L1130.9 1387.72Z"
            id="top-box-bottom"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1110.4 1231.51L1134.04 1195.38L1134.04 1210.8L1108.95 1267.21L1110.4 1231.51Z"
            id="top-box-flap"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1130.94 1386.81C1132.59 1284.03 1133.63 1219.8 1134.04 1194.1C1134.04 1194 1133.9 1193.96 1133.85 1194.04C1130.72 1199.04 1122.9 1211.53 1110.4 1231.51L1110.4 1400.11L1130.94 1386.81Z"
						id="top-box-side"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
				</g>
				<g className="middle-box" onClick={props.middleBoxCallback}>
					<text
						fontSize="80"
						fontWeight="normal"
						fill="currentColor"
						x="1210"
						y="1720"
					>
						About
					</text>
					<path
						d="M1163.19 1581.19L1157.69 1600.68L1119.64 1616.66L1119.64 1578.69L1163.19 1581.19Z"
            id="middle-box-flap"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1461.85 1788.66L1459.05 1589.9L1165.19 1581.69C1164.13 1688 1163.46 1754.45 1163.19 1781.02C1163.19 1781.2 1163.33 1781.34 1163.5 1781.34C1203.28 1782.32 1302.73 1784.76 1461.85 1788.66Z"
						id="middle-box-front"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1157.69 1599.68L1165.19 1581.69C1164.14 1688.12 1163.48 1754.63 1163.21 1781.24C1163.2 1782.34 1162.09 1783.08 1161.07 1782.66C1157.81 1781.32 1149.02 1777.72 1145.48 1776.27C1145 1776.07 1144.62 1775.71 1144.41 1775.24C1143.81 1773.95 1144.47 1775.39 1144.41 1775.24C1142.42 1770.95 1139.95 1766.89 1137.06 1763.15C1136.58 1762.53 1137.47 1763.68 1136.48 1762.4C1135.28 1760.85 1134.44 1759.06 1134.03 1757.14C1133.65 1755.43 1133.46 1754.53 1133.16 1753.15C1132.51 1750.17 1130.9 1747.49 1128.58 1745.52C1127.29 1744.43 1125.71 1743.08 1124.09 1741.72C1122.86 1740.67 1122.15 1739.13 1122.15 1737.51C1122.15 1721.46 1122.15 1681.35 1122.15 1617.16L1157.69 1599.68Z"
						id="middle-box-side"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
				</g>
				<g className="bottom-box" onClick={props.bottomBoxCallback}>
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
						id="bottom-box-side"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1155.23 1829.53L1448.53 1836.14L1450.83 1996.93L1152.53 1995.07L1155.23 1829.53Z"
						id="bottom-box-front"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1156.02 1783.84L1454.12 1791.95L1453.36 1834.79L1156.61 1828.34C1143.75 1818.56 1135.72 1812.45 1132.51 1810C1131.13 1808.95 1130.26 1807.36 1130.13 1805.63C1129.63 1799 1128.25 1780.62 1127.73 1773.68C1127.69 1773.12 1128.25 1772.7 1128.78 1772.92C1132.41 1774.37 1141.49 1778.02 1156.02 1783.84Z"
						id="bottom-box-flap"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
					<path
						d="M1155.23 1784.02L1153.83 1828.13L1155.23 1784.02Z"
						id="bottom-box-flap-corner-line"
            stroke="currentColor"
						strokeWidth="3"
						fill="none"
					/>
				</g>
			</svg>
		</div>
	);
};

export default BoxButtons;
