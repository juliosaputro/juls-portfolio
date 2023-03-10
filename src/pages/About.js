import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardSkillWeb from "../components/animation/card-skill/CardSkillWeb";
import CardSkillMobile from "../components/animation/card-skill/CardSkillMobile";
import Profile from "../assets/images/profile.png";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth={"xl"}>
      {isMobile ? (
        <>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              backgroundColor: "transparent",
              justifyContent: "center",
              padding: 8,
              textAlign: "center",
            }}
          >
            <Box sx={{ justifyContent: "center" }}>
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  alt=""
                  src={Profile}
                  style={{ width: 183, height: 200, borderRadius: "50%" }}
                />
              </Box>
              <Box sx={{ marginBlock: 5 }}>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#445964",
                  }}
                >
                  JULIO RICKY SAPUTRO
                </Typography>
                <Typography style={{ marginBlock: 16, fontSize:18}}>
                  My name is Julio Ricky Saputro 👋 I'm from Indonesia,I am a
                  mobile / web developer with 1 year experience as FrontEnd
                  Developer and React Native Developer. A person who is very
                  thorough and efficient in doing his job. Have good verbal and
                  verbal communication skills, as well as a cheerful
                  personality.
                </Typography>
              </Box>
              <Typography
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 32,
                  fontWeight: 900,
                  color: "#445964",
                }}
              >
                EDUCATION
              </Typography>
              <Box sx={{flex:1, display:'flex', flexDirection:'column', }}>
                  <Box sx={{flex:1}}>
                    <Typography style={{ marginBlock:20, fontSize:24, fontWeight:'bolder'}}>Formal Education</Typography>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start'}}>Universitas Teknologi Yogyakarta</Typography>
                    <Box sx={{flex:1, display:'flex'}}>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start', marginRight:10}}>-</Typography>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start'}}> Informatika (2017 - 2022)</Typography>
                    </Box>
                    <Box sx={{flex:1, display:'flex'}}>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start', marginRight:10}}>-</Typography>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start'}}> Pelatihan Tim Teknis Lapangan Pilkades E-Voting Kabupaten Sleman 2020</Typography>
                    </Box>
                  </Box>
                  <Box sx={{flex:1}}>
                  <Typography style={{ marginBlock:20, fontSize:24, fontWeight:'bolder'}}>Non Formal Education</Typography>
                    <Box sx={{flex:1, display:'flex'}}>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start', marginRight:10}}>-</Typography>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start'}}> Google Digital Garage "The Fundamentals of Digital Marketing ( Google - 2019 )</Typography>
                    </Box>
                    <Box sx={{flex:1, display:'flex'}}>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start', marginRight:10}}>-</Typography>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start'}}> Training in House IOS Swift Intermediate ( UdaCoding - 2021)</Typography>
                    </Box>
                    <Box sx={{flex:1, display:'flex'}}>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start', marginRight:10}}>-</Typography>
                    <Typography style={{fontSize:18, fontWeight:'normal',textAlign:'start'}}> Training in House IOS Swift Basic ( Udacoding - 2021)</Typography>
                    </Box>
                  </Box>
                </Box>
              <Box sx={{ marginBlock: 10 }}>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#445964",
                  }}
                >
                  <span style={{ color: "#263138" }}>HARD</span> SKILLS
                </Typography>
                <CardSkillMobile />
              </Box>
            </Box>
          </Paper>
        </>
      ) : (
        <>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              backgroundColor: "transparent",
              justifyContent: "center",
              padding: 5,
              textAlign: "center",
            }}
          >
            <Box sx={{ justifyContent: "center" }}>
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <img
                  alt=""
                  src={Profile}
                  style={{ width: 183, height: 200, borderRadius: "50%" }}
                />
              </Box>
              <Typography
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#445964",
                }}
              >
                <span style={{ color: "#263138" }}>JULIO</span> RICKY SAPUTRO
              </Typography>
              <Typography style={{ marginBlock: 20, fontSize: 24 }}>
                My name is Julio Ricky Saputro 👋 I'm from Indonesia,I am a
                mobile / web developer with 1 year experience as FrontEnd
                Developer and React Native Developer. A person who is very
                thorough and efficient in doing his job. Have good verbal and
                verbal communication skills, as well as a cheerful personality.
              </Typography>
              <Typography
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#445964",
                }}
              >
                EDUCATION
              </Typography>
              <Box sx={{ flex: 1, display: "flex" }}>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    style={{
                      marginBlock: 20,
                      fontSize: 32,
                      fontWeight: "bolder",
                    }}
                  >
                    Formal Education
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 24,
                      fontWeight: "normal",
                      textAlign: "start",
                    }}
                  >
                    Universitas Teknologi Yogyakarta
                  </Typography>
                  <Box sx={{ flex: 1, display: "flex" }}>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                        marginRight: 10,
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                      }}
                    >
                      {" "}
                      Informatika (2017 - 2022)
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, display: "flex" }}>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                        marginRight: 10,
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                      }}
                    >
                      {" "}
                      Pelatihan Tim Teknis Lapangan Pilkades E-Voting Kabupaten
                      Sleman 2020
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    style={{
                      marginBlock: 20,
                      fontSize: 32,
                      fontWeight: "bolder",
                    }}
                  >
                    Non Formal Education
                  </Typography>
                  <Box sx={{ flex: 1, display: "flex" }}>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                        marginRight: 10,
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                      }}
                    >
                      {" "}
                      Google Digital Garage "The Fundamentals of Digital
                      Marketing ( Google - 2019 )
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, display: "flex" }}>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                        marginRight: 10,
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                      }}
                    >
                      {" "}
                      Training in House IOS Swift Intermediate ( UdaCoding -
                      2021)
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, display: "flex" }}>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                        marginRight: 10,
                      }}
                    >
                      -
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 24,
                        fontWeight: "normal",
                        textAlign: "start",
                      }}
                    >
                      {" "}
                      Training in House IOS Swift Basic ( Udacoding - 2021)
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#445964",
                }}
              >
                <span style={{ color: "#263138" }}>HARD</span> SKILLS
              </Typography>
              <CardSkillWeb />
            </Box>
          </Paper>
        </>
      )}
    </Container>
  );
}
