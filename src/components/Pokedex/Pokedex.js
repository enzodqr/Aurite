import React from 'react'
import styles from './Pokedex.module.css'

import pokes from '../../json/pokemons.json'

const Pokedex = () => {

    // Access the pokemon's types and sprites
    // Will be change when the DB has been implemented

    const img_type = require.context('../../assets/types', true);
    const img_sprite = require.context('../../assets/sprites', true);

    const pokemons = pokes.pokemon.map((pokemon) => {

        let pokemon_type = <td><img src={img_type(`./${pokemon.type1}.png`)} className={styles.imgType} alt='Pokemon Type' /></td>
        let pokemon_sprite = <td><img src={img_sprite(`./${pokemon.name}.png`)} className={styles.imgSprite} alt='Pokemon Sprite' /></td>

        console.log(typeof (pokemon.type2))

        if (pokemon.type2 !== "") {
            pokemon_type = <td>
                <img src={img_type(`./${pokemon.type1}.png`)} className={styles.imgType} alt='Pokemon Type' />
                <img src={img_type(`./${pokemon.type2}.png`)} className={styles.imgType} alt='Pokemon Type' />
            </td>
        }

        // The key must be check for the regional variants
        return <tr key={pokemon.number}>
            <td>{pokemon.number}</td>
            {pokemon_sprite}
            <td>{pokemon.name}</td>
            {pokemon_type}
            <td>{pokemon.ability1} {pokemon.ability2}</td>
            <td>{pokemon.hidden_ability}</td>
            <td>{pokemon.hp}</td>
            <td>{pokemon.atk}</td>
            <td>{pokemon.def}</td>
            <td>{pokemon.spatk}</td>
            <td>{pokemon.spdef}</td>
            <td>{pokemon.spd}</td>
        </tr>
    }

    )
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Abilities</th>
                        <th>Hidden Ability</th>
                        <th>HP</th>
                        <th>ATK</th>
                        <th>DEF</th>
                        <th>Sp.ATK</th>
                        <th>Sp.DEF</th>
                        <th>SPD</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons}
                </tbody>
            </table>
        </div>
    )
}

export default Pokedex
