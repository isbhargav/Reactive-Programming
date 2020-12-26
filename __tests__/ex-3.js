const { expect, assert } = require("chai");
const PrintAll = require("../Exercises/ex-3");
describe("Test for Ex-3", () => {
  it("should get an array of {id,title} ", () => {
    const expectOutput = [
      { id: 70111470, title: "Die Hard" },
      { id: 654356453, title: "Bad Boys" },
      { id: 65432445, title: "The Chamber" },
      { id: 675465, title: "Fracture" }
    ];
    const actualOutput = PrintAll();

    assert.isOk(actualOutput, "The Array is Not defined");
    actualOutput.map((obj, i) => {
      assert.equal(Object.keys(obj).length, 2, "Object should have only 2 keys");
      assert.exists(obj.id, "Id Does not exist");
      assert.exists(obj.title, "Title Does not exist");
      expect(obj.id).to.equal(expectOutput[i].id);
      expect(obj.title).to.equal(expectOutput[i].title);
    });
  });
});
