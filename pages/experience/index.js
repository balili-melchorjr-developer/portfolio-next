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
            <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              {i + 1 === length ? null : (<TimelineConnector />) }                         
            </TimelineSeparator>
            <TimelineContent>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography>{experience.position.name}</Typography>
                  <Typography>{experience.company.name}</Typography>
                  <Typography>{dayjs(experience.start_date).format('MMM YYYY')} - {dayjs(experience.end_date).format('MMM YYYY')}</Typography>
                  <Typography>{experience.description}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Image Here</Typography>
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