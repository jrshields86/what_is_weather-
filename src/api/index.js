import axios from "axios";




useEffect(()=> {
    const fetchCurrent = async() => {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json');
        console.log(response);
    };
    fetchCurrent();
  },[]);

//API Method
// --> /current.json