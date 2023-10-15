import React from "react";
import { Header } from "../../components";
import {Footer} from "../../components";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
    <Header />
    <Box
          sx={{
              my: 15,
              textAlign: "center",
              p: 2,
              "& h4": {
                  fontWeight: "bold",
                  my: 2,
                  fontSize: "2rem",
              },
              "& p": {
                  textAlign: "justify",
              },
              "@media (max-width:600px)": {
                  mt: 0,
                  "& h4 ": {
                      fontSize: "1.5rem",
                  },
              },
          }}
      >
          <Typography variant="h4">Welcome To My Resturant</Typography>
          <h3>
           
           Welcome to our Website, your gateway to the world of real estate and the key to unlocking your dream home.
            At Lanka-House, we are committed to making the process of buying and selling homes as seamless and enjoyable as possible.
             With a team of dedicated professionals and a wealth of experience in the real estate industry, 
           we're here to assist you every step of the way. 
                     </h3>
                     <br />
                     <h3>
                     Our mission is to provide you with a platform where you can explore an extensive range of property listings,
                      receive expert guidance, and experience a customer-centric approach that prioritizes your satisfaction.
                       Whether you're a first-time homebuyer, an experienced investor, or a seller looking to showcase your property,
                      we're here to make your real estate journey a smooth and rewarding one.
                     
                     </h3>
      </Box>
      <Footer/>
      </>    

  )
}

export default About;
