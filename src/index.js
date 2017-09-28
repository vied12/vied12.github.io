import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Inconsolata,monospace,Arial',
    body1: {
      fontSize: 18,
      lineHeight: '26px',
    },
    display1: {
      fontFamily: 'Oswald,sans-serif,Arial',
    },
    display2: {
      fontFamily: 'Oswald,sans-serif,Arial',
    },
    display3: {
      fontFamily: 'Oswald,sans-serif,Arial',
    },
    display4: {
      fontFamily: 'Oswald,sans-serif,Arial',
    },
  },
})

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
