import {
  createTheme, styled, TableCell, tableCellClasses, TableRow
} from '@mui/material'

const primaryFontSize = 14
export const PrimaryTheme = createTheme({
  palette: {
    text: {
      disabled: '#6b6b6b'
    },
    primary: {
      main: '#dd2126'
    },
    secondary: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),

    fontSize: primaryFontSize,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    body1: {
      fontSize: primaryFontSize
    }
  },
})

export const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: '4px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '4px'
  }
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

