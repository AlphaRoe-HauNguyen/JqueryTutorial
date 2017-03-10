// AIzaSyDia01skabytp_FX9ErPReOhOtCBxDn5Dw

var map;

function initMap() {

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
    var marker = null;
    $('#txtSearch').keypress(function(e) {

        if (e.which == 13) {
            var address = $('#txtSearch').val();
            if (address == "") {
                return false;
            }
            if (marker !== null) {
                marker.setMap(null);
            }
            
            $.ajax({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address,
                success: function(result) {
                    var location = result.results[0].geometry.location;
                    var address = result.results[0].formatted_address;

                    marker = new google.maps.Marker({
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: address,
                        position: location
                    });

                    map.panTo({
                        lat: location.lat,
                        lng: location.lng
                    });

                    map.setZoom(16);

                    var infowindow = new google.maps.InfoWindow({
                        content: address,
                        maxWidth: 200
                    });

                    infowindow.open(map, marker);
                },
                error: function(err) {

                }
            });
        }
    });
});
