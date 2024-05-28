import React from 'react';
import valle from './img/valle.png'
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
  <div className='App'>
    <header className='App-header'>
      <figure>
      <img src={ valle } className='App-img' alt='valle'/>
      </figure>
      <h1>Conjunto-residencial</h1>
      <nav>
        <Routes to="/Home">Home</Routes>
        <Routes to="/Login">Login</Routes>
      </nav>
      <p>
        Welcome Users
      </p>
      <Login />
      <Home/>
    </header>
        
  </div>
  </Router>
  );
}

export default App;
