import React from 'react';
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import ChartDisplay from './ChartDisplay'
import axios from 'axios'
import * as Highcharts from "highcharts";
import LogoHeader from '../../commonComponents/LogoHeader/LogoHeader'
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
import { Card, Grid, CardActionArea } from "@material-ui/core";


//# Table Functions

const rows = [
  { id: "id", numeric: false, disablePadding: true, label: "UserId" },
  { id: "name", numeric: true, disablePadding: false, label: "TaskName" },
  { id: "points", numeric: true, disablePadding: false, label: "ponts" }
 
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

class AdminLandingPage extends React.Component {
  state = {
    tasklist: [],
    redirect:false,
    data: {
      "month": null,
      "week": null
    },
    chartPoint:[],
    barChart: {
      chart: {
        type: "column"
      },
      title: {
        text: "Week Task Performance"
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Points"
        }
      },
      series: [
        {
          name: "Task Performance",
          data: []
        }
      ]
    }
  }
  componentWillMount() {
    const { selectedMonth, selectedWeek } = this.props;
    const { data } = this.state;
    data.month = selectedMonth;
    data.week = selectedWeek;

  }
  verifyFromServer = () => {
    const {redirect}=this.state
    axios.post("https://evening-dawn-93464.herokuapp.com/api/validate", {
        "auth_token": sessionStorage.getItem('serverAUTHTOKEN')
    })
        .then(response => {
            let status = response.data.status
            if (status === 401) {
                this.setState({ redirect: true })
            }
        })
        .catch(error => console.log(error)
        )
}
  validateUser=()=>{
    const {GetTasks,GetChart,verifyFromServer}=this;
    verifyFromServer();
    axios.post("https://evening-dawn-93464.herokuapp.com/api/verify",{
      "auth_token":sessionStorage.getItem("serverAUTHTOKEN")
    })
    .then(function(response) {
      if(response.data.isloggedIn){
      GetTasks();
      GetChart();
      try {
        this.handleChartLogic()
        
      } catch (error) {
        console.log(error)
      }
    }
  
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount() {
    this.validateUser()
   
   

  }
  
  GetTasks = () => {
    const { setTasks } = this;
    axios.post("https://still-river-36033.herokuapp.com/api/admin_view_task_list",this.state.data)
      .then(function (response) {
        setTasks(response.data.response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  setTasks = tasklist => {
    this.setState({ tasklist });
    // console.log(tasklist)
  }
  GetChart = () => {
    console.log("chatapi is calling")
    const { setChart } = this;
    axios.post("https://still-river-36033.herokuapp.com/api/get_chart_points",this.state.data)
      .then(function (response) {
         console.log(response.data.response,"123123123")
        setChart(response.data.response);
    

      })
      .catch(function (error) {
        console.log(error);
      });
      
  }
  setChart = chartPoint => {
    this.setState({ chartPoint });
   this.handleData(this.state.data.week);
  }
  
 
  handleChartLogic = () => {
    const { barChart } = this.state;
    Highcharts.chart("container", barChart);
  }
 
 
  handleData = (dwv) => {
    let {
      barChart,
      chartPoint,
      
    } = this.state;
    let {week}=this.state.data
    //  console.log(this.state.chartPoint,"finall values")
     console.log(this.state.tasklist,"finall values11")
    week = dwv
    let { series } = barChart;
    series[0].data = []
    chartPoint.forEach((userElement) => {
        let pt =parseInt( userElement.sum);
        let id=userElement.uuid
        let temp = [];
        temp = [id, pt];        
        series[0].data.push(temp);
      
    });

    barChart = {
      ...barChart,
      series
    };

    Highcharts.chart("container", barChart);

    this.setState({
      barChart,
      week
    });
  };
  render() {
    const { months, weeks, selectedMonth, selectedWeek, weekRestrictionHandler, getWeek } = this.props;
    const { tasklist = [] } = this.state
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <div>
        <div className="admin-home">
          <div >
            <LogoHeader/>
            <MonthWeek months={months} weeks={weeks} selectedMonth={selectedMonth} selectedWeek={selectedWeek}
              weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
              <Card>
               <ChartDisplay />
               </Card>
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
                        {data.uuid}
                      </TableCell>
                      <TableCell align="left">{data.task_name}</TableCell>
                      <TableCell align="left">{data.points}</TableCell>

                    
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
        {/* <TablePagination
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
        /> */}
      </Paper>






            {/* {tasklist.map((data, index) => (
              <p>{data.uuid} &nbsp; {data.task_name}  &nbsp; {data.points}</p>
            ))} */}

          </div>
        </div>

      </div>);
  }
}
export default AdminLandingPage;