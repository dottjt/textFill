// Perfect, works as intended.
// 30-05-16

var createGrid = function() { 
	for (var i = 0; i < 2000; i++) {  	
		var textElement = document.createElement("p"); 
		var newContent = document.createTextNode("X"); 
		    textElement.appendChild(newContent);

		document.getElementById("contain").appendChild(textElement).classList.add("hello" + i);

	}
}

createGrid();

