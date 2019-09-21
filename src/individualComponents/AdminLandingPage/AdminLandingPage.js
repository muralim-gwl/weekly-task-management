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
                        <ol>{element.name}
                            {taskTransaction.map((elTask, index) => {
                                return (
                                    <div>
                                        {
                                            (dummyMonthValue === elTask.monthName && dummyWeekValue === elTask.weekName) ?

                                                <p>{element.id === elTask.userid ?
                                                    <p>{elTask.taskName} {elTask.taskPoint} <pre style={{ background: 'green', width: '10px', height: '10px' }}></pre></p>
                                                    : null}

                                                </p> : null}
                                    </div>
                                )
                            })}
                        </ol>
                    )
                })
            }
        </div>
    )
}

export default withRouter(AdminLandingPage);