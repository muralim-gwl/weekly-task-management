import React from "react";
import "./index.css"
import { Card, Typography, Grid, CardActionArea } from "@material-ui/core";

class Feature extends React.Component {
    state = {
        features: [{ name: "User Management" }, { name: "Task Management" }, { name: "Admin Management" },
        { name: "Score Management" }, { name: "Pictorial Representation" }, { name: "Data Visualization" }]


    }

    render() {
        const { features } = this.state;
        return (
                <div >
                <Grid container style={{backgroundColor:"#64b5f6"}} >
                    {features.map((fea)=>(
                        <Grid item md={6} xs={12} style={{borderRadius:"20px"}}>
                            <Card style={{backgroundColor:"#7986cb",margin:"10px" ,paddingRight:"20px"}}>
                                <CardActionArea >
                                    <Grid container spacing={12} justify="center" className="feature"  >
                                        <Grid item  >
                                            {fea.name}
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                    </div>
          
        );
    }
}
export default Feature;





        //     // <div >
        //     //     <Grid container>
        //     //         {features.map((fea)=>(
        //     //             <Grid item md={3}>
        //     //                 <Card >
        //     //                     <CardActionArea>
        //     //                         <Grid container spacing={16} justify="center">
        //     //                             <Grid item>
        //     //                                 {fea.name}
        //     //                             </Grid>
        //     //                         </Grid>
        //     //                     </CardActionArea>
        //     //                 </Card>
        //     //             </Grid>
        //     //         ))}
        //     //         </Grid>
        //     //         </div>

        //     <div>
        //     <Grid container >
        //         {features.map((data) => (
        //             <Grid item md={3} style={{ padding: '15px' }}>
        //                 <Card style={{ maxWidth: "345" }}>
        //                     <CardActionArea>
        //                         <Grid container spacing={16} justify="center" >

        //                             <Grid item xs={12} container>
        //                                 <Grid item xs container direction="column" spacing={16}>
        //                                     <Grid item xs justify="center">
        //                                         <Typography  variant="subtitle1">
        //                                             {data.name}
        //                                         </Typography>

        //                                     </Grid>

        //                                 </Grid>

        //                             </Grid>
        //                         </Grid>
        //                     </CardActionArea>
        //                 </Card>
        //             </Grid>

        //         ))}
        //     </Grid>
        // </div>




