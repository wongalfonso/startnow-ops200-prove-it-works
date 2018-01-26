module.exports = class Mortgage {
  constructor(principal, interest, term, period, tableList) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
    this.tableList = tableList
  }

  get monthlyPayment() {
    let principal = this.principal;
    let interest = this.interest;
    let term = this.term;
    let period = this.period;
    let searchAmount = this.tableList

    principal = parseInt(principal);
    interest = parseFloat(interest);
    term = parseInt(term);
    period = parseInt(period);
    let rate = (interest / 100) / period;
    let payments = term * period


    let upper = Math.pow((1 + rate), payments);
    upper = upper * rate;

    let lower = Math.pow((1 + rate), payments);
    lower = lower - 1;

    let frac = (upper / lower);
    let mortgagePayment = principal * frac;
    let table = {
      totalPayments: payments,
      singlePayments: mortgagePayment,
      totalInterest: rate * principal,
      totalPrincipal: (mortgagePayment - (rate * principal)),
      totalBalance: (principal - (mortgagePayment - (rate * principal)))
    }
    console.log(table);
    let tableData = [];

    for (let i = 0; i < searchAmount; i++) {
      if(i === 0) {
        tableData.push(Object.assign({}, table));
      }else {
      table.Period = i + 1;
      table.totalInterest = (rate * table.totalBalance);
      table.totalPrincipal = (table.singlePayments - table.totalInterest);
      table.totalBalance = (table.totalBalance - table.totalPrincipal);
      // tableData.push(table);
      tableData.push(Object.assign({}, table));
      }
      // 
    }
    console.log(tableData);
    return tableData;

  }
}