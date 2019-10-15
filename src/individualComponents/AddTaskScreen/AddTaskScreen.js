import React from 'react'


class AddTaskScreen extends React.Component {
    render() {
        const {handleChange , TaskhandleChangeButton} = this.props
        console.log(handleChange, "sihvbdfhjvbd")
        return (
            <div style={{justifyContent:'center', marginTop:'10%'}}>
              Add Task
              <br />
              <br />
              <input
                onChange={e => {
                  // console.log(e.target.value);
                  handleChange(e.target.value, "Topic");
                }}
                placeholder="Topics"
              />
              <br />
              <br />
              <input
                onChange={e => {
                  // console.log(e.target.value);
                  handleChange(e.target.value, "Points");
                }}
                placeholder="Points"
              />
              <br />
              <br />
              <button onClick= {
              TaskhandleChangeButton
            }>Add</button>
              <br />
              <br />
            </div>
        );
    }


}

export default AddTaskScreen;