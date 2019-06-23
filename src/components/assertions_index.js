import React from 'react'
import axios from 'axios'
import _ from 'lodash'

const api_server = process.env.REACT_APP_BACKEND_SERVER;

export default class AssertionsIndex extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      assertions: [],
    };
  }

  componentDidMount() {
    const _this = this;
    axios
      .get(api_server + "/v1/assertions")
      .then(res => {
        _this.setState({
          assertions: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderCard() {
    return _.map(this.state.assertions, assertion => (
      <p key={assertion.id}>
        <b>{assertion.id}</b>
        <span> | </span>
        <span>{assertion.body}</span>
        <span> | </span>
        <span>{assertion.created_at}</span>
      </p>
    ));
  }

  render(h) {
    return (
      <div>
          {this.renderCard()}
      </div>
    );
  };
}
