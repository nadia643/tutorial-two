import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Person = ({img, name, age}) => {
  return(
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
    </article>
  );
};
Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number
}

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "Honey Boo Boo",
        age: 8
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        name: "Honey Boo Boo's mum",
        age: 59
      }
    ]
  }
  render() {
    return (
      <section> {this.state.people.map((person) =>(
        <Person 
        key={person.id} 
        img={person.img} 
        name={person.name} 
        age={person.age} />
      ))}
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
