import React, { Component } from "react";
import Header from "../features/Header/Header";
import Footer from "../features/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
