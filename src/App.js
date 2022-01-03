import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// COMPONENTS
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import OneDay from './components/OneDay/OneDay';
import FiveDay from './components/FiveDay/FiveDay';
import About from './components/About/About';
function App() {
  const [oneData, setOneData] = useState([]);
  const [fiveData, setFiveData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const searchOptions = {
    apiKey: process.env.REACT_APP_WEATHER_KEY,
    oneDayAPI: `api.openweathermap.org/data/2.5/weather?q=`,
    fiveDayAPI: `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`,
  };
  function getOneWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchString}&units=imperial&appid=${searchOptions.apiKey}`
    )
      .then((res) => res.json())
      .then((res) => {
        setOneData(res);
        console.log(res);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        return;
      });
  }
    function getFiveWeather() {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchString}&units=imperial&appid=${searchOptions.apiKey}`
      )
        .then((res) => res.json())
        .then((res) => {
          setFiveData(res);
          console.log(res);
          setLastSearch(searchString);
          setSearchString('');
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          return;
        });
    }

  function handleChange(e) {
    setSearchString(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getOneWeather(searchString);
    getFiveWeather(searchString)
  }
  return (
    <div className='App'>
      <header>
        <Header
          oneData={oneData}
          fiveData={fiveData}
          searchString={searchString}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing setOneData={setOneData} setFiveData={setFiveData} handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString}/>} />
          <Route path='/one-day' element={<OneDay oneData={oneData}/>} />
          <Route path='/five-day' element={<FiveDay fiveData={fiveData}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
