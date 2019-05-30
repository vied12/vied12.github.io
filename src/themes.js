import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const titleStyle = {
  fontFamily: 'Oswald,sans-serif,Arial',
  margin: '20px 0',
}
const theme = {
  layout: {
    maxWidth: 1000,
  },
  typography: {
    fontFamily: 'Inconsolata,monospace,Arial',
    body1: {
      fontSize: 18,
      lineHeight: '26px',
    },
    display1: titleStyle,
    display2: titleStyle,
    display3: titleStyle,
    display4: titleStyle,
    title: titleStyle,
    headline: titleStyle,
  },
}
export const lightTheme = createMuiTheme(theme)

export const darkTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
    type: 'dark',
  }
})

export const withDarkTheme = (Component) => (
  (props) => (
    <MuiThemeProvider theme={darkTheme}>
      <Component {...props} />
    </MuiThemeProvider>
  )
)

export const withLightTheme = (Component) => (
  (props) => (
    <MuiThemeProvider theme={lightTheme}>
      <Component {...props} />
    </MuiThemeProvider>
  )
)
