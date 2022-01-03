import React from 'react';
import styles from './Landing.module.css';
import { useEffect } from 'react';

function Landing({ setOneData, setFiveData, handleSubmit, handleChange, searchString }) {
  useEffect(() => {
    setOneData([]);
    setFiveData([]);
  }, []);
  return (
    <div className={styles.landingContainer}>
      <h1>Welcome to 5Day weather!</h1>
      <p>
        Here you can check out the weather in any city with the option to see
        the forecast up to 5 days!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          id='search'
          className={styles.searchBar}
          onChange={handleChange}
          value={searchString}
          autoComplete='off'
          placeholder='Weathering...'
        />
        <input type='submit' value='Weather!' className={styles.searchBtn} />
      </form>
    </div>
  );
}

export default Landing;
