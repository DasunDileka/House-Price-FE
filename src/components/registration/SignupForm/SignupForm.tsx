import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignupFormInitialStateDto } from '../../../utilities/models';

const SignupForm: React.FC<{
    onValidateUser(): void;
    signupForm: SignupFormInitialStateDto
    onInputHandleChange(property: string, value: any): void;
}> = (props) => {
  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
              value={props.signupForm.name.value}
              onChange={(e) => props.onInputHandleChange('name', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoFocus
              value={props.signupForm.email.value}
              onChange={(e) => props.onInputHandleChange('email', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={props.signupForm.password.value}
              onChange={(e) => props.onInputHandleChange('password', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact"
              label="Contact"
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