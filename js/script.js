var city = '';
var searchBtn = document.querySelector(".searchBtn");
/**display the weather info based on the searched city 
 * city, date, icon, temp, wind, humidity, uvindex
*/
function displayCurrent(city,date,weathercode,temp,wind,humidity,uv){
    var current = document.getElementById("current");
    current.setAttribute('class','current-right');
    var c=document.createElement('h3');
    c.setAttribute('class','currentTitle');
    c.innerHTML = city+"  ";
    current.appendChild(c);
    var d = document.createElement('h3')
    d.setAttribute('class','currentTitle');
    d.innerHTML ="  "+ date;
    current.appendChild(d);
    var w = document.createElement('img');
    w.setAttribute('class','currentTitle');
    w.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode+"@2x.png");
    current.appendChild(w);
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
function displayforecastone(lat,lon,unixdate){
    //https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&dt='+unixdate+'&appid=c7a06032b7a947e2ad991c8e63f709c1')
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            //cast1:      
        var castone = document.getElementById("castone");
        var cast1 = data['daily'][1]['dt'];
        var datecast1 = new Date(cast1*1000).toDateString();
        var weathercode1 = data['daily'][1]['weather'][0]['icon'];
        var tempk1 = data['daily'][1]['temp']['day'];	
        var temp1 = (((tempk1-273.15)*1.8)+32).toFixed(2);
        var windms1 = data['daily'][1]['wind_speed'];
        var wind1 = (2.236936*windms1).toFixed(2);
        var humidity1= data['daily'][1]['humidity'];
       
        var d = document.createElement('h3')
        d.setAttribute('class','currentTitle');
        d.innerHTML ="  "+ date;
        current.appendChild(d);
        var w = document.createElement('img');
        w.setAttribute('class','currentTitle');
        w.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode+"@2x.png");
        current.appendChild(w);
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

        
        //cast2: 
        var cast2 = data['daily'][2]['dt'];
        var datecast2 = new Date(cast2*1000).toDateString();
        console.log("date2: "+datecast2);
        var weathercode2 = data['daily'][2]['weather'][0]['icon'];
        console.log("weatherIcon2: "+weathercode2);
        var tempk2 = data['daily'][2]['temp']['day'];	
        var temp2 = (((tempk2-273.15)*1.8)+32).toFixed(2);
        console.log("temp2: "+temp2);
        var windms2 = data['daily'][2]['wind_speed'];
        var wind2 = (2.236936*windms2).toFixed(2);
        console.log("wind2: "+wind2);
        var humidity2= data['daily'][2]['humidity'];
        console.log("humidity2: "+humidity2);

        //cast3:
        var cast3 = data['daily'][3]['dt'];
        var datecast3 = new Date(cast3*1000).toDateString();
        console.log("date3: "+datecast3); 
        var weathercode3 = data['daily'][3]['weather'][0]['icon'];
        console.log("weatherIcon3: "+weathercode3);
        var tempk3 = data['daily'][3]['temp']['day'];	
        var temp3 = (((tempk3-273.15)*1.8)+32).toFixed(2);
        console.log("temp3: "+temp3);
        var windms3 = data['daily'][3]['wind_speed'];
        var wind3 = (2.236936*windms3).toFixed(2);
        console.log("wind3: "+wind3);
        var humidity3= data['daily'][3]['humidity'];
        console.log("humidity3: "+humidity3);

        //cast4:
        var cast4 = data['daily'][4]['dt'];
        var datecast4 = new Date(cast4*1000).toDateString();
        console.log("date: "+datecast4);
        var weathercode4 = data['daily'][4]['weather'][0]['icon'];
        console.log("weatherIcon4: "+weathercode4);
        var tempk4 = data['daily'][4]['temp']['day'];	
        var temp4 = (((tempk4-273.15)*1.8)+32).toFixed(2);
        console.log("temp4: "+temp4);
        var windms4 = data['daily'][4]['wind_speed'];
        var wind4 = (2.236936*windms4).toFixed(2);
        console.log("wind4: "+wind4);
        var humidity4= data['daily'][4]['humidity'];
        console.log("humidity4: "+humidity4);

        //cast5:
        var cast5 = data['daily'][5]['dt'];
        var datecast5 = new Date(cast5*1000).toDateString();
        console.log("date: "+datecast5);
        var weathercode5 = data['daily'][5]['weather'][0]['icon'];
        console.log("weatherIcon5: "+weathercode5);
        var tempk5 = data['daily'][5]['temp']['day'];	
        var temp5 = (((tempk1-273.15)*1.8)+32).toFixed(2);
        console.log("temp5: "+temp5);
        var windms5 = data['daily'][5]['wind_speed'];
        var wind5 = (2.236936*windms5).toFixed(2);
        console.log("wind5: "+wind5);
        var humidity5= data['daily'][5]['humidity'];
        console.log("humidity5: "+humidity5);
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
        //console.log("date0: "+date);
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
        displayCurrent(city,date,weathercode,temp,wind,humidity,uv);
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
