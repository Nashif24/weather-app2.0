import React from 'react';

/*this is another stateless component, here is two input fields to recieve the city and country inputs entered by the user and a button to submit the form*/
const Form = (props) => {
	return (
		<form onSubmit={props.loadWeather}>
			<input type="text" name="city" placeholder="City..."/>
			<input type="text" name="country" placeholder="Country..."/>
			<button>Get the weather</button>
		</form>

		)
}

export default Form;