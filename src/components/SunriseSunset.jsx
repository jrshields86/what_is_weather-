import './sunriseSunset.css'

const SunriseSunset = ({data}) => {
    console.log(data);
    const sunriseData = data.sys.sunrise;
    const sunsetData = data.sys.sunset;
    const sunriseTime = new Date(sunriseData * 1000);
    const sunsetTime = new Date(sunsetData * 1000);
    const sunriseHours = sunriseTime.getHours();
    const sunriseMinutes = sunriseTime.getMinutes();
    const sunsetHours = sunsetTime.getHours();
    const sunsetMinutes = sunsetTime.getMinutes();
    const formattedSunrise = `${sunriseHours}:${sunriseMinutes} a.m.`;
    const formattedSunset = `${sunsetHours - 12}:${sunsetMinutes} p.m.`;
    console.log(formattedSunrise, formattedSunset);
    
    return (
        <>
            <h2>Sunrise & Sunset</h2>
            
            <div className="sunriseSunsetContainer">
                <div id='sunriseText'>
                    Sunrise
                </div>
                <div id='sunsetText'>
                    Sunset
                </div>
                <div id="sunrise">
                    {formattedSunrise}
                </div>
                <div id="sunset">
                    {formattedSunset}
                </div>
            </div>
        </>
    );
};

export default SunriseSunset;