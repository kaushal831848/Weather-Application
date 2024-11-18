const apiKey = "8b718b4d2935b7625fe3a17cf8ced283";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// Your Provided Openweather key
function getweather(){
    const city=document.getElementById("cityInput").value;
    const weatherDetails=document.getElementById("WeatherDetails");
    if(city===""){
        weatherDetails.innerHTML="<p>Please Enter a city</p>";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>{
        console.log(data);
        if(data.cod==="404"){
            weatherDetails.innerHTML="<p>City not Found</p>"
        }
        else{
            weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
            <p>Tempatature:${data.main.temp}</p>`;
        }
    })
    .catch((error)=>{
        weatherDetails.innerHTML="<p>Error</p>"  
    })
    

}