import React from "react";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import ReactIcon from "../../../assets/icons/reactjs.png";
import HtmlIcon from "../../../assets/icons/html.png";
import CssIcon from "../../../assets/icons/css.png";
import NextIcon from "../../../assets/icons/next.png";
import JsIcon from "../../../assets/icons/js.png";
import StarIcon from "../../../assets/icons/Star.png";

export default function CardSkillWeb() {

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ marginBlock: .5, maxWidth:'lg' }}
    >
      <Grid item xs={2} md={4}>
        <BoxCard>
          <ImageCard src={ReactIcon} />
          <Box style={{ display: "flex", marginBlock: 20, justifyContent:'center' }}>
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
          </Box>
        </BoxCard>
      </Grid>
      <Grid item xs={2} md={4}>
        <BoxCard>
          <ImageCard src={HtmlIcon} />
          <Box style={{ display: "flex", marginBlock: 20, justifyContent:'center' }}>
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            
          </Box>
        </BoxCard>
      </Grid>
      <Grid item xs={2} md={4}>
        <BoxCard>
          <ImageCard src={CssIcon} />
          <Box style={{ display: "flex", marginBlock: 20, justifyContent:'center' }}>
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
           
          </Box>
        </BoxCard>
      </Grid>
      <Grid item xs={2} md={4}>
        <BoxCard>
          <ImageCard src={NextIcon} />
          <Box style={{ display: "flex", marginBlock: 20, justifyContent:'center' }}>
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
          </Box>
        </BoxCard>
      </Grid>
      <Grid item xs={2} md={4}>
        <BoxCard>
          <ImageCard src={JsIcon} />
          <Box style={{ display: "flex", marginBlock: 20, justifyContent:'center' }}>
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
            <img alt="" style={{ width: 50, height: 50 }} src={StarIcon} />
          </Box>
        </BoxCard>
      </Grid>
    </Grid>
  );
}

const BoxCard = styled(Box)({
  width: "310px",
  position: "relative",
  display: "inline-block",
  padding: "10px 30px",
  textDecoration: "none",
  borderRadius: "16px",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
});

const ImageCard = styled("img")({
  marginTop: 20,
  padding: "5px",
  borderRadius: "10px",
  backgroundColor: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
  width: 65,
  height: 65,
});
