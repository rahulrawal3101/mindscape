'use client'
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../assets/logo5.png'
import SignUpModal from './SignUpModal';


const Header = () => {
    const [open, setOpen] = useState(false)
    const openForm = () => {
        setOpen(true)
    }
    return (
        <>
            <Grid container sx={{ height: '110px', bgcolor: '#f7f7f7', justifyContent: 'space-between', alignItems: 'center', position:'sticky', top:'0px', zIndex:1, pr:'7px'}} >
                <Grid item lg={1} md={2} sm={2} xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'3px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '130px', height: '110px', }}>
                        <Image src={logo} alt='logo' style={{ width: '100%', height: '100%' }} objectFit='cover' />
                    </Box>

                </Grid>
                <Grid item lg={9} md={8} sm={7} xs={6}>
                    <Typography sx={{ fontSize: {lg:'23px', md:'18px', sm:'16px', xs:'13px'}, color: '#e53935', fontWeight:900, fontFamily: 'sans-serif',textAlign:'center' }}>Are Digital Distractions Hurting Your Child's Focus and Cognitive Development?</Typography>
                </Grid>
                <Grid item lg={1} md={1.7} sm={2} xs={3} sx={{display:'flex', justifyContent:'right', alignItems:'center', }}>
                    <Button variant='contained' sx={{textTransform:'capitalize', fontSize:{lg:'17px', md:'15px', sm:'14px', xs:'13px'},borderRadius:'7px', }} onClick={openForm}>Sign Up</Button>
                </Grid>
            </Grid>
            <SignUpModal open={open} setOpen={setOpen}/>
        </>
    )
}

export default Header