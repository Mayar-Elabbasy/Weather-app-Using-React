import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      city: '',
      country: '',
      temp_max: '',
      temp_min: '',
      icon: '',
      main: '',
      description: '',
      celsius: '',
      error: false

    };
    this.getWeather();
    this.weatherIcon = {
      Thunderstorm: 'wi-thunderstorm',
    };
  }

  clacCelsius(temp){
    let celsius = Math.round(temp - 273.15)
    return celsius;
  }
  getWeather = async() =>{
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0eea3f8e0bb5f498a318abcf211d61ba`);
    const response = await apiCall.json();
    console.log(response);
    this.setState({

      city: response.name,
      country: response.sys.country,
      celsius: this.clacCelsius(response.main.temp),
      temp_max: this.clacCelsius(response.main.temp_max),
      temp_min: this.clacCelsius(response.main.temp_min),
      description: response.weather[0].description,  
      icon: this.weatherIcon.Thunderstorm

    });
    
  }

  render() { 
      return ( 
      <div className="App">
        <Weather 
        city = {this.state.city} 
        country = {this.state.country}
        temp_celsius = {this.state.celsius}
        temp_max = {this.state.temp_max}
        temp_min = {this.state.temp_min}
        description = {this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
      );
  }
}

export default App;