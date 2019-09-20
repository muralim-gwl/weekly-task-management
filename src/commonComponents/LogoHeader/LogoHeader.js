import React from 'react';
import './LogoHeader.css'
import { Link } from 'react-router-dom'

const LogoHeader = () => {

    return (
        <div className='header-class'>
            <div><img className="left-img" src="foot.png" alt='Logo of GWL' /></div>
            <div><Link to='/'><button type='button' className='button'>Log Out</button></Link></div>

        </div>)
}
export default LogoHeader;