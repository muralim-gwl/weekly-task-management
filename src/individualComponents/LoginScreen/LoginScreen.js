import React from 'react'
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Hidden, AppBar, Toolbar, Card, CardContent, Snackbar } from '@material-ui/core';
import axios from 'axios';
import './LoginScreen.css';
import SnackbarMessage from '../../commonComponents/SnackbarMessage'


class Login extends React.Component {

  state = {
    flag: false,
    userCredential: {
      username: null,
      password: null,
    
    }
  };


  handleChange = (value, key) => {


    const { userCredential } = this.state;
    this.setState({
      ...this.state,
      userCredential: { ...userCredential, [key]: value }
    });
  };
  setHandler = (details, auth) => {
    sessionStorage.setItem('serverUUID', details.uuid);
    sessionStorage.setItem('serverUSERNAME', details.user_name);
    sessionStorage.setItem('serverAUTHTOKEN', auth);
  }

  postLogin = () => {
    debugger;
    const { userCredential } = this.state;
    const { setHandler } = this;
    // console.log("kjfdvjfjdnvjfjvknfdnvfndfj")
    axios.post("https://evening-dawn-93464.herokuapp.com/api/login", {
      "user_name": userCredential.username,
      "password": userCredential.password
    })
      .then(response => {
        console.log("response", response.data.login_message)
        if (response.data.login_message) {
          alert("Invalid username//password")
        }
        else {
          setHandler(response.data.all[0], response.data.auth_token)
          if (this.props.location.pathname == "/admin_login") {

            this.props.history.push('/adminhome')
          } else {
            this.props.history.push('/userhome')
          }
        }

      })
      .catch(function (error) {
        console.log(error);
      });


  }



  handleChangeButton = () => {
    const { userCredential,flag } = this.state;
    const { postLogin } = this;

  
    if (userCredential.username) {
      if (userCredential.password) {
        postLogin();
      } else {
        alert ("Enter Password")
      }
    } else {
      
    alert("Enter UserName")
    }
    

  }

  render() {
    const { userCredential = {},flag } = this.state;
    const { username, password } = userCredential;


    console.log(userCredential);
    const { handleChange } = this;
    const { handleChangeButton } = this;
    return (
      <div style={{ flexGrow: 1 }}>
       
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: "1", float: "left", textAlign: "left" }}  >
              Weekly Task Management
              </Typography>
          </Toolbar>
        </AppBar>

        <Grid container container justify="center" style={{ minHeight: '100vh' }}>

          <Grid item xs={false} sm={false} md={6} style={{ backgroundColor: "#3f51b5" }} >

          </Grid>
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square classes={{ root: "displaying" }}>


            <Card classes={{ root: "card" }}>
              <CardContent>
                <Typography component="h1" variant="h5">
                  Sign in
              </Typography >
                <Typography gutterBottom>
                  <TextField

                    variant="outlined"
                    margin="normal"
                    required
                    size="16"
                    id="username"
                    label="UserName"
                    name="username"
                    value={username}
                    autoFocus
                    onChange={e => {
                      // console.log(e.target.value);
                      handleChange(e.target.value, "username");
                    }}
                    value={username}
                  />
                </Typography><br></br>
                <Typography gutterBottom>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    size="8"
                    value={password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => {
                      // console.log(e.target.value);
                      handleChange(e.target.value, "password");
                    }}
                  />
                </Typography>
                <br></br>
                <Typography>
                  <Button
                    type="submit"

                    variant="contained"
                    color="primary"
                    onClick={handleChangeButton}>

                    Sign In
                </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* {flag ?
         ( <SnackbarMessage  />):null
          } */}
        </Grid></div>


    );
  }


}

export default withRouter(Login);



    












