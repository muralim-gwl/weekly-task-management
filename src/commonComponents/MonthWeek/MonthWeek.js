import React from 'react'
import './MonthWeek.css'
import { Select } from '@material-ui/core'


const MonthWeek =({months, weeks, selectedMonth, selectedWeek,weekRestrictionHandler,getWeek})=> {
    
//   console.log(months, "total months")
//   console.log(weeks,"total weeks")
        return (
            <div className='month-display'>
                <form>
                    <label><b>Month:&nbsp; </b></label>
                    <Select   value={selectedMonth} onChange={weekRestrictionHandler}>
                        {months.map(el => <option value={el} >{el}</option>)}
                    </Select> &nbsp;&nbsp;
                    <label><b>Weeks:&nbsp;&nbsp;</b></label>
                    <Select value={selectedWeek} onChange={getWeek}>
                        {weeks.map(el => <option value={el} >{el}</option>)}
                    </Select>
                </form>
            </div>)
    }

export default MonthWeek;