import React from 'react';
import './index.css';
class Header extends React.Component{
    render (){
        return (
            
                <div className="Header">
                    <div className="Logo"  >
                    <img className="LogoImg" src="logo1.png" alt="logo"/>
                     </div>
                     <div className="head">
                         <h>Weekly Task Management System </h>
                     </div>
                     <div className="Buttons" >
                        <button type="button" onClick={{}}>
                            User
                        </button>
                        <button type="button" onClick={{}}>
                            Admin
                    </button>
                    </div>
                </div>
            
        );
    }
}
export default Header ;