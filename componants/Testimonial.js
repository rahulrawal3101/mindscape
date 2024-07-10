'use client'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import card1 from '../assets/dotnetcard1.jpg';
import card2 from '../assets/dotnetcard2.jpg';
import card3 from '../assets/dotnetcard3.jpg';
import Image from 'next/image';

const Testimonial = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', mb: '40px', mt: '30px' }}>
                <Grid item xs={12} sx={{mb:'20px'}}>
                    <Typography sx={{ fontSize:{lg:'45px', md:'45px', sm:'40px', xs:'35px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: 'black' }}>Testimonial</Typography>
                </Grid>
                <Grid item xs={11} sm={8} md={6} lg={3} >
                    <Card sx={{ m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', p: '10px 5px' }} elevation={5}  >


                        <Box sx={{ width: '100%', height: {lg:'250px', md:'300px', sm:'300px',xs:'300px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                            <Image src={card1} alt='card1' style={{ width: '94%', height: '100%', objectFit: 'cover', marginTop: '20px' }} />
                        </Box>
                        <CardContent >
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: 'black', fontFamily: 'sans-serif' }} >
                                HariOm Singh
                            </Typography>
                            <Typography sx={{ fontSize: '15px', mt:'10px' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>



                <Grid item xs={11} sm={8} md={6} lg={3}>
                    <Card sx={{ m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', p: '10px 5px' }} elevation={5}  >


                        <Box sx={{ width: '100%', height:  {lg:'250px', md:'300px', sm:'300px',xs:'300px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                            <Image src={card2} alt='card2' style={{ width: '94%', height: '100%', objectFit: 'cover', marginTop: '20px' }} />
                        </Box>
                        <CardContent >
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: 'black', fontFamily: 'sans-serif' }} >
                               Kanhaiya Verma
                            </Typography>
                            <Typography sx={{ fontSize: '15px' , mt:'10px'}}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>

                <Grid item xs={11} sm={8} md={6} lg={3}>
                    <Card sx={{ m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', p: '10px 5px' }} elevation={5}  >


                        <Box sx={{ width: '100%', height:  {lg:'250px', md:'300px', sm:'300px',xs:'300px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                            <Image src={card3} alt='card3' style={{ width: '94%', height: '100%', objectFit: 'cover', marginTop: '20px' }} />
                        </Box>
                        <CardContent >
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: 'black', fontFamily: 'sans-serif' }} >
                               Ritu Rai
                            </Typography>
                            <Typography sx={{ fontSize: '15px', mt:'10px' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default Testimonial