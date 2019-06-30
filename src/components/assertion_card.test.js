import React from 'react';
import ReactDOM from 'react-dom';
import AssertionCard from './assertion_card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AssertionCard
      title={"lorem"}
      body={"lorem"}
      userName={"lorem"}
    />
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
