import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  state = {
    counters: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };

  handleDelete = (id) => {
    console.log(this.state);
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
        {/* <Counter />
        <Counter />
        <Counter /> */}
      </div>
    );
  }
}
