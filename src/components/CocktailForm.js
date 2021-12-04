import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class CocktailForm extends React.Component {
  state = {
    id: uuidv4(),
    cocktailName: "",
  };

  onNameChange = (e) => {
    const cocktailName = e.target.value;

    this.setState(() => ({
      cocktailName,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      id: this.state.id,
      cocktailName: this.state.cocktailName,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Cocktail name"
            autoFocus
            value={this.state.cocktailName}
            onChange={this.onNameChange}
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
