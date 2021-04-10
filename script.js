var city = "Minnesota";

// appid is API KEY
var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=57b8c58ea82dc7261df5a3986ec8ea6d";

$.getJSON(link, function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weather);
});