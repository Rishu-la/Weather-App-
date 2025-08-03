    import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";

export default function InfoBox({info}) {
  const INIT_URL = "https://jknewstoday.com/wp-content/uploads/2021/09/weather.png";
   const summer="https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-148330905.jpg";
   const rain="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const cold="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//   let info = {
//     city:"Delhi",
//     feelsLike: 24.84,
//     temp: 25.05,
//     tempMin: 25.05,
//     tempMax: 25.05,
//     humidity: 47,
//     weather: "haze",
//   };

  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>
       <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80?rain:info.temp>30?summer:cold}

          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city} 
           &nbsp;
           {info.humidity>80?<i className="fa-solid fa-cloud-rain"></i>:info.temp>30?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-snowflake"></i>}
         
          </Typography>
          <Typography variant="body2" color="text.secondary" compnent={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
             <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
              <i>The weather can be described as</i> {info.weather} and feels like {info.feelsLike}&deg;C
          </p>
 

          </Typography>
        </CardContent>
        
      </Card>
      </div>
    </div>
  );
}
