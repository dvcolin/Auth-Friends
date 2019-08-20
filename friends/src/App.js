import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import LoginForm from './components/LoginForm'

function App() {
  return (
    <Router>
    <div className="App">
            <Link to="/login">Login</Link>

      
      <Route path='/login' component={LoginForm} />
    </div>
    </Router>
  );
}

export default App;
