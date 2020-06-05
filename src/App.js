import React from 'react';
import './App.css'
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';


class App extends React.Component {
/*this state sets the items to be defined later in setState when the user enters a country and city*/
	state = {

		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

/*this is a async/await function which defines the variables which the user will input and it fecthes the api for the current weather 
and in the if statement, it accepts if the user enters a city and country, else if the fields are empty it shows an error*/
	callWeather = async (e) => {
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		e.preventDefault();
		try{
					/*To fetch the contents for the weather, I used the openweathermap api, the api works using async/await which makes it easy to return the data*/
		const api_get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=773dbee29c691dd7acf10c49b8363e5a&units=metric`);
		const response = await api_get.json();
		if(city && country){
			this.setState({
				temperature: response.main.temp,
				city: response.name,
				country: response.sys.country,
				humidity: response.main.humidity,
				description: response.weather[0].description,
				error: ""
			})			
		}else{
			this.setState({
				error: "404 not Found"
			})
		}
	} catch (err) {
		this.setState({
		error: "404 not Found"})
	}

	}
/*In this render and return, each state is passed as props to the weather component so that we can have access to the props in the weather.js file*/

	render() {
		return (
			<div className="one">
				<Titles/>
				<Form loadWeather={this.callWeather}/>
				<Weather
					temperature={this.state.temperature}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error}	
				/>

			</div>


			)
	}
}

export default App;
