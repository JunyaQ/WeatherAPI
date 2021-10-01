var city = '';
var searchBtn = document.querySelector(".searchBtn");


searchBtn.addEventListener("click", function(){
    city = document.querySelector(".input").value;
    console.log(city);
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c7a06032b7a947e2ad991c8e63f709c1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var city = data['name'];
        console.log("city: "+city);
        var date = moment().format('L');   
        console.log("date: "+date);
        var temp = data['main']['temp'];
        console.log("temp: "+temp);
        var wind;
        var humidity;
        var uv;
    })
   
    .catch(error => "name error")
   
})


//c7a06032b7a947e2ad991c8e63f709c1
//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
