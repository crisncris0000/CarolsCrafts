import React from 'react';
import OrderSummary from './OrderSummary';
import Transaction from '../Transaction/TransactionHistory';
import { useSelector } from 'react-redux';
import Unauthorized from '../Messages/Unauthorized';


export default function Dashboard() {
    const user = useSelector((states) => states.user.value);
  return (
    <>
        {user.role === 'ADMIN' ?
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
        </>
        : <Unauthorized />
        }
    </>
  )
}
