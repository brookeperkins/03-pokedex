import React from 'react';
import './App.css';
import Header from './Header';
import request from 'superagent';
import './App.css'
import Footer from './Footer';

export default class App extends React.Component {
  state = {
    userSearch: '',
    isLoading: false, 
    pokeStats: []
  }

  handleClick = async () => {
    this.setState({ isLoading: true })
    const pokemonData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.userSearch}`)

    this.setState({
      pokeStats: pokemonData.body.results,
      isLoading: false
    })

    console.log(this.state.pokeStats)
  }

  render() {
    return (
      <body>
        <Header/ >
        <main>
            
            <section className="search">
              <input onChange={(e) => this.setState({ userSearch: e.target.value })} type="text"></input>
              <button onClick={this.handleClick}>Find Pokémon</button>
            </section>
            
            <section className="pokeDisplay">
              {
                this.state.isLoading
                  ? <h2>LOADING...</h2> : this.state.pokeStats.map(onePokemon => <img src={onePokemon.url_image} alt={onePokemon.pokemon} key={onePokemon.pokemon}/>)
              }
            </section>

        </main>
        <Footer />
      </body>
    )
  }
}