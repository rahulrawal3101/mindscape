'use client';
import AboutUs from '@/componants/AboutUs';
import Banner from '@/componants/Banner';
import Footer from '@/componants/Footer';
import Form from '@/componants/Form';
import Header from '@/componants/Header';
import SignUpModal from '@/componants/SignUpModal';
import Testimonial from '@/componants/Testimonial';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   // Run the function immediately
  //   setOpen(true);
  
  //   // Then set the interval to run every 15 seconds
  //   const interval = setInterval(() => {
  //     setOpen(true);
  //   }, 30000);
  
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    // Run the function immediately
    setOpen(true);

    // Then set the interval to run every 30 seconds
    const interval = setInterval(() => {
      setOpen(prevOpen => {
        if (!prevOpen) {
          return true;
        }
        return prevOpen;
      });
    }, 40000);

    return () => clearInterval(interval);
  }, []);

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
      <SignUpModal open={open} setOpen={setOpen} />

    </>
  )

}

export default page