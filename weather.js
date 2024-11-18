const apiKey = "8b718b4d2935b7625fe3a17cf8ced283";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// Your Provided Openweather key
function getweather(){
    const city=document.getElementById("cityInput").value;
    const weatherDetails=document.getElementById("WeatherDetails");
    if(city===""){
        weatherDetails.innerHTML="<p>Please Enter a city</p>";
        return;
        weatherDetails.innerHTML=""
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const populationApi =  ` https://countriesnow.space/api/v0.1/countries/population/cities`;
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>{
        console.log(data);
        if(data.cod==="404"){
            weatherDetails.innerHTML +="<p>City not Found</p>"
        }
        else{
            weatherDetails.innerHTML +=`<h2>${data.name},${data.sys.country}</h2>
            <p>Tempatature:${data.main.temp}</p>`;
        }
    })
   
    
    fetch(populationApi, {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            city:city
        })
    })
    .then((response) => response.json())
    .then((populationData) => {
        if(populationData.data && populationData.data.populationCounts && populationData.data.populationCounts.length >= 0){
            weatherDetails.innerHTML += `<p>Population : ${populationData.data.populationCounts[0].value}</p>`;
        }else{
            // weatherdetails.innerHTML = <p> Population in ${city} is : ${data}
            console.log("Population Data : ",data)
        }
    })
    .catch((err) => {
        weatherDetails.innerHTML += '<p>Some Exception Ocured! </p>'
    })    


}
    

