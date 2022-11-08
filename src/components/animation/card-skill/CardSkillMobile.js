import React from "react";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import ReactIcon from "../../../assets/icons/React.png";
import HtmlIcon from "../../../assets/icons/html.png";
import CssIcon from "../../../assets/icons/css.png";
import NextIcon from "../../../assets/icons/next.png";
import JsIcon from "../../../assets/icons/js.png";
import StarIcon from "../../../assets/icons/Star.png";

export default function CardSkillMobile() {
  return (
    <Container>
      <BoxCard>
        <ImageCard src={ReactIcon} />
        <Box style={{ display: "flex", marginBlock: 10, justifyContent:'center' }}>
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
        </Box>
      </BoxCard>
      <BoxCard>
        <ImageCard src={HtmlIcon} />
        <Box style={{ display: "flex", marginBlock: 10, justifyContent:'center' }}>
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
        </Box>
      </BoxCard>
      <BoxCard>
        <ImageCard src={CssIcon} />
        <Box style={{ display: "flex", marginBlock: 10, justifyContent:'center' }}>
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
        </Box>
      </BoxCard>
      <BoxCard>
        <ImageCard src={NextIcon} />
        <Box style={{ display: "flex", marginBlock: 10, justifyContent:'center' }}>
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
        </Box>
      </BoxCard>
      <BoxCard>
        <ImageCard src={JsIcon} />
        <Box style={{ display: "flex", marginBlock: 10, justifyContent:'center' }}>
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
          <img alt="" style={{ width: 31, height: 31 }} src={StarIcon} />
        </Box>
      </BoxCard>
    </Container>
  );
}

const BoxCard = styled(Box)({
  width: "210px",
  position: "relative",
  display: "inline-block",
  padding: "3px 30px",
  textDecoration: "none",
  marginTop: 20,
  borderRadius: "16px",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
});

const ImageCard = styled("img")({
  marginTop: 10,
  padding: "5px",
  borderRadius: "10px",
  backgroundColor: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
  width: 58,
  height: 54,
});
