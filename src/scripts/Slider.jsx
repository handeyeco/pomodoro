import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="slider">
        <h2>{this.props.current + " Minutes of " + this.props.name}</h2>
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
