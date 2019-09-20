import React from "react";
import Feature from "./Feature";
import Header from "./Header";
import Banner from "./Banner"
import Footer from "./Footer";
import "./index.css"

class LandingScreen extends React.Component{
render(){
    const {history} = this.props;
    return(
        <div className="landing-screen">
            <div className="head-bann">
             <Header history={history}/>
             <Banner />
            </div>
            <div className="feat-foot">
            <Feature />
            <Footer />
            </div>
        </div>
    )
}
}

export default LandingScreen;