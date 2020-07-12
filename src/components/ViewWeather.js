import React, { Component } from 'react';


class ViewWeather extends Component {

    closebar() {
        const bar = document.getElementById("bar");
        bar.style.transform = 'translateX(-100%)';
        bar.style.transition = '0.5s all';
    }

    render() {


        return (

            <div>
<div onClick={this.closebar} className="weather-info" style={{'backgroundColor':this.props.background}}>
		<div className="weather-head">
			<h2>{this.props.name}</h2>
			<div className="weather-time">
			<p>{this.props.main}/</p><p>{this.props.description}</p>
			</div>
			<div><img className="icons" src="src/icons/temperatura.svg" alt="temp"/><p id="temperatura">Temp:{this.props.temp}°</p></div>
		</div>
		<br/>
<h2 style={{'textAlign': 'center'}}>Information detail</h2>
<br/>
<br/>
<br/>
		<div className="weather-content">
			
			<div><img className="icons" src="src/icons/clima.svg" alt="humidity"/><p>Humidity:{this.props.humidity}</p></div>
			<div><img className="icons" src="src/icons/pressure.svg" alt="pressure"/><p>Pressure:{this.props.pressure}</p></div>
			<div><img className="icons" src="src/icons/viento.svg" alt="wind"/><p>wind speed:{this.props.wind}</p></div>
		</div>
	</div>


</div>


        )

    }


}

export default ViewWeather