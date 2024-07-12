//3.Task: Function Composition

//Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
// solution ------------------------------------
// Function to square a number
const square = (x: number): number => x * x;

// Function to double a number
const double = (x: number): number => x * 2;

// Function to add 5 to a number
const add5 = (x: number): number => x + 5;

// Compose functions to square a number, double the result, and add 5
const squareDoubleAndAdd5 = (x: number): number => {
  return add5(double(square(x)));
};

const number = 3;
const result = squareDoubleAndAdd5(number);
console.log(result);
