'use client'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo5.png'


const Header = () => {
    return (
        <>
            <Grid container sx={{ height: '110px', bgcolor: '#f7f7f7', justifyContent: 'center', alignItems: 'center', }}>
                <Grid item lg={1.5} md={2} sm={3} xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'3px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '130px', height: '110px'}}>
                        <Image src={logo} alt='logo' style={{ width: '100%', height: '100%' }} objectFit='contain' />
                    </Box>

                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={8.8}>
                    <Typography sx={{ fontSize: {lg:'23px', md:'18px', sm:'16px', xs:'15px'}, color: '#e53935', fontWeight: 'bold', fontFamily: 'cursive' }}>Are Digital Distractions Hurting Your Child's Focus and Cognitive Development?</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Header