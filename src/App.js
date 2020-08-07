import React from 'react';
import './App.module.css';
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
      <body>
        <Header />
        <Router>
          <nav>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/PokemonDetails/">Pokemon Details</Link></li>
          </nav>
          <main>
          <Switch>
              <Route 
                  //page with search bar/homepage
                  path="/" 
                  exact
                  render={(routerProps) => <Search {...routerProps} />} 
              />
              <Route 
                  //page with userPokemon PokemonDetails
                  path="/PokemonDetails/:userPokemon" 
                  exact
                  render={(routerProps) => <PokeDetails {...routerProps} />} 
              />
          </Switch>
          </main>
        </Router>
        <Footer />
      </body>
    )
  }
}