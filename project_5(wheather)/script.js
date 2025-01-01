 const api_id = "72bcb168430f1306f7d917970796c586"
 const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
  
 const searchBox = document.querySelector(".search input")
 const btn = document.querySelector(".search button")

  async function checkWeather(city){
  response = await fetch(URL + city + `&appid=${api_id}`)
  var data = await response.json()

  console.log(data)

  document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+ '°C'
  document.querySelector('.city').innerHTML=data.name
  document.querySelector('.humidity').innerHTML=data.main.humidity + '%'
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr'


  }
   btn.addEventListener('click',()=>{
    checkWeather(searchBox.value)

   })
 