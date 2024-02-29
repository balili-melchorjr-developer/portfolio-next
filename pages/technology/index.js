import Layout from '@/components/Layout'
import { Avatar, Card, Grid, Typography, Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'
export async function getServerSideProps() {
  const {data} = await axios.get(`http://localhost:8000/api/v1/technologies/`)   
  
  console.log(data.map(x => console.log(x.id)))

  return {  
    props: {
      technologies: data,
    }
  }
}

const index = ({ projects }) => {

  return (
    <Layout>
      <Typography variant='h1'>Technology</Typography>
     
    </Layout>    
  )
}

export default index