// Let's create one element and try and make it setInterval to iterate through the alphabet. 
// 30-05-16 // Okay, it works now! 

// LEARNT: It turns out that setInterval works if you want it to keep going. setTimeout for just once.


// create element
var textElement = document.createElement("p"); 
var newContent = document.createTextNode("A"); 
    textElement.appendChild(newContent);
document.getElementById("contain").appendChild(textElement).classList.add("hello");
// element is flip 
var flip = document.querySelector(".hello");



var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabetCounter = 0;
  
var alphabetIterate = function(elem) { 
	console.log(alphabet[alphabetCounter])
	flip.innerHTML = alphabet[alphabetCounter];
	alphabetCounter += 1;

	if (alphabetCounter === 26) {
		alphabetCounter = 0;
	}
}

setInterval(alphabetIterate, 1000); 





/*

// test.js  

var createGrid = function() { 
	for (var i = 0; i < 2000; i++) {  	
		var textElement = document.createElement("p"); 
		var newContent = document.createTextNode("X"); 
		    textElement.appendChild(newContent);

		document.getElementById("contain").appendChild(textElement).classList.add("hello" + i);

	}
}

createGrid();

*/


