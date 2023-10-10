

function PokemonCard(props) {
    console.log(props)

    let pokemon = props.pokemon;

    if (pokemon.imgSrc === "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png") {
        return (
            <figure>
                <img src={pokemon.imgSrc}></img>
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        );
    } else {
        return (
            <figure>
                <p>???</p>
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        )
    }
}

export default PokemonCard;

//     if (Object.hasOwn(pokemon, "imgSrc")) {
//         return <figure>
//             <img src={pokemon.imgSrc}></img>
//             <figcaption>{pokemon.name}</figcaption>
//         </figure>
//     } else {
//         return (
//             <figure>
//                 <p>???</p>
//                 <figcaption>{pokemon.name}</figcaption>
//             </figure>
//         )
//     }
// }