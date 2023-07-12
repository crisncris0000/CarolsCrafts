import React from 'react';
import OrderSummary from './OrderSummary';
import Transaction from '../Transaction/TransactionHistory';


export default function Dashboard() {
  return (
    <>
        <div className="sales-container">
            <div className="monthly-sales">
                <h3>Monthly Sales</h3>
                <h4>300000</h4>
                <OrderSummary />
            </div>
            <div className="daily-sales">
                <h3>Daily Sales</h3>
                <h4>300000</h4>
                <OrderSummary />
            </div>
            <div className="monthly-orders">
                <h3>Monthly Orders</h3>
                <h4>300000</h4>
                <OrderSummary />
            </div>
            <div className="daily-orders">
                <h3>Daily Orders</h3>
                <h4>300000</h4>
                <OrderSummary />
            </div>
        </div>

        <Transaction tableStyle="dashboard-table" />
    </>
  )
}
