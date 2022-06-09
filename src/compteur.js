import React from "react";

export default class Compteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compteur: 0 };
  }

  Incr = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.compteur}</p>
        <button onClick={this.Incr}> Incrementer</button>
      </div>
    );
  }
}
