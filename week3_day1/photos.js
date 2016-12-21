
function Album(photos = []){
	this.photos = photos; // Array
	this.addNewPhoto = function(photoObj){
		this.photos.push(photoObj);
	}
}

function Photo(location, fileName){
	this.location = location
	this.fileName = fileName
}

var photo1 = new Photo("Hawaii", "photo1.jpg");
var photo2 = new Photo("Austin", "photo2.jpg")


var myAlbum = new Album([photo1, photo2]);

var photoObj = new Photo('home', 'home.jpg');


myAlbum.addNewPhoto(photoObj);


