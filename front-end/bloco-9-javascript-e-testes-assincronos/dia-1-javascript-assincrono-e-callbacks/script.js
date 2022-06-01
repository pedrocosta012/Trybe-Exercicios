// Exercício 4
/*
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  return `Mars temperature is: ${getMarsTemperature()} degree Celsius`
};
// imprime "Mars temperature is: 20 degree Celsius", por exemplo
setTimeout(() => console.log(sendMarsTemperature()), messageDelay());
*/
// Exercício 5
/*
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (func) => {
  func(getMarsTemperature());
};
// imprime "It is currently 47ºF at Mars", por exemplo
setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay());
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
setTimeout(() => sendMarsTemperature(greet), messageDelay());
*/
// Exercício 7
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;
