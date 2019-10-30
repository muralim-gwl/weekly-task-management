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



                    <Card style={{ maxWidth: 500}}>
      <CardMedia
        style={{ height: 0,
            paddingTop: '56%'}}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLz4wJN7m50jHBuEDi5xXqmAhB2Jen7nDiUZj6ZjT7H1jclvd&s"
        title="Paella dish"
      />
     
     
    </Card>

                            
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
