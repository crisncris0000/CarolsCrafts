import { React, useState } from 'react';
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';

export default function OrderSummary({ buttonName, modalTitle }) {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton onClick={() => setVisible(!visible)} className= 'modal-button'>{buttonName}</CButton>
            <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                    <CModalTitle>{modalTitle}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
  )
}
