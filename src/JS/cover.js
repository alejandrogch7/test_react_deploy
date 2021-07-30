import React from 'react'
import "../SASS/cover.css"
import cover__img from "../media/world.png"

const cover = () => {
    return (
        <div className="cover__container">
            <img className="cover__img" alt="worldDots" src={cover__img}/>
            <div className="cover__title">
            <h2>Bienvenido a tu <br></br><strong>Entrevista Técnica</strong> en</h2>
            <h1>waco</h1>
            </div>
        </div>
    )
}

export default cover
