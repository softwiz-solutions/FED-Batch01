"use client";

import useCounter from "@/customeHooks/useCounter";
import useWeatherApi from "@/customeHooks/useWeatherApi";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const WeatherApi = () => {
  const router = useRouter();
  const { getWeather, loader, city } = useWeatherApi();
  const { isLogin } = useCounter();
  //   const userLogined = useSelector((state) => state.authSlice.userLogined);
  //   console.log("user logined in weather", isLogin);
  useEffect(() => {
    if (!isLogin) {
      router.push("/");
    }
    // getWeather()
  }, []);
  return (
    <div>
      <h1>Weather API</h1>
      {city && (
        <div>
          <h1>{city.name}</h1>
          <h1>{city.main.temp}</h1>
          <h1>{city.weather[0].main}</h1>
        </div>
      )}
      {loader && <h1>loading...........</h1>}
    </div>
  );
};

export default WeatherApi;
