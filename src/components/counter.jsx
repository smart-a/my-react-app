import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter } = this.props;
    let value = counter.value === 0 ? "Zero" : counter.value;
    return (
      <div>
        <span className={this.setClasses()}>{value}</span>
        <button
          className="btn btn-primary btn-sm mr-2"
          onClick={this.props.onIncrement}
        >
          +
        </button>

        <button
          className="btn btn-secondary btn-sm mr-2"
          onClick={this.props.onDecrement}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm mr-2"
          onClick={this.props.onDelete}
        >
          Del
        </button>
      </div>
    );
  }

  setClasses() {
    const len = this.props.counter.value;
    let badge = "badge m-2 badge-";
    badge += len === 0 ? "warning" : "primary";
    return badge;
  }
}

export default Counter;
