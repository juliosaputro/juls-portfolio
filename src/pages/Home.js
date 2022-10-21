import React from 'react'
import { Box, Button, Container, Paper, Typography, useMediaQuery, } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import Github from '../assets/icons/GitHub.png';
import Instagram from '../assets/icons/Instagram.png';
import Linkedin from '../assets/icons/Linkedin.png';
import Enjoy from '../assets/icons/Enjoy.png'
import Clock from '../components/animation/clock/Clock';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth={'xl'}>
      {
        isMobile ? (
          <>
          <Paper elevation={0} sx={{display:'flex', backgroundColor:'transparent', height:'93vh', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
           <Box>
           <Typography style={{fontSize:18, fontWeight:500, color:'#445964'}}>Hallo, I'm </Typography>
        <Typography style={{fontFamily:'Roboto Condensed', fontSize:42, fontWeight:900, color:'#445964'}}> JULIO RICKY SAPUTRO</Typography>
        <Typography style={{fontFamily:'sans-serif', fontSize:18, fontWeight:500, color:'#445964'}}>as React Native Developer</Typography>
        <Box style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:50}}>
          <Button variant='contained' size='large' style={{ backgroundColor:'#263138', width:310, borderRadius:12}}>Contact Me</Button>
        </Box>
        <Box sx={{ bottom:0, left:0, height:100, width:'100%', position:'absolute', justifyContent:'center'}}>
          <a href='https://github.com/juliosaputro'>
          <img alt='' src={Github} style={{marginInline:10, width:40}}/>
          </a>
          <a href='https://www.linkedin.com/in/julio-ricky-saputro/'>
          <img alt='' src={Linkedin} style={{marginInline:10, width:40}}/>
          </a>
          <a href='https://www.instagram.com/juliorcky_/'>
          <img alt='' src={Instagram} style={{marginInline:10, width:40}}/>
          </a>
        </Box>
           </Box>

          </Paper>
          </>
        ) : (
          <>
           <Box  sx={{display:'flex'}}>
     <Paper elevation={0} sx={{display:'flex' ,backgroundColor:'transparent',width:'50%', height:'93vh', alignItems:'center', padding:8}}>
        <Box>
        <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:500, color:'#445964'}}>Hallo, I'm </Typography>
        <Typography style={{fontFamily:'Roboto', fontSize:82, fontWeight:'900', color:'#445964'}}> JULIO RICKY SAPUTRO</Typography>
        <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:500, color:'#445964'}}>as React Native Developer</Typography>
        <Box style={{display:'flex', alignItems:'center', marginTop:50}}>
          <Button variant='contained' size='large' style={{ backgroundColor:'#263138', width:310, borderRadius:12}}>Hire Me</Button>
        </Box>
        <Box sx={{ bottom:0, height:100, position:'absolute'}}>
          <a href='https://github.com/juliosaputro'>
          <img alt='' src={Github} style={{marginRight:20, width:40}}/>
          </a>
          <a href='https://www.linkedin.com/in/julio-ricky-saputro/'>
          <img alt='' src={Linkedin} style={{marginRight:20, width:40}}/>
          </a>
          <a href='https://www.instagram.com/juliorcky_/'>
          <img alt='' src={Instagram} style={{marginRight:20, width:40}}/>
          </a>
        </Box>
        </Box>
     </Paper>
     <Paper elevation={0} sx={{display:'flex' ,backgroundColor:'transparent',width:'50%', height:'93vh', alignItems:'center', padding:8}}>
     <Box>
      <Clock/>
     <img alt='' src={Enjoy} style={{ width:720}}/>
      </Box> 
     </Paper>
      </Box>
          </>
        )
      }
     
    </Container>
  )
}
