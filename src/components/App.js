import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
//import ReadWrite from './ReadWrite';

import FileUpload from './FileUpload';





class App extends Component {
  render() {
    return (
      <div>
        <h2> File upload </h2>
        <FileUpload />
      </div>
    );
  }
}

export default App;