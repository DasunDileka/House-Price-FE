import React, { useEffect, useState } from 'react'
import { AddBrands, AppLayout, ViewBrands } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { validateFormData } from '../../utilities/helpers'
import { AlertDto, BrandEditDto, BrandInfoDto, BrandInitialStateDto, BrandListDto, BrandUpdateStateDto } from '../../utilities/models'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { Snackbar } from '@mui/material'
import { brandActions } from '../../redux/actions'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Brands = () => {
  const INITIAL_STATE: BrandInitialStateDto = {
    name: { 
      value: '', 
      isRequired: true, 
      error: null, disable: 
      false, 
      validator: 'text' 
    },
    description: { 
      value: '', 
      isRequired: true, 
      error: null, 
      disable: false, 
      validator: 'text' 
    }
  }

  const INITIAL_ROW_EDIT_STATE: BrandUpdateStateDto = {
    id: { 
      value: -1, 
      isRequired: true, 
      error: null,
      disable: false, 
      validator: 'number' 
    },
    name: { 
      value: '', 
      isRequired: true, 
      error: null, 
      disable: false, 
      validator: 'text' 
    },
    description: { 
      value: '', 
      isRequired: true, 
      error: null, 
      disable: false, 
      validator: 'text' 
    }
  }

  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [editFormRowData, setEditFormRowData] = useState(INITIAL_ROW_EDIT_STATE)
  const [isAddBrandExpanded, setIsAddBrandExpanded] = useState(false)
  const [isEditBrand, setIsEditBrand] = useState(false)
  const [loaderStatus, setLoaderStatus] = useState(false)

  const brandList: BrandListDto[] = useSelector((state: any) => state.brand.brandList.data)
  const brandListLoader: boolean = useSelector((state: any) => state.brand.brandList.isLoading)
  const addBrandAlert: AlertDto = useSelector((state: any) => state.alert.addBrandAlert)
  const editBrandAlert: AlertDto = useSelector((state: any) => state.alert.editBrandAlert)
  const addBrandLoader: boolean = useSelector((state: any) => state.brand.addBrand.isLoading)
  const editBrandLoader: boolean = useSelector((state: any) => state.brand.editBrand.isLoading)

  useEffect(() => {
    getBrandList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLoaderStatus(brandListLoader)
  }, [brandListLoader])

  useEffect(() => {
    if (addBrandAlert.severity === 'success' || editBrandAlert.severity === 'success') {
      setFormValues(INITIAL_STATE)
      setEditFormRowData(INITIAL_ROW_EDIT_STATE)
      setIsAddBrandExpanded(false)
      getBrandList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addBrandAlert, editBrandAlert])

  const getBrandList = () => {
    dispatch(brandActions.getBrandList())
  }

  const handleExpanded = () => {
    setIsAddBrandExpanded(true)
  }

  const handleBrandEdit = (brand: BrandListDto) => {
    setIsAddBrandExpanded(true)
    setIsEditBrand(true)
    setEditFormRowData({
      ...editFormRowData,
      id: {
        ...editFormRowData.id,
        value: brand.id
      },
      name: {
        ...editFormRowData.name,
        value: brand.name
      },
      description: {
        ...editFormRowData.description,
        value: brand.description
      }
    })
  }

  const addBrand = async () => {
    const [validateData, isValid] = await validateFormData(formValues)
    setFormValues(validateData)
    if (isValid) {
      const payload: BrandInfoDto = {
        name: formValues.name.value,
        description: formValues.description.value,
      }
      dispatch(brandActions.addBrand(payload))
    }
  }

  const editBrand = async () => {
    const [validateData, isValid] = await validateFormData(editFormRowData)
    setEditFormRowData(validateData)
    if (isValid) {
      const payload: BrandEditDto = {
        id: editFormRowData.id.value,
        name: editFormRowData.name.value,
        description: editFormRowData.description.value
      }
      dispatch(brandActions.editBrand(payload))
    }
  }

  const onInputHandleChange = (property: string, value: string) => {
    if (isEditBrand) {
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
      {(addBrandAlert.display || editBrandAlert.display) && (
        <div>
          <Snackbar
            open={addBrandAlert.display || editBrandAlert.display}
            autoHideDuration={2000}
            message={addBrandAlert.message + editBrandAlert.display}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {addBrandAlert.message !== null
              ? <Alert severity={addBrandAlert.severity} sx={{ width: '100%' }}>
                {addBrandAlert.message}
              </Alert>
              : <Alert severity={editBrandAlert.severity} sx={{ width: '100%' }}>
                {editBrandAlert.message}
              </Alert>
            }
          </Snackbar>{' '}
          <br />
        </div>
      )}
      <AppLayout componentTitle='Brand Management' breadcrumb='Dashboard'>
        <br />
        <AddBrands
          addBrand={addBrand}
          editBrand={editBrand}
          editFormRowData={editFormRowData}
          isEditBrand={isEditBrand}
          editBrandLoader={editBrandLoader}
          addBrandLoader={addBrandLoader}
          isExpanded={isAddBrandExpanded}
          setIsExpanded={setIsAddBrandExpanded}
          onInputHandleChange={onInputHandleChange}
          handleExpanded={handleExpanded}
          formData={formValues}
        />
        <ViewBrands
          brandList={brandList || []}
          loader={loaderStatus}
          handleBrandEdit={handleBrandEdit}
        />
      </AppLayout>
    </React.Fragment>
  )
}

export default Brands
