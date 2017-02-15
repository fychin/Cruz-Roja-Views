var mymap = L.map('live-map').setView([32.506674, -116.963434], 16);
var ambulanceIcon = L.icon({
	iconUrl: 'ambulance-icon.png',
	iconSize: [60, 60],
});
var hospitalIcon = L.icon({
	iconUrl: 'hospital-icon.png',
	iconSize: [40, 40]
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWFuZ2Y5NiIsImEiOiJjaXltYTNmbTcwMDJzMzNwZnpzM3Z6ZW9kIn0.gjEwLiCIbYhVFUGud9B56w', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoieWFuZ2Y5NiIsImEiOiJjaXltYTNmbTcwMDJzMzNwZnpzM3Z6ZW9kIn0.gjEwLiCIbYhVFUGud9B56w'
}).addTo(mymap);

L.marker([32.506787, -116.963839], {icon: hospitalIcon}).addTo(mymap);

L.marker([32.507443, -116.965987], {icon: ambulanceIcon}).addTo(mymap).on('mouseover', function(e){
	this.bindPopup("<strong>Ambulance A</strong><p>Standby</p>");
	this.openPopup().on('mouseout', function(e){
		this.closePopup();
	});
});
L.marker([32.506827, -116.962798], {icon: ambulanceIcon}).addTo(mymap).on('mouseover', function(e){
	this.bindPopup("<strong>Ambulance B</strong><p>Standby</p>");
	this.openPopup().on('mouseout', function(e){
		this.closePopup();
	});
});
L.marker([32.504333, -116.965169], {icon: ambulanceIcon}).addTo(mymap).on('mouseover', function(e){
	this.bindPopup("<strong>Ambulance C</strong><p>On Duty</p>");
	this.openPopup().on('mouseout', function(e){
		this.closePopup();
	});
});

//var geiselMarker = L.marker([32.881065, -117.237556]).addTo(mymap);
//geiselMarker.bindPopup("<strong>Geisel Library</strong>").openPopup();

