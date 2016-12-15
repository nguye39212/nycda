function changeHeader(/*event*/){
	// event.preventDefault();
	// console.log(event);

	var firstNameElement = document.getElementById('first-name');
		//grab value of the first name input
	//set equal to a variable.

	var firstName = firstNameElement.value;
	//grab the header html element
	var headerHtmlElement = document.getElementById('header')

	headerHtmlElement.innerHTML = "Welcome," + firstName +'.';

	//set innerHTML value of the header element
	//equal to the vatiable that holds the value
	//of the first name input
}

	//document.getElementById('my-form').addEventListener('click', changeHeader);

	//addEventListener(addEventListenerFor, callbackFunction)

	//submit
	//click