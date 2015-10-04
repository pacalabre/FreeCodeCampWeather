$(function(){
  var $location = $('#location');
  var $weather = $('#weather');
  var $clouds = $('#clouds');
  var lat = 'lat=47.61';
  var lon = 'lon=-122.33';
  var weatherReturned = $.getJSON('http://api.openweathermap.org/data/2.5/weather?'+lat+'&'+lon+'&units=imperial',function(returnedData){
    $location.html('<p>'+returnedData.name+'</p>');
    $weather.html('<p>'+returnedData.main.temp+'</p>');
    $clouds.html('<p>'+returnedData.weather[0].description+'</p>');
  });
})






  // get current location

  /* /get weather from http://openweathermap.org/ - still needs to parse the data
  $.ajax({
    type: "GET",
    url: "http://openweathermap.org/data/2.5/weather?q=seattle.php",

    success: function(weather) {
        $.each(weather, function(i, weather) {
          console.log('success',weather);
          $weather.append('<h1>'+weather+'</h1>');
      })
    }

  }) */
