'use client'
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../assets/banner5.webp'
import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <Grid item lg={12} md={12} sm={12} xs={12} data-aos="fade-right" sx={{ position: 'relative' }}>
                <Box sx={{height:'880px'}}>
                    <Image src={banner} alt='opm' style={{ width: '100%', height: '100%', objectFit: 'cover', }} />
                </Box>
                <Box sx={{ position: 'absolute', top: '0%', left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.0)', backgroundBlendMode: 'multiply',display:'flex', alignItems:'flex-end' }}>
                    <Box sx={{ m: '10px', }}>
                        <Grid container sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>

                      
                            <Grid item xs={8} sx={{pt:'10px', }} >
                                <Typography sx={{ fontSize: { lg: '20px', md: '17px', sm: '15px', xs: '15px', },  ml:'20px',fontWeight: 'bold', fontStyle:'inherit', textAlign:'center', color:'black', }}>In today’s fast-paced digital world, children’s ability to focus and think critically is often challenged. Early intervention is crucial for enhancing cognitive development and building strong mental stamina in kids.

                                </Typography>
                                

                            </Grid>

                        </Grid>

                    </Box>
                </Box>
            </Grid>

        </>
    )
}

export default Banner