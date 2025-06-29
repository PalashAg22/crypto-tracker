import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/banner2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px", // make sure this is a valid height
        display: "flex",
        alignItems: "center", // vertical center
        justifyContent: "center", // horizontal center
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Crypto-hunter level 1
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Box>
        <Carousel />
      </Container>
    </Box>
  );
};

export default Banner;
