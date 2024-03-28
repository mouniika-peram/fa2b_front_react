import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import CartData from './cart/cartData';



function CartModal({show,handleClose}) {

  const cart=useSelector((state)=>state.cart)




  
  return (

 
    <>
      
      <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <CartData cart={cart} />
         
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default CartModal