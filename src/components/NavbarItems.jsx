import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Lorem from './Lorem';
import Footer from './footer';

class NavbarItems extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }

  renderMain() {
    return (
      <div>
        <Lorem />
        <Footer ref={this.main} />
      </div>
    )
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ol className="menu__content" style={{ "margin-top": "20px" }}>
              <a className="button__nhulox"><Link to="/wazunga-page">Home</Link></a>
            </ol>
          </div>

          <div>
            <Switch>
              <Route
                exact
                path="/wazunga-page"
                component={() => this.renderMain()} />
              <Route render={() => <h1 style={{ padding: "10px" }}>Page not ound</h1>} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default NavbarItems;