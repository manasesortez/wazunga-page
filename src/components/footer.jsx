import React from 'react';
import 'bulma/css/bulma.min.css';
import './footer.css';
import logFacebook from '../svg/facebook.22f1db81.svg';
import logInstagram from '../svg/instagram.71c04586.svg';
import logGithub from '../images/Github-512.png';



const footer = () => (
    <footer>
        <div className="div-block-61">
            <div className="div-block-64">
                <p className="" style={{ "fontSize": "20px", fontFamily: "lato", marginTop: "20px", marginBottom:"20px"}}>Follow us</p>
                <div>
                    <a className="Redes _In" style={{ marginRight: "75px" }} href="facebook link" target="_blank">
                        <img alt="logFacebook" className="svgR" style={{ "width": "35px" }} src={logFacebook} />
                    </a>
                    <a className="Redes" style={{ marginRight: "75px" }} href="twitter link" target="_blank" >
                        <img alt="logInstagram" className="svgR " style={{ "width": "35px" }} src={logInstagram} />
                    </a>
                    <a className="" href="Git-Hub link " target="_blank" >
                        <img alt="logGithub" className="svgR" style={{ "width": "35px" }} src={logGithub} />
                    </a>
                </div>
                <br />
                <a className="correo menu__custom" style={{ "marginBottom": "10px", fontStyle: "normal", fontSize: "18px", "color": "#1b3545" }} href="wazunga.sv@gmail.com" >wazunga.sv@gmail.com</a>
                <br />
                <br />
                <p className="derechos menu__custom" style={{ "fontSize": "18px", fontStyle: "normal" }}>©2020 All rights reserved. Wazunga is registered as a Technologies®</p>
            </div>
        </div>
    </footer>
);

export default footer;