import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8ade40df9cf169461fc7f8acab2e9ac0&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
