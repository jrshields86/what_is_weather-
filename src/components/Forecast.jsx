import '../forecast.css'

const Forecast = ({data}) => {
    console.log(data.list);


    return (
        <>
            <h2 id='forecastTitle'>Five Day Forecast</h2>
            <div className="forecast">

            </div>
        </>
    );
};

export default Forecast;