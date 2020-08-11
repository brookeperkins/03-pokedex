import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {

        return (
            <div className='searchBar'>
                <input onChange={this.props.handleChange} value={this.props.search} />
                <select onChange={this.props.handleSearchBy} value={this.props.searchBy}>
                    <option value='pokemon'>Name</option>
                    <option value='type'>Type</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                </select>
                <button onClick={this.props.handleClick}>Find Pokémon!</button>
            </div>
        )
    }
}