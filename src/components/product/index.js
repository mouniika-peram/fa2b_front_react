import React,{useEffect} from 'react'
import axios from 'axios'
function Product() {

    useEffect(()=>{

        axios.get(`https://fa2b-back.onrender.com/api/v1/users/`).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });
    },[])
  return (
    <div>Product</div>
  )
}

export default Product