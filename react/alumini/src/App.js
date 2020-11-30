import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    console.log(this);
    this.state = {
      students: [
        {
          name:'steve',
          id: 'asc1',
        },
        {
          name:'Bill',
          id: 'asc2',
        },
        {
          name:'tim cook',
          id: 'asc3',
        },
        {
          name:'Elon Musk',
          id: 'asc4',
        },

      ]
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({students: users}));
}
  render() {
    return (
      <div className='App'>
        {
          this.state.students.map((student) =>{
            return <h1 key={student.id}>{student.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
