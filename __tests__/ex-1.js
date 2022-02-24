const { expect } = require("chai");
const PrintAll = require("../Exercises/ex-1");

describe("Test for Ex-1", () => {
  it("should print all names in array", () => {
    const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
    const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
    const answers = PrintAll();
    names.map((name, i) => expect(name).to.equal(answers[i]));
  });
});
