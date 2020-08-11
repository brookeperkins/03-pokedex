import React from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends React.Component {
    render() { 
        const {
            pokeState,
            handlePrev,
            handleNext,
            currentPage,
            totalPages 
        } = this.props;
        return (
            <section>
                {
                    pokeState.length > 0 && <div>
                        {
                            Number(currentPage) !== 1 && <button onClick={handlePrev}>Prev</button>
                        }{
                            Number(currentPage) !== Number(totalPages) && <button onClick={handleNext}>Next</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }
                <ul>
                    {pokeState.map(pokemon => <PokeItem pokemon={pokemon} />)}
                </ul>
            </section>
        );
    }
}
 
export default PokeList;