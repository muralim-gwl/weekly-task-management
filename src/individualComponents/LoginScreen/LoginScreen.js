import React from 'react'
import { withRouter } from 'react-router-dom'; import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
class Login extends React.Component {

  state = {
    defaultCredential: {
      username: "gwl",
      password: "gwl@123"
    },
    userCredential: {
      username: null,
      password: null
    }
  };


  handleChange = (value, key) => {


    const { userCredential } = this.state;
    this.setState({
      ...this.state,
      userCredential: { ...userCredential, [key]: value }
    });
  };

  handleChangeButton = () => {
    const { userCredential } = this.state;
    const { defaultCredential } = this.state;

    if (defaultCredential.username == userCredential.username && defaultCredential.password == userCredential.password) {
      this.props.history.push('/userhome')

    } else {
      alert("Please enter valid credientials")

    }

  }

  render() {
    const { userCredential = {} } = this.state;
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

          <Grid item xs={false} sm={false} md={6} style={{ backgroundColor: "#64b5f6" }} >
            <Hidden smDown xsDown>
            <img src="gwlLogo.png" height="50%" alignItems="center " justify="center"></img></Hidden>
          </Grid>
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "20px" }}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Paper>
              <form style={{ width: '100%' }} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  onChange={e => {
                    // console.log(e.target.value);
                    handleChange(e.target.value, "username");
                  }}
                  value={username}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleChangeButton}>

                  Sign In
                </Button>
              </form></Paper>
            </div>
          </Grid>
        </Grid></div>











      // <div style={{backgroundColor:"red", height:"100vh"}} >


      //   <Grid >
      //    <Paper style={{backgroundColor:"green",marginLeft:"25%",marginTop:"10%", marginRight:"25%",marginBottom:"10%" }}>

      //       <Typography component ="h1" variant="h5">
      //         Login In
      //       </Typography>
      //       <form noValidate>
      //         <TextField
      //         variant="outlined"
      //         margin="normal"
      //         required
      //         fullWidth
      //         onChange={e => {
      //           // console.log(e.target.value);
      //           handleChange(e.target.value, "username");
      //         }}
      //         value={username}

      //         label="User Name"
      //         autoFocus/>
      //         <TextField
      //           variant="outlined"
      //           margin="normal"
      //           required
      //           fullWidth
      //           name="password"
      //           label="Password"
      //           type="password"
      // onChange={e => {
      //   // console.log(e.target.value);
      //   handleChange(e.target.value, "password");
      // }}
      //           value={password}
      //         />
      //       </form>
      //       <Button variant="contained" color="primary" onClick= {
      //     handleChangeButton}>
      //   Login
      //   </Button>
      //    </Paper>
      //    </Grid>

      // </div>





      // <div style={{justifyContent:'center', marginTop:'10%'}}>
      //   Login
      //   <br />
      //   <br />
      //   <input
      //     onChange={e => {
      //       // console.log(e.target.value);
      //       handleChange(e.target.value, "username");
      //     }}
      //     value={username}
      //     placeholder="User name"
      //   />
      //   <br />
      //   <br />
      //   <input
      //     onChange={e => {
      //       // console.log(e.target.value);
      //       handleChange(e.target.value, "password");
      //     }}
      //     value={password}
      //     type="password"
      //     placeholder="Password"
      //   />
      //   <br />
      //   <br />
      //   <Button variant="contained" color="primary" onClick= {
      //     handleChangeButton}>
      //   Login
      //   </Button>
      //   <br />
      //   <br />
      // </div>
    );
  }


}

export default withRouter(Login);