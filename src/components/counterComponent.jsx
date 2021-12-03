import React, { Component } from "react";

class Counter extends Component {
  state = {};

  formatValue() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div>
        
        <p>
          {counter.name}
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm ml-2"
            onClick={() => onDecrement(counter)}
            disabled={this.getDisable(counter.value)}
          >
            -
          </button>
          <button
            onClick={() => onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </p>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getDisable(value) {
    return value > 0 ? false : true;
  }
}

export default Counter;
