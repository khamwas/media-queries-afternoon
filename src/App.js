import React, { Component } from "react";
// import { push as Menu } from "react-burger-menu";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      scroll: false
    };
    this.scrollChange = this.scrollChange.bind(this);
  }

  changeMenu() {
    this.setState({ menu: !this.state.menu });
  }

  scrollChange() {
    this.setState({ scroll: !this.state.scroll });
  }

  render() {
    return (
      <div>
        <nav id="n" className={this.state.scroll ? "scrollNav" : "nav"}>
          <div className="nav">
            <div className="logo">Start Bootstrap</div>
            <button onClick={() => this.changeMenu()} className="menu">
              MENU ☰
            </button>
          </div>
          <div className={this.state.menu ? "dropStyle links" : "links"}>
            <span className="linkItem">SERVICES</span>
            <span className="linkItem">PORTFOLIO</span>
            <span className="linkItem">ABOUT</span>
            <span className="linkItem">TEAM</span>
            <span className="linkItem">CONTACT</span>
          </div>
        </nav>
        <header>
          <div className="cursive">Welcome To Our Studio!</div>
          <div className="headerText">IT'S NICE TO MEET YOU</div>
          <button className="headerButton">TELL ME MORE</button>
        </header>
        <div className="body">
          <div className="services">
            <h1>SERVICES</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="iconContainer">
              <div className="serviceItems">
                <div className="icon" />
                <div className="miniHeader">E-Commerce</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </div>
              </div>
              <div className="serviceItems">
                <div className="icon" />
                <div className="miniHeader">Responsive Design</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </div>
              </div>
              <div className="serviceItems">
                <div className="icon" />
                <div className="miniHeader">Web Security</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </div>
              </div>
            </div>
          </div>
          <div className="services">
            <h1>PORTFOLIO</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services">
            <h1>ABOUT</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services">
            <h1>OUR AMAZING TEAM</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="services">
            <h1>CONTACT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    );
  }
}
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("n").className = "scrollNav";
    // // this.scrollChange();
    // console.log("small");
  } else {
    document.getElementById("n").className = "nav";
    // // this.scrollChange();
    // console.log("big");
  }
}

export default App;
