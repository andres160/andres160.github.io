

// window.addEventListener('load',()=>{


  let app_id = "7a2dc34dc19171e1b3a489eaef5e123c"
  let units = "imperial"
  let searchMethod

  function getSearchMethod(searchTerm){
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
      searchMethod='zip';
    else
      searchMethod = 'q';
  }

  function searchWeather(searchTerm){
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&appid=${app_id}&units=${units}`).then(result => {
      return result.json();
    }).then(result =>{
      init(result);
    });
  }

  function init(resultFromServer) {
      switch (resultFromServer.weather[0].main) {
      }

      let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
      let temperatureElement = document.getElementById('temperature');
      let humidityElement = document.getElementById('humidity');
      let windSpeedElement = document.getElementById('windSpeed');
      let cityHeader = document.getElementById('cityHeader');

      let weatherIcon = document.getElementById('documentIconImg');
      weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

      let resultDescription = resultFromServer.weather[0].description;
      weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
      temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176;';
      windSpeedElement.innerHTML = 'Winds at  ' + Math.floor(resultFromServer.wind.speed) + ' m/s';
      cityHeader.innerHTML = resultFromServer.name;
      humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity +  '%';

  }



  document.getElementById('searchBtn').addEventListener('click', () => {
      let searchTerm = document.getElementById('searchInput').value;
      if(searchTerm)
          searchWeather(searchTerm);
  });
