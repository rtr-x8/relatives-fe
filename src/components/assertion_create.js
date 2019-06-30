import React from 'react'
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import axios from 'axios'

const api_server = process.env.REACT_APP_BACKEND_SERVER;

export default class AssertionCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
      validMessages: {
        title: [],
        body: [],
      },
      valid: {
        title: false,
        body: false,
      }
    }
    this.back = this.back.bind(this);
  }

  back() {
    console.log(this.state.title)
    axios
    .post(api_server + "/v1/assertions", {
      title: this.state.title,
      body: this.state.body,
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error.response.status)
      console.log(error.response.data.errors)
      let errorsObj = error.response.data.errors;
      Object.keys(errorsObj).forEach(name => {
        this.setState({
          valid: {
            [name]: true,
          },
          validMessages: {
            [name]: errorsObj[name]
          }
        })
      });
    })
    .then(() => {
      console.log("test")
    })
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render(h) {
    return (
      <React.Fragment>
        <form noValidate autoComplete="off" onSubmit={() => this.onSubmit}>
          <TextField
            label="Title"
            name="title"
            margin="dense"
            error={this.state.valid.title}
            fullWidth={true}
            onChange={(event) => this.handleInput(event)}
          />
          <TextField
            label="Body"
            name="body"
            margin="dense"
            multiline
            error={this.state.valid.body}
            fullWidth={true}
            onChange={(event) => this.handleInput(event)}
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
