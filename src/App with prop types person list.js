// import './App.css';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// const Person = ({ person: {img, name, age, info} }) => {
//   return(
//     <article>
//       <img src={img} alt="person" />
//       <h4>Name: {name}</h4>
//       <h4>Age: {age}</h4>
//       <h4>Info: {info || 'Default info about the person'}</h4>

//     </article>
//   );
// };
// Person.propTypes = {
//   person: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     info: PropTypes.string.isRequired
//   })
// }

// Person.defaultProps = {
//   person: {
//     info: 'Default information about the person'
//   }
// }

// class PersonList extends Component {
//   state = {
//     people: [
//       {
//         id: 1,
//         img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//         name: "Honey Boo Boo",
//         age: 8
//       },
//       {
//         id: 2,
//         img: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
//         name: "Honey Boo Boo's mum",
//         age: 59
//       },
//       {
//         id: 3,
//         img: "https://randomuser.me/api/portraits/thumb/men/81.jpg",
//         name: "Honey Boo Boo's dad",
//         age: 87,
//         info: 'Honey Boo Boo\'s dad is a one man band'
//       }
//     ]
//   }
//   render() {
//     return (
//       <section> {this.state.people.map((person) =>(
//         <Person 
//         key={person.id} 
//         person={person}


//         // img={person.img} 
//         // name={person.name} 
//         // age={person.age} 
//         // info={person.info} 
//         />
//       ))}
//       </section>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return <PersonList />
//   }
// }

// export default App;
