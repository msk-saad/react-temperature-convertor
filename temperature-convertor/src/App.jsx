import React, { useState } from 'react'
import './styles/app.css'

const App = () => {

  const title = "Temperature Convertor 🔥"

  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  // Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
  
  // Convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  
  // Convert Celsius to Kelvin
  const celsiusToKelvin = (celsius) => celsius + 273.15;
  
  // Convert Fahrenheit to Kelvin
  const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5 / 9 + 273.15;
  
  // Convert Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  
  // Convert Kelvin to Fahrenheit
  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9 / 5 + 32;

  const handleCalculate = (event) => {
    event.preventDefault() //To prevent the page from refreshing

    if (celsius !== '') {
      setFahrenheit(celsiusToFahrenheit(parseFloat(celsius)).toFixed(2));
      setKelvin(celsiusToKelvin(parseFloat(celsius)).toFixed(2));
    }

    if (fahrenheit !== '') {
      setCelsius(fahrenheitToCelsius(parseFloat(fahrenheit)).toFixed(2));
      setKelvin(fahrenheitToKelvin(parseFloat(fahrenheit)).toFixed(2));
    }

    if (kelvin !== '') {
      setCelsius(kelvinToCelsius(parseFloat(kelvin)).toFixed(2));
      setFahrenheit(kelvinToFahrenheit(parseFloat(kelvin)).toFixed(2));
    }
  };
  

  return (
    <>
      <div className="container">
        <h1 className='title'>{title}</h1>

        <div className="values">
          <form action="">
            <p>
              <input type="text" className="input-box" value={celsius} onChange={(e) => setCelsius(e.target.value)} placeholder='Enter Celsius'/> {' '} °C
            </p>

            <p>
              <input type="text" className="input-box" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} placeholder='Enter Fahrenheit'/> {' '} °F
            </p>

            <p>
              <input type="text" className="input-box" value={kelvin} onChange={(e) => setKelvin(e.target.value)} placeholder='Enter Kelvin'/> {' '} K
            </p>

            <button className="submit" onClick={handleCalculate}>Calculate</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App