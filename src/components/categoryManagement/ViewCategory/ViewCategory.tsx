import { Box, Grid, IconButton, Table, TableBody, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import { StyledTableCell } from '../../../assets/theme/theme'
import { EditOutlined } from '@mui/icons-material'
import { categoryListDto } from '../../../utilities/models'

const ViewCategory: React.FC<{
  categoryList: Array<categoryListDto>
  loader: boolean
  handleCategoryEdit(category: categoryListDto): void
}> = (props) => {
  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
        <Grid item md={6}>
          <h2>Category Details</h2>
        </Grid>
      </Grid>
      <div>
        <Table sx={{ marginTop: '20px' }}>
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Category Id</StyledTableCell>
              <StyledTableCell>Category Name</StyledTableCell>
              <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.categoryList.map((item: categoryListDto) => (
              <TableRow key={item.id}>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>
                  <Box>
                    <IconButton
                      size='small'
                      onClick={() => props.handleCategoryEdit(item)}
                    >
                      <Tooltip title="Edit">
                        <EditOutlined sx={{ fontSize: '20px', mr: '-1' }} />
                      </Tooltip>
                    </IconButton>
                  </Box>
                </StyledTableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default ViewCategory
