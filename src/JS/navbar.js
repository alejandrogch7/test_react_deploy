import React from 'react'
import "../SASS/navbar.css"
import Logo from"../media/logo.png"

const navbar = () => {
    return (
        <div className="navbar__container">
            <div className="container__left">
                <img className="logo" alt="companyLogo" src={Logo}></img>
            </div>
            <div className="container__right">
                <a href="/"className="K">Inicio</a>
                <a href="/"className="K">Beneficios</a>
                <a href="/"className="K">Registro</a>
                <a href="/"className="K"><strong>Inicia Sesión</strong></a>              
            </div>
        </div>
    )
}

export default navbar
