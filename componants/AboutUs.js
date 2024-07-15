'use client'
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import kid from '../assets/kid1.png';
import kid1 from '../assets/kid2.png'
// import quizvideo from '../assets/quizvideo.mp4';


const AboutUs = () => {
    return (
        <>
            <Grid container sx={{ bgcolor: '#f7f7f7', justifyContent: 'center', alignItems: 'center',  }}>

                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '5px' }}>
                        <Box
                            sx={{
                                // position: 'relative',
                                width: '100%',
                                height: { lg: '70%', md: '80%', sm: '100%', xs: '100%' },
                                // height:{lg:'600px',md:'400px', sm:'400px', xs:'400px' },
                                maxWidth: { lg: '1200px', sm: '1200px', sm: '1200px', xs: '1200px' }, // Optional: maximum width for larger screens
                                // paddingTop: '40.75%', // Aspect ratio for 16:9 video
                                borderRadius: '10px',
                                overflow: 'hidden',
                                mt: '10px',



                            }}
                        >
                            <video
                                autoPlay
                                muted
                                controls
                                loop
                                preload="none"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '5px',

                                }}
                            >
                                <source src="/negvideo.mp4" type="video/mp4" />
                                <track
                                    src="/path/to/captions.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </Box>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '50px' }}>
                        <Grid item lg={5} md={5} sm={11} xs={11} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <Box sx={{ width: { lg: '500px', md: '500px', sm: '400px', xs: '400px' }, height: { lg: '400px', md: '400px', sm: '300px', xs: '300px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <Image src={kid1} alt='kidpic' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>

                        </Grid>
                        <Grid item lg={5} md={5} sm={11} xs={11} sx={{ mt: '30px', color: 'black', p: '20px', borderRadius: '10px' }} >
                            <Typography sx={{ fontSize: { lg: '45px', md: '45px', sm: '40px', xs: '35px' }, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: 'black' }}>The Dangers of Ignoring <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>Mental Stamina</a></Typography>
                            <Typography sx={{ fontSize: { lg: '22px', md: '17px', sm: '15px', xs: '15px' }, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: 'black', mt: '10px' }}>
                                In today’s fast-paced <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>digital world</a>, children’s ability to focus and think critically is often under threat. Ignoring these challenges can lead to long-term <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>cognitive deficits</a> and poor <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>academic performance</a>.

                            </Typography>

                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: { sm: 'wrap-reverse', xs: 'wrap-reverse' } }}>

                        <Grid item lg={5} md={5} sm={11} xs={12} sx={{ mt: '30px', color: 'black', p: '20px', borderRadius: '10px', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }} >
                            <Typography sx={{ fontSize: { lg: '45px', md: '45px', sm: '40px', xs: '35px' }, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: 'black' }}>Prevent the Downfall</Typography>
                            <Typography sx={{ fontSize: { lg: '22px', md: '17px', sm: '15px', xs: '15px' }, fontWeight: 'bold', fontFamily: 'sans-serif', textAlign: 'center', color: 'black', mt: '10px' }}>Our <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>educational game</a> is designed to combat <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>digital distractions</a> and enhance <a href='https://mindscape-delta.vercel.app/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>cognitive abilities</a> through engaging and scientifically-proven activities.
                            </Typography>

                        </Grid>

                        <Grid item lg={5} md={5} sm={11} xs={11} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                            <Box sx={{ width: { lg: '500px', md: '500px', sm: '400px', xs: '400px' }, height: { lg: '400px', md: '400px', sm: '300px', xs: '300px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Image src={kid} alt='kids' style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>

                        </Grid>
                    </Grid>



                </Grid>
            </Grid>
        </>
    )
}

export default AboutUs