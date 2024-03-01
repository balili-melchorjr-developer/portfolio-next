import Layout from '@/components/Layout'
import { Avatar, Card, Grid, Typography, Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'
export async function getServerSideProps() {
  const {data} = await axios.get(`http://localhost:8000/api/v1/categories/`)   
  
  console.log(data.map(x => console.log(x.id)))

  return {  
    props: {
      categories: data,
    }
  }
}

const index = ({ categories }) => {

  return (
    <Layout>
      <Typography variant='h1'>Technology</Typography>
      {categories === null ? "Loading" : categories.map(category => (
         <Grid container key={category.id} sx={{textAlign: 'center'}}>
          {category.name === "The Foundation" ? (
            <Grid item md={12} >
              <Typography>{category.name}</Typography>                    
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                {category.technology.map(item => (
                  <Box sx={{textAlign: 'center', margin: '0 10px'}}>
                    <Avatar src={`${item.image}`}  variant='square' sx={{ height: '70px', width: '70px', margin: 'auto'}}/>
                    <p key={item.id}>{item.name}</p>
                  </Box>  
                  ))}                   
                </Stack> 
            </Grid> 
          ) : category.name === "The Framework" ? (
            <Grid item md={12}>
              <Typography>{category.name}</Typography>
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box sx={{textAlign: 'center', margin: '0 10px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '70px', width: '70px', margin: 'auto'}}/>
                      <p key={item.id}>{item.name}</p>
                    </Box>  
                    ))}                   
                  </Stack>
            </Grid> 
          ) : category.name === "The Web" ? (
            <Grid item md={12}>
              <Typography>{category.name}</Typography>
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box sx={{textAlign: 'center', margin: '0 10px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '70px', width: '70px', margin: 'auto'}}/>
                      <p key={item.id}>{item.name}</p>
                    </Box>  
                    ))}                   
                  </Stack>
            </Grid> 
          ) : category.name === "Tools" ? (
            <Grid item md={12}>
              <Typography>{category.name}</Typography>
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box sx={{textAlign: 'center', margin: '0 10px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '70px', width: '70px', margin: 'auto'}}/>
                      <p key={item.id}>{item.name}</p>
                    </Box>  
                    ))}                   
                </Stack>
            </Grid> 
          ) : category.name === "Data" ? (
            <Grid item md={12}>
              <Typography>{category.name}</Typography>
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box sx={{textAlign: 'center', margin: '0 10px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '70px', width: '70px', margin: 'auto'}}/>
                      <p key={item.id}>{item.name}</p>
                    </Box>  
                    ))}                   
                  </Stack>
            </Grid> 
          ) : (
            <Grid item md={12}>
              <Typography>{category.name}</Typography>
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box sx={{textAlign: 'center', margin: '0 10px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '70px', width: '70px', margin: 'auto'}}/>
                      <p key={item.id}>{item.name}</p>
                    </Box>  
                    ))}                   
                  </Stack>
            </Grid> 
          )}                   
         </Grid>         
        ))}
    </Layout>    
  )
}

export default index