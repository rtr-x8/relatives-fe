import React from 'react'
import TextField from '@material-ui/core/TextField';

export default class AssertionCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
      error: false,
      validMessages: {},
    }
  }
  render(h) {
    return (
      <form noValidate autoComplete="off" onSubmit={() => this.onSubmit}>
        <TextField
          id="outlined-dense-multiline"
          label="Body"
          margin="dense"
          variant="outlined"
          multiline
          rowsMax="4"
          fullWidth={true}
        />
      </form>
    )
  }
}
