import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignInFormInitialStateDto } from '../../../utilities/models';
import Footer from '../../UserPage/Footer';
import Header from '../../UserPage/Header';

const LoginForm: React.FC<{
    onNavigateToRegister(): void
    onValidateUser(): void
    signInForm: SignInFormInitialStateDto
    handleInputFocus(property: string, section: string): void;
    onInputHandleChange(property: string, value: string): void
}> = (props) => {
    return (
        <>
        <Header/>
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
                        Sign in
                    </Typography>
                    <Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            name="emailID"
                            error={!!props.signInForm.emailID.error}
                            autoFocus
                            onFocus={() => props.handleInputFocus('emailID', 'SI')}
                            helperText={props.signInForm.emailID.error
                                ? props.signInForm.emailID.error
                                : null}
                            value={props.signInForm.emailID.value}
                            onChange={(e) => props.onInputHandleChange('emailID', e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            error={!!props.signInForm.password.error}
                            label="Password"
                            type="password"
                            onFocus={() => props.handleInputFocus('password', 'SI')}
                            helperText={props.signInForm.password.error
                                ? props.signInForm.password.error
                                : null}
                            value={props.signInForm.password.value}
                            onChange={(e) => props.onInputHandleChange('password', e.target.value)}

                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={props.onValidateUser}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    onClick={props.onNavigateToRegister}
                                    variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default LoginForm