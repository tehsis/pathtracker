require('mapbox.js');

var map = L.mapbox.map('map', 'tehsis.hpi731fn',{
  tileLayer: {
    detectRetina: true
  }
}).setView([40, -74.50], 100);
var marker = L.marker([50.5, 30.5]).addTo(map);

map.locate({setView: true, maxZoom: 100});

var watcher;

var follow_button = document.getElementsByClassName('follow')[0];
var unfollow_button = document.getElementsByClassName('unfollow')[0];


follow_button.addEventListener('click', function() {
 var polyline = L.polyline([], {color: 'red'}).addTo(map);

 follow_button.style.display = 'none';
 unfollow_button.style.display = 'block';

 watcher = navigator.geolocation.watchPosition(function(position) {
    map.setView([position.coords.latitude, position.coords.longitude], 100);
    marker.setLatLng([position.coords.latitude, position.coords.longitude]);
    polyline.addLatLng([position.coords.latitude, position.coords.longitude]); 
  });
});

unfollow_button.addEventListener('click', function() {
 follow_button.style.display = 'block';
 unfollow_button.style.display = 'none';

 navigator.geolocation.clearWatch(watcher);
});
