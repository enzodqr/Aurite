import React, { Component } from 'react'

import Menu from '../components/Menu/Menu'
import Pokedex from '../components/Pokedex/Pokedex'

import './Normalize.css'
import './App.css'

export class App extends Component {
    render() {
        return (
            <div className="app imgBG">
                <Menu className="menu" />
                <Pokedex className="pokedex" />
                <div>Footer</div>
            </div>
        )
    }
}

export default App