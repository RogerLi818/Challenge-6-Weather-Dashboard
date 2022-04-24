var searchFormEl=document.querySelector("#searchForm");
var cityNameEl=document.querySelector("#cityname");
var cardEl=document.querySelector("#card");
var currentWeatherEl=document.querySelector("#current-weather")
var currentWeatherInfoEl=document.querySelector("#info-list")


//get city coordinate
var getCityCoor = function(city){
        //city api
        var getGeoCoordApi="https://maps.googleapis.com/maps/api/geocode/json?address=" + city+ "&key=AIzaSyBwg0UUINl4I_id-F6HUBFTvYTwLfR5q40";
        //fetch city api for lat and lon
        fetch(getGeoCoordApi).then(function(response){
        console.log(response);
        response.json().then(function(data){
            var lat=data.results[0].geometry.location.lat;
            var lon =data.results[0].geometry.location.lng;
            getCurrentCityWeather(lat,lon);
            console.log(data);
            console.log("lat = "+lat);
            console.log("lon = "+lon);

            var currentWeatherHeadEl=document.createElement("h3");
            currentWeatherHeadEl.textContent=city;

            currentWeatherEl.appendChild(currentWeatherHeadEl);
        })
    });
};

//get today's city weather
var getCurrentCityWeather=function(lat, lon){
    //weather api
    var weatherApi = "http://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ lon +"&units=imperial&exclude=hourly,daily&appid=2fa507258cd8d0ee1e9387b3bda47af0"
        //fetch api response
        fetch(weatherApi).then(function(response){
        console.log(response);
        response.json().then(function(data){
            console.log(data);
            //weather condition, temperature, the humidity, the wind speed, and the UV index
            console.log("weather condition = " + data.current.weather[0].main);
            console.log("Temp: "+ data.current.temp+"'F");
            console.log("Humidity: " + data.current.humidity +" %");            
            console.log("windspeed: "+data.current.wind_speed+" MPH");
            console.log("UV Index: "+ data.current.uvi);
            
            var currentWeatherWCEl=document.createElement("li");
            currentWeatherWCEl.textContent= "weather condition = " + data.current.weather[0].main;
            var currentWeatherTempEl=document.createElement("li");
            currentWeatherTempEl.textContent= "Temp: "+ data.current.temp+"'F";
            var currentWeatherHumEl=document.createElement("li");
            currentWeatherHumEl.textContent= "Humidity: " + data.current.humidity +" %";
            var currentWeatherWindEl=document.createElement("li");
            currentWeatherWindEl.textContent= "windspeed: "+data.current.wind_speed+" MPH";
            var currentWeatherUviEl=document.createElement("li");
            currentWeatherUviEl.textContent= "UV Index: "+ data.current.uvi;

            

            currentWeatherInfoEl.appendChild(currentWeatherWCEl);
            currentWeatherInfoEl.appendChild(currentWeatherTempEl);
            currentWeatherInfoEl.appendChild(currentWeatherHumEl);
            currentWeatherInfoEl.appendChild(currentWeatherWindEl);
            currentWeatherInfoEl.appendChild(currentWeatherUviEl);

            


            
        })
    });
};

//save the input to a button under the search card.
var saveInput=function(input){
    //create the button
    var saveButtonEl=document.createElement("button");
    saveButtonEl.classlist="btn-second";
    saveButtonEl.textContent=input;
    //saveButtonEl.setAttribute("id =" + input)
    //append to aside
    cardEl.appendChild(saveButtonEl);
    //for saved button after added.
    saveButtonEl.addEventListener("click", buttonSubmitHandler);
};

//submit handler
var formSubmitHandler=function(event){
    event.preventDefault();
    //get value from input
    var cityname=cityNameEl.value.trim();
    
    if(cityname){
        //get city lat and lon by running teh function
        getCityCoor(cityname);
        //save search under the search bar
        saveInput(cityname);
        //clear the input after submit
        cityNameEl.value="";
        console.log(cityname);
    }else{
        //alert if enter empty
        alert("please enter a city");
    }
};

//button submit
var buttonSubmitHandler=function(event){
    var value=event.target.textContent;
    getCityCoor(value);

    console.log(event.target.textContent)

};


//search button 
searchFormEl.addEventListener("submit", formSubmitHandler);


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
//****local storage and prevent****

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//****web API *******
//weather condition



// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// ***if condition***

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//web API create box


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// local storage and prevent to create coule button.