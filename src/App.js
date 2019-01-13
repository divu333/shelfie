import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
       
         <Form/>
         <Dashboard/>
     
      </div>
    );
  }
}

export default App;
