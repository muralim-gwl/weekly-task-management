import React from "react";
import "./index.css";
class Footer extends React.Component{

    render()
    {
        return(
        <div className="footer">
             <div className="left-footer">
               <img  classNamw="left"src="foot.png"></img>
            </div>
    <div className="right-footer">
    ADDRESS: Plot No. 72 & 73,4th Floor, Akshay Tech Park, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066

        </div>
        </div>
        )
    }

}
export default Footer;