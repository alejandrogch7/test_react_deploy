import React from 'react'
import "../SASS/benefits.css"
import Vector from "../media/Vector.png"
import ArrowBack  from "../media/arrowBack.png"
import Ellipse from "../media/Ellipse.png"
import ArrowForward from "../media/arrowForward.png"
import CircleClock from "../media/mediaWatch/vectorWatch.png"
import Lines from "../media/mediaWatch/lines.png"
import midLow from "../media/mediaWatch/midLow.png"
import midTop from "../media/mediaWatch/midTop.png"
import Desktop from "../media/desktop.png"
import Social from "../media/social.png"
import Fruits from "../media/fruits.png"

const benefits = () => {
    return (
        <div className="benefits__container">
            <div className="benefits__title">
                <h2>
                    Entre los <strong className="ben__box">  beneficios  </strong>  que<br/> 
                    <strong>ofrecemos </strong> se encuentran
                </h2>
            </div>
            <div className="benefits__carousel">
                <div className="arrow_back">
                    <img className="Ellipse"alt="circle"src={Ellipse}></img>    
                    <img className="arrowBack"alt="arrow back" src={ArrowBack}></img>
                </div>
                <div className="flexible_schedule D">
                    <img className="circleClock" alt="clock circle" src={CircleClock}></img>
                    <img className="midLow"alt="mid low clock" src={midLow}></img>
                    <img className="midTop"alt="mid top clock" src={midTop}></img>
                    <img className="lines" alt="lines" src={Lines}></img>
                    <img className="theVector" alt="vector" src={Vector}></img>
                    <div>Flexibilidad horaria</div>
                </div>
                <div className="home_office D">
                    <img className="theVector" alt="vector" src={Vector}></img>
                    <img className="desktop"alt="desktop"src={Desktop}></img>
                    <div>Home office</div>
                </div>
                <div className="workshops D">
                    <img className="social"alt="social"src={Social}></img>
                    <img className="theVector" alt="vector" src={Vector}></img>
                    <div>
                    Capacitaciones <br/>
                    y Workshops
                    </div>
                </div>
                <div className="snacks D">
                    <img className="theVector" alt="vector" src={Vector}></img>
                    <img className="fruits"alt="fruits"src={Fruits}></img>
                    <div>
                    Snacks, frutas <br/>y bebidas gratis
                    </div>
                </div>
                <div className="arrow_forward">
                    <img className="Ellipse"alt="circle"src={Ellipse}></img>
                    <img className="arrowForward"alt="arrow forward" src={ArrowForward}></img>
                </div>
            </div>
        </div>
    )
}

export default benefits
