function Jukebox(stop, play, pause, ff,rw){
	this.stop = stop;
	this.play = play;
	this.pause = pause;
	this.ff = ff;
	this.rw = rw;
}

var songs = [s1,s2,s3];


// $(document).ready(function(){
// 	$('#song1link').on('click', function(){
// 		if(document.getElementById('song1').paused) {
// 			//play the song
// 		} else {
// 			// pause the song
// 		}
// 		// find the audio element (thats the song)
// 		// if the song is playing, pause it.
// 		// if the song is paused, play it.
// 	})
// })