import React from 'react'

export default function Error( {message} ) {
  return (
    <>
        <div className="error-msg">
          <h4>{message}</h4>
        </div>
    </>
  )
}
