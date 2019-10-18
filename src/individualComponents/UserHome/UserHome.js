import React from 'react';
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import axios from 'axios'
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader'

class UserHome extends React.Component {
  state = {
    tasklist: [],
    addTask: {
      Topic: null,
      Points: null
    },

    data: {
      "uuid": "1",
      "month": null,
      "week": null
    },
  }

  
//checkBox + delete api calling
  DeleteTask = (taskId, index, type) => {
    const { tasklist = [],addTask } = this.state
    const {GetTasks}=this;
    console.log(index, "inputindex")
    let baseurl;
    if (type == "button") {
      baseurl = "http://localhost:8080/api/delete/";
    } else {
      baseurl = "http://localhost:8080/api/updatetaskstatus/";
    }
    baseurl = baseurl + taskId;
    console.log(index)
    // debugger;
    axios.put(baseurl)
      .then(function (response) {

        console.log(response.data.status, "ucvsdjcvdkjkjvv");
        if (response.data.status === "successfull") {
          tasklist[index].status = false;
          console.log(tasklist, "AfterUpdate")
          GetTasks();         
        }
        this.setState({
          ...tasklist,
          tasklist,
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }
//geting task for particular user 
 GetTasks = () => {
    const { setTasks } = this;
    axios.post("http://localhost:8080/api/user_task_list", this.state.data)
      .then(function (response) {
        setTasks(response.data.response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


//setting task in state
  setTasks = tasklist => {
    const {addTask}=this;
    this.setState({ tasklist });
  }

//addition of task for particular user api
  PostTask = () => {
    const { addTask, data } = this.state;
    const {GetTasks}=this;
    console.log(addTask, "jbecfhjs")
    axios.post("http://localhost:8080/api/addtask", {

      "uuid": "1",
      "task_name": addTask.Topic,
      "points": addTask.Points,
      "month": data.month,
      "week": data.week

    })
      .then(function (response) {
        console.log(response, "Added Task");
        GetTasks();

      })
      .catch(function (error) {
        console.log(error);
      });


  }

  // Add Task Methods

  handleChange = (value, key) => {

    const { addTask } = this.state;
    this.setState({
      ...this.state,
      addTask: { ...addTask, [key]: value }
    });
  };

  TaskhandleChangeButton = () => {
    const { addTask } = this.state;

    this.PostTask();
  }
  //setting current month and week for the current user 
  componentWillMount() {
    const { selectedMonth, selectedWeek } = this.props;
    const { data } = this.state;
    data.month = selectedMonth;
    data.week = selectedWeek;
  }
//calling getTask appi
  componentDidMount() {
    this.GetTasks()

  }
  //setting the response in state 
  setTasks = tasklist => {
    this.setState({ tasklist });
  }
  render() {

    const { months, weeks, selectedMonth, selectedWeek, weekRestrictionHandler, getWeek } = this.props;
    const { tasklist } = this.state;
    const { handleChange, TaskhandleChangeButton } = this;

    // console.log("props", this.props)
    console.log("state",this.state)
    // console.log("month", this.props.selectedMonth)
    return (
      <div className="user-home">
        <div >
          <div>
            <LogoHeader />
          </div>
          <div> <MonthWeek months={months} weeks={weeks} selectedMonth={selectedMonth} selectedWeek={selectedWeek}
            weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} /></div>
          <div> <AddTaskScreen handleChange={handleChange} TaskhandleChangeButton={TaskhandleChangeButton} /></div>
          <div> {tasklist.map((data, index) => (
            (data.status) ?
              (<p>{data.task_name}
                <input type="checkbox" onChange={() => this.DeleteTask(data.task_id, index, "checkbox") }></input>
                <button value={data.task_id} onClick={() => this.DeleteTask(data.task_id, index, "button")}>delete</button>
              </p>)
              : null
          ))}
          </div>
        </div>
      </div>
    );
  }
}
export default UserHome