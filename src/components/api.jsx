const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b951fc84fmshdb165e73db2fe3cp1e254bjsn089fb337ae20',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';


export { geoApiOptions, GEO_API_URL, WEATHER_API_URL, WEATHER_API_KEY };