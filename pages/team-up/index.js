import Layout from '@/components/Layout'
import { Typography, Grid, TextField, Box } from '@mui/material'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from "@/components/ui/button"


const index = () => {
  async function handleSubmit(e) {
      e.preventDefault();
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              access_key: "YOUR_ACCESS_KEY_HERE",
              name: e.target.full_name.value,
              email: e.target.email.value,
              message: e.target.message.value,
          }),
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
      }
  }

  return (
    <Layout>
      <Grid container sx={{padding: '0 50px', textAlign: 'end', marginBottom: '25px'}}>
        <Grid item md={12}>
          <Typography variant='h1' sx={{ fontWeight: '700', opacity: '0.7'}}>Team Up!</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={8} sx={{paddingRight:"100px"}}>
          <form onSubmit={handleSubmit}>
            <Box sx={{marginBottom: "25px"}}>
                <Label htmlFor="full_name" sx={{marginBottom: "25px"}}>Full Name</Label>
                <Input type="text" name="full_name" placeholder="Full Name" required sx={{fontFace: "Montserrat"}}/>
            </Box>
            <Box sx={{marginBottom: "25px"}}>
                <Label htmlFor="message">Email</Label>
                <Input type="email" name="email" placeholder="mail@example.com" required/>
            </Box>
            <Box sx={{marginBottom: "25px"}}>
              <Label htmlFor="message">Message</Label>
              <Textarea  placeholder="Type your message here." rows="10" required />
            </Box>
            <Button type="submit" variant="outline">Submit Form</Button>
        </form>
        </Grid>  
      </Grid> 
    </Layout>
  )
}

export default index