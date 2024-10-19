import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css';

const Countries = () => {
    //To load data from the API we will do 6 steps 
    //1. declare a state
    const [countries, setCountries] = useState([]);

    //2. declare useEffect to fetch data from API
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(err => console.log(err));
    } , [])

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div className="country-container">
            {
                countries.map(country=><Country
                    key={country.cca3}
                    country={country}>
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;