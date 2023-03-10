import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import ReactIcon from "../../../assets/icons/reactjs.png";
import HtmlIcon from "../../../assets/icons/html.png";
import CssIcon from "../../../assets/icons/css.png";
import NextIcon from "../../../assets/icons/next.png";
import JsIcon from "../../../assets/icons/js.png";

export default function CardSkillWeb() {
  return (
    <Grid
      container
      gridColumn={5}
      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
      sx={{ marginBlock: 0.5, maxWidth: "xl", justifyContent: "center" }}
    >
      <Grid item>
        <ImageCard src={ReactIcon} />
      </Grid>
      <Grid item>
        <ImageCard src={HtmlIcon} />
      </Grid>
      <Grid item>
        <ImageCard src={CssIcon} />
      </Grid>
      <Grid item>
        <ImageCard src={NextIcon} />
      </Grid>
      <Grid item>
        <ImageCard src={JsIcon} />
      </Grid>
    </Grid>
  );
}

const ImageCard = styled("img")({
  marginTop: 20,
  padding: "5px",
  borderRadius: "50%",
  backgroundColor: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
  width: 65,
  height: 65,
  objectFit:'contain'
});
