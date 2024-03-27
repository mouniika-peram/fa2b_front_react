import React,{useEffect} from 'react';
import axios from 'axios';





function ReduxProduct() {

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/product/`).then((res)=>{
            console.log(res?.data)
        }).catch((err)=>{})
    }, [])

    

  return (<div>ReduxProduct</div>)


}

export default ReduxProduct