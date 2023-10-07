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
          <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
              suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
              perspiciatis laborum. 
          
          </p>
          <br />
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              deserunt libero reprehenderit cum sint fugit cumque temporibus modi
              facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          
          </p>
      </Box>
      <Footer/>
      </>    

  )
}

export default About;
