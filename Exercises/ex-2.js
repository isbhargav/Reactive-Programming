// Exercise 2: Use forEach to print all the names in an array

// NOTE: You CANNOT use for loop.
const consoleOutput = [];
function log(value) {
  consoleOutput.push(value);
  console.log(value);
}

function PrintAll() {
  const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

  //------------------------------------- Your Code Goes over here  ----------------------------------

  names.forEach((name) => log(name));

  //---------------------------------------------End of Code -------------------------------------------
  return consoleOutput;
}
PrintAll();
module.exports = PrintAll;
