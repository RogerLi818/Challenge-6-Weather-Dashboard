var searchFormEl=document.querySelector("#searchForm");
var cityNameEl=document.querySelector("#cityname");



var getGeoCoordApi="https://maps.googleapis.com/maps/api/geocode/json?address=austin&key=AIzaSyBwg0UUINl4I_id-F6HUBFTvYTwLfR5q40"
var weatherApi = "http://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,daily&appid=2fa507258cd8d0ee1e9387b3bda47af0"
fetch(getGeoCoordApi).then(function(response){
    console.log(response);
    response.json().then(function(data){
        console.log(data);
        console.log("lat = "+data.results[0].geometry.location.lat);
        console.log("lng = "+data.results[0].geometry.location.lng);
    })
})
fetch(weatherApi).then(function(response){
    console.log(response);
    response.json().then(function(data){
        console.log(data);
        //weather condition, temperature, the humidity, the wind speed, and the UV index

        console.log(data.current.humidity);
        console.log(data.current.temp);
    });
})

var formSubmitHandler=function(event){
    event.preventDefault();

    //get value from input
    var cityname=cityNameEl.value.trim();

    if(cityname){
        //getCityWeather();
        cityNameEl.value="";
        console.log(cityname);
    }else{
        alert("test");
    }
};




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