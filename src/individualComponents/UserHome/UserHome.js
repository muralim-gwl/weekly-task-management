import React from 'react'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader.js'
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen'
import "./UserHome.css"
import { withRouter, Link, Route } from 'react-router-dom'
import axios from 'axios'

class UserHome extends React.Component {



    
    state = {
        tasklist :[]
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

    componentDidMount(){
        
       this.GetTasks()
   
    
    }
   
    render(){
        const  { user, taskTransaction, months, weeks, dummyMonthValue, dummyWeekValue, weekRestrictionHandler, getWeek, dummyCredential, taskObj, handleChangeTask, handleChangeButton, deleteHandler, userCheckboxHandler}=this.props;
        const{tasklist} = this.state;        
       
         return (
            
            
        <div className="user-home">
            <div >
                <LogoHeader />
                <MonthWeek months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
                <Link to='/userhome/addtask' ><button>Add</button></Link>
                <Route path='/userhome/addtask' component={(props) => <AddTaskScreen taskTransaction={taskTransaction} dummyCredential={dummyCredential} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} taskObj={taskObj} user={user} handleChangeTask={handleChangeTask} handleChangeButton={handleChangeButton} {...props} />} />

                {tasklist.map((data,index)=>(
                    <p>{data.task_name}</p>

                ))}

            </div>
        </div>
    );
    }
}
export default withRouter(UserHome);