const ratioOfNumbes = require("../ratio/index");
const factorialOfNumbers = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ration = ratioOfNumbes(num1, num2);
  const factorial = factorialOfNumbers(num3);

  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
