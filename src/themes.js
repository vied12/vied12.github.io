import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const titleStyle = {
  fontFamily: 'Oswald,sans-serif,Arial',
  margin: '20px 0',
}
const theme = {
  layout: {
    maxWidth: 1000,
  },
  palette: {
    primary: {
      ...purple,
      [500]: '#9d7caa',
    },
  },
  typography: {
    fontFamily: 'Inconsolata,monospace,Arial',
    body1: {
      fontSize: 18,
      lineHeight: '26px',
    },
    h1: titleStyle,
    h2: titleStyle,
    h3: titleStyle,
    h4: titleStyle,
    title: titleStyle,
    headline: titleStyle,
  },
}
export const lightTheme = createMuiTheme(theme)
export const noTheme = createMuiTheme()

export const darkTheme = createMuiTheme({
  ...theme,
  palette: {
    ...theme.palette,
    type: 'dark',
  },
})

export const withDarkTheme = Component => props => (
  <MuiThemeProvider theme={darkTheme}>
    <Component {...props} />
  </MuiThemeProvider>
)

export const withLightTheme = Component => props => (
  <MuiThemeProvider theme={lightTheme}>
    <Component {...props} />
  </MuiThemeProvider>
)

export default lightTheme
