import '../weather.css'

const CurrentWeather = ({data}) => {
    const directionData = data.wind.deg;

    function windDirection(deg) {
        if (deg > 337.5 || deg <= 22.25) {
            return 'N'
        } else if (deg > 22.25 && deg <= 67.5) {
            return 'NE'
        } else if (deg > 67.5 && deg <= 112.5) {
            return 'E'
        } else if (deg > 112.5 && deg <= 157.5) {
            return 'SE'
        } else if (deg > 157.5 && deg <= 202.5) {
            return 'S'
        } else if (deg > 202.5 && deg <= 247.5) {
            return 'SW'
        } else if (deg > 247.5 && deg <= 292.5) {
            return 'W'
        } else if (deg > 292 && deg <= 337.5) {
            return 'NW'
        }
    };
    
    const direction = windDirection(directionData);

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°F</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{direction} {Math.round(data.wind.speed)} mph</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{(data.main.pressure * 0.025).toFixed(2)} in</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;