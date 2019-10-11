import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingScreen from './individualComponents/LandingScreen';
import LoginScreen from './individualComponents/LoginScreen/LoginScreen.js'
import UserHome from './individualComponents/UserHome/UserHome'
import AdminLandingPage from './individualComponents/AdminLandingPage/AdminLandingPage.js'
import * as Highcharts from "highcharts";

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
    taskObj: {
      tid: 1,
      userid: 1,
      monthName: 'February',
      weekName: 'Week 1',
      taskName: 'Task Name 1',
      taskPoint: 2,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },

    taskTransaction: [{
      tid: 1,
      userid: 1,
      monthName: 'September',
      weekName: 'Week 2',
      taskName: 'Task Name 1',
      taskPoint: 2,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 2,
      userid: 1,
      monthName: 'September',
      weekName: 'Week 1',
      taskName: 'Task Name 1',
      taskPoint: 4,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 2,
      userid: 1,
      monthName: 'September',
      weekName: 'Week 1',
      taskName: 'Task Name 2',
      taskPoint: 4,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 1,
      userid: 2,
      monthName: 'September',
      weekName: 'Week 1',
      taskName: 'Task Name 1',
      taskPoint: 8,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 1,
      userid: 4,
      monthName: 'September',
      weekName: 'Week 1',
      taskName: 'Task Name 1',
      taskPoint: 8,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 1,
      userid: 4,
      monthName: 'September',
      weekName: 'Week 2',
      taskName: 'Task Name 1',
      taskPoint: 8,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 1,
      userid: 4,
      monthName: 'September',
      weekName: 'Week 2',
      taskName: 'Task Name 1',
      taskPoint: 4,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    },
    {
      tid: 1,
      userid: 1,
      monthName: 'February',
      weekName: 'Week 1',
      taskName: 'Task Name 1',
      taskPoint: 2,
      taskStatus: false,
      taskActive: true,
      taskColor: 'red'
    }
    ],
    barChart: {
      chart: {
        type: "column"
      },
      title: {
        text: "Week Task Performance"
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Points"
        }
      },
      series: [
        {
          name: "Task Performance",
          data: []
        }
      ]
    }
  }
  initialCalc = () => {
    let { months, dummyMonthValue, dummyWeekValue,weeks } = this.state
    let currentMonth = new Date().toString().substr(4, 3)
    let currentWeek = Math.ceil((new Date().getDate()) / 7)
    months.forEach(el => {
      if (currentMonth === el.substr(0, 3))
        dummyMonthValue = el
    })
    dummyWeekValue = 'Week ' + currentWeek
    weeks[0] = dummyWeekValue

    this.setState({
      dummyMonthValue,
      dummyWeekValue,
      weeks
    })
  }
  componentDidMount() {
    this.initialCalc()
    try {
      this.handleChartLogic()
      
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate() {
    try {
      this.handleChartLogic()
    } catch (error) {
      console.log(error)
    }
  }
  handleChartLogic = () => {
    const { barChart } = this.state;
    Highcharts.chart("container", barChart);
  }

  handleData = (dwv) => {
    let {
      barChart,
      dummyWeekValue,
      taskTransaction,
      dummyMonthValue,
      user
    } = this.state;

    dummyWeekValue = dwv
    let { series } = barChart;
    series[0].data = []

    user.forEach((userElement) => {
      if (userElement.type === 'user') {
        let pt = 0;
        let temp = [];


        taskTransaction.forEach((element, index) => {
          if ((dummyMonthValue === element.monthName) && (dummyWeekValue === element.weekName) && element.taskStatus && element.taskActive) {
            if (userElement.id === element.userid) {
              pt += element.taskPoint;
            }
          }
        });
        temp = [userElement.name, pt];
        series[0].data.push(temp);
      }
    });

    barChart = {
      ...barChart,
      series
    };

    Highcharts.chart("container", barChart);

    this.setState({
      barChart,
      dummyWeekValue
    });
  };






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
    if (dummyMonthValue === "February") {
      weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    } else {
      weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
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
    try {
      this.handleData(dummyWeekValue)
    }
    catch (error) { }
  }

  handleChangeTask = (e, [mode] = "taskTransaction") => {

    this.setState({
      [mode]: {
        ...this.state,
        [mode]: e.target.value
      }
    });
  };


  handleChangeButton = () => {

    const { taskObj, taskTransaction } = this.state
    this.setState({
      ...this.state,
      taskTransaction: { ...taskTransaction, taskObj }
    });
  }

  deleteHandler = (tindex) => {
    const { taskTransaction } = this.state
    taskTransaction[tindex].taskActive = false

    this.setState({
      taskTransaction: [
        ...taskTransaction, taskTransaction
      ]
    })
  }

  userCheckboxHandler = (tindex) => {
    const { taskTransaction } = this.state
    taskTransaction[tindex].taskStatus = true
    taskTransaction[tindex].taskColor = 'green'

    this.setState({
      taskTransaction: [
        ...taskTransaction, taskTransaction
      ]
    })
  }
  render() {
    const { user, taskTransaction, months, weeks, dummyMonthValue, dummyWeekValue,
            dummyCredential = {}, taskObj = {} } = this.state;
    const { weekRestrictionHandler, handleChange, handleChangeButton, handleChangeTask,
            getWeek, deleteHandler, userCheckboxHandler } = this;

    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={LandingScreen} />
          <Route path='/user_login' component={(props) => <LoginScreen user={user} 
                  dummyCredential={dummyCredential} handleChange={handleChange} 
                  handleChangeButton={handleChangeButton}{...this.props} isAuthed={true} />} />
          <Route path='/admin_login' component={(props) => <LoginScreen user={user}
                  dummyCredential={dummyCredential} handleChange={handleChange} 
                  handleChangeButton={handleChangeButton}{...this.props} isAuthed={true} />} />
          <Route path='/userhome' component={(props) => <UserHome user={user} 
                  taskTransaction={taskTransaction} months={months} weeks={weeks} 
                  dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue}
                  weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} 
                  dummyCredential={dummyCredential} taskObj={taskObj} handleChangeTask={handleChangeTask}
                  handleChangeButton={handleChangeButton} deleteHandler={deleteHandler} 
                  userCheckboxHandler={userCheckboxHandler} {...this.props} isAuthed={true} />} />
          <Route path='/adminhome' component={(props) => <AdminLandingPage user={user} 
                  taskTransaction={taskTransaction} months={months} weeks={weeks}
                  dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue}
                  weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} 
                   {...this.props} isAuthed={true} />} />
        </Router>
      </div>
    );
  }
}
export default App;