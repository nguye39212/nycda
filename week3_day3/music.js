$(document).ready(function(){
	$('#song1link').on('click', function(){
		if(document.getElementById('song1').paused) {
		} 
		else {
		}
	})
	});

function playOrStop(audioElement){
	var audio = document.getElementsByTagName('audio');
	for (i = 0; i < audio.length; i++) {
		if(audioElement != audio[i]){
			audio[i].pause();
		}
	}
	if(audioElement.paused){
		audioElement.play();
	} else {
		audioElement.pause();
	}
}




var spotifyResponse;

$.ajax({
    method: "GET", // optional, GET by default, also takes POST,    
                   // PUT, DELETE. We'll learn more about what these methods
                   // mean later in the course.
    url: "https://api.spotify.com/v1/search", // The API URL you're 
                                              // requesting information from
    data: { // An object that contains other information 
            // you need to send with your request
        type: "track", // type and q (the query) are 
                       // both required to make this request
        q: "Christmas" // per the API documentation.
                       // type can be 'track', 'artist', or 'album'
    },
    success: function(response){  // This function will run
      spotifyResponse = response; // once you get a successful
      console.log(response)       // response from the API!
    }
});

var trackId = "6NMz3Cjvod2qnJjakiRDA8";
var trackInfo;

$.ajax({
    url: `https://api.spotify.com/v1/tracks/${trackId}`, 
    success: function(response){
      trackInfo = response;
      console.log(response)
    }
});

var artistId = "7v4imS0moSyGdXyLgVTIV7";
var artistInfo;

$.ajax({
    url: `https://api.spotify.com/v1/artists/${artistId}`, 
    success: function(response){
      artistInfo = response;
      console.log(response)
    }
});

var albumId = "6XodQl1BPzs13GY61iXQv7"
var albumInfo;

$.ajax({
    url: `https://api.spotify.com/v1/albums/${albumId}`, 
    success: function(response){
      albumInfo = response;
      console.log(response)
    }
});