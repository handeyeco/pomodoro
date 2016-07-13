import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <h2>{this.props.name + " Time: " + this.props.current}</h2>
        <input
          onChange={this.props.handleChange}
          type="range"
          name={this.props.name}
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step} />
      </div>
    )
  }
})
