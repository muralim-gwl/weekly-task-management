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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Select } from '@material-ui/core';


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
    open:false,
    setOpen:false,

    data: {
      "uuid":sessionStorage.serverUUID,
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
    debugger;
    axios.post("https://still-river-36033.herokuapp.com/api/addtask", {

      "uuid": data.uuid,
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

  handleClose = () => {
    this.setState({
      setOpen :false,
      open:false,
         });
    };

    handleClickOpen = () => {
      // const {setOpen,open}=this.state
      this.setState({
        setOpen :true,
        open:true
      });
    };

  TaskhandleChangeButton = () => {
    const { addTask } = this.state;

    this.PostTask();
    this.handleClose();
  }
  //setting current month and week for the current user 
  componentWillMount() {
    const { selectedMonth, selectedWeek } = this.props;
    const { data } = this.state;
    data.month = selectedMonth;
    data.week = selectedWeek;
  }
validateUser=()=>{
  const {GetTasks}=this;
 
  axios.post("https://evening-dawn-93464.herokuapp.com/api/verify",{
    "auth_token":sessionStorage.getItem("serverAUTHTOKEN")
  })
  .then(function(response) {
    if(response.data.isloggedIn){
    GetTasks();
  }

  })
  .catch(function (error) {
    console.log(error);
  });
}
//calling getTask appi
  componentDidMount() {
    this.validateUser()

  }

  
  //setting the response in state 
  setTasks = tasklist => {
    this.setState({ tasklist });
  }
  render() {

    const { months, weeks, selectedMonth, selectedWeek, weekRestrictionHandler, getWeek } = this.props;
    const { tasklist,open } = this.state;
    const { handleChange, TaskhandleChangeButton ,handleClose,handleClickOpen} = this;
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
            <br/>
         <Button  variant="outlined" color="primary" onClick={handleClickOpen} >
               Add Task
         </Button>

<br/>
{/* DialugeUI */}

<div>
         <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={'sm'} maxWidth={'sm'} >
         <DialogTitle id="form-dialog-title">New Task</DialogTitle>
         <DialogContent>
           <DialogContentText>
             Add your weekly task here.
           </DialogContentText>
           <TextField
             autoFocus
             margin="dense"
             id="name"
             label="New Task"
             type="text"
             fullWidth
             onChange={e => {
                     // console.log(e.target.value);
                     handleChange(e.target.value, "Topic");
                   }}
                   placeholder="Topics"
           />
           <br></br>
           <label>Points &nbsp; &nbsp;</label>
           <Select label="Points"  onChange={e => {
                 // console.log(e.target.value);
                 handleChange(e.target.value, "Points");
               }}
               placeholder="Points" margin="dense" value={this.state.addTask.Points}>
                  <option value="2">2</option>
                   <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
           </Select>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color="primary">
             Cancel
           </Button>
           <Button onClick={TaskhandleChangeButton} color="primary ">
             Add
           </Button>
         </DialogActions>
       </Dialog>
     </div>


         {/* Table UI */}
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
                        <Checkbox disabled = {data.task_completion} checked = {data.task_completion} onChange={() => this.DeleteTask(data.task_id, index, "checkbox")}/>
                      </TableCell>
                      <TableCell padding="checkbox">
                        <Button variant="contained" color="primary" value={data.task_id} onClick={() => this.DeleteTask(data.task_id, index, "button")}>
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