import React, { useState } from 'react'

const useWeatherApi = () => {
    console.log("process.env.API_KEY", process.env)
    const [loader, setLoader] = useState(false)
    // const apikey = process.env.API_KEY
    const apiKey = "d0b5f5ca085db07c76d52c897ce8b8d0"
    const getWeather = async () => {
        try {
            setLoader(true)
            console.log("get weather is working");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
            const data = await fetch(url)
            console.log("data", data);
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
        loader
    }
}



export default useWeatherApi
