import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends People {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <p> Name: { this.attributes.name }; </p>
          <p> Age: { this.attributes.age }; </p>
        </p>
      </div>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class People extends Component{
    constructor(){
        super();
        this.attributes = {
            name: "Tom",
            age: "30",
            father: "Andy",
            mother: "Bonnie",
        };
        this.childrenList = {
            children1: "Cathy",
            children2: "Don",
            children3: "Eddie",
        }

        render(){
            const { Name } = this.props;
            return (
                <div>
                    <p> Name: { this.attribute.name }; </p>
                    <p> Age: { this.attribute.age }; </p>
                </div>
            )
        };
    }
}

People.proTypes = {
    Name: PropTypes.string.isRequired,
    //setPokemonHandler: PropTypes.func.isRequired,
};

export default App;
