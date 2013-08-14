function initialize() {
  var myLatlng = new google.maps.LatLng(26.708352, -80.056082);

  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Lets meet here!"
  });

  marker.setMap(map);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
