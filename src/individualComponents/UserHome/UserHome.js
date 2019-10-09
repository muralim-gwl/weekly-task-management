import React from 'react'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader.js'
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen'
import "./UserHome.css"
import { withRouter, Link, Route } from 'react-router-dom'

const UserHome = ({ user, taskTransaction, months, weeks, dummyMonthValue, 
    dummyWeekValue, weekRestrictionHandler, getWeek, dummyCredential, taskObj, 
    handleChangeTask, handleChangeButton, deleteHandler, userCheckboxHandler, props }) => {
    return (
        <div className="user-home">
            <div >
                <LogoHeader />
                <MonthWeek months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} 
                    dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler}
                    getWeek={getWeek} />
                <Link to='/userhome/addtask' ><button>Add</button></Link>
                <Route path='/userhome/addtask' component={(props) => <AddTaskScreen 
                    taskTransaction={taskTransaction} dummyCredential={dummyCredential} 
                    dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} taskObj={taskObj} 
                    user={user} handleChangeTask={handleChangeTask} handleChangeButton={handleChangeButton}
                    {...props} />} />
                <div>
                    {
                        user.map((element, index) => {
                            return (
                                <div>
                                    {taskTransaction.map((tvalue, tindex) => {
                                        return (
                                            <div>
                                                {
                                                    (tvalue.monthName === dummyMonthValue && 
                                                     tvalue.weekName === dummyWeekValue &&
                                                     element.username === dummyCredential.username &&
                                                     tvalue.taskActive) ?
                                                        <p style={{ background: 'blue', color: 'white' }}>{element.id === tvalue.userid ?
                                                            <p>{tvalue.taskName + ': '}
                                                                points:{tvalue.taskPoint} 
                                                                <input type="checkbox" 
                                                                 disabled={tvalue.taskStatus} 
                                                                 onChange={() => userCheckboxHandler(tindex)}>
                                                                 </input>
                                                                <button onClick={() => deleteHandler(tindex)}>
                                                                Delete
                                                                </button>
                                                            </p> :
                                                             null}
                                                        </p>
                                                        : null
                                                }
                                            </div>
                                        )
                                    }

                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default withRouter(UserHome);