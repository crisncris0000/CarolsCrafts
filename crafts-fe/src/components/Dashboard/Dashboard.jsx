import React from 'react';
import OrderSummary from './OrderSummary';
import Transaction from '../Transaction/TransactionHistory';
import OrderAttention from './OrderAttention';


export default function Dashboard() {
  return (
    <>
        <div className="sales-container">
            <div className="monthly-sales">
                <h3>Monthly Sales</h3>
                <h4>300000</h4>
                <OrderSummary buttonName="Summary" modalTitle="Summary of Sales"/>
            </div>
            <div className="daily-sales">
                <h3>Daily Sales</h3>
                <h4>300000</h4>
                <OrderSummary buttonName="Summary" modalTitle="Summary of Sales"/>
            </div>
            <div className="monthly-orders">
                <h3>Monthly Orders</h3>
                <h4>300000</h4>
                <OrderSummary buttonName="Summary" modalTitle="Summary of Sales"/>
            </div>
            <div className="daily-orders">
                <h3>Daily Orders</h3>
                <h4>300000</h4>
                <OrderSummary buttonName="Summary" modalTitle="Summary of Sales"/>
            </div>
        </div>
        
        <div className="recent-transactions">
            <h5>Recent Transactions</h5>
            <Transaction tableStyle="dashboard-table" />
        </div>
        
        <OrderAttention />
    </>
  )
}
