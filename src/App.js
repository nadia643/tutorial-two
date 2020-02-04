import "./App.css";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrease = () => {
    console.log('called first:', this.state.count);
    this.setState({
      count: this.state.count + 1
    }, 
    ()=>console.log('called second: ' , this.state.count));
    // this.setState({
    //   count: this.state.count + 2
    // });
    // console.log('called third:', this.state.count);
  }

  handleDecrease = () => {
    console.log('called first:', this.state.count);
    this.setState((state, props) => {
      return {count: state.count -1 };
    }, () => console.log('called second: ' , this.state.count));
    // this.setState((state, props) => {
    //   return {count: state.count -2 }
    // });

    console.log('called third:', this.state.count);

  }
  render() {
    return(
        <div style={{margin: "3rem", fontSize: "2rem"}}>
          <button type="button" onClick={this.handleDecrease}>Decrease</button>
          <span style={{margin: "1rem"}}>Count: {this.state.count}</span>
          <button type="button" onClick={this.handleIncrease}>Increase</button>
        </div>
  
    )
  }
}

class App extends Component {
  render() {
    return <Counter amount="2" />;
  }
}

export default App;
