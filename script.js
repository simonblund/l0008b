/* function mapme(){
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    console.log("here");
    let zoom = 13;
    let lon = 60.122546;
    let lat = 19.935219;

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/'+zoom+'/'+long2tile(lon,zoom)+'/'+lat2tile(lat,zoom)+'?access_token=pk.eyJ1Ijoic2ltb25ibHVuZCIsImEiOiJjazVxbGRpaHEwM2YzM2ZwOWYyeHZvMHlkIn0.kZuGKh1zX0bGlYmL3lFk5Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

}

function long2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }
function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }

mapme(); */

var mymap = L.map('mapid').setView([60.122546, 19.935219], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2ltb25ibHVuZCIsImEiOiJjazVxbGRpaHEwM2YzM2ZwOWYyeHZvMHlkIn0.kZuGKh1zX0bGlYmL3lFk5Q', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);

	L.marker([60.125263, 19.951344]).addTo(mymap)
		.bindPopup("<b>Industribrand</b><br />Farlig rök.").openPopup();

	L.circle([60.125263, 19.951344], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Evakueras omedelbart.");

	L.polygon([
		[60.125263, 19.951344],
		[60.138513, 19.961987],
        [60.134069, 19.981728]
	]).addTo(mymap).bindPopup("Område i vindens riktning som behöver evakueras före klockan 13:00.");


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Du klickade på " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);