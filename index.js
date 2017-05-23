console.log("Plz work");

var map, infoWindow;
function initMap() {
    console.log("callback works");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 12
    });

    infoWindow = new google.maps.InfoWindow;

    // Get location from Geolocation object
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent("Locaiton Found");
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            console.log("ERROR: Geolocaiton found, but not able to load map");
            infoWindow.open(map);
        }); 
    } else {
        console.log("ERROR: Geolocation not enabled");
        infoWindow.open(map);
    };
}