import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './Navbar.css';
import NavbarLogo from './NavbarLogo';
import Footer from './footer';
import Team from './Team';
import Services from './Services';
import Welcome from './Welcome';
import brand from '../images/wazunga-brand.png';
import Wazunga from './wazungaAbout'

class Navbar extends React.Component {
  state = {
    wazungaRef:React.createRef(),
    homeRef: React.createRef(),
    teamRef: React.createRef(),
    footerRef: React.createRef(),
    servicesRef: React.createRef(),
  }

  renderMain() {
    return (
      <div>
        <div ref={this.state.homeRef}><Welcome /></div>
        <div ref={this.state.wazungaRef}><Wazunga /></div> 
        <div ref={this.state.servicesRef}><Services /></div>
        <div ref={this.state.teamRef}><Team /></div>
        <div ref={this.state.footerRef}><Footer /></div>
      </div >
    )
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    console.log(main)
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant",
      marginTop: '20px'
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="nav-custom">
          <div className="menu__custom">
            <input style={{ marginInlineStart: "50px" }} id="menu__toggle" type="checkbox" className="menu__toggle" />
            <label for="menu__toggle" className="menu__toggle-label menu-custom-icon">
              <svg preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
              <svg preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
                <path
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </label>
            <ol className="menu__content" style={{ marginTop: "50px" }}>
              <li className="menu-item" style={{ marginBottom: "30px" }}>
                <a href="#0" className="button__nhulox"><Link to="/wazunga-page" onClick={(e) => {
                  this.main = this.state.homeRef
                  this.handleScroll(e)
                }}>Home</Link></a>
              </li>
              
              <li className="menu-item" style={{ marginBottom: "30px" }}>
                <a href="#0" className="button__nhulox"><Link to="/wazunga-page/about-us" onClick={(e) => {
                  this.main = this.state.wazungaRef
                  this.handleScroll(e)
                }}>About</Link></a>
              </li>

              <li className="menu-item" style={{ marginBottom: "30px" }}>
                <a href="#0" className="button__nhulox"><Link to="/wazunga-page/services" onClick={(e) => {
                  this.main = this.state.servicesRef
                  this.handleScroll(e)
                }}>Services</Link></a>
              </li>
              <li className="menu-item" style={{ marginBottom: "30px" }}>
                <a href="#0" className="button__nhulox"><Link to="/wazunga-page/team" onClick={(e) => {
                  this.main = this.state.teamRef
                  this.handleScroll(e)
                }}>Team</Link></a>
              </li>
              <li className="menu-item" style={{ marginBottom: "30px" }}>
                <a href="#0" className="button__nhulox"><Link to="/wazunga-page/footer" onClick={(e) => {
                  this.main = this.state.footerRef
                  this.handleScroll(e)
                }}>Footer</Link></a>
              </li>
            </ol>
          </div>
          <NavbarLogo logo={brand} />
        </div>
        <div>
          <Switch>
            <Route
              exact
              path="/wazunga-page"
              component={() => this.renderMain()} />
            <Route render={() => <h1 style={{ padding: "200px" }}>Page not ound</h1>} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default Navbar;