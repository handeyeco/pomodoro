import React from "react";
import ReactDOM from "react-dom";

import Slider from "./Slider.jsx";
import Timer from "./Timer.jsx";

const Main = React.createClass({
  getInitialState: function () {
    return {
      workTime: 25,
      breakTime: 5,
      counting: 25 * 60,
      working: true
    }
  },

  handleSliderChange: function (event) {
    clearInterval(this.state.interval);
    this.setState({
      working: true
    });

    let newValue = event.target.value;
    let seconds = newValue * 60;

    if (event.target.name === "Work") {
      this.setState({
        active: false,
        workTime: newValue,
        counting: seconds
      });
    } else if (event.target.name === "Break") {
      this.setState({
        active: false,
        breakTime: newValue,
      });
    }
  },

  tick: function () {
    if (!this.state.counting) {
      let status = !this.state.working;
      let count = (status ? this.state.workTime : this.state.breakTime) * 60;

      this.setState({
        counting: count,
        working: status
      });
    } else {
      let newNumber = this.state.counting - 1;

      this.setState({
        counting: newNumber
      });
    }
  },

  handleStart: function () {
    let interval = setInterval(this.tick, 1000);

    this.setState({
      interval: interval
    });

  },

  handleReset: function () {
    clearInterval(this.state.interval);
    this.setState(this.getInitialState());
  },

  render: function () {

    return (
      <div className={this.state.working ? "work" : "break"}>
        <Timer seconds={this.state.counting} status={this.state.working ? "Work" : "Break"} />
        <div className="settings-container">
          <Slider handleChange={this.handleSliderChange} name="Work" current={this.state.workTime} value={this.state.workTime} step="5" min="5" max="60" />
          <Slider handleChange={this.handleSliderChange} name="Break" current={this.state.breakTime} value={this.state.breakTime} step="5" min="5" max="60" />
        </div>
        <button className="start" onClick={this.handleStart}>Start</button>
        <button className="reset" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('container'));
