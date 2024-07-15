'use client'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ p: '10px', bgcolor: '#242222' }}>
          <Typography sx={{ fontFamily: 'sans-serif', textAlign: 'center', color: 'white' }}>Copyright © {date} MindScape. All rights reserved.</Typography>

        </Grid>
      </Grid>
    </>
  )
}

export default Footer