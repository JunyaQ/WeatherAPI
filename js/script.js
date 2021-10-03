var city = '';
var searchBtn = document.querySelector(".searchBtn");
/**display the weather info based on the searched city 
 * city, date, icon, temp, wind, humidity, uvindex
*/
function displayCurrent(city,date,temp,wind,humidity,uv){
    var current = document.getElementById("current");
    current.setAttribute('class','current-right');
    var c=document.createElement('h3');
    c.innerHTML = city+"  ";
    current.appendChild(c);
    var d = document.createElement('h3')
    d.innerHTML ="  "+ date;
    current.appendChild(d);
    var t = document.createElement('p');
    t.innerHTML = "Temp: "+temp+" ℉";
    current.appendChild(t);
    var w = document.createElement('p');
    w.innerHTML = "Wind: "+wind+" MPH";
    current.appendChild(w);
    var h = document.createElement('p');
    h.innerHTML = "Humidty: "+humidity+"%";
    current.appendChild(h);
    var u = document.createElement('p');
    u.innerHTML = "UV Index: "+uv;
    current.appendChild(u);
}
/**clear the screen before each search */
function removedisplay(){
    var current = document.getElementById("current");
    current.innerHTML='';
}
/**display forecast
 * date, icon, temp, wind, humidity
*/
function displayforecast(lat,lon,unixdate){
    //https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&dt='+unixdate+'&appid=c7a06032b7a947e2ad991c8e63f709c1')
        .then(response => response.json())
        .then(data => {
            console.log(data);      
        var dateone = new Date(unixdate*1000).toDateString();
        console.log("date: "+dateone);
        var weathercode = data['current']['weather'][0]['icon'];
        console.log("weatherIcon: "+weathercode);
        var tempk = data['current']['temp'];	
        var temp = (((tempk-273.15)*1.8)+32).toFixed(2);
        console.log("temp: "+temp);
        var windms = data['current']['wind_speed'];
        var wind = (2.236936*windms).toFixed(2);
        console.log("wind: "+windms);
        var humidity = data['current']['humidity'];
        console.log("humidity: "+humidity);
       
        })
}




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
        var date = new Date(unixdate*1000).toDateString();// to readable date
        //console.log("date: "+date);
        var weathercode = data['current']['weather'][0]['icon'];
        //console.log("weatherIcon: "+weathercode);
        var tempk = data['current']['temp'];	
        var temp = (((tempk-273.15)*1.8)+32).toFixed(2);
        //console.log("temp: "+temp);
        var windms = data['current']['wind_speed'];
        var wind = (2.236936*windms).toFixed(2);
        //console.log("wind: "+windms);
        var humidity = data['current']['humidity'];
        //console.log("humidity: "+humidity);
        var uv = data['current']['uvi'] ;
        //console.log("uvi: "+uv);
        /**unixcast time to fetch api for the forcast use */
        var unixcastone = unixdate+86400;// seconds per day
        var unixcasttwo = unixcastone+86400;
        var unixcastthree = unixcasttwo+86400;
        var unixcastfour = unixcastthree+86400;
        var unixcastfive = unixcastfour+86400;

        //console.log(datecastone);
        removedisplay();
        displayCurrent(city,date,temp,wind,humidity,uv);
        displayforecast(lat,lon,unixdate);
      
        })

    })
   
    .catch(error => "name error")
   
})

//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//c7a06032b7a947e2ad991c8e63f709c1
//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
