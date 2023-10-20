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
              error={!!props.predict.numberOfBedrooms.error}
              value={props.predict.numberOfBedrooms.value}
              helperText={props.predict.numberOfBedrooms.error
                ? props.predict.numberOfBedrooms.error
                : null}
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
              error={!!props.predict.numberOfBathrooms.error}
              value={props.predict.numberOfBathrooms.value}
              helperText={props.predict.numberOfBathrooms.error
                ? props.predict.numberOfBathrooms.error
                : null}
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
              error={!!props.predict.sizeOfLivingArea.error}
              value={props.predict.sizeOfLivingArea.value}
              helperText={props.predict.sizeOfLivingArea.error
                ? props.predict.sizeOfLivingArea.error
                : null}
              onChange={(e) => props.onInputHandleChange('sizeOfLivingArea', e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="SizeOfLandArea"
              label="SizeOfLandArea"
              error={!!props.predict.sizeOfLandArea.error}
              value={props.predict.sizeOfLandArea.value}
              helperText={props.predict.sizeOfLandArea.error
                ? props.predict.sizeOfLandArea.error
                : null}
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
              error={!!props.predict.numberOfFloors.error}
              value={props.predict.numberOfFloors.value}
              helperText={props.predict.numberOfFloors.error
                ? props.predict.numberOfFloors.error
                : null}
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
              error={!!props.predict.currencyRate.error}
              value={props.predict.currencyRate.value}
              helperText={props.predict.currencyRate.error
                ? props.predict.currencyRate.error
                : null}
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
              error={!!props.predict.location.error}
              value={props.predict.location.value}
              helperText={props.predict.location.error
                ? props.predict.location.error
                : null}
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
            <Grid item xs={18}>
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