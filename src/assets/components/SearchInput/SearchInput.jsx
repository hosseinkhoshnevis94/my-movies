import React, { useEffect, useRef } from 'react'
import styles from './SearchInput.module.css'

const SearchInput = ({query,setQuery}) => {
    const inputEl = useRef(null);
    useEffect(
      function () {
        function callback(e) {
          if (document.activeElement === inputEl.current) return;
  
          if (e.code === "Enter") {
            inputEl.current.focus();
            setQuery("");
          }
        }
  
        document.addEventListener("keydown", callback);
        return () => document.addEventListener("keydown", callback);
      },
      [setQuery]
    );
  
    return (
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    );
}

export default SearchInput