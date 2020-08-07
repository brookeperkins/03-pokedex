import React from 'react'
import styles from '../App.module.css'
import request from 'superagent';
import PokeItem from './PokeItem.js'

export default class Search extends React.Component {
    state = { 
      search: '',
      searchBy: 'pokemon',
      isLoading: false,
      pokeState: []
    }
  
    handleClick = async () => {
      this.setState({ isLoading: true })
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);
  
      this.setState({ 
        pokeState: data.body.results,
        isLoading: false,
       })
    }
    
    render() {
      const { isLoading, pokeState } = this.state;
      
      return (
        <div className={styles.main}>
          {/* <div className={styles.searchDiv}> */}
            <input onChange={(e) => this.setState({ search: e.target.value})} />
            <select onChange={(e) => { this.setState({ searchBy: e.target.value })} }>
              <option value='pokemon'>name</option>
              <option value='type'>type</option>
              <option value='attack'>attack</option>
              <option value='defense'>defense</option>
            </select>
            <button onClick={this.handleClick}>Find Pokemon!</button>
            {/* </div> */}
            {
              isLoading 
                ? <p className={styles.spin}>LOADING</p> 
                : pokeState.map(poke => <PokeItem pokemon={poke} />)
            }
        </div>
      );
    }
  }