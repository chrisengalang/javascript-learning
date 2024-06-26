const varScope = () => {
  
  if (true) {
    var x = 1;
  }

  console.log(x);
}

/**
 * Results in not defined error
 */
const letScope = () => {
  if (true) {
    let x = 1;
  }
  
  console.log(x);
}

/**
 * Results in constant assignment error
 */
const constAssignment = () => {
  const x = 1;

  x = 2;
}


varScope();
letScope();
constAssignment();

