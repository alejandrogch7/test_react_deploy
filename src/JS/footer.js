import React from 'react'
import Logo from"../media/logo.png"
import Line from "../media/simpleLine.png"

const footer = () => {
    return (
        <div className="footer">
            <img className="line"alt="simpleline"src={Line}></img> 
            <img className="logo_footer" alt="companyLogo" src={Logo}></img>
        </div>
    )
}

export default footer
