import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, CircularProgress, Divider, Grid, TextField } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {ProductUpdateStateDto } from '../../../utilities/models'

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
        <h1>Add a House</h1>
      </AccordionSummary>
      <AccordionDetails >
        <Divider />
        <Grid container spacing={2} sx={{ paddingTop: '20px' }}>

          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.location.value : props.editFormRowData.location.value}
              error={!!props.formData.location.error}
              helperText={
                props.formData.location.error
                  ? props.formData.location.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('location', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Bath Rooms"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.noOfBathRooms.value : props.editFormRowData.noOfBathRooms.value}
              error={!!props.formData.noOfBathRooms.error}
              helperText={
                props.formData.noOfBathRooms.error
                  ? props.formData.noOfBathRooms.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('noOfBathRooms', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Bed Rooms"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.noOfBedRooms.value : props.editFormRowData.noOfBedRooms.value}
              error={!!props.formData.noOfBedRooms.error}
              helperText={
                props.formData.noOfBedRooms.error
                  ? props.formData.noOfBedRooms.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('noOfBedRooms', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="LivingArea(sqft)"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.livingArea.value : props.editFormRowData.livingArea.value}
              error={!!props.formData.livingArea.error}
              helperText={
                props.formData.livingArea.error
                  ? props.formData.livingArea.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('livingArea', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="LandArea(perch)"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.landArea.value : props.editFormRowData.landArea.value}
              error={!!props.formData.landArea.error}
              helperText={
                props.formData.landArea.error
                  ? props.formData.landArea.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('landArea', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Floors"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.floors.value : props.editFormRowData.floors.value}
              error={!!props.formData.floors.error}
              helperText={
                props.formData.floors.error
                  ? props.formData.floors.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('floors', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="School"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.school.value : props.editFormRowData.school.value}
              error={!!props.formData.school.error}
              helperText={
                props.formData.school.error
                  ? props.formData.school.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('school', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Shopping-Mall"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.shappingMall.value : props.editFormRowData.shappingMall.value}
              error={!!props.formData.shappingMall.error}
              helperText={
                props.formData.shappingMall.error
                  ? props.formData.shappingMall.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('shappingMall', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Transport"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.transport.value : props.editFormRowData.transport.value}
              error={!!props.formData.transport.error}
              helperText={
                props.formData.transport.error
                  ? props.formData.transport.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('transport', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Date"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.date.value : props.editFormRowData.date.value}
              error={!!props.formData.date.error}
              helperText={
                props.formData.date.error
                  ? props.formData.date.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('date', e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="CurrencyRate"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.currencyRate.value : props.editFormRowData.currencyRate.value}
              error={!!props.formData.currencyRate.error}
              helperText={
                props.formData.currencyRate.error
                  ? props.formData.currencyRate.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('currencyRate', e.target.value)
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
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Reference"
              variant="outlined"
              value={!props.isEditProduct ? props.formData.link.value : props.editFormRowData.link.value}
              error={!!props.formData.link.error}
              helperText={
                props.formData.link.error
                  ? props.formData.link.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('link', e.target.value)
              }
            />
          </Grid>

          {/* <Grid item xs={6}>
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
          </Grid> */}
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
                Add Details
              </Button>
            }
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddProduct
