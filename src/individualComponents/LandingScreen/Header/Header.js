import React from 'react';
import './Header.css';
class Header extends React.Component{
    render (){
        return (
            
                <div className="Header">
                    <div className="Logo"  >
                    <img className="LogoImg" src="./Assests/Images/Logo.png" alt="logo"/>
                     </div>
                     <div>
                         <p> <b> <u><i>Weekly Task Management System </i></u></b></p>
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