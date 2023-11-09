import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MyComponent.module.css'

interface WeatherData {
  city: string;
  region: string;
  timezone: string;
  temperature: number;
  windspeed: number;
  weather: string;
}

const MyComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const geoData = await axios.get("https://get.geojs.io/v1/ip/geo.json");
        const { latitude, longitude, city, region,timezone } = geoData.data;

        const weatherData = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        const { current_weather } = weatherData.data;
        const { temperature, windspeed, weathercode } = current_weather;

        setWeatherData({
          city,
          region,
          timezone,
          temperature,
          windspeed,
          weather: formattedWeather(weathercode),
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const formattedWeather = (codeWeather: number): string => {
    switch (codeWeather) {
        case 0:
          return "Clear sky";
        case 1:
        case 2:
        case 3:
          return "Mainly clear, partly cloudy, and overcast";
    
        case 45:
        case 48:
          return "Fog and depositing rime fog";
    
        case 51:
        case 53:
        case 55:
          return "Drizzle: Light, moderate, and dense intensity";
    
        case 56:
        case 57:
          return "Freezing Drizzle: Light and dense intensity";
    
        case 61:
        case 63:
        case 65:
          return "Rain: Slight, moderate and heavy intensity";
    
        case 66:
        case 67:
          return "Freezing Rain: Light and heavy intensity";
    
        case 71:
        case 73:
        case 75:
          return "Snow fall: Slight, moderate, and heavy intensity";
    
        case 77:
          return "Snow grains";
    
        case 80:
        case 81:
        case 82:
          return "Rain showers: Slight, moderate, and violent";
    
        case 85:
        case 86:
          return "Snow showers slight and heavy";
    
        case 95:
          return "Thunderstorm: Slight or moderate";
    
        case 96:
        case 99:
          return "Snow fall: Slight, moderate, and heavy intensity";
        default:
          return "no correct";
      }
    };
  

  return (
    <div className={styles.container}>
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className={styles.textWeather}>
          <img className={styles.img} src='https://pushinka.top/uploads/posts/2023-08/thumbs/1692715513_pushinka-top-p-prognoz-pogodi-kartinki-dlya-prezentatsii-18.jpg'/>
          <p>City: {weatherData.city}</p>
          <p>Region: {weatherData.region}</p>
          <p>Timezone: {weatherData.timezone}</p>
          <p>Temperature: {weatherData.temperature} º</p>
          <p>Wind speed: {weatherData.windspeed} m/sec</p>
          <p>Weather: {weatherData.weather}.</p>
        </div>
      )}
      <div >
        <ul className={styles.textAbout}>
          <li>
      Amet voluptatem eum harum ut doloribus, odit obcaecati veniam ad magnam minima, cupiditate consectetur repellendus minus maiores? Incidunt reprehenderit dolore explicabo neque laboriosam cupiditate obcaecati? Tenetur unde quam nemo quos.
      Exercitationem sapiente, atque fugit assumenda odio ut pariatur consequuntur numquam magni. Facilis unde quaerat deleniti repellat ab beatae laborum quam id quis, in officiis ducimus, cupiditate, possimus recusandae delectus cum?</li>
      <li>
      Maxime, dolorem! Obcaecati ab ipsam voluptates fuga expedita nisi libero repellat nostrum laborum numquam porro soluta vitae tenetur similique, natus quis ducimus fugiat debitis ad ea tempora inventore, a nobis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit ipsum dolor veritatis deleniti explicabo corporis et itaque fugiat, voluptatum fugit placeat ipsam nobis eaque non ex, iusto tempora est.</li>
      Nostrum minus corrupti quos nisi accusamus, earum et omnis obcaecati perspiciatis numquam quisquam autem facilis nam fugiat cumque, dicta cum quaerat, at mollitia unde nihil commodi.
      <li> Omnis id nulla deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aspernatur minima dignissimos architecto culpa veritatis ipsam tempora eos voluptatibus accusamus itaque esse molestias, repudiandae quae nostrum, obcaecati hic possimus ratione.
      </li> 
      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis magni quidem similique architecto ipsa tempora, asperiores eveniet cumque vero natus corrupti nihil impedit eum veniam tempore ab alias placeat nobis.</li>
      </ul>
      </div>
    </div>
  );
};

export default MyComponent;