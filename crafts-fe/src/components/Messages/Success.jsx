import React, { useEffect, useState } from 'react';

export default function Success({ message }) {

  return (
    <>
        <div className="success-msg">
          {message}
        </div>
    </>
  )
}
