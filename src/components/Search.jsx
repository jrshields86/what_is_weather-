import React, {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "./api";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = async(inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions);
            const result = await response.json();
            console.log(result.data)
            return {
                options: result.data.map((city) => {
                    console.log(city)
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <AsyncPaginate 
            placeholder={'Search for city'}
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />);
};

export default Search;