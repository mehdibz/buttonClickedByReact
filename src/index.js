import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

class WasTheButtonClicked extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonHasBeenClicked: false,
      howManyTimes: 0
    };
  }
  render() {
    const changeButtonHasBeenClicked = () => {
      this.setState(previousState => {
        return {
          buttonHasBeenClicked: true,
          howManyTimes: previousState.howManyTimes + 1
        };
      });
    };
    return (
      <div>
        <h1>Was the button clicked?</h1>
        <p>{this.state.buttonHasBeenClicked ? "Yes" : "No"}</p>
        <p>How many times has it been clicked? {this.state.howManyTimes}</p>
        <button onClick={changeButtonHasBeenClicked}>The Button</button>
      </div>
    );
  }
}

ReactDOM.render(<WasTheButtonClicked />, root);
