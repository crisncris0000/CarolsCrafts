import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react';
import OrderSummary from '../Dashboard/OrderSummary';
import { useSelector } from 'react-redux';

export default function TransactionHistory({tableStyle}) {
    const tableClass = `table-container ${tableStyle}`
    const user = useSelector((states) => states.user.value);
  return (
    <>
        <div className={tableClass}>
            <CTable striped hover>
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">Order #</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Total Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Summary</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>$200.55</CTableDataCell>
                        <CTableDataCell>7/23/23</CTableDataCell>
                        <CTableDataCell><OrderSummary buttonName="Summary" modalTitle="Order #1 Summary"/></CTableDataCell>
                    </CTableRow>
                    
                    <CTableRow>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </div>
    </>
  )
}
