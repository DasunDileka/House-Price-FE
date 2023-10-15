import React from "react";
import { Header } from "../../components";
import {Footer} from "../../components";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <><><Header /><Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Contact Us</Typography>
          <h3>
              Contact us to get more details. We will give your dream home
          </h3>
      </Box><Box
          sx={{
              m: 3,
              width: "600px",
              ml: 10,
              "@media (max-width:600px)": {
                  width: "300px",
              },
          }}
      >
              <TableContainer component={Paper}>
                  <Table aria-label="contact table">
                      <TableHead>
                          <TableRow>
                              <TableCell
                                  sx={{ bgcolor: "black", color: "white" }}
                                  align="center"
                              >
                                  Contact Details
                              </TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          <TableRow>
                              <TableCell>
                                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />  011-987-1000
                                  (hotline)
                              </TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell>
                                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> lankahouse@gmail..com
                              </TableCell>
                          </TableRow>
                          <TableRow>
                              <TableCell>
                                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0716344544
                              </TableCell>
                          </TableRow>
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box></><Footer />
          </>
  );
};

export default Contact;
