import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import Signup from './Signup.jsx'
import LogIn from './LogIn.jsx'
import Host from './host'
import Review from './review'
import Wishlist from './wishlist'
import Chat from './chat'



import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LogOut from './logOut';

function App() {
  return (
    <div className="app">
      <Router>
        < Header />
        <img src="/mudit.jpg" id="bg" />
        <main className="container">
          <Chat />
          <Switch>
            <Route path="/host">
              <Host />
            </Route>
            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/logOut">
              <LogOut />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>


        <Footer />

      </ Router>
    </div>
  );
}

export default App;
