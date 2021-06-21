import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export default createMuiTheme({
  typography: {
    fontFamily: 'Gilroy, Roboto, Helvetica, Arial, sans-serif'
  },
  palette: {
    primary: {
      main: '#227B9A'
    },
    secondary: {
      main: '#50B2D4'
    },
    white: '#ffffff',
    grey: grey,
  }
})
