var map;

function initMap() {
    map = new google.maps.Map($('.gmap')[0], {
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