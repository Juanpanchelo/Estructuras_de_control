const celsiusAFahrenheit = (celsius) => {
    return (celsius * 9/5)+32
}
console.log(celsiusAFahrenheit(20));

const fahrenheitACelsius = (fahrenheit) => {
    return (fahrenheit - 32)* 5/9
}
console.log(fahrenheitACelsius(20));
