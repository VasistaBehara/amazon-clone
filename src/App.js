import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{},dispatch ] = useStateValue();
  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => { 
      console.log('THE USER IS =>>>>', authUser);

      if (authUser) {
        //user just logged in or the userr was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else { 
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
        <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
