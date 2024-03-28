import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Productitem from './productitem';
import { baseUrl } from '../../../global/base';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartModal from './cartModal';

import { cartActions } from './store/cart_slice';

import { UseSelector,useDispatch } from 'react-redux';



function ReduxProduct() {


    const [products, setProducts] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatchActions = useDispatch();


    useEffect(() => {
        axios.get(`${baseUrl}product/`).then((res)=>{
            setProducts(res?.data)
        }).catch((err)=>{

        })
    }, [])

 


    const AddToCart=(PrdDetails)=>{
      axios.post(`${baseUrl}cart/`,{...PrdDetails,qty:1}).then((res)=>{
        dispatchActions(cartActions.updateItems(res?.data))
        handleShow()
      }).catch((err)=>{
        
      })

    }


  return (<div>
    <CartModal  show={show} handleClose={handleClose}/>
    <Container>
      <Row>
    {
        products?.length>0
        ?
        products?.map((e,index)=> <Col key={index}> 
        <Productitem  data={e} AddToCart={AddToCart} /> 
        </Col>)
        :<>No Products</>
    }
      </Row>
    </Container>
  </div>)
}

export default ReduxProduct