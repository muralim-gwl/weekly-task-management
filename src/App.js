import React from 'react';
import './App.css';
import LandingScreen from './individualComponents/LandingScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './individualComponents/LoginScreen/LoginScreen'
import UserHome from './individualComponents/UserHome/UserHome'
import AdminLandingPage from './individualComponents/AdminLandingPage/AdminLandingPage'
class App extends React.Component {
  state ={
    months: ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December'],
    weeks: [],
    selectedMonth:null,
    selectedWeek: null

  }
  initialCalc = () => {
    let { months, selectedMonth, selectedWeek,weeks } = this.state

    let currentMonth = new Date().toString().substr(4, 3)
    let currentWeek = Math.ceil((new Date().getDate()) / 7)
    months.forEach(el => {
      if (currentMonth === el.substr(0, 3))
        selectedMonth = el
    })
    selectedWeek = 'Week ' + currentWeek
    // weeks[0] = selectedWeek
    if (selectedMonth === "February") {
      weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    } else {
      weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
    }

    this.setState({
      selectedMonth,
      selectedWeek,
      weeks
    })

    console.log(months, weeks, selectedMonth, selectedWeek,"112233333333")
  }
  weekRestrictionHandler = (e) => {
    let { selectedMonth, weeks = [] } = this.state
    selectedMonth = e.target.value
    if (selectedMonth === "February") {
      weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    } else {
      weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
    }
    this.setState({
      selectedMonth,
      weeks

    })
  }
  componentDidMount() {
    this.initialCalc();
  }
  getWeek = (e) => {
    let { selectedWeek } = this.state
    selectedWeek = e.target.value;


    this.setState({
      selectedWeek
    })
  }
  render(){
    const {months,weeks,selectedMonth,selectedWeek}=this.state;
    const {weekRestrictionHandler,initialCalc,getWeek}=this;
  return (
    <div className="App">
      <Router>
      <Route exact path = "/" component={LandingScreen} />
      <Route path= '/user_login' component = {LoginScreen}/>
      <Route path = '/admin_login' component ={LoginScreen}/>
      <Route path='/userhome'component={(props) => <UserHome  months={months} weeks={weeks}
       selectedMonth={selectedMonth} selectedWeek={selectedWeek} getWeek={getWeek}
       weekRestrictionHandler={weekRestrictionHandler} initialCalc ={initialCalc} {...this.props} />}/>
                  
                  
      <Route path='/adminhome' component={(props) => <AdminLandingPage  months={months} weeks={weeks}
       selectedMonth={selectedMonth} selectedWeek={selectedWeek} getWeek={getWeek}
       weekRestrictionHandler={weekRestrictionHandler} initialCalc ={initialCalc} {...this.props} />}/>

      
      </Router>
     
    </div>
  );
  }
}

export default App;
