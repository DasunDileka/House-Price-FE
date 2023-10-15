import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignupFormInitialStateDto } from '../../../utilities/models';
import Header from '../../UserPage/Header';

const SignupForm: React.FC<{
    onValidateUser(): void;
    signupForm: SignupFormInitialStateDto
    onInputHandleChange(property: string, value: any): void;
}> = (props) => {
  return (
    <>
      <Header/>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              autoFocus
              error={!!props.signupForm.name.error}
              value={props.signupForm.name.value}
              helperText={props.signupForm.name.error
                ? props.signupForm.name.error
                : null}
              onChange={(e) => props.onInputHandleChange('name', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoFocus
              error={!!props.signupForm.email.error}
              value={props.signupForm.email.value}
              helperText={props.signupForm.email.error
                ? props.signupForm.email.error
                : null}
              onChange={(e) => props.onInputHandleChange('email', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              error={!!props.signupForm.password.error}
              value={props.signupForm.password.value}
              helperText={props.signupForm.password.error
                ? props.signupForm.password.error
                : null}
              onChange={(e) => props.onInputHandleChange('password', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact"
              label="Contact"
              helperText={props.signupForm.contact.error
                ? props.signupForm.contact.error
                : null}
              error={!!props.signupForm.contact.error}
              value={props.signupForm.contact.value}
              onChange={(e) => props.onInputHandleChange('contact', e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={props.onValidateUser} 
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SignupForm