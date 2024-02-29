const CurrentConditions = ({hourly, city, state}) => {
    const currentConditions = hourly.find( hour => hour.number === 1);

    if(!currentConditions){
        return null;
    };

    if(!hourly){
        return null;
    };
   
    return (
        <div>
            <img src='{currentConditions.icon}' alt="weather icon" height='200px' width='200px' />
            <h2>{city}, {state}</h2>
            <ul className="currConditions">
                <li>{currentConditions.shortForecast}</li>
                <li>{currentConditions.temperature}</li>
                <li>{currentConditions.windSpeed} {currentConditions.windDirection}</li>
            </ul>
        </div>
    );
};

export default CurrentConditions;