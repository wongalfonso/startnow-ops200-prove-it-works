import React, { Component } from "react"
import { TableData } from "./TableData.js"

const style = {
  textAlign: "center"
}

export class Table extends Component {
  
  render () {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th style = {style}><h4>Period</h4></th>
          <th style = {style}><h4>Payment</h4></th>
          <th style = {style}><h4>Interest</h4></th>
          <th style = {style}><h4>Principal</h4></th>
          <th style = {style}><h4>Balance</h4></th>
        </tr>
      </thead>
      <tbody>
        {this.props.paymentData.map((table, i) => {
          console.log(table);
          return (
            <TableData
              key = {i+1}
              period = {i+1}
              tPayments = {table.totalPayments}
              sPayments = {table.singlePayments}
              tInterest = {table.totalInterest}
              tPrincipal = {table.totalPrincipal}
              tBalance = {table.totalBalance}
            />
          )
        })}
      </tbody>
    </table>
  )
}
}