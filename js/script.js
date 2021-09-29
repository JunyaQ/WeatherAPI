var city = '';
var searchBtn = document.querySelector(".searchBtn");


searchBtn.addEventListener("click", function(){
    city = document.querySelector(".input").value;
    console.log(city);
    fetch('api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c7a06032b7a947e2ad991c8e63f709c1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => "name error");
   
})

//c7a06032b7a947e2ad991c8e63f709c1
//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
