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

   window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      console.log(startPos.coords.latitude);
      console.log(startPos.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };
})


