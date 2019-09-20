import React from "react";
import "./index.css"

class Feature extends React.Component{
    state={
        features:[{name:"User Management"},{name:"Task Management"},{name:"Admin Management"},
        {name:"Score Management"},{name:"Pictorial Representation"},{name:"Data Visualization"}]

        
    }

    render()
    
    {
        const {features}=this.state
        return(
        <div className="feature">
             {features.map((fea)=><p>{fea.name}</p>)}
        </div>
        )
    }

}
export default Feature;