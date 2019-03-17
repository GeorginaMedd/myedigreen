// Initialize and add the map
function initMap() {
  // The location of newleaf
  var salvationarmy = { lat: 55.9377, lng: -3.1785 };
  var chestheart = { lat: 55.938, lng: -3.1786 };
  var bethchristian = { lat: 55.9398, lng: -3.1817 };
  var cancerresearch = { lat: 55.9416, lng: -3.1811 };
  var shelter = { lat: 55.9442, lng: -3.1834 };
  var oxfam = { lat: 55.9444, lng: -3.18347 };
  var britishheart = { lat: 55.9447, lng: -3.1836 };

  // The map, centered at newleaf
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: cancerresearch
  });
  // The marker, positioned at newleaf
  var marker = new google.maps.Marker({ position: salvationarmy, map: map });
  var marker2 = new google.maps.Marker({ position: chestheart, map: map });
  var marker3 = new google.maps.Marker({ position: bethchristian, map: map });
  var marker4 = new google.maps.Marker({ position: cancerresearch, map: map });
  var marker5 = new google.maps.Marker({ position: shelter, map: map });
  var marker6 = new google.maps.Marker({ position: oxfam, map: map });
  var marker7 = new google.maps.Marker({ position: britishheart, map: map });
}
