import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { APP_ACTION_STATUS, APP_ROUTES } from '../../utilities/constants';
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components';
import { SignInFormInitialStateDto, SignInUserDetailDto, SignInUserParamsDto } from '../../utilities/models';
import { validateFormData } from '../../utilities/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../redux/actions';
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { Snackbar } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Login = () => {

  const INITIAL_STATE: SignInFormInitialStateDto = {
    emailID: {
      value: '',
      isRequired: true,
      error: null,
      disable: false,
      validator: 'email'
    },
    password: {
      value: '',
      isRequired: true,
      error: null,
      disable: false,
      validator: 'text'
    }
  }


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = createTheme();
  const [signInForm, setSignInForm] = React.useState(INITIAL_STATE)

  const loginResponse = useSelector((state: any) => state.login.signInUser)
  const loginAlert = useSelector((state: any) => state.alert.signinUserAlert)



  React.useEffect(() => {
    console.log("login",loginResponse);
    if (loginResponse.status === APP_ACTION_STATUS.SUCCESS) {
      const loggerUser: SignInUserDetailDto = loginResponse.data
      if (loggerUser) {
        if (loginResponse.data.userType === 'Customer') {
          navigate(APP_ROUTES.Prediction);
          sessionStorage.setItem("id", loginResponse.data.id.toString());
        //  navigate(APP_ROUTES.CUSTOMER_HOME)
        } else {
          navigate(APP_ROUTES.HOUSE)
          sessionStorage.setItem("id", loginResponse.data.id.toString());
        }
      }
    }
    if (loginResponse.status === APP_ACTION_STATUS.ERROR) {
      console.log('loginResponse.error', loginResponse.error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResponse.status])


  const onNavigateToRegister = () => {
    navigate(APP_ROUTES.REGISTER)
  }

  const handleInputFocus = (property: string, section: string) => {
    if (section === "SI")
      setSignInForm({
        ...signInForm,
        [property]: {
          ...signInForm[property as keyof typeof signInForm],
          error: null,
        },
      });
 }

  const onInputHandleChange = (property: string, value: string) => {
    setSignInForm({
      ...signInForm,
      [property]: {
        ...signInForm[property as keyof typeof signInForm],
        value: value
      }
    })
  }

  const onValidateUser = async () => {
    // navigate(APP_ROUTES.HOME)
    const [validateData, isValid] = await validateFormData(signInForm)
    setSignInForm(validateData)
    if (isValid) {
      const userLoginParams: SignInUserParamsDto = {
        emailID: signInForm.emailID.value,
        password: signInForm.password.value,

      }
      dispatch(loginActions.signInUser(userLoginParams))
    }

  }

  return (
    <ThemeProvider theme={theme}>
      {(loginAlert.display) && (
        <div>
          <Snackbar
            open={loginAlert.display}
            autoHideDuration={2000}
            message={loginAlert.message}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >

            <Alert severity={loginAlert.severity} sx={{ width: '100%' }}>
              {loginAlert.message}
            </Alert>
          </Snackbar>{' '}
          <br />
        </div>
      )}
      <LoginForm
        onValidateUser={onValidateUser}
        onNavigateToRegister={onNavigateToRegister}
        onInputHandleChange={onInputHandleChange}
        signInForm={signInForm}
        handleInputFocus={handleInputFocus}
      />
    </ThemeProvider>
  );
}

export default Login