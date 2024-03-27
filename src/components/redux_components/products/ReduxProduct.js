import React,{useEffect, useState} from 'react';
import axios from 'axios';

import Productitem from './productitem';



function ReduxProduct() {


    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/product/`).then((res)=>{
            setProducts(res?.data)
        }).catch((err)=>{

        })
    }, [])



  return (<div>

    {
        products?.length>0?
        products?.map((e,index)=>  <Productitem key={index} data={e} /> )
        
        
       
        
        :<>No Products</>
    }
    
    
  </div>)


}

export default ReduxProduct