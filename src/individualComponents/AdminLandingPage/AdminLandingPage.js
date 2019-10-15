import React from 'react';
import MonthWeek from '../../commonComponents/MonthWeek/MonthWeek'
import ChartDisplay from './ChartDisplay'
import axios from 'axios'
import * as Highcharts from "highcharts";

class AdminLandingPage extends React.Component {
  state = {
    tasklist: [],
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
  componentDidMount() {
    this.GetTasks()
    this.GetChart();
    try {
      this.handleChartLogic()
      
    } catch (error) {
      console.log(error)
    }
   

  }
  
  GetTasks = () => {
    const { setTasks } = this;
    axios.post("http://localhost:8080/api/admin_view_task_list",this.state.data)
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
    axios.post("http://localhost:8080/api/get_chart_points",this.state.data)
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
        let id=userElement.user_id
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
    return (
      <div>
        <div className="admin-home">
          <div >

            <MonthWeek months={months} weeks={weeks} selectedMonth={selectedMonth} selectedWeek={selectedWeek}
              weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
               <ChartDisplay />
            {tasklist.map((data, index) => (
              <p>{data.user_id} &nbsp; {data.task_name}  &nbsp; {data.points}</p>
            ))}

          </div>
        </div>

      </div>);
  }
}
export default AdminLandingPage;