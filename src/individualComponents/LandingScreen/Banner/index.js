import React from 'react';
import './index.css'
import { Paper, Typography, Card, CardContent } from '@material-ui/core';
class Banner extends React.Component{
    render (){
        return (
            <div>
                <Paper >
                    <Card>
                        <CardContent>
                    <Typography variant="h5" component="h3"  style={{flexGrow:"1",float:"left"}} >
                      <Paper>  Introduction : </Paper>
                    </Typography></CardContent>
                    </Card>
                    <Card><CardContent> <Typography component="p" style={{flexGrow:"1",float:"left"}} >
                        <Paper>
                   Weekly Task Management is one of the good platform where one can manage their weekly task for managing their weekly task .
                   The user can rate their weekly task according to the difficulty level they face from points ranging between 1 to 10 . 
                    They can watch their tasks and can mark completed and can also deleted their task . 
                    On the admin part view , the admin can view the graph of the completed task summed up to points so he can monitor  the performance 
                    of the employee .</Paper>
                    </Typography></CardContent></Card>
                   
                </Paper>
            </div>
            
               
            
        );
    }
}
export default Banner;
{/* <div className="Banner" >
<div  className="text">
Powerful Project Management Software For Teams: Any Size, Anywhere. Measure Performance, Report Effectively,
& Get Insights. Start a Trial Today. 
For Teams of All Sizes. Integrates with Other Tools. Agile Functionality. Trusted by 65k+ Teams.
</div>
</div> */}