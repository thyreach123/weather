const apikey = "9dbb815d62bc3684a377c3127e505501";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "image/cloudy.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "image/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "image/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "image/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "image/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "image/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } 
}

searchBtn.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
    checkWeather(searchBox.value);
}
})
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
