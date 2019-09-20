import React from 'react'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader.js'
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import "./UserHome.css"
import { withRouter } from 'react-router-dom'
const UserHome = ({ user, taskTransaction, months, weeks, dummyMonthValue, dummyWeekValue, weekRestrictionHandler, getWeek, dummyCredential }) => {
    return (
        <div className="user-home">
            <div >
                <LogoHeader />
                <MonthWeek months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
                <div>
                    {
                        user.map((element, index) => {
                            return (

                                <div>
                                    {taskTransaction.map(tvalue => {
                                        return (
                                            <div>
                                                {
                                                    (tvalue.monthName === dummyMonthValue && tvalue.weekName === dummyWeekValue && element.username === dummyCredential.username)
                                                        ?


                                                        <p>{element.id === tvalue.userid ? <p>{tvalue.taskName} {tvalue.taskPoint}<input type="checkbox"></input> </p> : null}
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