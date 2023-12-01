import React, { useState } from 'react'

const useWeatherApi = () => {
    console.log("process.env.API_KEY", process.env.NEXT_PUBLIC_API_KEY)
    const [loader, setLoader] = useState(false)
    const [city, setCity] = useState(null)

    // const apikey = process.env.API_KEY
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const cityName = "London"
    const getWeather = async () => {
        try {
            // console.log("process.env", process.env.NODE_ENV);
            setLoader(true)
            console.log("get weather is working");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
            const data = await fetch(url)
            const weatherData = await data.json()
            console.log("weather data", weatherData);
            setCity(weatherData)
            // console.log("data", data);
        }
        catch (error) {
            console.log("error", error.message);
        }
        finally {
            setLoader(false)
            console.log("this is always working");
        }
    }
    return {
        getWeather,
        loader,
        city,
    }
}



export default useWeatherApi
