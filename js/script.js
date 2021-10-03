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
    d.innerHTML ="  ("+ date +") ";
    current.appendChild(d);
    var w = document.createElement('img');
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
    var forecaste = document.getElementById("forecastTitle");
    forecaste.innerHTML='';
    var casteone = document.getElementById("castone");
    casteone.innerHTML ='';
    var casttwo = document.getElementById("casttwo");
    casttwo.innerHTML='';
    var castthree = document.getElementById("castthree");
    castthree.innerHTML='';
    var castfour = document.getElementById("castfour");
    castfour.innerHTML='';
    var castfive = document.getElementById("castfive");
    castfive.innerHTML='';
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

         // display title for 5 day caste
        var forecaste = document.getElementById("forecastTitle");
        var title = document.createElement('h2');
        title.innerHTML = "5-Day Forecaste: ";
        forecaste.appendChild(title);
        
        //cast1:      
        var castone = document.getElementById("castone");
        castone.setAttribute("class","castone")
        var cast1 = data['daily'][1]['dt'];
        var datecast1 = new Date(cast1*1000).toDateString();
        var weathercode1 = data['daily'][1]['weather'][0]['icon'];
        var tempk1 = data['daily'][1]['temp']['day'];	
        var temp1 = (((tempk1-273.15)*1.8)+32).toFixed(2);
        var windms1 = data['daily'][1]['wind_speed'];
        var wind1 = (2.236936*windms1).toFixed(2);
        var humidity1= data['daily'][1]['humidity'];
       
        //display for tomorrow 
        var d1 = document.createElement('h3')
        d1.innerHTML ="  "+ datecast1;
        castone.appendChild(d1);
        var we1 = document.createElement('img');
        we1.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode1+"@2x.png");
        castone.appendChild(we1);
        var t1 = document.createElement('p');
        t1.innerHTML = "Temp: "+temp1+" ℉";
        castone.appendChild(t1);
        var w1= document.createElement('p');
        w1.innerHTML = "Wind: "+wind1+" MPH";
        castone.appendChild(w1);
        var h1 = document.createElement('p');
        h1.innerHTML = "Humidty: "+humidity1+"%";
        castone.appendChild(h1);
        
        //cast2: 
        var casttwo = document.getElementById("casttwo");
        casttwo.setAttribute("class","casttwo");
        var cast2 = data['daily'][2]['dt'];
        var datecast2 = new Date(cast2*1000).toDateString();
        var weathercode2 = data['daily'][2]['weather'][0]['icon'];
        var tempk2 = data['daily'][2]['temp']['day'];	
        var temp2 = (((tempk2-273.15)*1.8)+32).toFixed(2);
        var windms2 = data['daily'][2]['wind_speed'];
        var wind2 = (2.236936*windms2).toFixed(2);
        var humidity2= data['daily'][2]['humidity'];

        //display for caste day 2
        var d2 = document.createElement('h3')
        d2.innerHTML ="  "+ datecast2;
        casttwo.appendChild(d2);
        var we2 = document.createElement('img');
        we2.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode2+"@2x.png");
        casttwo.appendChild(we2);
        var t2 = document.createElement('p');
        t2.innerHTML = "Temp: "+temp2+" ℉";
        casttwo.appendChild(t2);
        var w2= document.createElement('p');
        w2.innerHTML = "Wind: "+wind2+" MPH";
        casttwo.appendChild(w2);
        var h2 = document.createElement('p');
        h2.innerHTML = "Humidty: "+humidity2+"%";
        casttwo.appendChild(h2);

        //cast3:
        var castthree = document.getElementById("castthree");
        castthree.setAttribute("class","castthree");
        var cast3 = data['daily'][3]['dt'];
        var datecast3 = new Date(cast3*1000).toDateString();
        var weathercode3 = data['daily'][3]['weather'][0]['icon'];
        var tempk3 = data['daily'][3]['temp']['day'];	
        var temp3 = (((tempk3-273.15)*1.8)+32).toFixed(2);
        var windms3 = data['daily'][3]['wind_speed'];
        var wind3 = (2.236936*windms3).toFixed(2);
        var humidity3= data['daily'][3]['humidity'];


        //display for caste day 3
        var d3 = document.createElement('h3')
        d3.innerHTML ="  "+ datecast3;
        castthree.appendChild(d3);
        var we3 = document.createElement('img');
        we3.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode3+"@2x.png");
        castthree.appendChild(we3);
        var t3 = document.createElement('p');
        t3.innerHTML = "Temp: "+temp3+" ℉";
        castthree.appendChild(t3);
        var w3= document.createElement('p');
        w3.innerHTML = "Wind: "+wind3+" MPH";
        castthree.appendChild(w3);
        var h3 = document.createElement('p');
        h3.innerHTML = "Humidty: "+humidity3+"%";
        castthree.appendChild(h3);

        //cast4:
        var castfour = document.getElementById("castfour");
        castfour.setAttribute("class","castfour");
        var cast4 = data['daily'][4]['dt'];
        var datecast4 = new Date(cast4*1000).toDateString();
        var weathercode4 = data['daily'][4]['weather'][0]['icon'];
        var tempk4 = data['daily'][4]['temp']['day'];	
        var temp4 = (((tempk4-273.15)*1.8)+32).toFixed(2);
        var windms4 = data['daily'][4]['wind_speed'];
        var wind4 = (2.236936*windms4).toFixed(2);
        var humidity4= data['daily'][4]['humidity'];

        //display for caste day 4
        var d4 = document.createElement('h3')
        d4.innerHTML ="  "+ datecast4;
        castfour.appendChild(d4);
        var we4 = document.createElement('img');
        we4.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode4+"@2x.png");
        castfour.appendChild(we4);
        var t4 = document.createElement('p');
        t4.innerHTML = "Temp: "+temp4+" ℉";
        castfour.appendChild(t4);
        var w4= document.createElement('p');
        w4.innerHTML = "Wind: "+wind4+" MPH";
        castfour.appendChild(w4);
        var h4 = document.createElement('p');
        h4.innerHTML = "Humidty: "+humidity4+"%";
        castfour.appendChild(h4);


        //cast5:
        var castfive = document.getElementById("castfive");
        castfive.setAttribute("class","castfive");
        var cast5 = data['daily'][5]['dt'];
        var datecast5 = new Date(cast5*1000).toDateString();
        var weathercode5 = data['daily'][5]['weather'][0]['icon'];
        var tempk5 = data['daily'][5]['temp']['day'];	
        var temp5 = (((tempk5-273.15)*1.8)+32).toFixed(2);
        var windms5 = data['daily'][5]['wind_speed'];
        var wind5 = (2.236936*windms5).toFixed(2);
        var humidity5= data['daily'][5]['humidity'];

        //display for caste day 5
        var d5 = document.createElement('h3')
        d5.innerHTML ="  "+ datecast5;
        castfive.appendChild(d5);
        var we5 = document.createElement('img');
        we5.setAttribute("src","http://openweathermap.org/img/wn/"+weathercode5+"@2x.png");
        castfive.appendChild(we5);
        var t5 = document.createElement('p');
        t5.innerHTML = "Temp: "+temp5+" ℉";
        castfive.appendChild(t5);
        var w5= document.createElement('p');
        w5.innerHTML = "Wind: "+wind5+" MPH";
        castfive.appendChild(w5);
        var h5 = document.createElement('p');
        h5.innerHTML = "Humidty: "+humidity5+"%";
        castfive.appendChild(h5);
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
