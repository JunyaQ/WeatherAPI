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
        var lat = data['coord']['lat'];
        var lon = data['coord']['lon'];
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=daily&appid=c7a06032b7a947e2ad991c8e63f709c1')
        .then(response => response.json())
        .then(data => {
            console.log(data);      
        var unixdate = data['current']['dt'] ;
        var date = new Date(unixdate*1000).toDateString();
        console.log("date: "+date);
        var temp = data['current']['temp'];
        console.log("temp: "+temp);
        var wind ;
        console.log("wind: "+wind);
        var humidity = data['current']['humidity'];
        console.log("humidity: "+humidity);
        var uv = data['current']['uvi'] ;
        console.log("uvi: "+uv);
        })
        
    })
   
    .catch(error => "name error")
   
})

//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//c7a06032b7a947e2ad991c8e63f709c1
//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
