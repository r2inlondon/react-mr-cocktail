import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class CocktailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.cocktail ? props.cocktail.id : uuidv4(),
      name: props.cocktail ? props.cocktail.name : "",
      error: "",
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;

    this.setState(() => ({
      name,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    let name = this.state.name;

    if (name) {
      console.log(this.state.name.lenght);
      this.props.onSubmit({
        id: this.state.id,
        name,
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
            value={this.state.name}
            onChange={this.onNameChange}
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
