import { Component } from "react";

class DinosaurCard extends Component {
  constructor() {
    super();
  }

  render() {
    let { image, name, weight, height, hp, atk, def } = this.props.dinosaur;
    return (
      <div
        className="dinosaur-item-container"
        onClick={() => this.props.handleDinosaurClick(this.props.dinosaur)}
      >
        <img src={image} alt="Dinosaur Image" />
        <div>Name: {name}</div>
        <div>Weight: {weight}</div>
        <div>Height: {height}</div>
        <div>Health: {hp}</div>
        <div>Attack: {atk}</div>
        <div>Defense: {def}</div>
      </div>
    );
  }
}

export default DinosaurCard;
