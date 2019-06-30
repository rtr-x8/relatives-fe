import React from 'react'
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

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

  async back() {
    console.log("test")
  }

  render(h) {
    return (
      <React.Fragment>
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
        <AppBar style={{bottom: 0, top: "auto"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back and save" onClick={this.back}>
              <KeyboardBackspace />
            </IconButton>
            <div style={{
              flexGrow: 1,
            }} />
            <IconButton edge="end" color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}
