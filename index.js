//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}
const url = "https://api.openweathermap.org/data/3.0/onecall?";
const apiKey = "3da623ab72b818116c5d32c92b750a1f";
let latitude = document.getElementById("lat").value;
let longitude = document.getElementById("lon").value;
let infoDisplay = document.getElementById("infoDisplay");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",() => {
    getWeather;
    console.log("clicked");
});

async function getWeather(){
   const res = await fetch(`${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
   const data = await res.json();
   return data;
};
var gW = getWeather(result);