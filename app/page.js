'use client'
import AboutUs from '@/componants/AboutUs'
import Banner from '@/componants/Banner'
import Footer from '@/componants/Footer'
import Form from '@/componants/Form'
import Header from '@/componants/Header'
import Testimonial from '@/componants/Testimonial'
import { Grid } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
      <Grid container>
        <Header />
        <AboutUs />
        {/* <Banner /> */}
        <Form />
  
        <Testimonial/>
        <Footer />
      </Grid>

    </>
  )

}

export default page