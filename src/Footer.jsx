import { Grid, Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'

function Footer() {
  return (
    <>
        <Box sx={{ maxWidth:'100vw', flexGrow: 1,display:'flex',flexWrap:'wrap',bgcolor:'black',paddingTop:'20px' }}>
            <Container maxWidth="lg">
            <Grid container spacing={5} paddingBottom={3}>
            <Grid item xs={12} sm={4}>
            <Box fontSize='32px' paddingTop={2.5}>CASWID</Box>
            <Typography variant="body2" color="#555" paddingTop={3}>
            We are a team of designers and developers that 
            create high quality Magento, Prestashop, Opencart
            </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Box fontSize='22px' paddingTop={2} paddingBottom={2} >Information</Box>
            <Box>
                <Link href='/' variant='body2' color="#555">
                    Contact
                </Link>
            </Box>
            <Box>
                <Link href='/' variant='body2' color="#555">
                    Support
                </Link>
            </Box>
            <Box>
                <Link href='/' variant='body2' color="#555">
                    About Us
                </Link>
            </Box>
            <Box>
                <Link href='/' variant='body2' color="#555">
                    Our Store
                </Link>
            </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Box fontSize='22px' paddingTop={2} paddingBottom={2} >Follow Us</Box>
            <Box>
                <Link href='/' color="inherit">
                    <InstagramIcon/>
                </Link>
                <Link href='/' color="inherit">
                    <FacebookIcon/>
                </Link>
                <Link href='/' color="inherit">
                    <TwitterIcon/>
                </Link>
                <Link href='/' color="inherit">
                    <YouTubeIcon/>
                </Link>
                <Link href='/' color="inherit">
                    <EmailIcon/>
                </Link>
            </Box>
            </Grid>
            </Grid>
            </Container>
        </Box>
    </>
  )
}

export default Footer