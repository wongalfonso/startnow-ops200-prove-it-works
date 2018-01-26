const expect = require("chai").expect;
const Mortgage = require("../../src/js/lib/Mortgage");

describe("Mortgage Calculator", () => {
  let mortgage = null;
  

  beforeEach(() => {
    mortgage = new Mortgage(300000, 3.75, 30, 12, 12);
  });

  it("should have a function called 'monthlyPayment'", () => {
    expect(mortgage.monthlyPayment).to.exist;
  })

  it("should return 'singlePayment'", () => {
    expect(mortgage.monthlyPayment[0].singlePayments).to.exist;
  })

  it("should return 'totalInterest'", () => {
    expect(mortgage.monthlyPayment[0].totalInterest).to.exist;
  })

  it("should return correct amount of months", () => {
    expect(mortgage.monthlyPayment[0].totalPayments).to.equal(360);
  })
});