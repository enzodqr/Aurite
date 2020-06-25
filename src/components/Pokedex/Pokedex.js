import React from 'react'
import './Pokedex.css'

const Pokedex = (props) => {

    const imgType = require.context('../../assets/types', true);

    const pokemons = props.pokemons.map((pokemon) => {

        let pokeType = null
        let pokeAbility = null
        let pokeHAbility = null


        if (pokemon.type2 === "*") {
            pokeType = <td><img src={imgType(`./${pokemon.type1}.png`)} className='imgType' alt='Type' /></td>
        } else {
            pokeType = <td>
                <img src={imgType(`./${pokemon.type1}.png`)} className='imgType' alt='Type' />
                <img src={imgType(`./${pokemon.type2}.png`)} className='imgType' alt='Type' />
            </td>
        }

        if (pokemon.ability2 === "*") {
            pokeAbility = <td>{pokemon.ability1}</td>
        } else {
            pokeAbility = <td>{pokemon.ability1} {pokemon.ability2}</td>
        }

        if (pokemon.hAbility === "*") {
            pokeHAbility = <td></td>
        } else {
            pokeHAbility = <td>{pokemon.hAbility}</td>
        }

        return <tr key={pokemon.number}>
            <td>{pokemon.number}</td>
            <td>{pokemon.name}</td>
            {pokeType}
            {pokeAbility}
            {pokeHAbility}
            <td>{pokemon.hp}</td>
            <td>{pokemon.atk}</td>
            <td>{pokemon.def}</td>
            <td>{pokemon.spatk}</td>
            <td>{pokemon.spdef}</td>
            <td>{pokemon.spd}</td>
            <td>{pokemon.total}</td>
        </tr>
    }

    )
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pokemon</th>
                        <th>Type</th>
                        <th>Ability</th>
                        <th>Hidden Ability</th>
                        <th>HP</th>
                        <th>ATK</th>
                        <th>DEF</th>
                        <th>SpATK</th>
                        <th>SpDEF</th>
                        <th>SPD</th>
                        <th>Total</th>
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
