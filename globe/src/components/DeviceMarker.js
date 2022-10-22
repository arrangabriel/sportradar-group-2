import React from "react";
import { Marker } from "react-map-gl";

const DeviceMarker = (props) => {
	return (
		<Marker {...props} offsetLeft={-20} offsetTop={-46}>
			<svg
				width="40"
				height="50"
				viewBox="0 0 40 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter_dropShadow)">
					<path
						d="M18.3565 2.08451C12.1465 2.74151 6.78909 7.0435 4.82361 12.9578C3.39714 17.2683 3.84937 22.4639 5.98035 26.2139C7.00649 27.9925 8.28533 29.438 11.0859 31.9353C12.1384 32.8816 13.4428 34.0906 13.9823 34.6164C16.7395 37.3237 18.2527 39.6543 19.4269 42.9924C19.7575 43.9126 19.8098 44 20.0008 44C20.1833 44 20.2442 43.9297 20.3837 43.5183C21.0708 41.5031 21.7838 39.9963 22.7321 38.5242C23.9586 36.6406 25.3153 35.186 28.5681 32.2597C31.5334 29.5872 32.5944 28.4656 33.6294 26.8537C36.0821 23.0515 36.6908 17.5315 35.1776 12.9578C32.8292 5.88722 25.7407 1.31352 18.3565 2.08451Z"
						fill="#FF5E00"
					/>
				</g>

				<image
					href="./icons/american-football-svgrepo-com.svg"
					alt="amerivcan-football"
					width={25}
				></image>

				{/* <image href="globe/public/football-svgrepo-com.svg" height="200" width="200" /> */}
				<defs>
					<filter
						id="filter_dropShadow"
						x="0"
						y="0"
						width="40"
						height="50"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						/>
						<feOffset dy="2" />
						<feGaussianBlur stdDeviation="2" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic" // her velges hva som skal renderes som ikon (icon)
							in2="effect_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</Marker>
	);
};

export default DeviceMarker;
