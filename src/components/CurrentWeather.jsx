const CurrentWeather = ({weather, city, state}) => {
    const todayForecast = weather.find( today => today.number === 1);
    if(!todayForecast){
        return null;
    };
    console.log(todayForecast);
    return (
        <div>
            <h3>Current Forecast for:</h3>
            <h3 id="cityState">{city}, {state}</h3>
            <div className="formContainer">
                {/* <form>
                    <label htmlFor='location'>Please Enter your Location:</label>
                    <input id='location' type="text" />
                    <button>Submit</button>
                </form> */}
                <ul>
                    <li>Temp: {todayForecast.temperature} Degrees F</li>
                    <br />
                    <li>Forecast for {todayForecast.name}: {todayForecast.detailedForecast}</li>
                    <br />
                    <li>Wind Direction: {todayForecast.windDirection}</li>
                    <br />
                    <li>Wind Speed: {todayForecast.windSpeed}</li>
                </ul>
            </div>
        </div>
    );
};

export default CurrentWeather;