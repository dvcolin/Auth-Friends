import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import LoginForm from './components/LoginForm'
import Friends from './components/Friends'
import SignUpForm from './components/SignUpForm'

function App() {
  return (
    <Router>
    <div className="App">
        <Link to="/login">Login</Link>
      
      <Route path='/login' component={props => <LoginForm {...props} />} />
      <PrivateRoute path='/friends' component={props => <Friends {...props} />} />
    </div>
    </Router>
  );
}

export default App;
