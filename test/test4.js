// Let's try and get hover to work with one element.
// It works with just one element 30-05-16

var textElement = document.createElement("p"); 
var newContent = document.createTextNode("A"); 
    textElement.appendChild(newContent);
document.getElementById("contain").appendChild(textElement).classList.add("hello");
// element is flip 


var flip = document.querySelector(".hello");


flip.addEventListener('mouseover', function() { 
		flip.classList.add("yo");
				// transform so that it goes through 
	}, false)

