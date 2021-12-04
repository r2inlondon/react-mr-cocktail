import React from "react";

export default class CocktailForm extends React.Component {
  state = {
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

    this.props.onSubmit({ cocktailName: this.state.cocktailName });
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
