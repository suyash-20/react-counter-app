import React, { Component } from "react";

class Counter extends Component {
  //state is a class property
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1"],

  //Controlled component instead

  render() {
    return (
      <div>
        <span style={{ fontSize: 15 }} className={this.badgeColors()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning btn-sm m-1"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-4"
        >
          Delete
        </button>
      </div>
    );
  }

  //local state method

  /*   handleIncrement = () => {
      this.setState({ value: this.state.value + 1 });
      console.log("Increment clicked", this);
    }; */

  /*   handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  }; */

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li> //each list element should have an unique key only amongst its list elements to sync up the changes of virtual DOM into DOM
  //       ))}
  //     </ul>
  //   );
  // }

  badgeColors() {
    let badgeClasses = "badge m-2 badge-";
    badgeClasses += this.props.counter.value === 0 ? "primary" : "info";
    return badgeClasses;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
