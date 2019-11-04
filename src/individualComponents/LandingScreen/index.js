import React from "react";
import Feature from "./Feature";
import Header from "./Header";
import Banner from "./Banner"
import Footer from "./Footer";
import "./index.css"
import { Grid, Card } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { color } from "highcharts";
import { red } from "@material-ui/core/colors";
import CardMedia from '@material-ui/core/CardMedia';

class LandingScreen extends React.Component {
    render() {
        const { history } = this.props;
        return (
                 
                <React.Fragment  >
                {/* <Grid container>*/}
                   
                    <Header history={history}/>    

                    <img src="landingscreen.jpg" height="80%" width ="100%"  style={{alignItems:"center " , justify:"center" ,opacity: 0.68}}></img>

{/* 
                    <Card >
                 <CardMedia
        style={{ height: 0,
            paddingTop: '56%'}}
        title="Paella dish"
      />
     
     
    </Card> */}

                            
{/*                    
                    <Feature />
                
                    <Banner/>
                    <Footer/> */}
                    
                {/* </Grid> */}
                </React.Fragment>
        )
    }
}

export default LandingScreen;
