import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class CocktailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.cocktail ? props.cocktail.id : uuidv4(),
      cocktailName: props.cocktail ? props.cocktail.cocktailName : "",
      error: "",
    };
  }
  onNameChange = (e) => {
    const cocktailName = e.target.value;

    this.setState(() => ({
      cocktailName,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    let cocktailName = this.state.cocktailName;

    if (cocktailName) {
      console.log(this.state.cocktailName.lenght);
      this.props.onSubmit({
        id: this.state.id,
        cocktailName,
      });
    } else {
      this.setState(() => ({
        error: "Enter a cocktail name",
      }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
