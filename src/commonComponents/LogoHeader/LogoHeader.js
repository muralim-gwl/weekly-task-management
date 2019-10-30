import React from 'react';
import './LogoHeader.css'
import { Redirect } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { extend } from 'highcharts';
import axios from 'axios'

class LogoHeader extends React.Component{
    state={
        redirect:false
    }
    logoutHandler = () => {
        axios.put("https://evening-dawn-93464.herokuapp.com/api/logout", {
          "auth_token": sessionStorage.getItem('serverAUTHTOKEN')
        })
          .then(response => {
            sessionStorage.clear()
            if (!response.data.isloggedIn) {
              this.setState({ redirect: true })
            }
          })
          .catch(error => console.log(error)
          )
      }
    render(){
        const {logoutHandler}=this;
    return (
       
        <div>
             {this.state.redirect ? <Redirect to="/" /> : null}
         <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: "1", float: "left", textAlign: "left" }}  >
              Weekly Task Management
              </Typography>
             
              <Button variant="contained" color="secondary" style={{textDecoration:'none'}} onClick={logoutHandler} >
                Logout </Button>
          </Toolbar>
        </AppBar>
        </div>
        );
    }
}
export default LogoHeader;