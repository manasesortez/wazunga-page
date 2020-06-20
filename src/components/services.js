import React, { Component, PureComponent } from "react"
import 'bulma/css/bulma.min.css';
import ScrollAnimation from "react-animate-on-scroll";
import Solutions from '../assets/servicesC.js';
import '../assets/css/Wazunga.css'
import SwiftSlider from 'react-swift-slider'
import webDesign from '../assets/icon/Web.png';
import mobile from  '../assets/icon/Mobile.png';
import dataBase from '../assets/icon/DataBase.png';
import Analisis from '../assets/icon/DataAnalytics.png';
import vision from '../assets/icon/Vision.png';
import software from '../assets/icon/SoftwareE.png';
import Slider from '@farbenmeer/react-spring-slider';
import Carousel from 'react-elastic-carousel';
import {Slide} from 'react-slideshow-image';


  const fadeProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: false,
  }
  

export default class services extends PureComponent{
  componentWillUnmount() {
    this.mounted = false;
    window.onresize = () => null;
  }
    render(){
        return(
            <div>
                <div className="div-bg">
                    <div className="section-3">
                        <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce="true">
                            <p className="paragraph-6 responseT">
                            <b>Servicios</b>
                            </p>
                            <p className="paragraph-7">
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation delay="1000" animateIn="fadeInUp" duration={1.5} animateOnce="true">
                            <div className="div-block-87">
                                <Solutions/>
                            </div>
                        </ScrollAnimation>

                        <div className="div-responsive" style = {{"margin-bottom": "10px"}}>
                            <Slide {...fadeProperties} >
                                <img src={webDesign} />
                                <img src={mobile} />
                                <img src={dataBase} />
                                <img src={Analisis} />
                                <img src={vision} />
                                <img src={software} />
                            </Slide>
                        </div>

                        <ScrollAnimation delay="1600" animateIn="fadeIn" duration={1.5} animateOnce="true">
                            <button className="btn-1">Contactanos</button>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        )
    }
}





