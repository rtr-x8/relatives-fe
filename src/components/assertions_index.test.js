import React from 'react';
import ReactDOM from 'react-dom';
import AssertionsIndex from './assertions_index';
import { BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <AssertionsIndex />
    </Router>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
