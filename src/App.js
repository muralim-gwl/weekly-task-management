import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingScreen from './individualComponents/LandingScreen';
import LoginScreen from './individualComponents/LoginScreen/LoginScreen.js'
import UserHome from './individualComponents/UserHome/UserHome'
import AdminLandingPage from './individualComponents/AdminLandingPage/AdminLandingPage.js'

class App extends React.Component {
  state = {
    dummyCredential: {
      username: '',
      password: ''
    },
    user: [{
      id: 1,
      name: 'Shalu',
      username: 'shalu123',
      password: 'shalu123',
      type: 'user',
    },
    {
      id: 2,
      name: 'Ansh',
      username: 'ansh123',
      password: 'ansh123',
      type: 'user',
    },
    {
      id: 3,
      name: 'Bikki',
      username: 'bikki123',
      password: 'bikki123',
      type: 'user',
    },
    {
      id: 4,
      name: 'Neha',
      username: 'neha123',
      password: 'neha123',
      type: 'user',
    },
    {
      id: 5,
      name: 'Murali',
      username: 'murali123',
      password: 'murali123',
      type: 'admin',
    }
    ],
    weeks: [],
    dummyMonthValue: null,
    dummyWeekValue: null,

    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],


    taskTransaction: [{
      tid: 1,
      userid: 1,
      monthName: 'September',
      weekName: 'Week: 2',
      taskName: 'Always eating food',
      taskPoint: 2,
      taskStatus: 'Incomplete',
      taskActive: true
    },
    {
      tid: 2,
      userid: 1,
      monthName: 'September',
      weekName: 'Week: 1',
      taskName: 'Always disturbing',
      taskPoint: 4,
      taskStatus: 'Complete',
      taskActive: true
    },
    {
      tid: 2,
      userid: 1,
      monthName: 'September',
      weekName: 'Week: 1',
      taskName: 'Always complaining',
      taskPoint: 4,
      taskStatus: 'Complete',
      taskActive: true
    },
    {
      tid: 1,
      userid: 2,
      monthName: 'September',
      weekName: 'Week: 1',
      taskName: 'Always messing around',
      taskPoint: 8,
      taskStatus: 'Complete',
      taskActive: true
    },
    {
      tid: 1,
      userid: 4,
      monthName: 'September',
      weekName: 'Week: 1',
      taskName: 'Always ',
      taskPoint: 8,
      taskStatus: 'Complete',
      taskActive: true
    },
    {
      tid: 1,
      userid: 4,
      monthName: 'September',
      weekName: 'Week: 2',
      taskName: 'Bye',
      taskPoint: 4,
      taskStatus: 'Complete',
      taskActive: true
    },
    {
      tid: 1,
      userid: 1,
      monthName: 'February',
      weekName: 'Week: 1',
      taskName: 'Hello',
      taskPoint: 2,
      taskStatus: 'Complete',
      taskActive: true
    }
    ]
  }

  handleChange = (value, key) => {
    const { dummyCredential } = this.state;
    this.setState({
      ...this.state,
      dummyCredential: { ...dummyCredential, [key]: value }
    });
  };

  weekRestrictionHandler = (e) => {
    let { dummyMonthValue, weeks = [] } = this.state
    dummyMonthValue = e.target.value
    if (dummyMonthValue == "February") {
      weeks = ['Week: 1', 'Week: 2', 'Week: 3', 'Week: 4']
    } else {
      weeks = ['Week: 1', 'Week: 2', 'Week: 3', 'Week: 4', 'Week: 5']
    }
    this.setState({
      dummyMonthValue,
      weeks

    })
  }
  getWeek = (e) => {
    let { dummyWeekValue } = this.state
    dummyWeekValue = e.target.value;

    this.setState({
      dummyWeekValue
    })
  }
  render() {
    const { user, taskTransaction, months, weeks, dummyMonthValue, dummyWeekValue, dummyCredential = {} } = this.state;
    const { weekRestrictionHandler, handleChange, handleChangeButton, getWeek } = this;


    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={LandingScreen} />
          <Route path='/user_login' component={(props) => <LoginScreen user={user} dummyCredential={dummyCredential} handleChange={handleChange} handleChangeButton={handleChangeButton}{...this.props} isAuthed={true} />} />
          <Route path='/admin_login' component={(props) => <LoginScreen user={user} dummyCredential={dummyCredential} handleChange={handleChange} handleChangeButton={handleChangeButton}{...this.props} isAuthed={true} />} />
          <Route path='/userhome' component={(props) => <UserHome user={user} taskTransaction={taskTransaction} months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} dummyCredential={dummyCredential} {...this.props} isAuthed={true} />} />
          <Route path='/adminhome' component={(props) => <AdminLandingPage user={user} taskTransaction={taskTransaction} months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} {...this.props} isAuthed={true} />} />
        </Router>
      </div>
    );
  }
}

export default App;
