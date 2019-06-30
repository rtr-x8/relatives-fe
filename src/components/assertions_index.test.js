import React from 'react';
import ReactDOM from 'react-dom';
import AssertionsIndex from './assertions_index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AssertionsIndex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
