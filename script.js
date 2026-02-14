const isPowerOfTwo = (number) => {
  return number > 0 && (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
