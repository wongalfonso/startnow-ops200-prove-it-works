const express = require("express");
const expect = require("chai").expect;
const path = require("path");
const Nightmare = require("nightmare");

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../dist")));

app.listen(8888);

const url = "http://localhost:8888";

const nightmare = new Nightmare();
let pageObject = null;

describe("End to End Tests", function () {
  this.timeout(10000);
  let pageObject = null;

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  it("should contain a <h1> element for the page title", () => 
    pageObject
      .evaluate(() => document.querySelector("h1").innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal("Mortgage Calculator");
      })
    );

  it("should contain an input element with the name of 'principal'", () => 
    pageObject
      .evaluate(() => document.querySelector('input[name=principal]'))
      .then(input => expect(input).to.exist)
  );

  it("should contain an <input> element with the name of 'interestRate'", () => 
    pageObject
      .evaluate(() => document.querySelector("input[name=interestRate]"))
      .then(input => expect(input).to.exist)
  );

  it("should contain an <input> element with the name of 'loanTerm'", () => 
    pageObject
      .evaluate(() => document.querySelector("input[name=loanTerm]"))
      .then(input => expect(input).to.exist)
  );

  it("should contain an <select> element with the name of 'period'", () => 
    pageObject
      .evaluate(() => document.querySelector("select[name=period]"))
      .then(input => expect(input).to.exist)
  );

  it("should contain an div with a name of 'output'", () =>
    pageObject 
      .evaluate(() => document.querySelector("#output"))
      .then(input => expect(input).to.exist)
);

  it("should correctly calculate mortgage", () => 
    pageObject
    .wait()
    .type("input[name=principal]", 300000)
    .type("input[name=interestRate]", 3.75)
    .type("input[name=loanTerm]", 30)
    .select("select[name=period]", 12)
    .click("button#calculate")
    .wait(100)
    .wait("#output")
    .evaluate(() => document.querySelector("#output").innerText)
    .then((outputText) => {
      expect(outputText).to.equal("Your Monthly Payment Would Be: $1389.35");
    })
  ).timeout(65000);

  it("should correctly calculate mortgage", () => 
    pageObject
    .wait()
    .type("input[name=principal]", 400000)
    .type("input[name=interestRate]", 4)
    .type("input[name=loanTerm]", 30)
    .select("select[name=period]", 4)
    .click("button#calculate")
    .wait(100)
    .wait("#output")
    .evaluate(() => document.querySelector("#output").innerText)
    .then((outputText) => {
      expect(outputText).to.equal("Your Monthly Payment Would Be: $5738.84");
    })
  ).timeout(65000);

  it("should correctly calculate mortgage", () => 
    pageObject
    .wait()
    .type("input[name=principal]", 240000)
    .type("input[name=interestRate]", 3)
    .type("input[name=loanTerm]", 20)
    .select("select[name=period]", 4)
    .click("button#calculate")
    .wait(100)
    .wait("#output")
    .evaluate(() => document.querySelector("#output").innerText)
    .then((outputText) => {
      expect(outputText).to.equal("Your Monthly Payment Would Be: $4000.37");
    })
  ).timeout(65000);

});