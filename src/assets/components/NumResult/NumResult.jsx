import React from 'react'
import styles from './NumResult.module.css'
const NumResults = ({ movies }) => {
    return (
        <p className={styles.numResults}>
          <strong>{movies.length}</strong> {movies.length > 1 ? 'results' : 'result'}
        </p>
      );
}

export default NumResults