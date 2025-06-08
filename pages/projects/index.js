import Layout from '@/components/Layout'
import { Avatar, Grid, Typography, Stack, Box } from '@mui/material'

import { Card, CardContent } from "@/components/ui/card"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React, { useState } from 'react'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'

export async function getServerSideProps() {
  const {data} = await axios.get(`http://localhost:8000/api/v1/projects/`)    
 

  return {  
    props: {
      projects: data,
    }
  }
}

const index = ({ projects }) => {

  return (
    <Layout>
      
      <Grid container sx={{padding: '0 50px', textAlign: 'end'}}>
        <Grid item md={12}>
          <Typography variant='h1' sx={{ fontWeight: '700', opacity: '0.7'}}>Projects</Typography>
        </Grid>
      </Grid>   

       
      <Grid container sx={{marginTop: '100px'}} >
        <Grid item xs={12} md={12} sx={{paddingRight: '70px'}}>
          <Carousel>
            <CarouselContent>
              {projects === null ? "Loading" : projects.map((project, index) => (
                <CarouselItem key={index} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Typography variant='h3' sx={{marginBottom: '25px', fontWeight: '500'}}>{project.name}</Typography>
                    {/* sx={{ display: { xs: 'none', md: 'block' } }} */}
                    <Typography sx={{marginBottom: '25px', fontSize: '20px'}}>{project.description}</Typography>
                    <Typography variant="body1" sx={{marginBottom: '10px', opacity: '0.7'}}>Technologies</Typography>
                    <Stack direction="row" spacing={2}>
                    
                    {project.technology.map(item => (
                      <Box key={item.id}>             
                      <Avatar 
                        sx={{display: "block", margin:"auto"}}               
                        srcSet={`${item.image}`}
                        src={`${item.image}`}
                        alt={item.name}
                        loading="lazy"
                        variant='square'
                      /> 
                      </Box>
                    ))}
                    </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <img
                        sx={{width: '20px', height: '20px', margin: 'auto', display: 'flex', alignItems: "start"}}
                        srcSet={`${project.image}`}
                        src={`${project.image}`}
                        alt={project.name}
                        loading="lazy"            
                      />  
                    </Grid>
                  </Grid>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext />
          </Carousel> 
        </Grid>                
      </Grid>
        
    </Layout>    
  )
}

export default index