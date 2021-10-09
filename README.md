# bootcamp-challenge-06-weatherAPI
This is a website connected with a service side API, and will give dynamic result based on the API<br/>
WHEN open the webpage<br/>
THEN showing a list of previous searched result (won't show anything if never use the browser to do any search before)<br/>
AND showing a blank input space on the left top corver and search button<br/>

WHEN type in a valid city and click the search button <br/>
THEN showing the current weather at the top large box<br/>
AND five days forecastes under the large box<br/>

FOR the current weather box<br/>
SHOWING city name (same as searching),date, icon represents the weather, temperature in F, wind speed in MPH, humidity and UV index<br.>

WHEN viewing the UV index, it has its own background color<br/>
WHEN UV index <3, showing green,<br/>
WHEN UV index between 3-4.99, showing yellow,<br/>
WHEN UV index between 5-6.99, showing orange <br/>
WHEN UV index between 7-9.99, showing red<br/>
WHEN UV index larger than 10, showing violet<br/>


FOR the 5 days forecastes<br/>
SHOWING the date, icon represents the weather, temperature in F, wind speed in MPH, humidity<br/>

WHEN search a new city <br/>
THEN the city name will be saved in local sotrage, and have a lsit of history buttons under the search button<br/>

WHEN search a city that already searched before (already saved in the history before)<br/>
THEN it won't be saved for a second time in the local storage. <br/>

WHEN clicked on to each city in searched histories <br/>
THEN it shows the weather of the city<br/>

The main page <br/>
<img src="img/webMain.jpg"><br/>
Result page after search <br/>
<img src= "img/result.jpg"><br/>

Deployed URL: https://junyaq.github.io/bootcamp-challenge-weatherAPI/
