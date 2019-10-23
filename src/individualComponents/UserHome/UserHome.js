import React from 'react';
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import axios from 'axios'
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen'
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader'
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";



//# Table Functions

const rows = [
  { id: "id", numeric: false, disablePadding: true, label: "S.no" },
  { id: "name", numeric: true, disablePadding: false, label: "TaskName" },
  { id: "points", numeric: true, disablePadding: false, label: "ponts" },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "Delete", numeric: true, disablePadding: false, label: "DeleteTask" }
];


// Table Header
class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
           
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={ "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});


// Main Class
class UserHome extends React.Component {
  state = {
    tasklist: [],
    addTask: {
      Topic: null,
      Points: null
    },

    data: {
      "uuid": "1",
      "month": null,
      "week": null
    },
  }

  
//checkBox + delete api calling
  DeleteTask = (taskId, index, type) => {
    const { tasklist = []} = this.state

    const {GetTasks}=this;
    console.log(index, "inputindex")
    let baseurl;
    if (type == "button") {
      baseurl = "https://still-river-36033.herokuapp.com/api/delete/";
    } else {
      baseurl = "https://still-river-36033.herokuapp.com/api/updatetaskstatus/";
    }
    baseurl = baseurl + taskId;
    console.log(index)
    // debugger;
    axios.put(baseurl)
      .then(function (response) {

        if (response.data.status === "successfull") {
          tasklist[index].status = false;
          console.log(tasklist, "AfterUpdate")
          GetTasks();         
        }
        this.setState({
          ...tasklist,
          tasklist,
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }
//geting task for particular user 
 GetTasks = () => {
    const { setTasks } = this;
    axios.post("https://still-river-36033.herokuapp.com/api/user_task_list", this.state.data)
      .then(function (response) {
        setTasks(response.data.response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


//setting task in state
  setTasks = (tasklist) => {
    this.setState({ tasklist});
  }

//addition of task for particular user api
  PostTask = () => {
    const { addTask, data } = this.state;
    const {GetTasks}=this;
    console.log(addTask, "jbecfhjs")
    axios.post("https://still-river-36033.herokuapp.com/api/addtask", {

      "uuid": "1",
      "task_name": addTask.Topic,
      "points": addTask.Points,
      "month": data.month,
      "week": data.week

    })
      .then(function (response) {
        console.log(response, "Added Task");
        GetTasks();

      })
      .catch(function (error) {
        console.log(error);
      });


  }

  // Add Task Methods

  handleChange = (value, key) => {

    const { addTask } = this.state;
    this.setState({
      ...this.state,
      addTask: { ...addTask, [key]: value }
    });
  };

  TaskhandleChangeButton = () => {
    const { addTask } = this.state;

    this.PostTask();
  }
  //setting current month and week for the current user 
  componentWillMount() {
    const { selectedMonth, selectedWeek } = this.props;
    const { data } = this.state;
    data.month = selectedMonth;
    data.week = selectedWeek;
  }
//calling getTask appi
  componentDidMount() {
    this.GetTasks()

  }
  //setting the response in state 
  setTasks = tasklist => {
    this.setState({ tasklist });
  }
  render() {

    const { months, weeks, selectedMonth, selectedWeek, weekRestrictionHandler, getWeek } = this.props;
    const { tasklist } = this.state;
    const { handleChange, TaskhandleChangeButton } = this;
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);


    // console.log("props", this.props)
    console.log("state",this.state)
    // console.log("month", this.props.selectedMonth)
    return (
      <div className="user-home">
        <div >
          <div>
            <LogoHeader />
          </div>
          <div> <MonthWeek months={months} weeks={weeks} selectedMonth={selectedMonth} selectedWeek={selectedWeek}
            weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} /></div>
          {/* <div> <AddTaskScreen handleChange={handleChange} TaskhandleChangeButton={TaskhandleChangeButton} /></div> */}
        
          <Paper >
        <div >

          <Table  aria-labelledby="tableTitle">
            <EnhancedTableHead
              
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              rowCount={data.length}
            />
            <TableBody>
              {tasklist.map((data, index) => {
                  return (
                    <TableRow
                      // hover
                      // onClick={event => this.handleClick(event, data.id)}
                      // role="checkbox"
                      // tabIndex={-1}
                      // key={data.id}
                    >
                      <TableCell padding="checkbox">
                        {/* <Checkbox checked={isSelected} /> */}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {index+1}
                      </TableCell>
                      <TableCell align="left">{data.task_name}</TableCell>
                      <TableCell align="left">{data.points}</TableCell>

                      <TableCell padding="checkbox">
                        <Checkbox  />
                      </TableCell>
                      <TableCell padding="checkbox">
                        <Button variant="contained" color="primary">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
        
        
        
        
        
          {/* <div> {tasklist.map((data, index) => (
            (data.status) ?
              (<p>{data.task_name}
                <input type="checkbox" onChange={() => this.DeleteTask(data.task_id, index, "checkbox") }></input>
                <button value={data.task_id} onClick={() => this.DeleteTask(data.task_id, index, "button")}>delete</button>
              </p>)
              : null
          ))}
          </div>*/}
        </div> 
      </div>
    );
  }
}

UserHome.propTypes = {
  classes: PropTypes.object.isRequired
};
export default UserHome