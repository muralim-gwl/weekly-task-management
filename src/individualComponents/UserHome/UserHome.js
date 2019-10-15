import React from 'react'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader.js'
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen'
import "./UserHome.css"
import { withRouter, Link, Route } from 'react-router-dom'
import axios from 'axios'
import { string } from 'prop-types'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });

class UserHome extends React.Component {



    
    state = {
        tasklist :[],
        addTask: {
            Topic: null,
            Points: null
          },
          open: false,
    }



    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };


    //API CALLS
    
    DeleteTask =(taskId,index, type) =>
       {
           const { tasklist = [] } = this.state
           console.log(index,"inputindex")
           let baseurl;
           if(type == "button"){
             baseurl = "http://localhost:8080/api/delete/";
           }else{
            baseurl = "http://localhost:8080/api/updatetaskstatus/";
           }
           baseurl = baseurl+taskId;
           console.log(index)
           debugger;
           axios.put(baseurl)
       .then(function (response){

         console.log(response.data.status,"ucvsdjcvdkjkjvv");
        if(response.data.status === "successfull"){
            tasklist[index].status = false;
            console.log(tasklist,"AfterUpdate")
            window.location.reload(false);

        }

        this.setState({
            ...tasklist,
            tasklist
        })


       })
       .catch(function(error){
         console.log(error);
       });

       }
      GetTasks =() =>
        {
            const { setTasks } = this;
            axios.post("http://localhost:8080/api/user_task_list",{
           "user_id": "3",
            "month": "October",
            "week": "Week 2"
        })
        .then(function (response){
          console.log(response.data.response,"ucvsdjcvdkjkjvv");
          setTasks (response.data.response);

         console.log( this.state.tasklist,"jhfvudsvbdsvbidsvgyouibvlcsbvyufvbwuivbcslkc")
        })
        .catch(function(error){
          console.log(error);
        });

        console.log(setTasks,"111222233333")
       

       
        }

        setTasks = tasklist => {
            this.setState({ tasklist });
        }

        PostTask =() =>
        {
            const{addTask} = this.state;
            console.log(addTask,"jbecfhjs")
            axios.post("http://localhost:8080/api/addtask",{
                
                    "user_id": "3",
                    "task_id": "14",
                    "task_name": addTask.Topic,
                    "points": addTask.Points,
                    "month": "October",
                    "week": "Week 2"
                 
        })
        .then(function (response){
          console.log(response,"Added Task");
          window.location.reload(false);

        })
        .catch(function(error){
          console.log(error);
        });       

       
        }

// Add Task Methods

handleChange = (value, key) => {

    const { addTask } = this.state;
    this.setState({
      ...this.state,
      addTask: { ...addTask, [key]: value }
    });
  };

  TaskhandleChangeButton =() =>{
    const {addTask}= this.state;

    this.PostTask();
  }


  //Life Cycle Methods

    componentDidMount(){
        
       this.GetTasks()
   
    
    }
   
    render(){
        const  { user, taskTransaction, months, weeks, dummyMonthValue, dummyWeekValue, weekRestrictionHandler, getWeek, dummyCredential, taskObj, handleChangeTask, handleChangeButton, deleteHandler, userCheckboxHandler}=this.props;
        const{tasklist} = this.state;  
        const {handleChange, TaskhandleChangeButton} = this;      
       
         return (
            
            
        <div className="user-home">
            <div >
                <LogoHeader />
                <MonthWeek months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
                <AddTaskScreen handleChange = {handleChange} TaskhandleChangeButton = {TaskhandleChangeButton} />


                     {tasklist.map((data, index) => (
                         
                            ( data.status)?
                            (<p>{data.task_name}
                                 <input type="checkbox" onChange={() => this.DeleteTask(data.task_id, index,"checkbox")}></input>
                                 <button value={data.task_id} onClick={() => this.DeleteTask(data.task_id, index,"button")}>delete</button>
                             </p>) 
                             : null

                         
                     ))}

            </div>
        </div>
    );
    }
}
export default withRouter(UserHome);