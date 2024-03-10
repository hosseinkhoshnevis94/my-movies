import React from 'react'
import Logo from './Logo/Logo'
import styles from './NavBar.module.css'
import SearchInput from '../SearchInput/SearchInput'
import NumResults from '../NumResult/NumResult'

const NavBar = ({query,setQuery,movies}) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.left}>
         <Logo/>
        <SearchInput query={query} setQuery={setQuery} />
        </div> 
        <div>
       {movies?.length>0 && <NumResults movies={movies} />}
        </div>
    </div>
  )
}

export default NavBar