import React, { Component } from 'react';
import PropTypes from 'prop-types';



function NavBar({ pokemonIndex, pokemonList, handleClick, handleClick2 }) {

    if (pokemonIndex > 0 && pokemonIndex < pokemonList.length - 1) {
        return (
            <div>
                <button onClick={handleClick}>Précédent</button>
                <button onClick={handleClick2}>Suivant</button>
            </div >
        )
    } else if (pokemonIndex === pokemonList.length - 1) {
        return (
            <div>
                <button onClick={handleClick}>Précédent</button>
            </div >
        )
    } else if (pokemonIndex === 0) {
        return (
            <div>
                <button onClick={handleClick2}>Suivant</button>
            </div >
        )
    }
}

NavBar.propTypes = {

};

export default NavBar;