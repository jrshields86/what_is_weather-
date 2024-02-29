const TodayForecast = ({weather, city, state, hourly}) => {
    const todayForecast = weather.find( today => today.number === 1);
    const currentByHourly = hourly.find(hour => hour.number === 1);
    console.log(currentByHourly)

    if(!todayForecast){
        return null;
    };
    
    if(!currentByHourly){
        return null;
    };
    
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
                <ul className="todayContainer">
                    <li>Temp: {todayForecast.temperature} Degrees F</li>
                    <li>Forecast for {todayForecast.name}: {todayForecast.detailedForecast}</li>
                    <li>Wind Direction: {todayForecast.windDirection}</li>
                    <li>Wind Speed: {todayForecast.windSpeed}</li>
                </ul>
            </div>
        </div>
    );
};

export default TodayForecast;