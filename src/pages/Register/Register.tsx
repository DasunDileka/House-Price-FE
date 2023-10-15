import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { APP_ROUTES } from '../../utilities/constants';
import { useNavigate } from 'react-router-dom'
import { SignupForm } from '../../components';
import { AlertDto, SignupFormInitialStateDto, SignupUserDto } from '../../utilities/models';
import { validateFormData } from '../../utilities/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { registrationActions } from '../../redux/actions';

const Register = () => {

  const INITIAL_STATE: SignupFormInitialStateDto = {
    name: {
      value: '',
      isRequired: true,
      error: null,
      disable: false,
      validator: 'text'
    },
    email: {
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
    },
    contact: {
      value: '',
      isRequired: true,
      error: null,
      disable: false,
      validator: 'text'
    },
  }

  const theme = createTheme();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signupForm, setSignupForm] = React.useState(INITIAL_STATE)

  const signupUserAlert: AlertDto = useSelector((state: any) => state.alert.signupUserAlert)
  // const signupUser: AlertDto = useSelector((state: any) => state.registration.signupUser)

  React.useEffect(() => {
    if (signupUserAlert.severity === 'success') {
      setSignupForm(INITIAL_STATE)
      alert("Registration Successful")
      navigate(APP_ROUTES.SignIn)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupUserAlert])

  const onValidateUser = async () => {
    // navigate(APP_ROUTES.HOME)
    console.log('signupForm', signupForm)
    const [validateData, isValid] = await validateFormData(signupForm)
    setSignupForm(validateData)
    if (isValid) {
      const userRegistrationData: SignupUserDto = {
        name: signupForm.name.value,
        email: signupForm.email.value,
        password: signupForm.password.value,
        contact: signupForm.contact.value,
        userType: 'Customer'
      }
      dispatch(registrationActions.registerUser(userRegistrationData))
    }
  }

  const onInputHandleChange = (property: string, value: string) => {
    setSignupForm({
      ...signupForm,
      [property]: {
        ...signupForm[property as keyof typeof signupForm],
        value: value
      }
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <SignupForm
        onValidateUser={onValidateUser}
        signupForm={signupForm}
        onInputHandleChange={onInputHandleChange}
      />
    </ThemeProvider>
  );
}

export default Register