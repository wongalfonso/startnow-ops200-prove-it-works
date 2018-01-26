import React from "react"

const style = {
  textAlign : "center"
}

export const TableData = ({period, tPayments, sPayments, tInterest, tPrincipal, tBalance}) => {

  const addCommas = (x) => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  sPayments = addCommas(sPayments);
  tInterest = addCommas(tInterest);
  tPrincipal = addCommas(tPrincipal);
  tBalance = addCommas(tBalance);
  return (
    <tr>
     <td style = {style}>{period}</td> 
     <td style = {style}>${sPayments}</td>
     <td style = {style}>${tInterest}</td>
     <td style = {style}>${tPrincipal}</td>
     <td style = {style}>${tBalance}</td>
    </tr>
  )
}