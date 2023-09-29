import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, CircularProgress, Divider, Grid, TextField } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BrandListDto, ProductUpdateStateDto, categoryListDto } from '../../../utilities/models'

const AddProduct: React.FC<{
  isExpanded: boolean
  isEditProduct: boolean
  addProductLoader: boolean
  editProductLoader: boolean
  setIsExpanded(args: boolean): void
  onInputHandleChange(property: string, value: any): void;
  addProduct(): void
  editProduct(): void
  formData: any
  editFormRowData: ProductUpdateStateDto
  categoryList: Array<categoryListDto>
  brandList: Array<BrandListDto>
}> = (props) => {

  return (
    <Accordion
      expanded={props.isExpanded}
      className={'accordionStyle'}
      TransitionProps={{ unmountOnExit: true }}
      onChange={(e, expanded) => {
        props.setIsExpanded(expanded)
      }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={'accordionSummaryStyle'}
      >
        <h1>Add a Product</h1>
      </AccordionSummary>
      <AccordionDetails >
        <Divider />
        <Grid container spacing={2} sx={{ paddingTop: '20px' }}>

          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.name.value : props.editFormRowData.name.value}
              error={!!props.formData.name.error}
              helperText={
                props.formData.name.error
                  ? props.formData.name.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('name', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.price.value : props.editFormRowData.price.value}
              error={!!props.formData.price.error}
              helperText={
                props.formData.price.error
                  ? props.formData.price.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('price', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.quantity.value : props.editFormRowData.quantity.value}
              error={!!props.formData.quantity.error}
              helperText={
                props.formData.quantity.error
                  ? props.formData.quantity.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('quantity', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.description.value : props.editFormRowData.description.value}
              error={!!props.formData.description.error}
              helperText={
                props.formData.description.error
                  ? props.formData.description.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('description', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              size="small"
              disabled={!!props.editFormRowData.categoryId.disable}
              value={!props.isEditProduct ? props.formData.categoryId.value : props.editFormRowData.categoryId.value}
              options={props.categoryList.map((c: categoryListDto) => {
                return { name: c.name, id: c.id }
              })}
              getOptionLabel={(option) => option.name || ''}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              onChange={(event: any, value: any) =>
                props.onInputHandleChange('categoryId', value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant="outlined"
                  label="Category"
                  placeholder="Select a Category"
                  margin="normal"
                  error={!!props.formData.categoryId.error}
                  helperText={
                    props.formData.categoryId.error
                      ? props.formData.categoryId.error
                      : null
                  }
                  size="small"
                  inputProps={{
                    ...params.inputProps,
                    style: { fontSize: '13px' }
                  }}
                  InputLabelProps={{
                    ...params.InputLabelProps,
                    style: { fontSize: '13px' }
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              size="small"
              disabled={!!props.editFormRowData.brandId.disable}
              value={!props.isEditProduct ? props.formData.brandId.value : props.editFormRowData.brandId.value}
              options={props.brandList.map((c: BrandListDto) => {
                return { name: c.name, id: c.id }
              })}
              getOptionLabel={(option) => option.name || ''}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              onChange={(event: any, value: any) =>
                props.onInputHandleChange('brandId', value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant="outlined"
                  label="Brand"
                  placeholder="Select a Brand"
                  margin="normal"
                  error={!!props.formData.brandId.error}
                  helperText={
                    props.formData.brandId.error
                      ? props.formData.brandId.error
                      : null
                  }
                  size="small"
                  inputProps={{
                    ...params.inputProps,
                    style: { fontSize: '13px' }
                  }}
                  InputLabelProps={{
                    ...params.InputLabelProps,
                    style: { fontSize: '13px' }
                  }}
                />
              )}
            />
          </Grid>
          <Grid item md={4}>
          {props.isEditProduct ?
              <Button
                className={'primarybtnStyle'}
                variant='contained'
                size="small"
                onClick={props.editProduct}
                disabled={props.editProductLoader}
              >
                {(props.editProductLoader) && <CircularProgress color="primary" size={20} />}
                Edit Product
              </Button>
              :
              <Button
                className={'primarybtnStyle'}
                variant='contained'
                size="small"
                onClick={props.addProduct}
                disabled={props.addProductLoader}
              >
                {(props.addProductLoader) && <CircularProgress color="primary" size={20} />}
                Add Product
              </Button>
            }
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddProduct
