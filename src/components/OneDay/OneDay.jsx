import React from 'react';
import styles from './OneDay.module.css';
function OneDay({ oneData }) {
  if (oneData.length === 0) {
    return null;
  } else {
    return (
      <div className={styles.oneDayContainer}>
        <h1>{oneData.name}</h1>
        <section>
          <h2>Current Temp:</h2>
          <p>{oneData.main.temp}°F</p>
        </section>
        <section>
          <h2>Feels Like:</h2>
          <p>{oneData.main.feels_like}°F</p>
        </section>
        <section>
          <h2>High:</h2>
          <p>{oneData.main.temp_max}°F</p>
        </section>
        <section>
          <h2>Low:</h2>
          <p>{oneData.main.temp_min}°F</p>
        </section>
      </div>
    );
  }
}

export default OneDay;
