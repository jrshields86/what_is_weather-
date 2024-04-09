const SunriseSunset = ({data}) => {
    console.log(data);
    const sunriseData = data.sys.sunrise;
    const sunsetData = data.sys.sunset;

    const sunriseTime = new Date(sunriseData * 1000);
    console.log('Sunrise -->', sunriseTime);

    const sunsetTime = new Date(sunsetData * 1000);
    console.log('Sunset -->', sunsetTime);

    const sunriseHours = sunriseTime.getHours();
    console.log(sunriseHours);

    const sunriseMinutes = sunriseTime.getMinutes();
    console.log(sunriseMinutes)

    const sunsetHours = sunsetTime.getHours();
    const sunsetMinutes = sunsetTime.getMinutes();

    console.log(`${sunriseHours}:${sunriseMinutes} a.m.`);
    console.log(`${sunsetHours - 12}:${sunsetMinutes} p.m.`);
    return (
        <h2>Sunrise Sunset</h2>
    );
};

export default SunriseSunset;