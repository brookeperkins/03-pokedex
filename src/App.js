import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './SearchPage/SearchPage.js';
import PokeDetails from './DetailPage/PokeDetails.js';

export default class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <Router>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/PokeDetails/">Pokémon Details</Link>
          </nav>
          <main>
          <Switch>
              <Route
                  path="/" 
                  exact
                  render={(routerProps) => <Search {...routerProps} />} 
              />
              <Route 
                  path="/PokeDetails/:userPokemon" 
                  exact
                  render={(routerProps) => <PokeDetails {...routerProps} />} 
              />
          </Switch>
          </main>
        </Router>
        <Footer />
      </>
    )
  }
}
