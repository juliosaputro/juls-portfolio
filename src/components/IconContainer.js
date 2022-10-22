import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import GitHub from "../assets/icons/github.png";
import Linkedin from "../assets/icons/linkedin.png";
import Instagram from "../assets/icons/instagram.png";
import Google from "../assets/icons/google.png";

export default function IconContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <BoxStyled component={"a"} href="https://github.com/juliosaputro">
        <img alt="" src={GitHub} />
      </BoxStyled>
      <BoxStyled
        component={"a"}
        href="https://www.linkedin.com/in/julio-ricky-saputro"
      >
        <img alt="" src={Linkedin} />
      </BoxStyled>
      <BoxStyled component={"a"} href="mailto:juliosaputro307@gmail.com">
        <img alt="" src={Google} />
      </BoxStyled>
      <BoxStyled component={"a"} href="https://www.instagram.com/juliorcky_">
        <img alt="" src={Instagram} />
      </BoxStyled>
    </Box>
  );
}

const BoxStyled = styled(Box)({
  width: "50px",
  height: "50px",
  padding: "8px 20px",
  marginRight:37,
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: "2px",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  backgroundColor: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
});