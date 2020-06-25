import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import logo from '../../assets/logo/logo.png'
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            <nav className={styles.navBar}>
                <ul className={styles.navItemList}>
                    <li className={styles.navLogo}><img src={logo} alt="Logo" /></li>
                    <div className={styles.navItems}>
                        <li><p>Pokedex</p></li>
                        <li><p>Movedex</p></li>
                        <li><p>Itemdex</p></li>
                        <li><p>Abilitydex</p></li>
                    </div>
                    <li className={styles.navSearchBox}>
                        <input className={styles.searchBox} type="text" placeholder="Search" />
                        <label className={styles.searchIcon}>
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