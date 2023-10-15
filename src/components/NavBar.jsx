import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";



function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

    const handleClick = (index) => {
        setPokemonIndex(index)
        const selectedPokemon = pokemonList[index];
        if (selectedPokemon.name === 'pikachu') {
            alert('pika pikachu !!!');
        }
    }






    return (<div>
        {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => { handleClick(index) }}>{pokemon.name}</button>
        ))
        }
    </div >)
}


{/* NavBar.propTypes = {

        }; */}

export default NavBar;

//</div>  if (pokemonIndex > 0 && pokemonIndex < pokemonList.length - 1) {
//     return (
//         <div>
//             <button onClick={handleClick}>Précédent</button>
//             <button onClick={handleClick2}>Suivant</button>
//         </div >
//     )
// } else if (pokemonIndex === pokemonList.length - 1) {
//     return (
//         <div>
//             <button onClick={handleClick}>Précédent</button>
//         </div >
//     )
// } else if (pokemonIndex === 0) {
//     return (
//         <div>
//             <button onClick={handleClick2}>Suivant</button>
//         </div >
//     )
// }
// )}}