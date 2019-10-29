import React from 'react';
import './LogoHeader.css'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';

const LogoHeader = () => {

    return (
        <div>
         <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: "1", float: "left", textAlign: "left" }}  >
              Weekly Task Management
              </Typography>
             
              <Button variant="contained" color="secondary" style={{textDecoration:'none'}}  >
              <Link to='/' className={classes.divTag}>
                  Log Out
                  </Link>
              </Button>
          </Toolbar>
        </AppBar>
        {/* <div className='header-class'>
            <div><img className="left-img" src="foot.png" alt='Logo of GWL' /></div>
            <div><Link to='/'><button type='button' className='button'>Log Out</button></Link></div>

        </div> */}
        </div>)
}
export default LogoHeader;