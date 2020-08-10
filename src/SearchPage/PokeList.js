import React from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends React.Component {
    render() { 
        const {
            pokemons,
            handlePrev,
            handleNext,
            currentPage,
            totalPages 
        } = this.props;
        return (
            <section>
                {
                    pokemons.length > 0 && <div>
                        {
                            Number(currentPage) !== 1 && <button onClick={handlePrev}>Prev</button>
                        }{
                            Number(currentPage) !== Number(totalPages) && <button onClick={handleNext}>Next</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }
                <ul>
                    {pokemons.map(pokemon => <PokeItem pokemon={pokemon} />)}
                </ul>
            </section>
        );
    }
}
 
export default PokeList;