import React from 'react'
import Instagram from "../media/insta.png"
import KnowMore from "../media/knowmore.png"

const more = () => {
    return (
        <div className="more">
            <h2>
                Gracias por <strong className="G"> completar el ejercicio </strong> 
            </h2>
            <h3>Te invitamos a ver más información</h3>
            
            <div className="buttons">
                <img className="insta"alt="instagram icon"src={Instagram}></img>
                <img className="knowMore"alt="know more"src={KnowMore}></img>
            </div>
        </div>
    )
}

export default more
