import React from 'react'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import logo from '../assets/logo/logo.png'

const Menu = () => {
    return (
        <div>
            <nav className="nav-bar">
                <ul className="nav-item-list">
                    <li className="nav-logo"><img src={logo} alt="Logo" /></li>
                    <div className="nav-items">
                        <li><p>Pokedex</p></li>
                        <li><p>Movedex</p></li>
                        <li><p>Itemdex</p></li>
                        <li><p>Abilitydex</p></li>
                    </div>
                    <li className="nav-search-box">
                        <input className="search-box" type="text" placeholder="Search" />
                        <label className="search-icon">
                            <span><SearchIcon /></span>
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
//