import { Grid } from '@mui/material'
import Nav from './Nav'
import React from 'react'

const Layout = ({ children }) => {

   
  return (
    <>
    <Grid container spacing={8}>
        <Grid item xs={12} md={4} sx={{marginTop: '200px'}} >
            <Nav />
        </Grid>
        <Grid item xs={12} md={8} sx={{marginTop: '200px'}}>
             {children}
        </Grid>
    </Grid>
    
    
    </>
  )
}

export default Layout