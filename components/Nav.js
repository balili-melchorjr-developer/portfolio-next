import { Button, CardHeader, List, ListItem, Typography, Grid, Card } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'

const Nav = () => {

    const customStyle = {
        customButton: {
            color: 'white',
            fontSize: '50px',
            "&:hover": {
                color: "white",
                textDecoration: "underline white",
                textUnderlineOffset: '20px',
                
            }
        },

        customLayout: {
            padding: '25px',
            fontFamily: 'Montserrat'
        },

        customCard: {
            cursor: 'pointer',
            margin: '25px auto',
            FontFace: 'Montserrat!important'
        }

        
    }  

    const router = useRouter()

  return (
    <>
        <Grid container sx={customStyle.customLayout}>
            <Grid item xs={12} md={12} >
                <Card onClick={() => router.push('/')} sx={customStyle.customCard}>
                    <CardHeader title='Intro' />
                </Card>
                <Card onClick={() => router.push('/projects')} sx={customStyle.customCard}>
                    <CardHeader title='Projects' />
                </Card>
                <Card onClick={() => router.push('/technology')} sx={customStyle.customCard}>
                    <CardHeader title='Technology' />
                </Card>
                <Card onClick={() => router.push('/experience')} sx={customStyle.customCard}>
                    <CardHeader title='Experience' />
                </Card>
                <Card onClick={() => router.push('/team-up')} sx={customStyle.customCard}>
                    <CardHeader title='Team Up!' />
                </Card>
            </Grid>            
        </Grid>
    </>
  )
}

export default Nav