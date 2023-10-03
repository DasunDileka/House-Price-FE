import React, { useEffect, useState } from 'react'
import { AlertDto,ProductEditDto, ProductInfoDto, ProductInitialStateDto, ProductUpdateStateDto, SignInUserDetailDto,productListDto } from '../../utilities/models';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from '../../components';
import AddProduct from '../../components/productManagement/AddProduct/AddProduct';
import ViewProduct from '../../components/productManagement/ViewProduct/ViewProduct';
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { validateFormData } from '../../utilities/helpers';
import { Snackbar } from '@mui/material';
import { productActions } from '../../redux/actions';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Product = () => {
  const INITIAL_STATE: ProductInitialStateDto = {
    Location: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    NoOfBedRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    NoOfBathRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    LivingArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    LandArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    floors: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    School: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    ShappingMall: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Transport: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Date: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    CurrencyRate: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Price: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Link: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
  }
  const INITIAL_ROW_EDIT_STATE: ProductUpdateStateDto = {
    id: { value: -1, isRequired: true, disable: false, error: null, validator: 'number' },
    Location: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    NoOfBedRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    NoOfBathRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    LivingArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    LandArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    floors: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    School: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    ShappingMall: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Transport: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Date: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    CurrencyRate: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Price: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    Link: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
  }

  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [editFormRowData, setEditFormRowData] = useState(INITIAL_ROW_EDIT_STATE)
  const [isAddProductExpanded, setIsAddProductExpanded] = React.useState(false)
  const [isEditProduct, setIsEditProduct] = useState(false)

  const user: SignInUserDetailDto = useSelector((state: any) => state.login.signInUser.data)
  const productList: productListDto[] = useSelector((state: any) => state.products.productList.data)
  const addProductAlert: AlertDto = useSelector((state: any) => state.alert.addProductAlert)
  const editProductAlert: AlertDto = useSelector((state: any) => state.alert.editProductAlert)
  const addProductLoader: boolean = useSelector((state: any) => state.products.addProduct.isLoading)
  const editProductLoader: boolean = useSelector((state: any) => state.products.editProduct.isLoading)


  useEffect(() => {
    getProductList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (addProductAlert.severity === 'success' || editProductAlert.severity === 'success') {
      setFormValues(INITIAL_STATE)
      setEditFormRowData(INITIAL_ROW_EDIT_STATE)
      setIsAddProductExpanded(false)
      getProductList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addProductAlert, editProductAlert])

  const getProductList = () => {
    dispatch(productActions.getProductList())
  }
  // const handleExpanded = () => {
  //   setIsAddProductExpanded(true)
  // }
  const handleProductEdit = (p: productListDto) => {
    setIsAddProductExpanded(true)
    setIsEditProduct(true)
    setEditFormRowData({
      ...editFormRowData,
      id: {
        ...editFormRowData.id,
        value: p.id
      },
      Location: {
        ...editFormRowData.Location,
        value: p.Location
      },
      NoOfBedRooms: {
        ...editFormRowData.NoOfBedRooms,
        value: p.NoOfBedRooms
      },
      NoOfBathRooms: {
        ...editFormRowData.NoOfBathRooms,
        value: p.NoOfBathRooms
      },
      LivingArea: {
        ...editFormRowData.LivingArea,
        value: p.LivingArea
      },
      LandArea: {
        ...editFormRowData.LandArea,
        value: p.LandArea
      },
      floors: {
        ...editFormRowData.floors,
        value: p.floors
      },
      School: {
        ...editFormRowData.School,
        value: p.School
      },
      ShappingMall: {
        ...editFormRowData.ShappingMall,
        value: p.ShappingMall
      },
      Transport: {
        ...editFormRowData.Transport,
        value: p.Transport
      }, Date: {
        ...editFormRowData.Date,
        value: p.Date
      },
      CurrencyRate: {
        ...editFormRowData.CurrencyRate,
        value: p.CurrencyRate
      },
      Price: {
        ...editFormRowData.Price,
        value: p.Price
      },
      Link: {
        ...editFormRowData.Link,
        value: p.Link
      }
    })
  }

  const editProduct = async () => {
    const [validateData, isValid] = await validateFormData(editFormRowData)
    setFormValues(validateData)
    if (isValid) {
      const payload: ProductEditDto = {
        id: editFormRowData.id.value,
        Location: editFormRowData.Location.value,
        NoOfBedRooms: editFormRowData.NoOfBedRooms.value,
        NoOfBathRooms: editFormRowData.NoOfBathRooms.value,
        LivingArea: editFormRowData.LivingArea.value,
        LandArea: editFormRowData.LandArea.value,
        floors: editFormRowData.floors.value,
        School: editFormRowData.School.value,
        ShappingMall: editFormRowData.ShappingMall.value,
        Transport: editFormRowData.Transport.value,
        Date: editFormRowData.Date.value,
        CurrencyRate: editFormRowData.CurrencyRate.value,
        Price: editFormRowData.Price.value,
        Link: editFormRowData.Link.value,
      }
      dispatch(productActions.editProduct(payload))
    }

   }

  const addProduct = async () => {
    const [validateData, isValid] = await validateFormData(formValues)
    setFormValues(validateData)
    if (isValid) {
      const payload: ProductInfoDto = {
        
        Location: formValues.Location.value,
        NoOfBedRooms: formValues.NoOfBedRooms.value,
        NoOfBathRooms: formValues.NoOfBathRooms.value,
        LivingArea: formValues.LivingArea.value,
        LandArea: formValues.LandArea.value,
        floors: formValues.floors.value,
        School: formValues.School.value,
        ShappingMall: formValues.ShappingMall.value,
        Transport: formValues.Transport.value,
        Date: formValues.Date.value,
        CurrencyRate: formValues.CurrencyRate.value,
        Price: formValues.Price.value,
        Link: formValues.Link.value,
  
      }
      dispatch(productActions.addProduct(payload))
    }
  }

  const onInputHandleChange = (property: string, value: string) => {
    if (isEditProduct) {
      setEditFormRowData({
        ...editFormRowData,
        [property]: {
          ...editFormRowData[property as keyof typeof editFormRowData],
          value: value,
          error: null
        }
      })
    } else {
      setFormValues({
        ...formValues,
        [property]: {
          ...formValues[property as keyof typeof formValues],
          value: value,
          error: null
        }
      })

    }
  }

  return (
    <React.Fragment>
      {(addProductAlert.display || editProductAlert.display) && (
        <div>
          <Snackbar
            open={addProductAlert.display || editProductAlert.display}
            autoHideDuration={2000}
            message={addProductAlert.message + editProductAlert.display}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {addProductAlert.message !== null
              ? <Alert severity={addProductAlert.severity} sx={{ width: '100%' }}>
                {addProductAlert.message}
              </Alert>
              : <Alert severity={editProductAlert.severity} sx={{ width: '100%' }}>
                {editProductAlert.message}
              </Alert>
            }
          </Snackbar>{' '}
          <br />
        </div>
      )}
      <AppLayout componentTitle='House Details' breadcrumb='Dashboard'>
        <br />
        <AddProduct
          isExpanded={isAddProductExpanded}
          setIsExpanded={setIsAddProductExpanded}
          onInputHandleChange={onInputHandleChange}
          formData={formValues}
          addProduct={addProduct}
          editProduct={editProduct}
          editFormRowData={editFormRowData}
          isEditProduct={isEditProduct}
          addProductLoader={addProductLoader}
          editProductLoader={editProductLoader}
        />
        <ViewProduct
          productList={productList || []}
          handleProductEdit={handleProductEdit}
        />
      </AppLayout>

    </React.Fragment>
  )
}

export default Product
