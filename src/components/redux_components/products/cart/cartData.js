import axios from 'axios';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { baseUrl } from '../../../../global/base';

import { cartActions } from '../store/cart_slice';

import { useDispatch } from 'react-redux';



function CartData({cart}){

  const dispatchActions = useDispatch()

  const increment=(cartRecord)=>{
    console.log("inc")
    console.log(cartRecord)
    axios.post(`${baseUrl}cart/udt_cart_qty/`,{...cartRecord,"type":"increment"}).then((res)=>{

      dispatchActions(cartActions.IncrementQty({"id":cartRecord.id}))





    }).catch((err)=>{
      console.log(err)

    })

  }

  
  const decrement=(cartRecord)=>{
    console.log("dec")
    axios.post(`${baseUrl}cart/udt_cart_qty/`,{...cartRecord,"type":"decrement"}).then((res)=>{
      console.log(res?.data)
      dispatchActions(cartActions.DecrementQty({"id":cartRecord.id}))
    }).catch((err)=>{

    })
    
  }

  

  return(
    <>
    
    {
      cart?.items?.map((e,index)=> <CartItem data={e} key={index} increment={increment}
      decrement={decrement}/>)
      }
      </>
  )
}

export default CartData



function CartItem({data,increment,  decrement}) {



  return (
    <div className="cart-item">
        <Container>
      <Row>
          <Image src={data?.prd_img} rounded />
          <p>Title: {data?.prd_title}</p>
          <p>Price: {data?.prd_price}</p>
          <p>Qty: {data?.qty}</p>
          <p>Net Amount: {data?.net_amt}</p>

          <button onClick={(e)=>{increment(data)}}>+</button>
          <button onClick={(e)=>decrement(data)}>-</button>
       
      </Row>
    </Container>
        
    </div>
  )
}

