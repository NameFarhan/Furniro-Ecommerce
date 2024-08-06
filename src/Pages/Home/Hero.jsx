import { Box, Typography, Button } from "@mui/material";
import React from "react";
import herobg from "../../Images/herobg.svg";

const Hero = () => {
 

  return (
    <Box
      sx={{
        height: { xs: "400px", sm: "500px", md: "600px", lg: "716px" }, // Responsive height
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // Ensure the outer Box is positioned relatively
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Black with 30% transparency
          zIndex: 1, // Ensure the overlay is above the image but below the content
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%", lg: "643px" }, // Responsive width
          height: { xs: "auto", md: "443px" }, // Adjust height for smaller screens
          padding: { xs: "20px", sm: "30px", md: "62px 43px 37px 39px" }, // Responsive padding
          position: "absolute", // Positioning it absolutely within the outer Box
          borderRadius: "10px",
          bottom: { xs: "10px", md: "100px" }, // Adjust position for smaller screens
          right: { xs: "10px", md: "20px" }, // Adjust position for smaller screens
          zIndex: 2, // Ensure the content is above the overlay
          backgroundColor: "rgba(255, 243, 227, 0.9)", // Semi-transparent background for the inner box
        }}
      >
        <Typography
          sx={{ 
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font size
            fontWeight: "700", 
            color: "#333333" 
          }}
        >
          New Arrival
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "40px", md: "52px" }, // Responsive font size
            fontWeight: "1000",
            color: "#B88E2F",
            margin: "15px 0",
            lineHeight: { xs: "40px", sm: "50px", md: "65px" }, // Responsive line height
          }}
        >
          Discover Our <br /> New Collection
        </Typography>
        <Typography
          sx={{ 
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
            fontWeight: "500", 
            color: "#333333" 
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Typography>

        <Button
          sx={{
            width: { xs: "160px", md: "222px" }, // Responsive width
            backgroundColor: "#B88E2F",
            height: { xs: "50px", md: "74px" }, // Responsive height
            color: "#fff",
            fontSize: { xs: "14px", md: "16px" }, // Responsive font size
            fontWeight: "800",
            marginTop: "20px",
            "&:hover": { backgroundColor: "#B88E2F" },
          }}
          variant="contained"
        >
          BUY NOW
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
