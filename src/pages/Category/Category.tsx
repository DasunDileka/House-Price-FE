import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../components'
import AddCategory from '../../components/categoryManagement/AddCategory/AddCategory'
import ViewCategory from '../../components/categoryManagement/ViewCategory/ViewCategory'
import { CategoryInitialStateDto, CategoryUpdateStateDto, categoryEditDto, categoryInfoDto, categoryListDto } from '../../utilities/models/category.model'
import { useDispatch, useSelector } from 'react-redux'
import { validateFormData } from '../../utilities/helpers'
import { CategoryActions } from '../../redux/actions/category.action'
import { AlertDto } from '../../utilities/models'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { Snackbar } from '@mui/material'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Category = () => {
  const INITIAL_STATE: CategoryInitialStateDto = {
    name: {
      value: '',
      isRequired: true,
      error: null,
      disable: false,
      validator: 'text'
    }
  }

  const INITIAL_ROW_EDIT_STATE: CategoryUpdateStateDto = {
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
    }
  }

  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [editFormRowData, setEditFormRowData] = useState(INITIAL_ROW_EDIT_STATE)
  const [isAddCategoryExpanded, setIsAddCategoryExpanded] = useState(false)
  const [isEditCategory, setIsEditCategory] = useState(false)
  const [loaderStatus, setLoaderStatus] = useState(false)

  const categoryList: categoryListDto[] = useSelector((state: any) => state.category.categoryList.data)
  const categoryListLoader: boolean = useSelector((state: any) => state.category.categoryList.isLoading)
  const addCategoryAlert: AlertDto = useSelector((state: any) => state.alert.addCategoryAlert)
  const editCategoryAlert: AlertDto = useSelector((state: any) => state.alert.editCategoryAlert)
  const addCategoryLoader: boolean = useSelector((state: any) => state.category.addCategory.isLoading)
  const editCategoryLoader: boolean = useSelector((state: any) => state.category.editCategory.isLoading)

  useEffect(() => {
    getcategoryList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLoaderStatus(categoryListLoader)
  }, [categoryListLoader])

  useEffect(() => {
    if (addCategoryAlert.severity === 'success' || editCategoryAlert.severity === 'success') {
      setFormValues(INITIAL_STATE)
      setEditFormRowData(INITIAL_ROW_EDIT_STATE)
      setIsAddCategoryExpanded(false)
      getcategoryList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addCategoryAlert, editCategoryAlert])

  const getcategoryList = () => {
    dispatch(CategoryActions.getCategoryList())
  }

  const handleExpanded = () => {
    setIsAddCategoryExpanded(true)
  }

  const handleCategoryEdit = (category: categoryListDto) => {
    setIsAddCategoryExpanded(true)
    setIsEditCategory(true)
    setEditFormRowData({
      ...editFormRowData,
      id: {
        ...editFormRowData.id,
        value: category.id
      },
      name: {
        ...editFormRowData.name,
        value: category.name
      }
    })
  }

  const addCategory = async () => {
    const [validateData, isValid] = await validateFormData(formValues)
    setFormValues(validateData)
    if (isValid) {
      const payload: categoryInfoDto = {
        name: formValues.name.value
      }
      dispatch(CategoryActions.addCategory(payload))
    }
  }

  const editCategory = async () => {
    const [validateData, isValid] = await validateFormData(editFormRowData)
    setEditFormRowData(validateData)
    if (isValid) {
      const payload: categoryEditDto = {
        id: editFormRowData.id.value,
        name: editFormRowData.name.value
      }
      dispatch(CategoryActions.editCategory(payload))
    }
  }

  const onInputHandleChange = (property: string, value: string) => {
    if (isEditCategory) {
      switch (property) {
        case 'name':
          setEditFormRowData({
            ...editFormRowData,
            name: {
              ...editFormRowData.name,
              value: value,
              error: null
            }
          })
      }
    } else {
      switch (property) {
        case 'name':
          setFormValues({
            ...formValues,
            name: {
              ...formValues.name,
              value: value,
              error: null
            }
          })
      }
    }
  }

  return (
    <React.Fragment>
      {(addCategoryAlert.display || editCategoryAlert.display) && (
        <div>
          <Snackbar
            open={addCategoryAlert.display || editCategoryAlert.display}
            autoHideDuration={2000}
            message={addCategoryAlert.message + editCategoryAlert.display}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {addCategoryAlert.message !== null
              ? <Alert severity={addCategoryAlert.severity} sx={{ width: '100%' }}>
                {addCategoryAlert.message}
              </Alert>
              : <Alert severity={editCategoryAlert.severity} sx={{ width: '100%' }}>
                {editCategoryAlert.message}
              </Alert>
            }
          </Snackbar>{' '}
          <br />
        </div>
      )}
      <AppLayout componentTitle='Category Management' breadcrumb='Dashboard'>
        <br />
        <AddCategory
          addCategory={addCategory}
          editCategory={editCategory}
          editFormRowData={editFormRowData}
          isEditCategory={isEditCategory}
          editCategoryLoader={editCategoryLoader}
          addCategoryLoader={addCategoryLoader}
          isExpanded={isAddCategoryExpanded}
          setIsExpanded={setIsAddCategoryExpanded}
          onInputHandleChange={onInputHandleChange}
          handleExpanded={handleExpanded}
          formData={formValues}
        />
        <ViewCategory
          categoryList={categoryList || []}
          loader={loaderStatus}
          handleCategoryEdit={handleCategoryEdit}
        />
      </AppLayout>
    </React.Fragment>
  )
}

export default Category
