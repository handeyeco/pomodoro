import React from 'react';

export default React.createClass({
  render: function () {
    let minutes = (Math.floor(this.props.seconds / 60)) + "";
    let seconds = (this.props.seconds - minutes * 60) + "";

    return (
      <h1>{minutes + ":" +
        (seconds.length < 2 ? "0" + seconds : seconds) + " " +
        this.props.status}</h1>
    )
  }
})
