import React, { PureComponent } from "react"
import 'bulma/css/bulma.min.css';
import ScrollAnimation from "react-animate-on-scroll";
import Solutions from '../assets/servicesC.js';
import '../assets/css/Wazunga.css'
import webDesign from '../assets/svg_icon/computadora.png';
import mobile from '../assets/svg_icon/ui.png';
import dataBase from '../assets/svg_icon/nub.png';
import Analisis from '../assets/svg_icon/analisis.png';
import vision from '../assets/svg_icon/vision.png';
import software from '../assets/svg_icon/ordenador.png';
import { Slide } from 'react-slideshow-image';
import '../assets/css/animate.css/animate.min.css';
import '../assets/css/animate.css/animate.css';
import '../assets/css/animate.css/animate.compat.css';
import '../assets/css/animate.css/source/fading_entrances/fadeIn.css';
import '../assets/css/ionicons@4.2.2/css/ionicons.min.css';
import '../assets/css/wazunga.scss';
import '../assets/css/orproducts.css';
import '../assets/css/responsive.css';
import '../assets/css/Wazunga.css';


const fadeProperties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: false,
}


export default class services extends PureComponent {
  componentWillUnmount() {
    this.mounted = false;
    window.onresize = () => null;
  }
  render() {
    return (
      <div>
        <div className="div-bg">
          <div className="section-3">
            <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce="true">
              <p className="paragraph-6 responseT">
                <b style={{ "font-family": "Roboto Mono , monospace", "textAlign": "left" }}>Servicios</b>
              </p>
              <p className="paragraph-7">
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay="1000" animateIn="fadeInUp" duration={1.5} animateOnce="true">
              <div className="div-block-87">
                <Solutions />
              </div>
            </ScrollAnimation>

            <div className="div-responsive" style={{ "margin-bottom": "10px" }}>
              <Slide {...fadeProperties} >
                <img alt="service1" src={webDesign} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service2" src={mobile} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service3" src={dataBase} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service4" src={Analisis} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service5" src={vision} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
                <img alt="service6" src={software} style={{ "width": "190px", height: "190px", "margin-top": "20px" }} />
              </Slide>
            </div>

            <ScrollAnimation delay="1000" animateIn="fadeIn" duration={1.5} animateOnce="true">
              <button className="btn-1" style={{ "font-family": "Roboto Mono", "margin-top": "20px" }}>Contactanos</button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}