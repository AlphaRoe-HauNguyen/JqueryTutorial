// AIzaSyDia01skabytp_FX9ErPReOhOtCBxDn5Dw

var map;

function initAutocomplete() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 10.7681596,
            lng: 106.6943671
        },
        zoom: 13,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    });
}

$(function() {
    $('#txtSearch').keypress(function(e) {

        if (e.which == 13) {
            var address = $('#txtSearch').val();
            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address,
                success: function(result) {
                    var location = result.results[0].geometry.location;
                    var address = result.results[0].geometry.formatted_address;
                    var marker = new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    });

                    map.panTo({
                        lat: location.lat,
                        lng: location.lng
                    });
                    map.setZoom(16);

                    markers.push(marker);

                    var infowindow = new google.maps.InfoWindow({
                        content: place.name
                    });

                    infowindow.open(map, marker);
                },
                error: function(err) {

                }
            });
        }
    });
});
/*
function initAutocomplete() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 10.7681596,
            lng: 106.6943671
        },
        zoom: 13,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    });

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            });

            markers.push(marker);

            var infowindow = new google.maps.InfoWindow({
                content: place.name
            });

            infowindow.open(map, marker);

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}*/
