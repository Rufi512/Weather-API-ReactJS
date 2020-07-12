import React, { Component } from 'react';
import ViewWeather from './components/ViewWeather'

class App extends Component {
    showbar() {
        const bar = document.getElementById("bar");
        bar.style.transform = 'translateX(0%)';
        bar.style.transition = '0.5s all';
    }


    constructor() {
        super();
        this.state = {
            name: '',
            main: '',
            description: '',
            temp: '',
            wind: '',
            humidity: '',
            pressure: '',
            searchA: '',
            searchB: '',
            background: '',
            error: '',
            vError: ''

        }
    }

    async componentDidMount() {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=aacc22227b43a61d83f0691dbf0d3f81&units=metric`);

        const data = await res.json();
        this.setState({
            name: data.name,
            temp: data.main.temp,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            main: data.weather[0].main,
            description: data.weather[0].description
        })
        if (this.state.temp > -0 && this.state.temp <= 15) {
            this.setState({ background: '#a2d8ff' })
        }
        if (this.state.temp > 15 && this.state.temp <= 25) {
            this.setState({ background: '#b8ffa0' })
        }

        if (this.state.temp > 25 && this.state.temp <= 30) {
            this.setState({ background: '#ffe05b' })
        }
        if (this.state.temp > 30) {
            this.setState({ background: '#fb6161' })
        }
    }



    async handleSubmit(e) {
        e.preventDefault();
        const ciudad = this.state.searchA;
        const count = this.state.searchB;

        if (!this.state.searchA) {
            return this.setState({ error: 'Place the city!', vError: 'visible' })
        } else {
            this.setState({ error: '', vError: 'collapse' })
        }


        if (!this.state.searchB) {
            return this.setState({ error: 'Place the state code!', vError: 'visible' })
        } else {
            this.setState({ error: 'Loading...', vError: 'visible' })
        }

        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${count}&appid=aacc22227b43a61d83f0691dbf0d3f81&units=metric`);
        const data = await res.json();

        if (data.cod === "404") {
            return this.setState({ error: 'Could not find city information', vError: 'visible' })
        } else {
            this.setState({
                name: data.name,
                temp: data.main.temp,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                main: data.weather[0].main,
                description: data.weather[0].description,
                vError: 'collapse'
            })
        }

        if (this.state.temp > -0 && this.state.temp <= 15) {
            this.setState({ background: '#a2d8ff' })
        }
        if (this.state.temp > 15 && this.state.temp <= 25) {
            this.setState({ background: '#b8ffa0' })
        }

        if (this.state.temp > 25 && this.state.temp <= 30) {
            this.setState({ background: '#ffe05b' })
        }
        if (this.state.temp > 30) {
            this.setState({ background: '#fb6161' })
        }

    }

    render() {
        return (

            <div>

    <div id="bar" className="bar-form">
    <div className="button-show">
  <label id="button-bar" onClick={this.showbar}><img src="src/icons/search-solid.svg"/></label>
  </div>
    <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" className="form-control" 
placeholder="Place the city" 
onChange={city => this.setState({searchA: city.target.value})} 
autoFocus/>

<input type="text" className="form-control" 
placeholder="Place the state code" 
onChange={country => this.setState({searchB: country.target.value})} 
/>

<button className="btn btn-success btn-block" onClick={e=>e.target.value}>
                Get Weather
            </button>

</form>
<p className="error" style={{visibility: this.state.vError}} >{this.state.error ? this.state.error: ''}</p>

</div>

   


        <ViewWeather 
        name={this.state.name}
        main={this.state.main}
        description={this.state.description}
        temp={this.state.temp}
        humidity={this.state.humidity}
        wind={this.state.wind}
        pressure={this.state.pressure}
        background={this.state.background}
        />
 </div>
        )

    }
}


export default App;