import React from 'react'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader.js'
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen'
import "./UserHome.css"
import { withRouter, Link, Route } from 'react-router-dom'
import axios from 'axios'
import { string } from 'prop-types'

class UserHome extends React.Component {



    
    state = {
        tasklist :[]
    }

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