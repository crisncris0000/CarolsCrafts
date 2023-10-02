import React, { useEffect, useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react';
import { useSelector } from 'react-redux';
import TransactionInfo from './TransactionInfo';
import axios from 'axios';
import Error from '../Messages/Error';

export default function TransactionHistory({tableStyle}) {
    const tableClass = `table-container ${tableStyle}`
    const user = useSelector((states) => states.user.value);

    const [paymentHistory, setPaymentHistory] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        axios.get(`https://api.mckcreation.com/api/payment/payment-history?id=${user.id}`)
            .then((response) => {
                setPaymentHistory(response.data);
            }).catch(() => {
                setErrorMessage("Error retrieving payment history");
                setError(true);
            })
    }, [paymentHistory, error])

    function formatDate(inputDate) {
        const date = new Date(inputDate);
    
        let month = date.getMonth() + 1; // getMonth() is zero-based
        let day = date.getDate();
        let year = date.getFullYear().toString().substr(-2); // get last 2 digits of year
    
        month = month < 10 ? '0' + month : month; // prepend 0 if less than 10
        day = day < 10 ? '0' + day : day;
    
        return month + '/' + day + '/' + year;
    }
    

  return (
    <>
        {error ? <Error message={errorMessage}/> : null}
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
                    {paymentHistory.map((previousPayment) => (
                        <CTableRow key={previousPayment.id}>
                            <CTableHeaderCell scope="row">{previousPayment.id}</CTableHeaderCell>
                            <CTableDataCell>${previousPayment.totalPrice}</CTableDataCell>
                            <CTableDataCell>{formatDate(previousPayment.createdAt)}</CTableDataCell>
                            <CTableDataCell>
                                <TransactionInfo transactionId={previousPayment.transactionId} description={previousPayment.description} />
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    </>
  )
}
