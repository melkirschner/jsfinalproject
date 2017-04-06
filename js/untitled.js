// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAo1RtFfqN_ljDqg1vC3gBPWPbLazkL6YA",
    authDomain: "final-project-2722d.firebaseapp.com",
    databaseURL: "https://final-project-2722d.firebaseio.com",
    storageBucket: "final-project-2722d.appspot.com",
    messagingSenderId: "50441507580"
  };
  firebase.initializeApp(config);

  'use strict';
  

  $(document).ready(function() {
 if (navigator.geolocation) { //Checks if browser supports geolocation
   navigator.geolocation.getCurrentPosition(function (position) {                                                              //This gets the
     var latitude = position.coords.latitude;                    //users current
     var longitude = position.coords.longitude; 
     console.log(longitude);                //location
     var coords = new google.maps.LatLng(latitude, longitude);
      
   });
 } else {
  alert("Geolocation API is not supported in your browser.");
 }
  	// var googleUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=point_of_interest&key=AIzaSyDpjXVBC4YK75SsQgPTF4qePKsuJ5qf-OQ";
    var googleUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=point_of_interest&key=AIzaSyDpjXVBC4YK75SsQgPTF4qePKsuJ5qf-OQ";
    var googleApi = "AIzaSyDpjXVBC4YK75SsQgPTF4qePKsuJ5qf-OQ";
  	$.ajax({
    url: googleUrl,
    dataType: "json",


    success: function(response) {
    	
        console.log(response);
    }
});
      });

// function GetLatlong()
//     {
//         var geocoder = new google.maps.Geocoder();
//         var address = document.getElementById('textboxid').value;

//         geocoder.geocode({ 'address': address }, function (results, status) {

//             if (status == google.maps.GeocoderStatus.OK) {
//                 var latitude = results[0].geometry.location.lat();
//                 var longitude = results[0].geometry.location.lng();

//             }
//         });



//   https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
// https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters


 // google places API key AIzaSyDpjXVBC4YK75SsQgPTF4qePKsuJ5qf-OQ

// https://maps.googleapis.com/maps/api/place/nearbysearch/xml?location=23.006000,72.601100&types=point_of_interest&radius=50000&sensor=false&key=AIzaSyDpjXVBC4YK75SsQgPTF4qePKsuJ5qf-OQ

