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
              value={!props.isEditProduct ? props.formData.Location.value : props.editFormRowData.Location.value}
              error={!!props.formData.Location.error}
              helperText={
                props.formData.Location.error
                  ? props.formData.Location.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('Location', e.target.value)
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
              value={!props.isEditProduct ? props.formData.NoOfBathRooms.value : props.editFormRowData.NoOfBathRooms.value}
              error={!!props.formData.NoOfBathRooms.error}
              helperText={
                props.formData.NoOfBathRooms.error
                  ? props.formData.NoOfBathRooms.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('NoOfBedRooms', e.target.value)
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
              value={!props.isEditProduct ? props.formData.NoOfBedRooms.value : props.editFormRowData.NoOfBedRooms.value}
              error={!!props.formData.NoOfBedRooms.error}
              helperText={
                props.formData.NoOfBedRooms.error
                  ? props.formData.NoOfBedRooms.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('NoOfBathRooms', e.target.value)
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
              value={!props.isEditProduct ? props.formData.LivingArea.value : props.editFormRowData.NoOfBedRooms.value}
              error={!!props.formData.LivingArea.error}
              helperText={
                props.formData.LivingArea.error
                  ? props.formData.LivingArea.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('LivingArea', e.target.value)
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
              value={!props.isEditProduct ? props.formData.LandArea.value : props.editFormRowData.LandArea.value}
              error={!!props.formData.LandArea.error}
              helperText={
                props.formData.LandArea.error
                  ? props.formData.LandArea.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('LandArea', e.target.value)
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
              value={!props.isEditProduct ? props.formData.School.value : props.editFormRowData.School.value}
              error={!!props.formData.School.error}
              helperText={
                props.formData.School.error
                  ? props.formData.School.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('School', e.target.value)
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
              value={!props.isEditProduct ? props.formData.ShappingMall.value : props.editFormRowData.ShappingMall.value}
              error={!!props.formData.ShappingMall.error}
              helperText={
                props.formData.ShappingMall.error
                  ? props.formData.ShappingMall.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('ShappingMall', e.target.value)
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
              value={!props.isEditProduct ? props.formData.Transport.value : props.editFormRowData.Transport.value}
              error={!!props.formData.Transport.error}
              helperText={
                props.formData.Transport.error
                  ? props.formData.Transport.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('Transport', e.target.value)
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
              value={!props.isEditProduct ? props.formData.Date.value : props.editFormRowData.Date.value}
              error={!!props.formData.Date.error}
              helperText={
                props.formData.Date.error
                  ? props.formData.Date.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('Date', e.target.value)
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
              value={!props.isEditProduct ? props.formData.CurrencyRate.value : props.editFormRowData.CurrencyRate.value}
              error={!!props.formData.CurrencyRate.error}
              helperText={
                props.formData.CurrencyRate.error
                  ? props.formData.CurrencyRate.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('CurrencyRate', e.target.value)
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
              value={!props.isEditProduct ? props.formData.Price.value : props.editFormRowData.Price.value}
              error={!!props.formData.Price.error}
              helperText={
                props.formData.Price.error
                  ? props.formData.Price.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('Price', e.target.value)
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
              value={!props.isEditProduct ? props.formData.Link.value : props.editFormRowData.Link.value}
              error={!!props.formData.Link.error}
              helperText={
                props.formData.Link.error
                  ? props.formData.Link.error
                  : null
              }
              style={{ width: '100%' }}
              inputProps={{ style: { fontSize: 13 } }}
              InputLabelProps={{ style: { fontSize: 13 } }}
              onChange={(e) =>
                props.onInputHandleChange('Link', e.target.value)
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
