import React from "react";
import { KelvinToCelsius } from "./kelvinWeather";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<KelvinToCelsius />
		</div>
	);
}
