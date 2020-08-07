import React from 'react'
import { Link } from 'react-router-dom';
import './PokeItem.module.css';

export default class PokeItem extends React.Component {
    render() {
        return (
            <Link to={`/PokeDetails/${this.props.pokemon.pokemon}`}>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon}/>
            </Link>
        )
    }
}
