import React from 'react';
import ShoppingItems from './ShoppingItems';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Shopping() {
  const user = useSelector((state) => state.user.value);
  
  return (
    <>
        <div className="add-link">
          <Link to={"/add-form"}>
            {user.role === 'ADMIN' ? <button>Add new craft</button> : null}
          </Link>
        </div>
      <ShoppingItems />
    </>
  )
}
