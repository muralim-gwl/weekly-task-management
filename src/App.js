import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingScreen from './individualComponents/LandingScreen';
import LoginScreen from './individualComponents/LoginScreen/LoginScreen';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={LandingScreen} />
          <Route path='/user_login' component={LoginScreen} />
           <Route path='/admin_login' component={LoginScreen} />
          <Route path='/userhome' component={UserHome} />
          <Route path='/adminhome' component={AdminHome} />
        </Router>
      </div>
    );
  }
}

export default App;
