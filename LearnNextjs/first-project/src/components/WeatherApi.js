'use client'

import useWeatherApi from '@/customeHooks/useWeatherApi'
import React, { useEffect } from 'react'

const WeatherApi = () => {
    const { getWeather, loader, city } = useWeatherApi()
    useEffect(() => {
        getWeather()
    }, [])
    return (
        <div>
            <h1>
                Weather API
            </h1>
            {city && <div>
                <h1>{city.name}</h1>
                <h1>{city.main.temp}</h1>
                <h1>{city.weather[0].main}</h1>
            </div>}
            {loader && <h1>loading...........</h1>}
        </div>
    )
}

export default WeatherApi
