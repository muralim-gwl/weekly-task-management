import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
class LandingScreen extends React.Component {
    render() {
        return (
            <div>
              <div> <Header/></div>
               <div><Banner/> </div>
            </div>
        );
    }
}
export default LandingScreen;