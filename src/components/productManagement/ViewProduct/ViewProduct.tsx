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
          <h2>House Details</h2>
        </Grid>
      </Grid>
      { <Table sx={{ marginTop: '20px' }}>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>No Of BedRooms</StyledTableCell>
            <StyledTableCell>No Of BathRooms</StyledTableCell>
            <StyledTableCell>LivingArea</StyledTableCell>
            <StyledTableCell>LandArea</StyledTableCell>
            <StyledTableCell>floors</StyledTableCell>
            <StyledTableCell>School</StyledTableCell>
            <StyledTableCell>ShappingMall</StyledTableCell>
            <StyledTableCell>Transport</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>CurrencyRate</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Link</StyledTableCell>
            <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, padding: 0, position: 'sticky', right: 0 }}>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.productList.map((item: productListDto) => (
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>{item.location}</StyledTableCell>
              <StyledTableCell>{item.noOfBedRooms}</StyledTableCell>
              <StyledTableCell>{item.noOfBathRooms}</StyledTableCell>
              <StyledTableCell>{item.livingArea}</StyledTableCell>
              <StyledTableCell>{item.landArea}</StyledTableCell>
              <StyledTableCell>{item.floors}</StyledTableCell>
              <StyledTableCell>{item.school}</StyledTableCell>
              <StyledTableCell>{item.shappingMall}</StyledTableCell>
              <StyledTableCell>{item.transport}</StyledTableCell>
              <StyledTableCell>{item.date}</StyledTableCell>
              <StyledTableCell>{item.currencyRate}</StyledTableCell>
              <StyledTableCell>{item.price}</StyledTableCell>
              <StyledTableCell>{item.link}</StyledTableCell>
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
      </Table> }
    </>
  )
}

export default ViewProduct
