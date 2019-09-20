import React from "react";
import Feature from "./Feature";
import Header from "./Header";
import Banner from "./Banner"
import Footer from "./Footer";
import "./index.css"

class LandingScreen extends React.Component{
render(){
    return(
        <div className="landing-screen">
            <div className="head-bann">
             <Header />
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