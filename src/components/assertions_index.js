import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import AssertionCard from './assertion_card'
import Grid from '@material-ui/core/Grid';

const api_server = process.env.REACT_APP_BACKEND_SERVER;

export default class AssertionsIndex extends React.Component {
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
      <Grid item xs={6} md={4} lg={3} xl={2} key={assertion.id}>
        <AssertionCard
          title={assertion.title}
          body={assertion.body}
          created_at={assertion.created_at}
          updated_at={assertion.updated_at}
          userName={assertion.user.name}
        />
      </Grid>
    ));
  }

  render(h) {
    return (
      <Grid container spacing={3}>
        {this.renderCard()}
      </Grid>
    );
  };
}
