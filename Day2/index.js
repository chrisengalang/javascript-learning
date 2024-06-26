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

const dataTypes = () => {
  let x = 1
  let y = 'hello'
  let z = true
  let a = [1, 2, 3]

  console.log(typeof x)
  console.log(typeof y)
  console.log(typeof z)
  console.log(typeof a)
}

dataTypes()