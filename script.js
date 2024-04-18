const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=03e8cb5eec785328d83f7c477795b4af";
const API_UNITS = "&units=metric";

const getWeather = () => {
	const city = input.value
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios.get(URL).then(res => {
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);

		console.log(status.id);

		cityName.textContent = res.data.name;
        weather.textContent=status.main
		temperature.textContent = Math.floor(temp) + "°C";
		humidity.textContent = Math.floor(hum) + "%";
	});
};
getWeather()
button.addEventListener('click', getWeather)
