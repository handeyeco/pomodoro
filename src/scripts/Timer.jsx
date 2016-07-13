import React from 'react';

export default React.createClass({
  render: function () {
    let minutes = (Math.floor(this.props.seconds / 60)) + "";
    let seconds = (this.props.seconds - minutes * 60) + "";

    return (
      <div className="timer">
        <h1>{minutes + ":" + (seconds.length < 2 ? "0" + seconds : seconds)}</h1>
        <p>{this.props.status}</p>
      </div>
    )
  }
})
