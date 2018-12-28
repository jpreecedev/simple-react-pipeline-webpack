import React from "react";

import styles from "./counter.module.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0
    };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(increment) {
    const { count } = this.state;

    if (increment) {
      this.setState({
        count: count + 1
      });
    } else {
      this.setState({
        count: count - 1
      });
    }
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>The current count is {count}</p>
        <button
          className={styles.button}
          onClick={() => this.updateCount(true)}
        >
          Increment
        </button>
        <button onClick={() => this.updateCount(false)}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
