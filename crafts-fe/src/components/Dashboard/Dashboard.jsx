import React from 'react'
import OrderSummary from './OrderSummary'

export default function Dashboard() {
  return (
    <>
        <div className="sales-container">
            <div className='alltime-sales'>
                <h3>All Time Sales</h3>
                <h4>300000</h4>
            </div>
            <div className="monthly-sales">
                <h3>Monthly Sales</h3>
                <h4>300000</h4>
            </div>
            <div className="daily-sales">
                <h3>Daily Sales</h3>
                <h4>300000</h4>
                <OrderSummary />
            </div>
        </div>
    </>
  )
}
