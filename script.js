function mapme(){
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    console.log("here");

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/10/60.122546/19.935219?access_token=pk.eyJ1Ijoic2ltb25ibHVuZCIsImEiOiJjazVxbGRpaHEwM2YzM2ZwOWYyeHZvMHlkIn0.kZuGKh1zX0bGlYmL3lFk5Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

}

mapme();
