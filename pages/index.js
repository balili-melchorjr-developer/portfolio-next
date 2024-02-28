import { Grid, Card, CardHeader, Avatar, Typography } from '@mui/material'
import Layout from '@/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home({ categories }) {  
  
  const router = useRouter()
  
  return (    
    <Layout>
      <Typography variant='h1'>Intro</Typography>
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