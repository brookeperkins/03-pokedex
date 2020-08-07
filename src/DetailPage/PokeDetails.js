import React from 'react';
import request from 'superagent';
import styles from '../App.module.css';

export default class PokeDetails extends React.Component {
 state = {
    selectedPokemon: ''
}

componentDidMount = async () => {
    const pokemonName = this.props.match.params.userPokemon
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemonName}`)
    const selectedPokemon = data.body.results[0];

    this.setState({ selectedPokemon: selectedPokemon })
}
render() {
    const { selectedPokemon } = this.state;
    return (
        <div className={styles.pokeDetails}>
            {

            selectedPokemon ?

            <div className={styles.pokeDetails}> 
            {/* not sure how to style */}
                <h2 className={styles.h2}>Look! It's {this.state.selectedPokemon.pokemon}!</h2>
                <img src={this.state.selectedPokemon.url_image} alt={this.state.selectedPokemon.pokemon}/>
                <p> TYPE: {this.state.selectedPokemon.type_1}</p>
                <p> ID: {this.state.selectedPokemon.species_id}</p>

            </div>

            :

            <h2 className={styles.h2}>LOADING</h2>

            }

        </div>
    )
}
}
