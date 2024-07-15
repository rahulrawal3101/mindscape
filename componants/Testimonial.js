'use client'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import card1 from '../assets/dotnetcard1.jpg';
import card2 from '../assets/dotnetcard2.jpg';
import card3 from '../assets/dotnetcard3.jpg';
import Image from 'next/image';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';


const Testimonial = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'flex-start', mb: '40px', mt: '30px' }}>
                <Grid item xs={12} sx={{mb:'20px'}}>
                    <Typography sx={{ fontSize:{lg:'45px', md:'45px', sm:'40px', xs:'35px'}, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: 'black' }}>Testimonial</Typography>
                </Grid>
                <Grid item xs={11} sm={8} md={6} lg={3} >
                    <Card sx={{ m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', p: '10px 5px' }} elevation={5}  >


                        <Box sx={{ width: '100%', height: {lg:'250px', md:'300px', sm:'300px',xs:'300px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                            <Image src={pic1} alt='card1' style={{ width: '94%', height: '100%', objectFit: 'cover', marginTop: '20px', }} />
                        </Box>
                        <CardContent >
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: 'black', fontFamily: 'sans-serif' }} >
                                Viraj Sinh
                            </Typography>
                            <Typography sx={{ fontSize: '15px', mt:'10px' }}>
                            My child's addiction to smartphones is alarming. She can no longer sit through a homework session without getting distracted. Her teachers have also noticed her declining attention in class. We've tried setting screen time limits, but she always finds a way around them. I'm looking for a constructive solution that can keep her engaged and help her regain her focus. A game designed to boost mental stamina while being educational and fun could be the key to solving this problem                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>



                <Grid item xs={11} sm={8} md={6} lg={3}>
                    <Card sx={{ m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', p: '10px 5px' }} elevation={5}  >


                        <Box sx={{ width: '100%', height:  {lg:'250px', md:'300px', sm:'300px',xs:'300px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                            <Image src={pic2} alt='card2' style={{ width: '94%', height: '100%', objectFit: 'cover', marginTop: '20px' }} />
                        </Box>
                        <CardContent >
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: 'black', fontFamily: 'sans-serif' }} >
                               Sandeep Nair
                            </Typography>
                            <Typography sx={{ fontSize: '15px' , mt:'10px'}}>
                            As a father, it's distressing to see my son lose interest in activities he once loved, all because of his obsession with his phone. His ability to focus on tasks has drastically decreased, and it's affecting his performance in school. We need a solution that can redirect his attention towards something productive and mentally stimulating. I'm on the lookout for an engaging tool that can help improve his concentration and cognitive abilities while still being enjoyable for him.                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>

                <Grid item xs={11} sm={8} md={6} lg={3}>
                    <Card sx={{ m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', p: '10px 5px' }} elevation={5}  >


                        <Box sx={{ width: '100%', height:  {lg:'250px', md:'300px', sm:'300px',xs:'300px'}, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                            <Image src={pic3} alt='card3' style={{ width: '94%', height: '100%', objectFit: 'cover', marginTop: '20px' }} />
                        </Box>
                        <CardContent >
                            <Typography sx={{ fontSize: "25px", fontWeight: "800", color: 'black', fontFamily: 'sans-serif' }} >
                               Tejasvi Bhargava
                            </Typography>
                            <Typography sx={{ fontSize: '15px', mt:'10px' }}>
                            My daughter's constant phone use is causing her to lose focus on important tasks. She used to be an avid reader and a curious learner, but now, she can barely concentrate on her schoolwork. I'm deeply concerned about the long-term effects this could have on her education and overall development. We need a solution that can help her break free from this digital addiction and rebuild her attention span. An interactive and educational game that promotes mental stamina would be a fantastic way to address this issue and help her thrive.                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default Testimonial