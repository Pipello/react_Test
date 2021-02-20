import React, { Component } from 'react';
import './App.css';
import './general.css';
import Cover from './components/cover'

class App extends Component{
  render(){
    return (
      <React.Fragment>
       <Cover/>
      </React.Fragment> 
    );
  }
}

export default App;
