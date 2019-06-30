import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import AssertionsIndex from './components/assertions_index';
import AssertionCreate from './components/assertion_create'

const theme = createMuiTheme({
  //
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/" exact component={AssertionsIndex} />
      <Route path="/create/" exact component={AssertionCreate} />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
