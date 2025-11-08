const API_KEY = '8479beccc4a4c6f8e1b634b4703e6c1d';
let iconUrl;
const img = new Image();
const select = document.getElementById('select');
const weatherInfo = document.getElementById('weatherInfo');

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`
        );
        if (!response.ok) {
            throw new Error('都市が見つかりませんでした');
        }
        const data = await response.json();
        iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        return data;
    } catch (error) {
console.error('取得エラーです');
}};

select.addEventListener('change',async (e)=>{
let data = await getWeather(e.target.value);
img.src = iconUrl;
img.onload = () => {
weatherInfo.innerHTML = `<h2>${data.name}の天気</h2><p><img src="${iconUrl}" style="width: 30px; height: 30px; vertical-align: middle;">天気 : ${data.weather[0].description}</p><p>🌡️気温 : ${data.main.temp}度</p><p>💧湿度 : ${data.main.humidity}%</p>`
}
})


