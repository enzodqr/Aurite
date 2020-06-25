import React, { Component } from 'react'

import Menu from '../components/Menu/Menu'
import Pokedex from '../components/Pokedex/Pokedex'

import './Normalize.css'
import './App.css'

import pokes from '../json/pokemons.json'

export class App extends Component {
    render() {
        const pokemons = pokes.pokemon

        return (
            <div className="app imgBG">
                <Menu className="menu" />
                <Pokedex className="pokedex" pokemons={pokemons} />
                <div>Footer</div>
            </div>
        )
    }
}

export default App