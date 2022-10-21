import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  MenuItem,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar() {
  const data = [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Experiences", link: "/experiences" },
  ];

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
          {isMobile ? (
            <>
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
                    backgroundColor: "red",
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                  },
                }}
                open={open}
                anchor={"right"}
                onClose={() => setOpen(false)}
              >
                <div
                  style={{ width: 200, borderTopLeftRadius: 8 }}
                  onClick={() => setOpen(false)}
                >
                  {data.map((item, index) => {
                    return (
                      <MenuItem component={Link} to={item.link} key={index}>
                        <ListItem>
                          <ListItemText>{item.name}</ListItemText>
                        </ListItem>
                      </MenuItem>
                    );
                  })}
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <Box
                flexDirection={"row"}
                display={"flex"}
                justifyContent={"space-between"}
                width={900}
              >
                {data.map((item, index) => {
                  return (
                    <MenuItem component={Link} to={item.link} key={index}>
                      <ListItem>
                        <ListItemText
                          sx={{
                            flexGrow: 1,
                            color: "black",
                            cursor: "pointer",
                          }}
                        >
                          {item.name}
                        </ListItemText>
                      </ListItem>
                    </MenuItem>
                  );
                })}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
}
