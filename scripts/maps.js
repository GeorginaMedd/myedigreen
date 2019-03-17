// Initialize and add the map
function initMap() {
  // The location of newleaf
  var newleaf = { lat: 55.9387, lng: -3.1923 };
  var refillery = { lat: 55.9408, lng: -3.1785 };
  var ecolarder = { lat: 55.9506, lng: -3.2138 };
  var realfoods = { lat: 55.9437, lng: -3.2026 };
  var mapcenter = { lat: 55.9452, lng: -3.1974 };
  // The map, centered at newleaf
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: mapcenter
  });
  // The marker, positioned at newleaf
  var marker = new google.maps.Marker({ position: newleaf, map: map });
  var marker2 = new google.maps.Marker({ position: refillery, map: map });
  var marker3 = new google.maps.Marker({ position: ecolarder, map: map });
  var marker4 = new google.maps.Marker({ position: realfoods, map: map });
}
