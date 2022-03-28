import React from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../List/constants';

export default function Detail() {
  const params: any = useParams();
  console.log(params, '123');
  
  let invoice: any = getInvoice(parseInt(params.detailId, 10));
  
  return (
    <div>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </div>
  )
}
