import React from 'react'
import { useSelector } from 'react-redux'
import GuestSummary from './GuestSummary';
import UserSummary from './UserSummary';

export default function CartSummary() {
    const user = useSelector(state => state.user.value);

    const view = {
        userView: <UserSummary />,
        guestView: <GuestSummary />
    }

    return (
        <>
            {user.isGuest ? view.guestView : view.userView}
        </>
    )
}
