import Layout from '@/components/Layout'
import { Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import dayjs, { Dayjs } from 'dayjs'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export async function getServerSideProps() {
  const {data} = await axios.get(`http://localhost:8000/api/v1/experiences/`)   
  
  console.log(data.map(x => console.log(x.id)))

  return {  
    props: {
      experiences: data,
    }
  }
}

const index = ({ experiences }) => {

  return (
    <Layout>
      <Typography variant='h1'>Experience</Typography>
      <Grid container>
        <Timeline sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}>
          {experiences === null ? "Loading..." : experiences.map((experience, i, {length}) => (
            <TimelineItem key={experience.id}>
            <TimelineSeparator>
              <TimelineDot />
              {i + 1 === length ? null : (<TimelineConnector />) }                         
            </TimelineSeparator>
            <TimelineContent>
              <Grid container>
                <Grid item xs={12} md={1}>   
                  <img
                    srcSet={`${experience.company.image}?w=5&h=5&fit=crop&auto=format&dpr=2 35x`}
                    src={`${experience.company.image}?w=5&h=5&fit=crop&auto=format`}
                    alt={experience.company.name}
                    loading="lazy"
                  />
                </Grid>
                <Grid item xs={12} md={11}>
                  <Typography variant='h5'sx={{fontWeight: '500'}}>{experience.position.name}</Typography>
                  <Typography variant='body1' sx={{fontWeight: '400', margin: '4px 0'}}>{experience.company.name}</Typography>
                  <Typography sx={{fontWeight: '100', marginBottom: '16px'}}>{dayjs(experience.start_date).format('MMM YYYY')} - {dayjs(experience.end_date).format('MMM YYYY')}</Typography>
                  <Typography>{experience.description}</Typography>
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