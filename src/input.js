import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = { text: "" };
  }
  change = (e) => {
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };
  render() {
    return (
      <>
        <label>
          <input type="text" onChange={this.change}></input>
        </label>
        <p>{this.state.text}</p>
      </>
    );
  }
}
