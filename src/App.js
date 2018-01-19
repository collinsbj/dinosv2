import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Profiles } from "./Profiles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <body className="App">
        <Header />
        <Profiles data={this.state.data} />
        <Footer />
      </body>
    );
  }
}

export default App;
