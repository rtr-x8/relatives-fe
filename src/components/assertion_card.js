import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class AssertionsCard extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render(h) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {this.props.body}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
