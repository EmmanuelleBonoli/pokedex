
import PropTypes from 'prop-types';

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

function PokemonCard(props) {

    let pokemon = props.pokemon;
    if (pokemon.imgSrc !== null) {
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