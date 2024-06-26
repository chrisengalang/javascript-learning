/**
 * Practice for functions and control structures
 */

const calculateFactorial = (num) => {
  if (num === 0) {
    console.log(0)
  } else {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    console.log(factorial)
  }
}

calculateFactorial(4)
calculateFactorial(3)
calculateFactorial(20)