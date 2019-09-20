import React from 'react'


const AddTaskScreen = ({ dummyCredential, dummyMonthValue, taskTransaction,dummyWeekValue, taskObj, handleChangeTask, handleChangeButton }) => {
console.log(handleChangeTask);


    return (
        <div>
            <input 
            value={taskTransaction.taskName}
            onChange={e => {
                handleChangeTask(e);
              }}/><br />
            <input value={taskTransaction.taskPoint}onChange={e => {
                handleChangeTask(e);
            }} /><br />
            <button onClick={handleChangeButton}>Add</button>


        </div>
    );
}


export default AddTaskScreen;