import React, { Component } from "react";
import Header from "../features/Header";
import Main from "../features/Main";
import Footer from "../features/Footer";
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
