import React, { Component } from "react";

export default class Counter extends Component {
  // props

  // this.props - from parent down here

  //   name = "Hello World";
  state = {
    name: "Hello Wolrd",
    image: "http://picsum.photos/200",
    count: 0,
    count2: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor() {
    super();
  }

  getName() {
    return <h1>Big Name</h1>;
  }

  formatText() {
    if (this.state.count > 0) {
      return this.state.count;
    }
    return "Zero";
  }

  getClassName() {
    if (this.state.count > 0) {
      return "badge bg-primary";
    } else {
      return "badge bg-warning text-dark";
    }
  }

  renderTags() {
    return (
      this.state.tags.length > 0 && (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )
    );
  }

  handleIncrement() {
    // this.state.count++;

    this.setState({ ...this.state, count: this.state.count + 1 });
    // console.log("count", this.state.count);
  }

  handleDecrement() {
    // this.state.count++;

    this.setState({ count: this.state.count - 1 });
    // console.log("count", this.state.count2);
  }

  render() {
    console.log("props", this.props);
    return (
      <>
        <div className="m-4">
          <span className={this.getClassName()}>{this.formatText()}</span>
          <button
            disabled={this.state.count == 0}
            onClick={() => this.handleDecrement()}
            className="btn btn-primary ms-4">
            -
          </button>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary ms-1">
            +
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger ms-1">
            Delete
          </button>
        </div>
        {/* {this.getName()} */}
        {/* {this.renderTags()} */}
        {/* <img src={this.state.image}></img> */}
        {/* <div>Name: {this.state.name}</div> */}
        {/* <div>Counter: {this.state.count}</div> */}
        {/* <div>Counter: {this.state.count2}</div>
        <button onClick={() => this.increment2()}>Increment</button> */}
      </>
    );
  }
}
