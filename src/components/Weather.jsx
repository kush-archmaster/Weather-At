import React, { useEffect, useState } from 'react';
import './css/style.css';

const Weather = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('')

   useEffect(()=>{
        const generateWeather = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9b1d875febf7a35bcb7a8c1ca908d3f7`
            const response = await fetch(url);
            const data = await response.json();
            
            setCity(data.main)  //now city will store an object
            
        }

        generateWeather();
    }
   ,[search]
    );

    const Cel = (kelvin) => {
        const Celsius = kelvin - 273.15;
        return Celsius;
    }

    return(
        <>
        
            <div className='box'>
                <div className='inputData'>
                    <input type='search' 
                    className='inputField' placeholder='Enter City'
                    value={search}
                    onChange= {(event)=>{
                        setSearch(event.target.value)
                    }}
                    />
                </div>
        {
           <div >
                <div className='info'>
                {
                    !city ? 
                    (<h1 style={{fontSize: '2.5rem'}} > City Not Found</h1>)
                    : (
                       <>
                       <h2 className='location'> 
                       <i className='fas fa-street-view'></i> {search}
                      </h2>
                       <h1 className='temp'>{Cel(city.temp).toFixed(2)}°Cel </h1>
                    <h3 className='tempMinMax'>Min: {Cel(city.temp_min).toFixed(2)}°Cel | Max: {Cel(city.temp_max).toFixed(2)} °Cel</h3>
                       </>
                    )
                }
               
               </div>
               
               <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
            </div>
          

        }
               
        </div>
     </>
    )
}

export default Weather;