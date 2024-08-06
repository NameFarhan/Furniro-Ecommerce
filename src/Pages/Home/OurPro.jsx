


import { Typography } from '@mui/material'
import React from 'react'
import AllProducts from './Products/AllProducts'

const OurPro = () => {
  return (
    <>
    <Typography sx={{fontSize:'40px',marginBottom:'32px',textAlign:'center',fontWeight:'900',color:'#3A3A3A',marginTop:'56px'}}>Our Products</Typography>
    <AllProducts/>
    </>
  )
}

export default OurPro