import Layout from '@/components/Layout'
import { Avatar, Card, Grid, Typography, Stack, Box } from '@mui/material'

import React, { useState } from 'react'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'
export async function getServerSideProps() {
  const {data} = await axios.get(`http://localhost:8000/api/v1/projects/`)   
  
  console.log(data.map(x => console.log(x.id)))

  return {  
    props: {
      projects: data,
    }
  }
}

const index = ({ projects }) => {

  return (
    <Layout>
      <Typography variant='h1'>Projects</Typography>
      {projects === null ? "Loading" : projects.map(project =>  (
      <Grid container key={project.id}>      
          <Grid item key={project.id} xs={12} md={6}>
            <Typography variant='h3'>{project.name}</Typography>
            <Typography>{project.description}</Typography>
            <Typography variant="body1">Technologies</Typography>
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
      ))}       
    </Layout>    
  )
}

export default index