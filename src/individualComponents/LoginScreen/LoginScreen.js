import React from 'react'
import { withRouter } from 'react-router-dom'; 
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Hidden, AppBar, Toolbar, Card, CardContent } from '@material-ui/core';
import axios from 'axios';
import './LoginScreen.css';
class Login extends React.Component {

  state = {
   
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
  setHandler = (details, auth) => {
    sessionStorage.setItem('serverUUID', details.uuid);
    sessionStorage.setItem('serverUSERNAME', details.user_name);
    sessionStorage.setItem('serverAUTHTOKEN', auth);
  }

postLogin = () =>{
  debugger;
  const { userCredential } = this.state;
  const {setHandler}=this;
  console.log("kjfdvjfjdnvjfjvknfdnvfndfj")
  axios.post("https://evening-dawn-93464.herokuapp.com/api/login", {
    "user_name" :userCredential.username,
    "password": userCredential.password
  })
  .then(response=> {
    setHandler(response.data.all[0],response.data.auth_token)
     if(this.props.location.pathname == "/admin_login" )
     {
      
      this.props.history.push('/adminhome')
     }else{
      this.props.history.push('/userhome')
     }
   
  })
  .catch(function (error) {
    console.log(error);
  });


}



  handleChangeButton = () => {
    const { userCredential } = this.state;
const{postLogin} = this;
    if(userCredential.username){
      if(userCredential.password){
          postLogin();
      }else{

      }
    }else{
      console.log(this.props.location.pathname,"tttthistory")
    }
   

  }

  render() {
    const { userCredential = {} } = this.state;
    const { username, password } = userCredential;


    console.log(userCredential);
    const { handleChange } = this;
    const { handleChangeButton } = this;
    return (



<React.Fragment>
        <Grid container>
          <AppBar position="static" style={{ background: "#90a4ae" }}>
            <Toolbar>
              <Grid item md={12}>
                <Typography
                  style={{ fontFamily: '"Apple Color Emoji"' }}
                  variant="h5"
                >
                  GoodWorks Weekly Management
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        ​
        <Grid container style={{ marginTop:0 }}>
        <Hidden smDown xsDown>
          <Grid
            item
            md={7}
            style={{ background: "#90a4ae", height: "680px", width: "50000px" }}
          ></Grid>
          </Hidden>
          <Grid item md={5} classes={{ root: "displaying" }}>
            <Card classes={{ root: "card" }}>
              <CardContent>
                <Typography>Login</Typography>
                <Typography color="textSecondary" gutterBottom>
                  <TextField
                    id="outlined-name"
                    label="Name"
                    margin="normal"
                    size="8"
                    variant="outlined"
                    value={username}
                    onChange={e => {
                      handleChange( e.target.value,"username");
                    }}
                  />
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    margin="normal"
                    size="8"
                    variant="outlined"
                    onChange={e => {
                      handleChange( e.target.value,"password");
                    }}
                    value={password}
                  />
                </Typography>
                <Typography>
                  {" "}
                  <Button
                    variant="contained"
                    style={{ background: "#009688", color: "white" }}
                    onClick={handleChangeButton}
                  >
                    LOGIN
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        
        </Grid>

</React.Fragment>











      // <div style={{ flexGrow: 1 }}>

      //   {/* <AppBar position="static">
      //     <Toolbar>
      //       <Typography variant="h6" color="inherit" style={{ flexGrow: "1", float: "left", textAlign: "left" }}  >
      //         Weekly Task Management
      //         </Typography>
      //     </Toolbar>
      //   </AppBar> */}

      //   <Grid container container justify="center" style={{ minHeight: '100vh' }}>

      //     <Grid item xs={false} sm={false} md={6} style={{ backgroundColor: "#64b5f6" }} >
      //       <Hidden smDown xsDown>
      //       <img src="gwlLogo.png" height="50%"  style={{alignItems:"center " , justify:"center"}}></img></Hidden>
      //     </Grid>
      //     <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
      //       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: "20px" }}>
             
      //         <Paper style={{justify:"center"}}>
      //         <Typography component="h1" variant="h5">
      //           Sign in
      //         </Typography>
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             id="email"
      //             label="Email Address"
      //             name="email"
      //             autoFocus
      //             onChange={e => {
      //               // console.log(e.target.value);
      //               handleChange(e.target.value, "username");
      //             }}
      //             value={username}
      //           />
      //           <TextField
      //             variant="outlined"
      //             margin="normal"
      //             required
      //             fullWidth
      //             name="password"
      //             label="Password"
      //             type="password"
      //             id="password"
      //             autoComplete="current-password"
      //             onChange={e => {
      //               // console.log(e.target.value);
      //               handleChange(e.target.value, "password");
      //             }}
      //           />
      //          <Button
      //             type="submit"
                  
      //             variant="contained"
      //             color="primary"
      //             onClick={handleChangeButton}>

      //             Sign In
      //           </Button> 

              
      //     </Paper>
      //       </div>
      //     </Grid>
      //   </Grid></div>











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