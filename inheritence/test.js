mocha.setup("bdd");
let assert = chai.assert;

window.onload = () => {
  testing();
  mocha.run();
};

const testing = () => {
  describe("Exercise 1", () => {
    describe("Define a filter function on the String object.", () => {
      it("('This house is not nice'.filter('not') equals 'This house is nice'", () => {
        assert.equal("This house is not nice!".filter('not'),"This house is nice!"
        );
      });
    });
    });
  describe("Exercise 2", () => {
    describe("Write a BubbleSort algorithm on the Array object ", () => {
      it("[6,4,0, 3,-2,1].bubbleSort() [-2, 0, 1, 3, 4, 6]", () => {
        assert.equal(
          [6,4,0, 3,-2,1].bubbleSort().toString(),
          [-2, 0, 1, 3, 4, 6].toString()
        );
      });
    });
  });
  describe("Exercise 3 ", () => {
    describe("Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and returns", () => {
      it("[teacher's name] is now teaching [subject] ", () => {
        assert.equal(
          teacher.teach("inheritence"),
          "Dany is now teaching inheritence"
        );
      });
    });
  });
};
