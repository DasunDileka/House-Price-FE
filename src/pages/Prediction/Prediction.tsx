import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { APP_ACTION_STATUS, APP_ROUTES } from '../../utilities/constants';
import { useNavigate } from 'react-router-dom'
import { PredictionFormInitialStateDto,PredictionDto } from '../../utilities/models/prediction.model';
import { AlertDto } from '../../utilities/models';
import { validateFormData } from '../../utilities/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { predictAction } from '../../redux/actions/predict.action';
import {PredictionForm,Header,Footer} from '../../components';

const Predictor = () => {

  const INITIAL_STATE: PredictionFormInitialStateDto = {
    numberOfBedrooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    numberOfBathrooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    sizeOfLivingArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    sizeOfLandArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    numberOfFloors: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    currencyRate: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    location: { value: "", isRequired: true, disable: false, error: null, validator: 'text' },
    prediction: { value: null, isRequired: false, disable: false, error: null, validator: 'number' },
  }

  const theme = createTheme();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [predictForm, setPredictForm] = React.useState(INITIAL_STATE)

  const predictResponse = useSelector((state: any) => state.predict.predict)


//const predictResponse = useSelector((state: any) => state.data.predict)
  // signupUserAlert: AlertDto = useSelector((state: any) => state.alert.signupUserAlert)
  // const signupUser: AlertDto = useSelector((state: any) => state.registration.signupUser)

 // React.useEffect(() => {
  //  if (signupUserAlert.severity === 'success') {
   //   setPredictForm(INITIAL_STATE)
      //alert("Registration Successful")
    //  navigate(APP_ROUTES.ROOT)
   // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  //}, [signupUserAlert])
  React.useEffect(() => {
    if(predictResponse.status ===  APP_ACTION_STATUS.SUCCESS){
      console.log("predictResponce",predictResponse)
      setPredictForm({
        ...predictForm,
        prediction: {
          ...predictForm.prediction,
          value: "LKR" + predictResponse.data
        }
      })
   }
   }, [predictResponse.status])

  const onValidateUser = async () => {
    // navigate(APP_ROUTES.HOME)
    console.log('PredictionForm', predictForm)
    const [validateData, isValid] = await validateFormData(predictForm)
    setPredictForm(validateData)
    if (isValid) {
      const predictData: PredictionDto = {
        NumberOfBedroom: Number(predictForm.numberOfBedrooms.value),
        NumberOfBathroom: Number(predictForm.numberOfBathrooms.value),
        SizeOfLivingArea: Number(predictForm.sizeOfLivingArea.value),
        SizeOfLandArea: Number(predictForm.sizeOfLandArea.value),
        NumberOfFloors: Number(predictForm.numberOfFloors.value),
        CurrencyRate: Number(predictForm.currencyRate.value),
        Locations: predictForm.location.value
      }
      console.log("Checking", predictData)
      dispatch(predictAction.predictValue(predictData))
    }
  }

  const onInputHandleChange = (property: string, value: string) => {
    setPredictForm({
      ...predictForm,
      [property]: {
        ...predictForm[property as keyof typeof predictForm],
        value: value
      }
    })
  }

  return (
    <><Header /><ThemeProvider theme={theme}>
      <PredictionForm
        onValidateUser={onValidateUser}
        predict={predictForm}
        onInputHandleChange={onInputHandleChange} />
    </ThemeProvider><Footer /></>
  );
}

export default Predictor