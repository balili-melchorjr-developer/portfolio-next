import { Grid, Card, CardHeader, Avatar, Typography, Button } from '@mui/material'
import Layout from '@/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home({ categories }) {  
  
  const router = useRouter()
  
  return (    
    <Layout>
      <Grid container sx={{padding: '0 50px', textAlign: 'end'}}>
        <Grid item md={12}>
          <Typography variant='h1' sx={{ fontWeight: '700', opacity: '0.7'}}>Introduction</Typography>
        </Grid>
      </Grid>     
      <Grid container spacing={12} sx={{padding: '0 10px', marginTop: '30px'}}>
        <Grid item xs={12} md={6}>
            <Typography variant='h3' sx={{fontWeight: '700', marginBottom: '50px'}}>Good Day!</Typography>
            <Typography variant='h4' sx={{marginBottom: '50px'}}>I'm <span style={{fontWeight: '600'}}>Jhun,</span></Typography>
            <Typography variant='h5' sx={{lineHeight: '1.2', marginBottom: '30px'}}>
              I am a dedicated and passionate software developer with a proven track record of delivering high-quality software applications that solve complex problems and drive business value. I am always seeking to expand my knowledge and skills and stay up-to-date with the latest developments in the field to ensure that I am providing the best possible solutions for my clients and users.
            </Typography>
            <Typography variant='h5' sx={{lineHeight: '1.2', marginBottom: '100px'}}>
              <span sx={{fontWeight: '600'}}>Co-create:</span>Actively engage as a team player in collaborative efforts with various partners to generate innovative solutions, products, or content. Contribute ideas, expertise, and resources in a synergistic manner to achieve shared goals and outcomes.
            </Typography>
            <Button variant="outlined">Team Up</Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <>
              <Avatar src='http://127.0.0.1:8000/media/images/18961868.jpg' variant="rounded" sx={{height: '150px', width: '150px'}} />
            </>
        </Grid>
      </Grid>
    </Layout>    
  );
}

// export async function getServerSideProps() {
//   const { data } = await axios.get('http://localhost:8000/categories')
//   return {
//     props: {
//       categories: data.results
//     }
//   }
// }