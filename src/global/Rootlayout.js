import React from 'react'
import { Outlet,useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Rootlayout() {

  const location=useLocation()
  const { hash, pathname, search,state,key } = location;
  const noHeader=["/product"]

  return (
    <>
   
    {noHeader.includes(pathname)?<></>:<Header/>}
   <Outlet/>
   <Footer />
  
   </>
    
  )
}

export default Rootlayout