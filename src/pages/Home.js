import React from 'react'
import { Box, Container, Paper, Typography, useMediaQuery, } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import Enjoy from '../assets/icons/Enjoy.png'
import Clock from '../components/animation/clock/Clock';
import ButtonPrimary from '../components/animation/button/ButtonPrimary';
import Name from '../components/Name';
import IconContainer from '../components/IconContainer';

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
           <Name/>
        {/* <Typography style={{fontFamily:'Roboto Condensed', fontSize:42, fontWeight:900, color:'#445964'}}> JULIO RICKY SAPUTRO</Typography> */}
        <Typography style={{fontFamily:'sans-serif', fontSize:18, fontWeight:500, color:'#445964'}}>as React Native Developer</Typography>
        <Box style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:50}}>
          <ButtonPrimary/>
        </Box>
        <Box sx={{left:50, bottom:0, height:100, position:'absolute', justifyContent:'center', alignItems:'center'}}>
            <IconContainer/>
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
        <Name/>
        {/* <Typography style={{fontFamily:'Roboto', fontSize:82, fontWeight:'900', color:'#445964'}}> JULIO RICKY SAPUTRO</Typography> */}
        <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:500, color:'#445964'}}>as React Native Developer</Typography>
        <Box style={{display:'flex', alignItems:'center', marginTop:50}}>
        <ButtonPrimary/>
        </Box>
        <Box sx={{ bottom:0, height:100, position:'absolute'}}>
        <IconContainer/>
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
