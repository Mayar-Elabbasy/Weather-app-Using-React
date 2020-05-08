import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather';
import Form from './components/form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      city: '',
      country: '',
      temp_max: '',
      temp_min: '',
      weatherIcon: '',
      main: '',
      description: '',
      celsius: '',
      error: false

    };
    // this.getWeather();
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  clacCelsius(temp){
    let celsius = Math.round(temp - 273.15)
    return celsius;
  }

  getWeatherIcon(rangeID){
    switch(true){
      case rangeID >= 200 && rangeID <= 232:
        this.setState({weatherIcon: this.weatherIcon.Thunderstorm});
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({weatherIcon: this.weatherIcon.Drizzle});
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({weatherIcon: this.weatherIcon.Rain});
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({weatherIcon: this.weatherIcon.Snow});
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({weatherIcon: this.weatherIcon.Atmosphere});
        break;
      case rangeID === 800:
        this.setState({weatherIcon: this.weatherIcon.Clear});
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({weatherIcon: this.weatherIcon.Clouds});
        break;
      default:
        this.setState({weatherIcon: this.weatherIcon.Clouds});
    }
  }

  getWeather = async e =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=0eea3f8e0bb5f498a318abcf211d61ba`);
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      country: response.sys.country,
      main: response.weather[0].main,
      celsius: this.clacCelsius(response.main.temp),
      temp_max: this.clacCelsius(response.main.temp_max),
      temp_min: this.clacCelsius(response.main.temp_min),
      description: response.weather[0].description,
      error: false  
    });
    this.getWeatherIcon(this.weatherIcon, response.weather[0].id)
  
  }else{
    this.setState({
      error: true
    });
  }
};
  

  render() { 
      return ( 
      <div className="App">
        <Form loadWeather={this.getWeather} error= {this.state.error} />
        <Weather 
        city = {this.state.city} 
        temp_celsius = {this.state.celsius}
        temp_max = {this.state.temp_max}
        temp_min = {this.state.temp_min}
        description = {this.state.description}
        weatherIcon = {this.state.weatherIcon}
        />
      </div>
      );
  }
}

export default App;