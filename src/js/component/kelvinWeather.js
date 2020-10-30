import React from "react";

const KelvinToCelsius = () => {
	//declare constant variable kelvin and set it equal to temperature
	const kelvin = 500;
	//declare constant variable celsius and set it equal to subtract 273 from kelvin to get Celsius value
	const celsius = kelvin - 273;
	//declare variable farhenheit and calculate temperature with formula below
	let fahrenheit = celsius * (9 / 5) + 32;
	//call the variable fahrenheit and round the temperature to nearest whole number
	fahrenheit = Math.floor(fahrenheit);
	return;
	<div>
		<p>`The temperature is ${fahrenheit} degrees Fahrenheit.`</p>
	</div>;
};
