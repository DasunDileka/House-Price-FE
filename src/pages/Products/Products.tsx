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
import { CleaningServices } from '@mui/icons-material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Product = () => {
  const INITIAL_STATE: ProductInitialStateDto = {
    location: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    noOfBedRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    noOfBathRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    livingArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    landArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    floors: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    school: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    shappingMall: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    transport: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    date: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    currencyRate: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    price: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    link: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
  }
  const INITIAL_ROW_EDIT_STATE: ProductUpdateStateDto = {
    id: { value: -1, isRequired: true, disable: false, error: null, validator: 'number' },
    location: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    noOfBedRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    noOfBathRooms: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    livingArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    landArea: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    floors: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    school: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    shappingMall: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    transport: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    date: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    currencyRate: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    price: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    link: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
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
      location: {
        ...editFormRowData.location,
        value: p.location
      },
      noOfBedRooms: {
        ...editFormRowData.noOfBedRooms,
        value: p.noOfBedRooms
      },
      noOfBathRooms: {
        ...editFormRowData.noOfBathRooms,
        value: p.noOfBathRooms
      },
      livingArea: {
        ...editFormRowData.livingArea,
        value: p.livingArea
      },
      landArea: {
        ...editFormRowData.landArea,
        value: p.landArea
      },
      floors: {
        ...editFormRowData.floors,
        value: p.floors
      },
      school: {
        ...editFormRowData.school,
        value: p.school
      },
      shappingMall: {
        ...editFormRowData.shappingMall,
        value: p.shappingMall
      },
      transport: {
        ...editFormRowData.transport,
        value: p.transport
      }, date: {
        ...editFormRowData.date,
        value: p.date
      },
      currencyRate: {
        ...editFormRowData.currencyRate,
        value: p.currencyRate
      },
      price: {
        ...editFormRowData.price,
        value: p.price
      },
      link: {
        ...editFormRowData.link,
        value: p.link
      }
    })
  }

  const editProduct = async () => {
    const [validateData, isValid] = await validateFormData(editFormRowData)
    setFormValues(validateData)
    if (isValid) {
      const payload: ProductEditDto = {
        id: editFormRowData.id.value,
        location: editFormRowData.location.value,
        noOfBedRooms: editFormRowData.noOfBedRooms.value,
        noOfBathRooms: editFormRowData.noOfBathRooms.value,
        livingArea: editFormRowData.livingArea.value,
        landArea: editFormRowData.landArea.value,
        floors: editFormRowData.floors.value,
        school: editFormRowData.school.value,
        shappingMall: editFormRowData.shappingMall.value,
        transport: editFormRowData.transport.value,
        date: editFormRowData.date.value,
        currencyRate: editFormRowData.currencyRate.value,
        price: editFormRowData.price.value,
        link: editFormRowData.link.value,
      }
      dispatch(productActions.editProduct(payload))
    }

   }

  const addProduct = async () => {
    const [validateData, isValid] = await validateFormData(formValues)
    setFormValues(validateData)
    if (isValid) {
      const payload: ProductInfoDto = {
        
        location: formValues.location.value,
        noOfBedRooms: formValues.noOfBedRooms.value,
        noOfBathRooms: formValues.noOfBathRooms.value,
        livingArea: formValues.livingArea.value,
        landArea: formValues.landArea.value,
        floors: formValues.floors.value,
        school: formValues.school.value,
        shappingMall: formValues.shappingMall.value,
        transport: formValues.transport.value,
        date: formValues.date.value,
        currencyRate: formValues.currencyRate.value,
        price: formValues.price.value,
        link: formValues.link.value,
  
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
