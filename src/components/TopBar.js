import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  ListItem,
  Container,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar() {
  const data = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Experiences", link: "/Experience" },
  ];

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
        <Container component={"div"} maxWidth={"xl"} sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "transparent", boxShadow: "inherit" }}
          >
            <Toolbar>
              <Typography
                variant="h5"
                sx={{ flexGrow: 1, color: "#445964" }}
                fontFamily="sans-serif"
                fontWeight={900}
                fontSize={30}
                letterSpacing={5}
              >
                JULS
              </Typography>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: "#E5E5E5",
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 30,
                  },
                }}
                open={open}
                anchor={"right"}
                onClose={() => setOpen(false)}
              >
                <div
                  style={{
                    width: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {data.map((item, index) => {
                    return (
                      <ButtonMobile component={Link} to={item.link} key={index}>
                        {item.name}
                      </ButtonMobile>
                    );
                  })}
                </div>
              </Drawer>
            </Toolbar>
          </AppBar>
        </Container>
      ) : (
        <>
          <Box sx={{ flexGrow: 1, marginInline: 20 }}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "transparent",
                boxShadow: "inherit",
                width: "100%",
              }}
            >
              <Toolbar>
                <Typography
                  variant="h5"
                  sx={{ flexGrow: 1, color: "#445964" }}
                  fontFamily="sans-serif"
                  fontWeight={900}
                  fontSize={30}
                  letterSpacing={5}
                  // marginLeft={20}
                >
                  JULS
                </Typography>
                <Box
                  flexDirection={"row"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={600}
                  // sx={{background:'red'}}
                >
                  {data.map((item, index) => {
                    return (
                      <ButtonWeb component={Link} to={item.link} key={index}>
                        {item.name}
                      </ButtonWeb>
                    );
                  })}
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </>
      )}
    </>
  );
}

const ButtonWeb = styled(Button)({
  width: "130px",
  padding: "8px 20px",
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: "2px",
  fontSize: "16px",
  borderRadius: "20px",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
});

const ButtonMobile = styled(ListItem)({
  width: "120px",
  marginBlock: 20,
  padding: "8px 20px",
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: "2px",
  color: "#445964",
  fontSize: "12px",
  textAlign: "center",
  display: "inline-block",
  borderRadius: "40px",
  boxShadow: "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)",
});
