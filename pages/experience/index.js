import Layout from '@/components/Layout'
import { Card, Grid, Typography, List, ListItem, ListItemText, TextField } from '@mui/material'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'
import React, { useState, useEffect } from 'react'
// import CKEditorComponent from '@/components/CKEditorComponent'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import dynamic from 'next/dynamic';



export async function getServerSideProps() {
  const {data} = await axios.get(`http://localhost:8000/api/v1/experiences/`)   
  
  console.log(data.map(x => console.log(x.id)))

  console.log(data)

  return {  
    props: {
      experiences: data,
    }
  }
}

const CKEditorComponent = dynamic(() => import('@/components/CKEditorComponent'), { ssr: false });

const index = ({ experiences }) => {

  


  return (
    <Layout>
      <Grid container sx={{padding: '0 50px', textAlign: 'end', marginBottom: '25px'}}>
        <Grid item md={12}>
          <Typography variant='h1' sx={{ fontWeight: '700', opacity: '0.7'}}>Experience</Typography>
        </Grid>
      </Grid> 
      <Grid container>
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
          {experiences === null ? "Loading..." : experiences.map((experience, i, {length}) => (
            <TimelineItem key={experience.id} sx={{marginBottom: '25px'}}>
            <TimelineSeparator>
              <TimelineDot />
              {i + 1 === length ? null : (<TimelineConnector />) }                         
            </TimelineSeparator>
            <TimelineContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md={1}>   
                  <img
                    srcSet={`${experience.company.image}?w=5&h=5&fit=crop&auto=format&dpr=2 35x`}
                    src={`${experience.company.image}?w=5&h=5&fit=crop&auto=format`}
                    alt={experience.company.name}
                    loading="lazy"
                  />
                </Grid>
                <Grid item xs={12} md={11} sx={{padding: '0 40px'}}>
                  <Typography variant='h5'sx={{fontWeight: '500'}}>{experience.position.name}</Typography>
                  <Typography variant='body1' sx={{fontWeight: '400', margin: '4px 0'}}>{experience.company.name}</Typography>
                  <Typography sx={{fontWeight: '100', marginBottom: '16px'}}>{dayjs(experience.start_date).format('MMM YYYY')} - {dayjs(experience.end_date).format('MMM YYYY')}</Typography>
                  
                  <div dangerouslySetInnerHTML={{__html: experience.description}} />                           
                  
                </Grid>                
              </Grid>
            </TimelineContent>
          </TimelineItem> 
          ),[])}
          
        </Timeline>
      </Grid>      
    </Layout>    
  )
}

export default index