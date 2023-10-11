// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from "react"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  if (pokemonIndex > 0 && pokemonIndex < pokemonList.length - 1) {
    return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClick}>Précédent</button>
        <button onClick={handleClick2}>Suivant</button>
      </div >
    )
  } else if (pokemonIndex === pokemonList.length - 1) {
    return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClick}>Précédent</button>
      </div >
    )
  } else if (pokemonIndex === 0) {
    return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClick2}>Suivant</button>
      </div >
    )
  }
}

export default App
