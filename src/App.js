import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;
    console.log("removeCharacters fn called");
    this.setState(
      {
        characters: characters.filter((character, i) => {
          return i !== index;
        })
      },
      () => {
        console.log(this.state.characters);
      }
    );
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          charactersData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
