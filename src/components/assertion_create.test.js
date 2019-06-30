import React from 'react';
import ReactDOM from 'react-dom';
import AssertionCreate from './assertion_create';
import { BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <AssertionCreate />
    </Router>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
