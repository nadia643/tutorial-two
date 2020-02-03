import logo from './logo.svg';
import './App.css';
import React, { component } from 'react';
import { render } from '@testing-library/react';


const Person = ({img, name, age}) => {
  return(
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
    </article>
  )
}

class PersonList extends Component {
  render() {
    return (
      <section>
        <Person />
      </section>
    )
  }
}

class App extends Component {
  render() {
    return <PersonList />
  }
}

export default App;
