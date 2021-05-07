import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Member from './Member';
import PrivateRoute from './PrivateRoute';
import UserProfile from './UserProfile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute exact path="/members">
          <Member />
        </PrivateRoute>
        <Route exact path="/">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/userprofile">
          <UserProfile />
        </PrivateRoute>
      </BrowserRouter>
    </div>
  );
}

export default App;
