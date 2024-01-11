import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }

  randomizeCharacter() {
    this.setState({
      name: "Daniel",
      height: 180,
      homeworld: "Trnava",
      films: ["item0", "item1"],
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.height}cm</h1>
        <h1>{this.state.homeworld}: URL</h1>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <br />
        <button
          className="bg-red-500 p-2 rounded-lg"
          type="button"
          onClick={()=>this.randomizeCharacter()}
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

export default StarWars;
