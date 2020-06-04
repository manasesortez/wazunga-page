import React from 'react';
import 'bulma/css/bulma.min.css';
import './footer.css';
import logFacebook from '../svg/facebook.22f1db81.svg';
import logInstagram from '../svg/instagram.71c04586.svg';
import logGithub from '../images/Github-512.png';

const footer = () => (
        <footer>
            <div className= "div-block-61">
                <div className="div-block-64">
                <br/>
                    <p className="paragraph-35" style={{"fontSize": "20px", "font-family": "lato"}}>Follow us</p>
                    <div className = "div-block-66">
                        <a className="glow-on-hover" style = {{"margin-right": "75px"}} href="facebook link" >
                            <img className="svgR" style={{"width": "35px"}} src={logFacebook} />
                        </a>
                        <a className="glow-on-hover" style = {{"margin-right": "75px"}}  href="twitter link" target="_blank" >
                            <img className="svgR" style={{"width": "35px"}} src={logInstagram}/>
                        </a>
                        <a className="glow-on-hover" href="Git-Hub link " target="_blank" >
                            <img className="svgR" style={{"width": "35px"}} src={logGithub}/>
                        </a>
                    </div>
                    <a className="correo menu__custom" style={{"marginBottom": "10px", "font-style": "normal", "font-size": "18px", "color": "#1b3545"}} href="wazunga.sv@gmail.com" >wazunga.sv@gmail.com</a>
                    <br/>
                    <br/>
                    <p className="derechos menu__custom" style={{"fontSize": "18px", "font-style": "normal"}}>©2020 All rights reserved. Wazunga is registered as a Technologies®</p>
                </div>
            </div>
        </footer>    
)

export default footer;