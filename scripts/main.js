// Image switcher code

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/sample.png') {
		myImage.setAttribute('src', 'images/supreme.jpg');
	} else {
		myImage.setAttribute('src', 'images/sample.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUser() {
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUser();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = "Welcome, " + storedName;
}

myButton.onclick = function() {
	setUser();
}