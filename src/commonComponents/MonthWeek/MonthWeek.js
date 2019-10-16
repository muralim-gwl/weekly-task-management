import React from 'react'
import './MonthWeek.css'

const MonthWeek =({months, weeks, selectedMonth, selectedWeek,weekRestrictionHandler,getWeek})=> {
    
  console.log(months, "total months")
  console.log(weeks,"total weeks")
        return (
            <div className='month-display'>
                <form>
                    <label>Month:</label>
                    <select value={selectedMonth} onChange={weekRestrictionHandler}>
                        {months.map(el => <option value={el} >{el}</option>)}
                    </select>
                    <label>Weeks:</label>
                    <select value={selectedWeek} onChange={getWeek}>
                        {weeks.map(el => <option value={el} >{el}</option>)}
                    </select>
                </form>
            </div>)
    }

export default MonthWeek;