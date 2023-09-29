import React, { useEffect, useState } from 'react'
import { AlertDto, BrandListDto, ProductEditDto, ProductInfoDto, ProductInitialStateDto, ProductUpdateStateDto, SignInUserDetailDto, categoryListDto, productListDto } from '../../utilities/models';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryActions, brandActions, productActions } from '../../redux/actions';
import { AppLayout } from '../../components';
import AddProduct from '../../components/productManagement/AddProduct/AddProduct';
import ViewProduct from '../../components/productManagement/ViewProduct/ViewProduct';
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { validateFormData } from '../../utilities/helpers';
import { Snackbar } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Products = () => {
  const INITIAL_STATE: ProductInitialStateDto = {
    name: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    price: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    quantity: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    description: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    categoryId: { value: {} as categoryListDto, isRequired: true, disable: false, error: null, validator: 'object' },
    brandId: { value: {} as BrandListDto, isRequired: true, disable: false, error: null, validator: 'object' }
  }
  const INITIAL_ROW_EDIT_STATE: ProductUpdateStateDto = {
    id: { value: -1, isRequired: true, disable: false, error: null, validator: 'number' },
    name: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    price: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    quantity: { value: null, isRequired: true, disable: false, error: null, validator: 'number' },
    description: { value: '', isRequired: true, disable: false, error: null, validator: 'text' },
    categoryId: { value: {} as categoryListDto, isRequired: true, disable: false, error: null, validator: 'object' },
    brandId: { value: {} as BrandListDto, isRequired: true, disable: false, error: null, validator: 'object' },
  }

  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [editFormRowData, setEditFormRowData] = useState(INITIAL_ROW_EDIT_STATE)
  const [isAddProductExpanded, setIsAddProductExpanded] = React.useState(false)
  const [isEditProduct, setIsEditProduct] = useState(false)

  const user: SignInUserDetailDto = useSelector((state: any) => state.login.signInUser.data)
  const productList: productListDto[] = useSelector((state: any) => state.products.productList.data)
  const categoryList: categoryListDto[] = useSelector((state: any) => state.category.categoryList.data)
  const brandList: BrandListDto[] = useSelector((state: any) => state.brand.brandList.data)
  const addProductAlert: AlertDto = useSelector((state: any) => state.alert.addProductAlert)
  const editProductAlert: AlertDto = useSelector((state: any) => state.alert.editProductAlert)
  const addProductLoader: boolean = useSelector((state: any) => state.products.addProduct.isLoading)
  const editProductLoader: boolean = useSelector((state: any) => state.products.editProduct.isLoading)


  useEffect(() => {
    getDropDownList()
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

  const getDropDownList = () => {
    dispatch(CategoryActions.getCategoryList())
    dispatch(brandActions.getBrandList())
  }
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
      name: {
        ...editFormRowData.name,
        value: p.name
      },
      description: {
        ...editFormRowData.description,
        value: p.description
      },
      quantity: {
        ...editFormRowData.quantity,
        value: p.quantity
      },
      price: {
        ...editFormRowData.price,
        value: p.price
      },
      brandId: {
        ...editFormRowData.brandId,
        disable: true,
        value: {
          ...editFormRowData.brandId.value,
          id: p.brandId,
          name: p.brand
        }
      },
      categoryId: {
        ...editFormRowData.categoryId,
        disable: true,
        value: {
          ...editFormRowData.categoryId.value,
          id: p.categoryId,
          name: p.category
        }
      }
    })
  }

  const editProduct = async () => {
    const [validateData, isValid] = await validateFormData(editFormRowData)
    setFormValues(validateData)
    if (isValid) {
      const payload: ProductEditDto = {
        id: editFormRowData.id.value,
        name: editFormRowData.name.value,
        price: editFormRowData.price.value,
        quantity: editFormRowData.quantity.value,
        description: editFormRowData.description.value,
        categoryId: editFormRowData.categoryId.value.id,
        brandId: editFormRowData.brandId.value.id,
        userId: 1
      }
      dispatch(productActions.editProduct(payload))
    }

   }

  const addProduct = async () => {
    const [validateData, isValid] = await validateFormData(formValues)
    setFormValues(validateData)
    if (isValid) {
      const payload: ProductInfoDto = {
        name: formValues.name.value,
        price: formValues.price.value,
        quantity: formValues.quantity.value,
        description: formValues.description.value,
        categoryId: formValues.categoryId.value.id,
        brandId: formValues.brandId.value.id,
        userId: 1
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
      <AppLayout componentTitle='Product Management' breadcrumb='Dashboard'>
        <br />
        <AddProduct
          categoryList={categoryList || []}
          brandList={brandList || []}
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

export default Products
