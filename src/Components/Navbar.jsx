import { Box, Button, Typography, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import logo from "../Images/logo.svg";
const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: "100px",
        padding: "0 3vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Box sx={{display:'flex',alignItems:'center'}}>
        <Box
          component="img"
          sx={{
            height: 60,
            width: 42,
            marginRight:'10px'
          }}
          alt="Logo"
          src={logo}
        />
        <Typography sx={{ fontSize: "34px", fontWeight: "900" }}>
          Furniro
        </Typography>
        </Box>
      </Box>

      {isMobile ? (
        <IconButton>
          <MenuIcon />
        </IconButton>
      ) : (
        <Box>
          <Button
            sx={{
              fontSize: "16px",
              textTransform: "none",
              marginRight: "20px",
              color: "#000",
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              fontSize: "16px",
              textTransform: "none",
              marginRight: "20px",
              color: "#000",
            }}
          >
            Shop
          </Button>
          <Button
            sx={{
              fontSize: "16px",
              textTransform: "none",
              marginRight: "20px",
              color: "#000",
            }}
          >
            About
          </Button>
          <Button
            sx={{
              fontSize: "16px",
              textTransform: "none",
              marginRight: "20px",
              color: "#000",
            }}
          >
            Contact
          </Button>
        </Box>
      )}

      <Box sx={{ display: "flex", cursor: "pointer" }}>
        <FavoriteBorderIcon sx={{ marginRight: "20px" }} />
        <ShoppingCartOutlinedIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
