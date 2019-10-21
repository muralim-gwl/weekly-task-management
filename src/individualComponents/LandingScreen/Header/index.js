import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
   render(){
       return(
    <div style={{flexGrow:1}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{flexGrow:"1",float:"left", textAlign:"left"}}  >
          Weekly Task Management
        </Typography>
        <Button color="inherit" onClick={e => { this.props.history.push("/user_login") }}>User</Button> &nbsp;
        <Button color="inherit"  onClick={e => { this.props.history.push("/admin_login") }}>Admin</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
   }
}

export default Header;
// render() {
//     const {classes}=this.props;
//     return (
//        <Grid container>
//            <Grid item xs={12}>
              
//                  <div className={classes.root}>
//                 <AppBar position="static">
//                 <Grid container xs={8}>
//                     <Toolbar>
//                         <Typography  variant="h6" color="inherit" className={classes.grow}>
//                             Weekly Task Management
//                         </Typography>
//                     </Toolbar>
//                     </Grid>
//                     <Grid item md={12}>
//                     <Grid item md md={11}></Grid>
//                     <Grid item md={1}>
//                     <Button color="inherit" onClick={e => { this.props.history.push("/user_login") }}>User</Button>
//                     <Button color="inherit" onClick={e => { this.props.history.push("/admin_login") }}>Admin</Button>
//                     </Grid>
//                     </Grid>
//                 </AppBar>
//             </div>
//             </Grid>
//             </Grid>
//         // <div className="Header">
//         //     <div className="Logo"  >
//         //         <img className="LogoImg" src="logo1.png" alt="logo" />
//         //     </div>
//         //     <div className="head">
//         //         <h>Weekly Task Management System </h>
//         //     </div>
//         //     <div className="Buttons" >
//         //         <button type="button" onClick={e => { this.props.history.push("/user_login") }}>
//         //             User
//         //             </button>
//         //         <button type="button" onClick={e => { this.props.history.push("/admin_login") }}>
//         //             Admin
//         //         </button>
//         //     </div>
//         // </div>

//     );
// }