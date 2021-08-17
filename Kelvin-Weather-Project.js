/*Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

I am helping kelvin to convert Kelvin to Celsius, then to Fahrenheit.*/


//The forecast is 293 Kelvin, this stays constant.
const kelvin = 293;
//Celsius is always 273 degrees less than Kelvin
const celsius = kelvin - 273;
//Newton scale is another measurement we can convert to:
const newton = Math.floor(celsius *(33/100));
//Fahrenheit is a bit more complex, see code below:
const fahrenheit = Math.floor(celsius * (9/5) + 32);
//We use Math.floor() above because the value is a decimal and we want a reasonable number.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees Newton.`)