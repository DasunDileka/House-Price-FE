import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { PredictionFormInitialStateDto } from '../../utilities/models/prediction.model';

const PredictionForm: React.FC<{
    onValidateUser(): void;
    predict: PredictionFormInitialStateDto
    onInputHandleChange(property: string, value: any): void;
}> = (props) => {
  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid 
          container spacing={1} marginTop={3}
        >
       
          <Typography component="h1" variant="h5">
            Enter Your House Features
          </Typography>
          
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="NumberOfBedrooms"
              name="numberOfBedrooms"
              autoFocus
              value={props.predict.numberOfBedrooms.value}
              onChange={(e) => props.onInputHandleChange('numberOfBedrooms', e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="NumberOfBathrooms"
              name="numberOfBathrooms"
              autoFocus
              value={props.predict.numberOfBathrooms.value}
              onChange={(e) => props.onInputHandleChange('numberOfBathrooms', e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
             <TextField
              margin="normal"
              required
              fullWidth
              label="SizeOfLivingArea"
              name="sizeOfLivingArea"
              autoFocus
              value={props.predict.sizeOfLivingArea.value}
              onChange={(e) => props.onInputHandleChange('sizeOfLivingArea', e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="SizeOfLandArea"
              label="sizeOfLandArea"
              value={props.predict.sizeOfLandArea.value}
              onChange={(e) => props.onInputHandleChange('sizeOfLandArea', e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
              <TextField
              margin="normal"
              required
              fullWidth
              label="NumberOfFloors"
              name="numberOfFloors"
              autoFocus
              value={props.predict.numberOfFloors.value}
              onChange={(e) => props.onInputHandleChange('numberOfFloors', e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="CurrencyRate"
              name="currencyRate"
              autoFocus
              value={props.predict.currencyRate.value}
              onChange={(e) => props.onInputHandleChange('currencyRate', e.target.value)}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Location"
              name="location"
              autoFocus
              value={props.predict.location.value}
              onChange={(e) => props.onInputHandleChange('location', e.target.value)}
            />
            </Grid>
       
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={props.onValidateUser} 
            >
              Enter
            </Button>
            <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Price"
              name="price"
              autoFocus
              value={props.predict.prediction.value}
            
            />
            </Grid>
          </Grid>
        
      </Container>
    </>
  )
}

export default PredictionForm