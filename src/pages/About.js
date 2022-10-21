import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardSkills from "../components/CardSkills";
import Profile from '../assets/images/profile.png'

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
  <Container maxWidth={"xl"}>
    {
        isMobile ? (
            <>
             <Paper elevation={0} sx={{display:'flex' ,backgroundColor:'transparent', height:'93vh', justifyContent:'center', padding:8, textAlign:'center'}}>
                <Box sx={{justifyContent:'center'}}>
                <Box sx={{justifyContent:'center', display:'flex'}}>
                <img alt="" src={Profile} style={{width:183, height:200, borderRadius:'50%'}}/>
                </Box>
                <Box sx={{marginBlock:5}}>
                <Typography style={{fontFamily:'sans-serif', fontSize:32, fontWeight:900, color:'#445964'}}>JULIO RICKY SAPUTRO</Typography>
                <Typography style={{ marginBlock:16}}>My name is Matheus Amauri de Jesus Campos 👋 I'm from Brazil, São José dos Campos/SP. Studying, 4th period, Systems Analysis and Development at the Fatec - São José dos Campos.</Typography>
                </Box>
                <Box sx={{marginBlock:10}}>
                <Typography style={{fontFamily:'sans-serif', fontSize:32, fontWeight:900, color:'#445964'}}><span style={{color:'#263138'}}>HARD</span> SKILLS</Typography>
                <CardSkills/>
                </Box>
                </Box>
            </Paper>
            </>
        ) : (
            <>
            <Paper elevation={0} sx={{display:'flex' ,backgroundColor:'transparent', height:'93vh', justifyContent:'center', padding:8, textAlign:'center'}}>
                <Box sx={{justifyContent:'center'}}>
                <Box sx={{justifyContent:'center', display:'flex'}}>
                <img alt="" src={Profile} style={{width:183, height:200, borderRadius:'50%'}}/>
                </Box>
                <Typography style={{fontFamily:'sans-serif', fontSize:64, fontWeight:900, color:'#445964'}}><span style={{color:'#263138'}}>JULIO</span> RICKY SAPUTRO</Typography>
                <Typography style={{width:'90vh', marginBlock:20}}>My name is Matheus Amauri de Jesus Campos 👋 I'm from Brazil, São José dos Campos/SP. Studying, 4th period, Systems Analysis and Development at the Fatec - São José dos Campos.</Typography>
                <Typography style={{fontFamily:'sans-serif', fontSize:64, fontWeight:900, color:'#445964'}}><span style={{color:'#263138'}}>HARD</span> SKILLS</Typography>
                <CardSkills/>
                </Box>
            </Paper>
            </>
        )
    }
  </Container>

  )
}