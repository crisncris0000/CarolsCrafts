import React from 'react';

export default function Success({ message }) {

  return (
    <>
        <div className="success-msg">
          <h4>{message}</h4>
        </div>
    </>
  )
}
