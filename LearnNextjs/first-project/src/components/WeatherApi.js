'use client'

import useWeatherApi from '@/customeHooks/useWeatherApi'
import React, { useEffect } from 'react'

const WeatherApi = () => {
    const { getWeather, loader } = useWeatherApi()
    useEffect(() => {
        getWeather()
    }, [])
    return (
        <div>
            <h1>
                Weather API
            </h1>
            {loader && <h1>loading...........</h1>}
        </div>
    )
}

export default WeatherApi
