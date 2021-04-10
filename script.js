var city = "Minnesota";

var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid={API-KEY-HERE}";

$.getJSON(link, function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weather);
});