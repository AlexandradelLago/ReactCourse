import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
// props are going or coming to , outside the components
// state is something u use in your own component 
// you have to be careful with state , do not overused in ...??

  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Manu', age :29},
  
    ]
  }
// IF STATE CHANGES IT WILL RE RENDER THE DOM!!!! ONLY WITH STATE NO PROPS
  render() {
    return (
      // is not really js, it is jsx, write html and gets compiled to the below one jsx
      // we can´t use class in jsx, need to use CLASSNAME
      // 
      <div className="App">
      <button>Search Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name="lust" age="33">
      My Hobbies: this is the children props
      </Person>
       <h1>Hi, I am a React App</h1>
       <p>this is really working</p>
      </div>
    );
   // return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi, I\'m a REact App!!!'))
  }
}

export default App;
