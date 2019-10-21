import React from "react";
import "./index.css";
import { Paper, Grid, Typography } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

class Footer extends React.Component{

    render()
    {
        return (
            <Grid component="main"  container >
                <CssBaseline/>
                        <Grid item xs={false} sm={4} md={6}   style={{backgroundColor:"#64b5f6"}}>
                           
                            <img  src="foot.png"></img>
                           
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square   style={{backgroundColor:"#64b5f6"}} >
                            
                                ADDRESS: Plot No. 72 & 73,4th Floor, Akshay Tech Park,
                                 EPIP Zone, Whitefield, Bengaluru, Karnataka 560066
                                
                         
                        </Grid>
            </Grid>
        )
    }
}
export default Footer;









    //     return(
    //     <div className="footer">
    //          <div className="left-footer">
    //            <img  classNamw="left"src="foot.png"></img>
    //         </div>
    // <div className="right-footer">
    // ADDRESS: Plot No. 72 & 73,4th Floor, Akshay Tech Park, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066

    //     </div>
    //     </div>
    //     )
    // }

