import React from 'react';
import ShoppingItems from './ShoppingItems';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function Shopping() {

  return (
    <>
      <Link to={"/add-form"}>
        <Button variant="primary">Add new craft</Button>
      </Link>

      <ShoppingItems />
    </>
  )
}
