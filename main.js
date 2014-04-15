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
var alert_modal = document.getElementsByClassName('waiting')[0];
var error_modal = document.getElementsByClassName('error')[0];


follow_button.addEventListener('click', function() {
 var polyline = L.polyline([], {color: 'red'}).addTo(map);

 map.locate({setView: true, maxZoom: 100});

 follow_button.style.display = 'none';
 unfollow_button.style.display = 'block';
 alert_modal.style.display = 'block';

 watcher = navigator.geolocation.watchPosition(function(position) {
    alert_modal.style.display = 'none';

    marker.setLatLng([position.coords.latitude, position.coords.longitude]);
    polyline.addLatLng([position.coords.latitude, position.coords.longitude]); 
  }, function() {
      alert_modal.style.display = 'none';
      error_modal.style.display = 'block';
  }, {
    enableHighAccuracy: true
  });
});

unfollow_button.addEventListener('click', function() {
 follow_button.style.display = 'block';
 unfollow_button.style.display = 'none';

 navigator.geolocation.clearWatch(watcher);
});
