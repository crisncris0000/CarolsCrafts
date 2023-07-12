import React from 'react'
import { CButton } from '@coreui/react'

export default function OrderAttention() {
  return (
    <>
        <div className="order-attention">
            <h4>Orders that need your attention</h4>
            <div className="order-container">
                <div className="order-item">
                    <p>Transaction# 12312431212331</p>
                    <div className="btn-container">
                        <CButton type="submit" color="primary" className="btn">View</CButton>
                        <CButton type="submit" color="primary" className="btn">Completed</CButton>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
