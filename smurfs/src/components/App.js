import React, { Component } from "react";
import "./App.css";
// import { Route} from 'react-router-dom';
import SmurfList from './SmurfList';
import Form from './Form';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className = 'grid-2'>
           <SmurfList/>
           <Form />
        </div>

      </div>
    );
  }
}
export default App;
