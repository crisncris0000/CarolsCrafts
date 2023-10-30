import React from 'react'
import { useSelector } from 'react-redux'

export default function GuestHeader() {
    const user = useSelector((states) => states.user.value)
  return (
    <>
        {user.isGuest ?
            <div className="guest-notification">
                <h4>Not logged in</h4>
                <p>
                    We noticed that you're not logged in, please note that if you aren't logged in, 
                    refreshing the page may cause your items to disappear. Consider creating an account
                    to gain benefits such as keeping track of order history and keeping track of items within your cart.
                </p>
            </div>
        : null
        }
    </>
  )
}
