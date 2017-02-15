var mymap = L.map('live-map').setView([32.506674, -116.963434], 16);
// Initialize marker icons.
var ambulanceIcon = L.icon({
	iconUrl: 'ambulance-icon.png',
	iconSize: [60, 60],
});
var hospitalIcon = L.icon({
	iconUrl: 'hospital-icon.png',
	iconSize: [40, 40]
});

// Add layer to map.
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWFuZ2Y5NiIsImEiOiJjaXltYTNmbTcwMDJzMzNwZnpzM3Z6ZW9kIn0.gjEwLiCIbYhVFUGud9B56w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoieWFuZ2Y5NiIsImEiOiJjaXltYTNmbTcwMDJzMzNwZnpzM3Z6ZW9kIn0.gjEwLiCIbYhVFUGud9B56w'
}).addTo(mymap);

// Add hospital marker.
L.marker([32.506787, -116.963839], {icon: hospitalIcon}).addTo(mymap);


var ambulanceMarkers = {};
var ambulanceData = [{"id":"1", "lat":"32.507443", "lon":"-116.965987"}, {"id":"2", "lat":"32.506827", "lon":"-116.962798"}, {"id":"3", "lat":"32.504333", "lon":"-116.965169"}];

// Add ambulance markers.
for (var i = 0; i < ambulanceData.length; ++i) {
	var currentAmbulance = ambulanceData[i];
	ambulanceMarkers[currentAmbulance.id] = L.marker([currentAmbulance.lat, currentAmbulance.lon], {icon: ambulanceIcon})
		.bindPopup("<strong>Ambulance " + currentAmbulance.id + "</strong><br/>Standby").addTo(mymap);
	// Bind id to icon
	ambulanceMarkers[currentAmbulance.id]._icon.id = currentAmbulance.id;
	// Collapse panel on icon hover.
	ambulanceMarkers[currentAmbulance.id].on('mouseover', function(e){
		$('#collapse' + this._icon.id).collapse('show');
		this.openPopup().on('mouseout', function(e){
			$('#collapse' + this._icon.id).collapse('hide');
			this.closePopup();
		});
	});
}

// Open popup on panel hover.
$('.ambulance-panel').click(function(){
	var id = $(this).attr('id');
	// Open popup for 2.5 seconds.
	//alert(ambulanceMarkers[id]._icon.id);
	ambulanceMarkers[id].openPopup();
	setTimeout(function(){
		ambulanceMarkers[id].closePopup();
	}, 2500);
});