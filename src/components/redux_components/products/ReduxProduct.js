import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Productitem from './productitem';
import { baseUrl } from '../../../global/base';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ReduxProduct() {


    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}product/`).then((res)=>{
            setProducts(res?.data)
        }).catch((err)=>{

        })
    }, [])

    // console.log(products)





  return (<div>
    <Container>
      <Row>
    {
        products?.length>0
        ?
        products?.map((e,index)=> <Col> <Productitem key={index} data={e} /> </Col>)
        :<>No Products</>
    }
      </Row>
    </Container>
  </div>)




}

export default ReduxProduct