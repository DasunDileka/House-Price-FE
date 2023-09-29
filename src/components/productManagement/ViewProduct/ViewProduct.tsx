import { Box, Grid, IconButton, Table, TableBody, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import { StyledTableCell } from '../../../assets/theme/theme'
import { EditOutlined } from '@mui/icons-material'
import { productListDto } from '../../../utilities/models'

const ViewProduct: React.FC<{
  productList: Array<productListDto>
  // loader: boolean
  handleProductEdit(brand: productListDto): void
}> = (props) => {
  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
        <Grid item md={6}>
          <h2>Product Details</h2>
        </Grid>
      </Grid>
      <Table sx={{ marginTop: '20px' }}>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.productList.map((item: productListDto) => (
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell>{item.description}</StyledTableCell>
              <StyledTableCell>{item.price}</StyledTableCell>
              <StyledTableCell>{item.quantity}</StyledTableCell>
              <StyledTableCell>{item.category}</StyledTableCell>
              <StyledTableCell>{item.brand}</StyledTableCell>
              <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>
                <Box>
                  <IconButton size='small'
                  onClick={() => props.handleProductEdit(item)}
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
    </>
  )
}

export default ViewProduct
