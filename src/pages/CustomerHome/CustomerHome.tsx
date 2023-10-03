import React from "react";
import { Grid, Paper,Typography,Avatar,TextField, Button,MenuItem,FormControl, InputLabel, Select } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';


const Predict = () => {
  const paperStyle = { padding: 20, width: 600, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const marginTop = { marginTop: 10 }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>       
      <Grid>
         <Avatar style={avatarStyle}>
         <HouseIcon />
        </Avatar>
         <h2 style={headerStyle}>HOUSE PRICE PREDICTOR</h2>
        <Typography variant='caption' gutterBottom>Please Enter your house details!</Typography>
         </Grid>
         <form>
                    <TextField fullWidth label='NumberOfBedrooms' placeholder="Enter your name" style={marginTop}/>
                    <TextField fullWidth label='NumberOfBathrooms' placeholder="Enter your email" style={marginTop} />                   
                    <TextField fullWidth label='SizeOfLivingArea' placeholder="Enter your phone number" style={marginTop}/>
                    <TextField fullWidth label='SizeOfLandArea' placeholder="Enter your password" style={marginTop}/>
                    <TextField fullWidth label='NumberOfFloors' placeholder="Confirm your password" style={marginTop}/>
                    <TextField fullWidth label='CurrencyRate' placeholder="Confirm your password" style={marginTop}/>
                    <FormControl fullWidth style={marginTop}>
                        <InputLabel id="demo-simple-select-label">Locations</InputLabel>
                         <Select labelId="demo-simple-select-label" id="demo-simple-select">
                          <MenuItem value={'Piliyandala'}>Piliyandala</MenuItem>
                          <MenuItem value={'Athurugiriya'}>Athurugiriya</MenuItem>
                          <MenuItem value={'Malabe'}>Malabe</MenuItem>
                          <MenuItem value={'Nugegoda'}>Nugegoda</MenuItem>
                          <MenuItem value={'Thalawatugoda'}>Thalawatugoda</MenuItem>
                          <MenuItem value={'Battaramulla'}>Battaramulla</MenuItem>
                        </Select>
                        </FormControl>
                    <Button type='submit' variant='contained' color='primary'style={marginTop}>ENTER</Button>
        </form>
      </Paper>
    </Grid>
  )
}
export default Predict