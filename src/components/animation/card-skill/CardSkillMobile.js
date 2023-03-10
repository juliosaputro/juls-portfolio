import React from "react";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import ReactIcon from "../../../assets/icons/React.png";
import HtmlIcon from "../../../assets/icons/html.png";
import CssIcon from "../../../assets/icons/css.png";
import NextIcon from "../../../assets/icons/next.png";
import JsIcon from "../../../assets/icons/js.png";

export default function CardSkillMobile() {
  return (
    <Container sx={{display:'flex', }}>
        <ImageCard src={ReactIcon} />
        <ImageCard src={HtmlIcon} />
        <ImageCard src={CssIcon} />
        <ImageCard src={NextIcon} />
        <ImageCard src={JsIcon} />
    </Container>
  );
}



const ImageCard = styled("img")({
  marginTop: 10,
  marginInline:5,
  padding: "5px",
  borderRadius: "50%",
  backgroundColor: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
  width: 45,
  height: 45,
  objectFit:'contain'
});
