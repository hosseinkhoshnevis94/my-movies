import React from 'react'
import Logo from './Logo/Logo'
import styles from './NavBar.module.css'

const NavBar = ({children}) => {
  return (
    <div className={styles.navBar}> 
        <Logo/>
        {children}
    </div>
  )
}

export default NavBar