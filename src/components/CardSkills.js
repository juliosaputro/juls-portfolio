import React from "react";
import { Container, Grid, Box, Typography, useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function CardSkills() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Container>
        {
            isMobile ? (
                <>
                <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center'}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:900, color:'#445964', lineHeight:2}}>HTML</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarBorderIcon fontSize='medium'/>
                      </Box>
                      </Box>
                    </Box>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center'}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:900, color:'#445964', lineHeight:2}}>CSS</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarBorderIcon fontSize='medium'/>
                      </Box>
                      </Box>
                    </Box>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center'}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:900, color:'#445964', lineHeight:2}}>React</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarBorderIcon fontSize='medium'/>
                      </Box>
                      </Box>
                    </Box>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center'}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:900, color:'#445964', lineHeight:2}}>Next</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarBorderIcon fontSize='medium'/>
                          <StarBorderIcon fontSize='medium'/>
                      </Box>
                      </Box>
                    </Box>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center'}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:24, fontWeight:900, color:'#445964', lineHeight:2}}>JavaScript</Typography>
                      <Box sx={{display:'flex', justifyContent:'center'}}>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarIcon fontSize='medium'/>
                          <StarBorderIcon fontSize='medium'/>
                      </Box>
                      </Box>
                    </Box>
                </>
            ) : (
                <>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={2} md={4}>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center', marginBlock:4}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:28, fontWeight:900, color:'#445964', lineHeight:2}}>HTML</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarBorderIcon fontSize='large'/>
                      </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={4}>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center', marginBlock:4}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:28, fontWeight:900, color:'#445964', lineHeight:2}}>CSS</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarBorderIcon fontSize='large'/>
                      </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={4}>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center', marginBlock:4}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:28, fontWeight:900, color:'#445964', lineHeight:2}}>React</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarBorderIcon fontSize='large'/>
                      </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={4}>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center', marginBlock:4}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:28, fontWeight:900, color:'#445964', lineHeight:2}}>Next</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarBorderIcon fontSize='large'/>
                          <StarBorderIcon fontSize='large'/>
                      </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={4}>
                    <Box sx={{display:'flex', height:100, justifyContent:'center', alignItems:'center', marginBlock:4}}>
                      <Box>
                      <Typography style={{fontFamily:'sans-serif', fontSize:28, fontWeight:900, color:'#445964', lineHeight:2}}>JavaScript</Typography>
                      <Box sx={{display:'flex'}}>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarIcon fontSize='large'/>
                          <StarBorderIcon fontSize='large'/>
                      </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                </>
            )
        }
    </Container>
  );
}
