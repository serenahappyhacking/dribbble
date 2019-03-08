import React, { Component } from "react";
import Header from "../features/Header/Header";
import Main from "../features/Main/Main";
import Footer from "../features/Footer/Footer";
import "./normalize.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
