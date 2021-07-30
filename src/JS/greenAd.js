import React from 'react'
import Rectangle from "../media/Rectangle.png"
import "../SASS/greenAd.css"
import Computer from "../media/computer.png"

const greenAd = () => {
    return (
        <div className="rectangle__container">
            <img className="rectangle"alt="green rectangle" src={Rectangle}></img> 
            <div className="leftSide">
            <img className="computer"alt="computer"src={Computer}></img>
            </div>
            <div className="rightSide">
            <h2>Trabajamos para <br/>
            <strong>convertir ideas</strong> en<strong><br/> 
            productos</strong></h2>
            </div>
            
        </div>
    )
}

export default greenAd
