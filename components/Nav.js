import { Button, CardHeader, List, ListItem, Typography, Grid, Card } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

const Nav = () => {

    const [active, setActive] = useState(false)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

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
            padding: '0 50px',
            marginTop: '105px',
            fontFamily: 'Montserrat'
        },

        customCard: {
            cursor: 'pointer',
            margin: '25px auto',
            backgroundColor: 'transparent',
            color: 'white',
            fontWeight: '900'            
        }        
    } 
    
    const handleActive = () => {
        setActive(true)
        router.push('/')
        console.log(setActive)
    }

    const router = useRouter()

  return (
    <>
        <div onClick={handleNav} className='md:hidden z-10'>
            {!nav ?  <FaBars size={70}/> : <IoClose size={70}/>}
        </div>  
        <Grid container className="hidden md:flex">
            <Grid item xs={12} md={12} >
                <Card onClick={() => handleActive()} sx={customStyle.customCard} className='card-new-style'>
                {/* <Card onClick={() => router.push('/')} sx={customStyle.customCard} className='card-new-style'> */}
                    <CardHeader title='Intro' />
                </Card>
                <Card onClick={() => router.push('/projects')} sx={customStyle.customCard}  className='card-new-style'>
                    <CardHeader title='Projects' />
                </Card>
                <Card onClick={() => router.push('/technology')} sx={customStyle.customCard}  className='card-new-style'>
                    <CardHeader title='Technology' />
                </Card>
                <Card onClick={() => router.push('/experience')} sx={customStyle.customCard}  className='card-new-style'>
                    <CardHeader title='Experience' />
                </Card>
                <Card onClick={() => router.push('/team-up')} sx={customStyle.customCard}  className='card-new-style'>
                    <CardHeader title='Team Up!' />
                </Card>
            </Grid>            
        </Grid>

         
            <Grid className={!nav ? 'hidden' : 'top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>            
                <Grid item xs={12} md={12} >
                    <Card onClick={() => handleActive()} sx={customStyle.customCard} className='card-new-style'>
                    {/* <Card onClick={() => router.push('/')} sx={customStyle.customCard} className='card-new-style'> */}
                        <CardHeader title='Intro' />
                    </Card>
                    <Card onClick={() => router.push('/projects')} sx={customStyle.customCard}  className='card-new-style'>
                        <CardHeader title='Projects' />
                    </Card>
                    <Card onClick={() => router.push('/technology')} sx={customStyle.customCard}  className='card-new-style'>
                        <CardHeader title='Technology' />
                    </Card>
                    <Card onClick={() => router.push('/experience')} sx={customStyle.customCard}  className='card-new-style'>
                        <CardHeader title='Experience' />
                    </Card>
                    <Card onClick={() => router.push('/team-up')} sx={customStyle.customCard}  className='card-new-style'>
                        <CardHeader title='Team Up!' />
                    </Card>
                </Grid>            
            </Grid>  
        </>
  )
}

export default Nav