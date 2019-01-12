var calculator = require("../calculator");

describe("multiplication", function() {

  it("should multiply 2 and 3", function() {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });

  it("should multiply 3 and 5", function() {
    var product = calculator.multiply(3, 5);
    expect(product).toBe(15);
  });

  it("should multiply 4 and 5", function() {
    var product = calculator.multiply(4, 5);
    expect(product).toBe(20);
  });

  it("should multiply 3 and 3", function() {
    var product = calculator.multiply(3, 3);
    expect(product).toBe(9);
  });

});

describe("Addition", function() {
  it("The function should add 2 numbers", function() {
    var value = calculator.addnumber(5, 6);
    expect(value).toBe(11);
  });

  it("The function should add 2 numbers", function() {
    var value = calculator.addnumber(5, 4);
    expect(value).toBe(9);
  });
});

describe("Soustraction", function() {
  it("The function should supp 2 numbers", function() {
    var value = calculator.suppnumber(8, 6);
    expect(value).toBe(2);
  });

  it("The function should supp 2 numbers", function() {
    var value = calculator.suppnumber(5, 4);
    expect(value).toBe(1);
  });
});

describe("Division", function() {
  it("The function should divide 2 numbers", function() {
    var value = calculator.divide(8, 4);
    expect(value).toBe(2);
  });

  it("The function should divide 2 numbers", function() {
    var value = calculator.divide(12, 4);
    expect(value).toBe(3);
  });
});
