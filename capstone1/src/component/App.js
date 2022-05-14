
import '../css/App.css';
import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Directional from './Directional';
import Alert from './Alert';

class App extends Component {
  render() {
  return (
    <Router>
      <Header/>
      <Directional/>
      <Footer/>
      <Alert/>
    </Router>
    
  );
  }
}

export default App;
