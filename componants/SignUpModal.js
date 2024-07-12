'use client'
import { Button, Divider, FormControl, Grid, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';


const SignUpModal = ({ open, setOpen }) => {

    const [show, setShow] = useState(false)
    const [info, setInfo] = useState(
        {
            name: '',
            age: '',
            childAge: '',
            location: '',
            comeFrom: '',
            otherDetails: '',
        }
    );

    const infoHandler = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })

    };
    console.log(info)
    const handleClose = () => {
        setOpen(false);
        setInfo(
            {
                name: '',
                email:'',
                age: '',
                childAge: '',
                phone:'',
                location: '',
                comeFrom: ''
            }
        )

    };

    const submitHandler = async () => {
        if (info.name && info.email && info.age && info.childAge && info.location && info.comeFrom) {
            try {
                const res = await axios.post('/api/positive', info);
                console.log(res)
                if (res.data.message = 'Saved Your Details') {
                    alert(res.data.message);
                    setOpen(false);
                    setInfo(
                        {
                            name: '',
                            age: '',
                            childAge: '',
                            location: '',
                            comeFrom: ''
                        }
                    )
                } else {
                    alert(res.data.message)
                }
    
            } catch (err) {
                console.log(err);
                alert(err.massage);
            }
           
        }else {
            alert('Fill the Required Fields');
        }
       

    }

    const otherHandler = (ele) => {
        if(ele == 'Others'){
            setShow(true)
        }
        if(ele == 'Linkedin'){
            setShow(false)
        }
        if(ele == 'Youtube'){
            setShow(false)
        }
        if(ele == 'Facebook'){
            setShow(false)
        }
        // console.log(ele)
    };
    console.log(info)
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'rgba(0,0,0,0.1)', p: '10px' }}
            >
                <Grid container sx={{ height: 'fit-content', width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Grid item xs={12} sx={{ borderRadius: '19px', bgcolor: 'white', border: '8px double #0f3b62' }}>
                        <Grid container sx={{ p: '10px', }}>
                            <Grid item xs={12}>
                                <Typography sx={{ fontSize: '28px', color: '#0f3b62', textAlign: 'center', fontWeight: 'bold' }}>Connect With Us</Typography>
                            </Grid>
                            <Divider sx={{ bgcolor: '#0f3b62', mt: '8px', width: '100%', height: '2px' }} />


                            <Grid container sx={{ mt: '2px', p: '5px', overflowY:'scroll',height:'400px' }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter your Name</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }} >

                                    <TextField placeholder='Enter your Name..'  fullWidth size='small' sx={{ fontSize: '15px', }} onChange={infoHandler} name='name' value={info.name} color='error' />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center',mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter your Email</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }} >

                                    <TextField placeholder='Enter your Email..'  fullWidth size='small' sx={{ fontSize: '15px', }} onChange={infoHandler} name='email' value={info.email} color='error' />

                                </Grid>


                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter Your Age</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }} >
                                    <TextField placeholder='Enter Your Age..' type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='age' value={info.age} color='error' />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter Your Child's Age</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }} >
                                    <TextField placeholder='Enter Your Child Age..'  type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='childAge' value={info.childAge} color='error' />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter Your Phone No</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }} >
                                    <TextField placeholder='Enter Your Phone No..' type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='phone' value={info.phone} color='error' />

                                </Grid>


                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Your Location</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }} >
                                    <TextField placeholder='Your Location..'  fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='location' value={info.location} color='error' />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Where did you come from</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px' }}>
                                    <FormControl fullWidth size='small' color='error' >

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={info.comeFrom}
                                            name='comeFrom'

                                            onChange={infoHandler}
                                        >
                                            <MenuItem value={'Facebook'} onClick={()=>{otherHandler('Facebook')}}>Facebook</MenuItem>
                                            <MenuItem value={'Youtube'} onClick={()=>{otherHandler('Youtube')}}>Youtube</MenuItem>
                                            <MenuItem value={'Linkedin'} onClick={()=>{otherHandler('Linkedin')}} >Linkedin</MenuItem>
                                            <MenuItem value={'Others'} onClick={()=>{otherHandler('Others')}}>Others</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sx={{ mt: '10px', display: show == true ? 'flex' : 'none', justifyContent: 'light', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#0f3b62', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Enter Others Details</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '2px', display: show == true ? 'flex' : 'none' }} >

                                    <TextField placeholder='Enter Others Details..' fullWidth size='small' sx={{ fontSize: '15px', }} onChange={infoHandler} name='otherDetails' value={info.otherDetails} color='error' />

                                </Grid>

                               



                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: '10px', pb: '5px', justifyContent: 'center' }}>
                                    <Button variant='contained' sx={{ fontSize: '20px', width: '150px', bgcolor: 'white', fontWeight: 'bold', fontFamily: 'cursive', color: '#0f3b62', border: '9px double #0f3b62', borderRadius: '16px', textTransform: 'capitalize', '&:hover': { bgcolor: 'white', color: 'green', fontFamily: 'cursive', color: '#0f3b62' } }} onClick={submitHandler} >submit</Button>
                                </Grid>
                            <Divider sx={{ bgcolor: '#0f3b62',  width: '100%', height: '2px' }} />
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', p: '5px' }}>
                                <Typography sx={{ fontSize: '23px', color: 'crimson', cursor: 'pointer', fontWeight: 'bold' }} onClick={handleClose}>Close</Typography>


                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Modal>
        </>
    )
}

export default SignUpModal