import React from 'react';
import styles from './FiveDay.module.css';
function FiveDay({ fiveData }) {
  const list = fiveData.list;
  console.log(list);
  if (fiveData.length === 0) {
    return null;
  } else {
    return (
      <div className={styles.fiveDayContainer}>
        <div className={styles.fiveDayData}>
          <h1>
            {fiveData.city.name}{' '}
            <span>Population: {fiveData.city.population}</span>
          </h1>
          {list.map((day, index) => {
            return (
              <div key={index} className={styles.everyThirdHour}>
                <div className={styles.day}>
                  <h3>{day.dt_txt}</h3>
                  <h4>Current conditions: {day.weather['0'].main}</h4>
                </div>
                <section>
                  <div className={styles.item}>
                    <h4>Current Temp:</h4>
                    <p>{day.main.temp}°F</p>
                  </div>
                  <hr></hr>
                  <div className={styles.item}>
                    <h4>Feels Like:</h4>
                    <p>{day.main.feels_like}°F</p>
                  </div>
                  <hr></hr>
                  <div className={styles.item}>
                    <h4>High Temp:</h4>
                    <p>{day.main.temp_max}°F</p>
                  </div>
                  <hr></hr>
                  <div className={styles.item}>
                    <h4>Low Temp:</h4>
                    <p>{day.main.temp_min}°F</p>
                  </div>
                  <hr></hr>
                  <div className={styles.item}>
                    <h4>Wind Speed:</h4>
                    <p>{day.wind.speed}MPH</p>
                  </div>
                  <hr></hr>
                  <div className={styles.item}>
                    <h4>Wind Gust:</h4>
                    <p>{day.wind.gust}MPH</p>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FiveDay;
