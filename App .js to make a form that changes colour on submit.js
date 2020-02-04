// import "./App.css";
// import React, { Component } from "react";

// class Form extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const name = this.refs.myName;
//     const nameValue = name.value;

//     const email = this.email.value;

//     const text = this.refs.myText;
//     text.style.color = 'red'
//     console.log(nameValue, email, text);

//   }
//   render() {
//     return (
//       <section>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" ref="myName"/>
//           <input type="email" ref={(orange) => this.email = orange} />
//           <button type="submit">Submit</button>
//         </form>
//         <p ref="myText">Consectetur sint deserunt eu magna consectetur dolor dolor elit reprehenderit.</p>        
//       </section>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return <Form />;
//   }
// }

// export default App;
