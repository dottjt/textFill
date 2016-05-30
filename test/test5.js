// Testing random selection for one tile;
// Works 30-05-16

var createGrid = function() { 
	for (var i = 0; i < 20; i++) {  	
		var textElement = document.createElement("p"); 
		var newContent = document.createTextNode("X"); 
		    textElement.appendChild(newContent);

		document.getElementById("contain").appendChild(textElement).classList.add("hello" + i, "here");

	}
}

createGrid();



var randomTile = function() { 
	var randomSelection = Math.floor(Math.random() * 20);
	var select = document.querySelector(".hello" + randomSelection)
	select.innerHTML = "OOO"

}

randomTile();

