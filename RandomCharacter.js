import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }

  randomizeCharacter() {
    const randomNumber = Math.round(Math.random()*82)
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.height}cm</h1>
            <h1>Homeworld:{this.state.homeworld}</h1>
            <ul>
              <li>{this.state.films}</li>
            </ul>
            <br />
          </div>
        )}
        <button
          className="bg-red-500 p-2 rounded-lg"
          type="button"
          onClick={() => this.randomizeCharacter()}
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

export default StarWars;
