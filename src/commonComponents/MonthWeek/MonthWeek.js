import React from 'react'
import './MonthWeek.css'

const MonthWeek =({months, weeks, dummyMonthValue, dummyWeekValue,weekRestrictionHandler,getWeek})=> {

        return (
            <div className='month-display'>
                <form>
                    <label>Month:</label>
                    <select value={dummyMonthValue} onChange={weekRestrictionHandler}>
                        {months.map(el => <option value={el} >{el}</option>)}
                    </select>
                    <label>Weeks:</label>
                    <select value={dummyWeekValue} onChange={getWeek}>
                        {weeks.map(el => <option value={el} >{el}</option>)}
                    </select>
                </form>
            </div>)
    }

export default MonthWeek;