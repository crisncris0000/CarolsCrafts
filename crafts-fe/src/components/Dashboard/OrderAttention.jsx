import React from 'react';
import { CButton } from '@coreui/react';
import OrderSummary from './OrderSummary';

export default function OrderAttention() {
  return (
    <>
        <div className="order-attention">
            <h4>Orders that need your attention</h4>
            <div className="order-container">
                <div className="order-item">
                    <p>Transaction# 1</p>
                    <div className="btn-container">
                        <OrderSummary buttonName="View"/>
                        <CButton type="submit" color="primary" className="btn">Completed</CButton>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
