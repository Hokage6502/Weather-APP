﻿# Weather-APP
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the frontend project directory, you can run:

### `cd frontend`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# OpenWeatherMap API
Access current weather data for any location on Earth including over 200,000 cities! We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations. Data is available in JSON, XML, or HTML format.

# Built-in API request by city name
You can call by city name or city name, state code and country code. Please note that searching by states available only for the USA locations.

API call

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

# Built-in API request by city ID
You can make an API call by city ID. List of city ID 'city.list.json.gz' can be downloaded here.

We recommend to call API by city ID to get unambiguous result for your city.

API call

https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

## WEB View
![image](https://github.com/Hokage6502/Weather-APP/assets/89737057/77156c3b-cd81-4255-8ad4-ef5be37727e4)
