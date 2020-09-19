import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const styles = {
  link: { textDecoration: "none", color: "blue" },
  nav: { border: "1px solid blue" },
  home: { border: "1px solid red", height: "1000px", width: "500px" },
  about: { border: "1px solid blue", height: "1000px", width: "500px" }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }
  renderMain() {
    return (
      <div style={styles.component}>
        <div style={styles.home}>
          <h1>Home</h1>
        </div>
        <div style={styles.about} ref={this.main}>
          <h1>About</h1>
        </div>
      </div>
    );
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
      <div className="App">
        <BrowserRouter>
          <div>
            <div style={styles.nav}>
              <Link style={styles.link} to="/wazunga-page">
                Home{" "}
              </Link>
              <Link style={styles.link} onClick={this.handleScroll} to="/about">
                About{" "}
              </Link>
              <Link style={styles.link} to="/contact">
                Contact{" "}
              </Link>
            </div>

            <Switch>
              <Route exact path="/wazunga-page" component={() => this.renderMain()} />
              <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;