import React from 'react'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader'
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import { withRouter } from 'react-router-dom';

const AdminLandingPage = ({ user, taskTransaction, months, weeks, dummyMonthValue, dummyWeekValue, weekRestrictionHandler, getWeek }) => {

    return (
        <div>
            <LogoHeader />
            <MonthWeek months={months} weeks={weeks} dummyMonthValue={dummyMonthValue} dummyWeekValue={dummyWeekValue} weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
            {
                user.map((element, index) => {
                    return (
                        <div>
                            {element.type == 'user' ?
                                <ol>{element.name}
                                    {taskTransaction.map((elTask, index) => {
                                        return (
                                            <div>
                                                {
                                                    (dummyMonthValue === elTask.monthName && dummyWeekValue === elTask.weekName) ?

                                                        <p>{element.id === elTask.userid ?
                                                            <p style={{ background: 'dodgerBlue', color: 'white' }}>{elTask.taskName} {elTask.taskPoint}points <input style={{ background: 'green', width: '10px', height: '10px' }}></input></p>
                                                            : null}

                                                        </p> : null}
                                            </div>
                                        )
                                    })}
                                </ol> : null}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default withRouter(AdminLandingPage);