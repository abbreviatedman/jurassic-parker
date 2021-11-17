import { Component } from "react";
import "./App.css";
import data from "./data/dinosaurs";
import DinosaurCard from "./components/DinosaurCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinosaurs: data.dinosaurs,
      selectedDinosaur: {
        name: "No Dinosaur Selected",
        image: "https://via.placeholder.com/100",
      },
    };
  }

  handleDinosaurClick = (dinosaur) => {
    this.setState({
      selectedDinosaur: dinosaur,
    });
  };

  render() {
    const dinosaurs = this.state.dinosaurs.map((dinosaur) => {
      return (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
          handleDinosaurClick={this.handleDinosaurClick}
        />
      );
    });

    return (
      <div className="app" id="app-container">
        <h1>Jurassic Parker</h1>
        <div>
          <h3>Currently Selected Dinosaur</h3>
          <img
            src={this.state.selectedDinosaur.image}
            alt="Selected dinosaur image"
          />
          <div>{this.state.selectedDinosaur.name}</div>
        </div>
        <div id="dinosaur-list-container">{dinosaurs}</div>
      </div>
    );
  }
}

export default App;
