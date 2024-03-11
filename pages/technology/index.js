import Layout from '@/components/Layout'
import { Avatar, Card, Grid, Typography, Stack, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
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

      <Grid container sx={{padding: '0 50px', textAlign: 'end', marginBottom: '25px'}}>
        <Grid item md={12}>
          <Typography variant='h1' sx={{ fontWeight: '700', opacity: '0.7'}}>Technology</Typography>
        </Grid>
      </Grid> 

      {categories === null ? "Loading" : categories.map(category => (
         <Grid container key={category.id} sx={{textAlign: 'center', marginTop: '100px', marginBottom: '200px', paddingRight: '500px'}}>
          {category.name === "The Foundation" ? (
            <Grid item md={12} >
              <Typography variant='h3' sx={{ marginBottom: '50px', fontWeight: '500'}}>{category.name}</Typography>                    
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                {category.technology.map(item => (
                  <Box key={item.id} sx={{textAlign: 'center', margin: '0 30px'}}>
                    <Avatar src={`${item.image}`}  variant='square' sx={{ height: '120px', width: '120px', margin: 'auto'}}/>
                    <Typography sx={{marginTop: '10px'}}>{item.name}</Typography>
                  </Box>  
                  ))}                   
                </Stack> 
            </Grid> 
          ) : category.name === "The Framework" ? (
            <Grid item md={12}>
              <Typography variant='h3' sx={{ marginBottom: '10px', fontWeight: '500'}}>{category.name}</Typography>
              
                  <Grid container direction="row" >
                    <Grid item xs={2}>

                    </Grid>    
                    <Grid container direction="row" xs={8} justifyContent="center">
                      {category.technology.map(item => (
                      <Box key={item.id} justifyContent='center' sx={{textAlign: 'center', margin: '0 30px', width: '100px', marginTop: '40px'}}>
                        <Avatar src={`${item.image}`}  variant='square' sx={{ height: '120px', width: '120px', margin: 'auto'}}/>
                        <Typography sx={{marginTop: '10px', textAlign: 'center', marginLeft: '20px'}}>{item.name}</Typography>
                      </Box>  
                      ))} 
                    </Grid>  
                    <Grid item xs={2}>

                    </Grid> 
                  </Grid>
            </Grid> 
          ) : category.name === "The Web" ? (
            <Grid item md={12}>
              <Typography variant='h3' sx={{ marginBottom: '50px', fontWeight: '500'}}>{category.name}</Typography> 
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box key={item.id} sx={{textAlign: 'center', margin: '0 30px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '120px', width: '120px', margin: 'auto'}}/>
                      <Typography sx={{marginTop: '10px'}}>{item.name}</Typography>
                    </Box>  
                    ))}                   
                  </Stack>
            </Grid> 
          ) : category.name === "Tools" ? (
            <Grid item md={12}>
              <Typography variant='h3' sx={{ marginBottom: '50px', fontWeight: '500'}}>{category.name}</Typography>
                <Grid container direction='row'>
                  <Grid item xs={2}>

                  </Grid>
                  <Grid container directio='row' xs={8} justifyContent='center'>
                    {category.technology.map(item => (
                      <Box key={item.id} justifyContent='center' sx={{textAlign: 'center', margin: '0 30px', width: '100px', marginTop: '40px'}}>
                        <Avatar src={`${item.image}`}  variant='square' sx={{ height: '120px', width: '120px', margin: 'auto'}}/>
                        <Typography sx={{marginTop: '10px', textAlign: 'center', marginLeft: '20px'}}>{item.name}</Typography>
                      </Box> 
                    ))}
                  </Grid>
                  <Grid item xs={2}>

                  </Grid> 
                </Grid>               
            </Grid> 
          ) : category.name === "Data" ? (
            <Grid item md={12}>
              <Typography variant='h3' sx={{ marginBottom: '50px', fontWeight: '500'}}>{category.name}</Typography> 
              <Grid container direction='row'>
                  <Grid item xs={2}>

                  </Grid>
                  <Grid container direction='row' xs={8} justifyContent='center'>
                    {category.technology.map(item => (
                      <Box key={item.id} justifyContent='center' ali sx={{textAlign: 'center', margin: '0 30px', width: '100px', marginTop: '40px'}}>
                        <Avatar src={`${item.image}`}  variant='square' sx={{ height: '120px', width: '120px', margin: 'auto'}}/>
                        <Typography direction='row' justifyContent='center' sx={{marginTop: '10px', textAlign: 'center', marginLeft: 'auto'}}>{item.name}</Typography>
                      </Box> 
                    ))}
                  </Grid>
                  <Grid item xs={2}>

                  </Grid> 
                </Grid>                
            </Grid> 
          ) : (
            <Grid item md={12}>
              <Typography variant='h3' sx={{ marginBottom: '50px', fontWeight: '500'}}>{category.name}</Typography> 
                <Stack direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
                  {category.technology.map(item => (
                    <Box key={item.id} sx={{textAlign: 'center', margin: '0 30px'}}>
                      <Avatar src={`${item.image}`}  variant='square' sx={{ height: '120px', width: '120px', margin: 'auto'}}/>
                    <Typography sx={{marginTop: '10px'}}>{item.name}</Typography>
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