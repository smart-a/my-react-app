import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 1 },
      { id: 3, value: 4 },
    ],
  };

  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) counters[index].value -= 1;
    this.setState({ counters });
  };

  handleDel = (counter) => {
    // let counters = this.state.counters;
    // const id = counters.indexOf(counter);
    // counters.splice(id, 1);

    let counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = [...this.state.counters];
    this.setState({ counters });
  };

  render() {
    let { counters } = this.state;
    return (
      <div>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => this.handleIncrement(counter)}
            onDecrement={() => this.handleDecrement(counter)}
            onDelete={() => this.handleDel(counter)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
