import { Box, Grid, IconButton, Table, TableBody, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import { StyledTableCell } from '../../../assets/theme/theme'
import { EditOutlined } from '@mui/icons-material'
import { BrandListDto } from '../../../utilities/models'

const ViewBrands: React.FC<{
  brandList: Array<BrandListDto>
  loader: boolean
  handleBrandEdit(brand: BrandListDto): void
}> = (props) => {
  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
        <Grid item md={6}>
          <h2>Brands Details</h2>
        </Grid>
      </Grid>
      <div>
        <Table sx={{ marginTop: '20px' }}>
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Brand Id</StyledTableCell>
              <StyledTableCell>Brand Name</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.brandList.map((item: BrandListDto) => (
              <TableRow key={item.id}>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell>{item.description}</StyledTableCell>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>
                  <Box>
                    <IconButton
                      size='small'
                      onClick={() => props.handleBrandEdit(item)}
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

export default ViewBrands
