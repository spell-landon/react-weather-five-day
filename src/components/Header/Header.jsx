import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
function Header({
  oneData,
  fiveData,
  searchString,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navigation}>
        <h1>
          <Link to='/' className={styles.link}>
            5Day
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/one-day' className={styles.link}>
              1 Day Weather
            </Link>
          </li>
          <li>
            <Link to='/five-day' className={styles.link}>
              5 Day Weather
            </Link>
          </li>
          <li>
            <Link to='/about' className={styles.link}>
              About
            </Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            id='search'
            className={styles.searchBar}
            onChange={handleChange}
            value={searchString}
            autoComplete='off'
          />
          <input type='submit' value='Search' className={styles.searchBtn} />
        </form>
      </nav>
    </div>
  );
}

export default Header;
