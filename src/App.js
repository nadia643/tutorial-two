import './App.css';
import React, { Component } from 'react';

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  }
  handleChange = (event) => {
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);

  //   if (event.target.name === 'firstName') {
  //     const textValue = event.target.value;  
  //   this.setState({
  //     firstName: textValue
  //   });

  // }
this.setState({
  [event.target.name]:[event.target.value]
})
};

handleSubmit = (e) => {
  e.preventDefault(); //app doesn't get refreshed unless you press submit
}

  render() {
    return <section>
      <article>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          name="firstName" 
          value={this.state.firstName}
          onChange={this.handleChange} 
          />
          <input 
          type="text" 
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}  />
        <button tpye="submit">Submit</button>

        </form> </article>
      <article>
        <h1>People</h1>
        <div>{this.state.people}</div>
      </article>
    </section>
  }

}

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
