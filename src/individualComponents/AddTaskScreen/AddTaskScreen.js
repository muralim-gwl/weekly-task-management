import React from 'react'

class AddTask extends React.Component {

    state = {

        month: [],

        AddingTask: {
            TaskName: null,
            Points: null

        }
    }

    handleChange = (value, key) => {
        const { AddingTask } = this.state;
        this.setState({
            ...this.state,
            AddingTask: { ...AddingTask, [key]: value }
        });
    };

    handleChangeButton = () => {
        const { month } = this.state

        let monthName = "sept"
        let week = "3"
        let monthDict = []
        let Weekdict = []
        let taskdict = []
        taskdict.push({
            "Task": this.state.AddingTask.TaskName,
            "TaskPoints": this.state.AddingTask.Points

        })

        Weekdict.push({
            "weekName": week,
            "TaskData": taskdict

        })
        monthDict.push(
            {
                "MonthName": monthName,
                "WeekDict": Weekdict
            }
        )

        let count = month.length;
        
        for (let i = 0; i < count; i++) {

            if (month[i].MonthName == monthName) {
                month.MonthName.push({
                    "WeekDict": Weekdict
                })

            } else {
                month.push(
                    monthDict
                )
            }
        }

        if (count = 0) {
            month.push(
                monthDict
            )
        }




    }
    render() {

        return (
            <div>

                <input
                    onChange={e => {
                        this.handleChange(e.target.value, "TaskName");
                    }}

                    placeholder="AddTask"
                />
                <br />
                <br />
                <input
                    onChange={e => {
                        // console.log(e.target.value);
                        this.handleChange(e.target.value, "Points");
                    }}
                    type="numeric"
                    placeholder="Add Points"
                />
                <br />
                <button onClick={
                    this.handleChangeButton
                }>Add Item</button>


            </div>
        );
    }

}
export default AddTask;