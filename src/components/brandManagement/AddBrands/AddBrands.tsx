import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress, Divider, Grid, TextField } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BrandInitialStateDto, BrandUpdateStateDto } from '../../../utilities/models';

const AddBrands: React.FC<{
  isExpanded: boolean
  setIsExpanded(args: boolean): void
  onInputHandleChange(property: string, value: any): void;
  handleExpanded(): void
  formData: BrandInitialStateDto
  editFormRowData: BrandUpdateStateDto
  addBrandLoader: boolean
  editBrandLoader: boolean
  isEditBrand: boolean
  addBrand(): void
  editBrand(): void
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
        <h1>Add a Brand</h1>
      </AccordionSummary>
      <AccordionDetails >
        <Divider />
        <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
          <Grid item md={6}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Name"
              color='secondary'
              variant="outlined"
              value={!props.isEditBrand ? props.formData.name.value: props.editFormRowData.name.value}
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
          <Grid item md={6}>
            <TextField
              fullWidth
              size='small'
              id="outlined-basic"
              label="Description"
              color='secondary'
              variant="outlined" 
              value={!props.isEditBrand ? props.formData.description.value: props.editFormRowData.description.value}
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
          <Grid item md={6}>
            {props.isEditBrand ?
              <Button
                className={'primarybtnStyle'}
                variant='contained'
                size="small"
                onClick={props.editBrand}
                disabled={props.editBrandLoader}
              >
                {(props.editBrandLoader) && <CircularProgress color="primary" size={20} />}
                Edit Brand
              </Button>
              :
              <Button
                className={'primarybtnStyle'}
                variant='contained'
                size="small"
                onClick={props.addBrand}
                disabled={props.addBrandLoader}
              >
                {(props.addBrandLoader) && <CircularProgress color="primary" size={20} />}
                Add Brand
              </Button>
            }
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddBrands
