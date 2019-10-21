import React from "react";
import Feature from "./Feature";
import Header from "./Header";
import Banner from "./Banner"
import Footer from "./Footer";
import "./index.css"
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { color } from "highcharts";
import { red } from "@material-ui/core/colors";

class LandingScreen extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <React.Fragment >
                <Grid container direction="column" alignContent="stretch">
                    <Header history={history}/>
                </Grid>
                {/* <Grid container direction="column" justify="center" alignContent="stretch">
                    <Banner/>
                </Grid> */}
                <Grid container direction="column"  alignContent="stretch">
                    <Feature />
                </Grid>
                <Grid container direction="column" alignContent="stretch">
                    <Footer/>
                </Grid>
                </React.Fragment>
            // <div className="landing-screen">
            //     <div className="head-bann">
            //         <Header history={history} />
            //         <Banner />
            //     </div>
            //     <div className="feat-foot">
            //         <Feature />
            //         <Footer />
            //     </div>
            // </div>
        )
    }
}

export default LandingScreen;