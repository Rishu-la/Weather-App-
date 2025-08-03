import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchfBox({ updateInfo }) {
    let [city, SetCity] = useState("");
    let [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "63dbe50cc2477d691541ded24eab500b";

    let getWeatherInfo = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            if (!res.ok) {
                throw new Error("City not found");
            }

            let jsonRes = await res.json();

            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            };

            setError(""); 
            return result;
        } catch (err) {
            setError("City not found. Please enter a valid city name.");
            return null;
        }
    };

    let handleChange = (event) => {
        SetCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            SetCity("");
        }
    };

    return (
        <div className="SearchBox">
            <h2 style={{ color: 'black' }}>Search for the weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
    );
}
