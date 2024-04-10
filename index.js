//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/3.0/onecall?city={city}&state={state}&appid={API key}

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code}&limit={limit}&appid={API key}
const url = "https://api.openweathermap.org/data/3.0/onecall?";
const apiKey = "3da623ab72b818116c5d32c92b750a1f";
const coordUrl = "http://api.openweathermap.org/geo/1.0/direct?q="
let searchBtn = document.getElementById("searchBtn");
let selectedAreas = [];
let selectedAreasDiv = document.getElementById("savedAreas");
let selected_areas = document.getElementById("selectedAreas");
let removeBtn = document.getElementById("removeBtn");
let fBtn = document.getElementById("displayF");
let cBtn = document.getElementById("displayC");
let wData;
let fRound;
let cRound;
let li;
let imageOne = document.createElement(`img`);
imageOne.src = "https://iconbug.com/data/4d/256/873b30e4a751b523ef2dba9c1bce501c.png";
searchBtn.addEventListener("click",() => {
    getCoord();
});

async function getCoord(){
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let url = `${coordUrl}${city},${state},1&limit=1&appid=${apiKey}`;
    const result = await fetch(url);
    const data = await result.json(); 
    let latitude = data[0].lat;
    let longitude = data[0].lon;
    getWeather(latitude, longitude, city, state);
};

async function getWeather(latitude, longitude, city, state){
   const res = await fetch(`${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
   const data = await res.json();
   wData = data;
   selectedAreas.push({city: city, state: state, weatherData: wData.current});
   
    li = document.createElement(`li`);
    li.className = "li";
    li.textContent = `${city}, ${state}`;
    selected_areas.appendChild(li);
    console.log('weather data', wData);
   
   const kelvin = wData.current.temp;
    const celsius = kelvinToCelsius(kelvin);
    let fahrenheit = celsiusToFahrenheit(celsius);
    let cTemp = fahrenheitToCelsius(fahrenheit);
    cRound = Math.round(cTemp);
    fRound = Math.round(fahrenheit);
    console.log(fRound);
    
    removeBtn.addEventListener("click", () =>{
        let infoDisplay = document.getElementById("infoDisplay");
        infoDisplay.textContent = "";
        selected_areas.removeChild(li)
    });
};
fBtn.addEventListener("click", () =>{
    infoDisplay.textContent = `It's currently ${fRound} degrees Fahrenheit`;
    displayImg();
});

cBtn.addEventListener("click", () =>{
    infoDisplay.textContent = `It's currently ${cRound} degrees Celsius`;
    displayImg();
})

function fahrenheitToCelsius(fahrenheitTemp){
    return ((fahrenheitTemp - 32) * 5/9);
}

function kelvinToCelsius(kelvinTemp){
    return kelvinTemp - 273;
}

function celsiusToFahrenheit(celsiusTemp){
    return (celsiusTemp * (9/5) + 32);
}

function renderSelectedAreas(){
    for (let i = 0; i < selectedAreas.length; i++){
        
    // click event for each new city and state
    // run the new display function in the click event and pass the weather data to it
    }
    };

    function displayImg(){
        let infoDisplay = document.getElementById("infoDisplay");
        let imageOne = document.createElement(`img`);
        imageOne.src = "https://iconbug.com/data/4d/256/873b30e4a751b523ef2dba9c1bce501c.png";
        let imageTwo = document.createElement(`img`);
        imageTwo.src = "https://thumb.ac-illust.com/58/58ccf7aa00ee41b851fc842d4c099dc6_t.jpeg";
        let imageThree = document.createElement(`img`);
        imageThree.src = "https://bloximages.newyork1.vip.townnews.com/northwestgeorgianews.com/content/tncms/assets/v3/editorial/1/6e/16e78ebe-f2e6-11e3-aa24-0017a43b2370/5671cf4ba8a87.image.jpg";
        let imageFour = document.createElement(`img`);
        imageFour.src = "https://i.pinimg.com/564x/8c/24/fb/8c24fbe706978ac0387178261de18e7c.jpg"


        if (wData.current.clouds <= 25){
            infoDisplay.appendChild(imageOne);
        } else if (wData.current.clouds > 25 && wData.current.clouds < 50){
            infoDisplay.appendChild(imageTwo);
        } else if (wData.current.clouds > 50 && wData.current.clouds < 75) {
            infoDisplay.appendChild(imageThree);
        } else if (wData.current.clouds > 75){
            infoDisplay.appendChild(imageFour);
        }
    };