console.log("Plz work");

var map, infoWindow;
function initMap() {
    console.log("callback works");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 15
    });

    infoWindow = new google.maps.InfoWindow;

    // Get location from Geolocation object
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var currLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

            // plot the currLocation on Google Maps, or handle accordingly:

            new google.maps.Marker({ title: 'Current Location',
                                    map: map, 
                                    position: currLocation 
            });

            map.setCenter(currLocation);

        }, function(error) {
            console.log("ERROR: Geolocaiton found, but not able to load map");
            console.log(error.code + " " + error.message);
        }); 
    } else {
        console.log("ERROR: Geolocation not enabled");
    };
}