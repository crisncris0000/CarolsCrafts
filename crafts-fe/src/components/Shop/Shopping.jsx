import React from 'react';
import ShoppingItems from './ShoppingItems';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux/es/hooks/useSelector';


export default function Shopping() {

  const user = useSelector((state) => state.user.value);

  return (
    <>
      <Link to={"/add-form"}>
        {user.role === 'ADMIN' ? <Button variant="primary">Add new craft</Button> : null}
      </Link>

      <ShoppingItems />
    </>
  )
}
