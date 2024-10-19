import { useState } from 'react';
import './Country.css';
export default function Country ({country}) {
    const {name, flags, population, area, cca3} = country;
    console.log(country);

    const [visited, setVisited] = useState(false);
    const handleClick = ()=>{
        setVisited(!visited);
    }
    return(
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleClick}>{visited ? "going" : "visited"}</button>
            {
                // visited && "I have visited this country"
                visited ? "I have visited" : "I haven't visited"
            }
        </div>
    );
}