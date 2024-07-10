import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import Image from 'next/image';
import img from '../assets/img4.png'

const Form = () => {

    const [open, setOpen] = useState(false)
    const openForm = () => {
        setOpen(true)
    }
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f7f7f7', mt:'40px' }}>


                <Grid container sx={{ bgcolor: 'black', height:{lg: '200px',md:'230px', sm:'290px', xs:'310px'}, justifyContent: 'center', alignItems: 'center', p:'5px' }}>
                    <Grid item lg={6}  md={6} sm={12} xs={12}>
                        <Typography sx={{ fontSize: {lg:'24px', md:'23px', sm:'22px', xs:'20px'}, color: 'white', fontFamily: 'cursive', fontWeight: 'bold', textAlign:'center' }}>Enhanced Memory: Interactive games that boost memory retention, Improved Focus: Fun activities that gradually increase focus duration, Critical Thinking: Puzzles and challenges that develop problem-solving skills.</Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={11} xs={11} sx={{ width: '100%', display: 'flex', justifyContent: {lg:'right', md:'right', sm:'center', xs:'center'}, alignItems: 'center' , mt:{lg:'0px', md:'0px', sm:'20px', xs:'20px'}}}>

                        <Button variant='contained' sx={{ fontSize: '20px', width: '280px', bgcolor: 'white', fontWeight: 'bold', fontFamily: 'cursive', color: '#0f3b62',mb:'10px', border: '9px double #0f3b62', borderRadius: '16px', textTransform: 'capitalize', '&:hover': { bgcolor: 'white', color: 'green', fontFamily: 'cursive', color: '#0f3b62' } }} onClick={openForm}>Join Our Beta Test</Button>
                    </Grid>

                </Grid>

            </Grid>
            <SignUpModal open={open} setOpen={setOpen} />
        </>
    )
}

export default Form