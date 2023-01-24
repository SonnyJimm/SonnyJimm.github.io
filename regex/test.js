mocha.setup("bdd");
let assert = chai.assert;

window.onload = () => {
  testing();
  mocha.run();
};

const testing = () => {
  describe("Reduce ", () => {
    describe("Sum of numbers ", () => {
      it("Result of 1,2,3,4 is 10 ", () => {
        assert.equal(sum(1, 2, 3, 4), 10);
      });
      it("Result of 5,6,7,30 is 48 ", () => {
        assert.equal(sum(5, 6, 7, 30), 48);
      });
    });
    describe("Multiply the numbers", () => {
      it("Result of 1,2,3,4 is 24 ", () => {
        assert.equal(multiply(1, 2, 3, 4), 24);
      });
    });
    describe("Multiply the numbers", () => {
      it("Result of 1,2,3,4 is 24 ", () => {
        assert.equal(multiply(1, 2, 3, 4), 24);
      });
    });
    describe("Multiply the numbers", () => {
      it("Intentional fail ", () => {
        assert.equal(multiply(5, 6, 7, 8), 24);
      });
    });
    describe("Multiply the numbers", () => {
      it("result of 5,6,7,8 is 1680", () => {
        assert.equal(multiply(5, 6, 7, 8), 1680);
      });
    });
    describe("reverse String ", () => {
      it("Andy is in reverse ydnA", () => {
        assert.equal(reverse("Andy"), "ydnA");
      });
    });
    describe("reverse String ", () => {
      it("ratset gaj is in reverse jag testar", () => {
        assert.equal(reverse("ratset gaj"), "jag testar");
      });
    });
  });
  describe("Filter ", () => {
    describe("find the long Word words ", () => {
      it("Find string longest", () => {
        assert.equal(
          findLongWords(4, "Algorithms", "Structures", "Data", "JavaScript").toString(),
          ["Algorithms", "Structures", "JavaScript"].toString()
        );
      });
    });
  });
};
