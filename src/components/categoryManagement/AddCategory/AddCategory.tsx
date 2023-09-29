import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress, Divider, Grid, TextField } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CategoryInitialStateDto, CategoryUpdateStateDto } from '../../../utilities/models'

const AddCategory: React.FC<{
  isExpanded: boolean
  setIsExpanded(args: boolean): void
  onInputHandleChange(property: string, value: any): void;
  handleExpanded(): void
  formData: CategoryInitialStateDto
  editFormRowData: CategoryUpdateStateDto
  addCategoryLoader: boolean
  editCategoryLoader: boolean
  isEditCategory: boolean
  addCategory(): void
  editCategory(): void
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
        <h1>Add a Category</h1>
      </AccordionSummary>
      <AccordionDetails >
        <Divider />
        <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
          <Grid item md={8}>
            <TextField
              fullWidth
              value={!props.isEditCategory ? props.formData.name.value: props.editFormRowData.name.value}
              size='small'
              id="outlined-basic"
              label="Name"
              color='secondary'
              variant="outlined"
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
          <Grid item md={4}>
            {props.isEditCategory ?
              <Button
                className={'primarybtnStyle'}
                variant='contained'
                size="small"
                onClick={props.editCategory}
                disabled={props.editCategoryLoader}
              >
                {(props.editCategoryLoader) && <CircularProgress color="primary" size={20} />}
                Edit category
              </Button>
              :
              <Button
                className={'primarybtnStyle'}
                variant='contained'
                size="small"
                onClick={props.addCategory}
                disabled={props.addCategoryLoader}
              >
                {(props.addCategoryLoader) && <CircularProgress color="primary" size={20} />}
                Add category
              </Button>
            }

          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddCategory
