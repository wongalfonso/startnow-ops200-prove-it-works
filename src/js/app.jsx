import React, { Component } from 'react';
import Mortgage from "./lib/Mortgage.js"
import { Table } from "./Table.js"
import { Anchor } from "./Anchor.js"

// var mortgage = require("./lib/Mortgage.js");

const inputStyle = {
  marginBottom: "1em"
}
const selectStyle = {
  marginBottom: "2em"
}


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      principal: "",
      interest: "",
      term: "",
      period: 12,
      output: "",
      monthlyPayments: [],
      showTable: false,
      tableList: 50
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePrincipal = this.handlePrincipal.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handlePeriod = this.handlePeriod.bind(this);
  }


  handlePrincipal(e) {
    this.setState({
      principal: e.target.value
    })
  }

  handleInterest(e) {
    this.setState({
      interest: e.target.value
    })
  }

  handleTerm(e) {
    this.setState({
      term: e.target.value
    })
  }

  handlePeriod(e) {
    this.setState({
      period: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    let mortgage1 = new Mortgage(this.state.principal, this.state.interest, this.state.term, this.state.period, this.state.tableList)
    let mortgageFunction = mortgage1.monthlyPayment;
    let monthlyPayment1 = mortgageFunction[0].singlePayments.toFixed(2);
    let monthlyPayment = mortgageFunction

    this.setState({
      output: "Your Monthly Payment Would Be: $" + monthlyPayment1,
      monthlyPayments: monthlyPayment,
      showTable: true
    })
  }

  // componentDidUpdate() {
  //   console.log(this.state.monthlyPayments);
  // }

  render() {
    return (
      <div className='App container'>
        <header>
          <h1 style={{ textAlign: "center", marginBottom: "2em" }}>Mortgage Calculator</h1>
        </header>
        <form onSubmit={this.onSubmit}>

          <label htmlFor="principal">Loan Amount</label>
          <input 
            value={this.state.principal}
            name="principal"
            style={inputStyle}
            id="principal"
            onChange={this.handlePrincipal} />

          <label htmlFor="interest">Interest Rate</label>
          <input
            value={this.state.interest}
            name="interestRate"
            style={inputStyle}
            id="interest"
            onChange={this.handleInterest} />

          <label htmlFor="term">Loan term</label>
          <input
            value={this.state.term}
            name="loanTerm"
            style={inputStyle}
            id="term"
            onChange={this.handleTerm} />

          <select
            value={this.state.period}
            name="period"
            style={selectStyle}
            onChange={this.handlePeriod}>
            <option value="12">Monthly</option>
            <option value="4">Quarterly</option>
          </select>

          <button
            id="calculate"
            className="btn btn-primary"
          >Calculate
              </button>
        </form>
        <div className="col-lg-12">
          <p id="output"
            style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px", marginLeft: "2em", marginBottom: "1em" }}>{this.state.output}</p>
        </div>
        <Anchor/>
        <div className="row">
          {(this.state.showTable) ?
            <Table
              paymentData={this.state.monthlyPayments}
            /> : <div></div>}
        </div>
      </div>
    );
  }
}
