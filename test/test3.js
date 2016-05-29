// Combining createGrid with alphabet iteration. 
// 30-05-16 OMMMGGGGG Can't believe I got it done in a morning :) Test Driven design is sooooo good. 
// 

var createGrid = function() { 
	for (var i = 0; i < 300; i++) {  	
		var textElement = document.createElement("p"); 
		var newContent = document.createTextNode("X"); 
		    textElement.appendChild(newContent);

		document.getElementById("contain").appendChild(textElement).classList.add("hello" + i, "here");

	}
}

createGrid();


// figure this out


var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabetCounter = 0;

var flip = document.querySelectorAll(".here");

  
function alphabetIterate(elem) { 

		flip[elem].innerHTML = alphabet[alphabetCounter];
		return
		console.log(flip[elem]) // print each element.
		// so it goes through each .here element. 
		// problem is that it iterates through the elements, rather than EVERY element moving at once. 
		// What I need is to have the alphabet counter on a different scope. Yeah. 

	}


// I basically need to figure out where to put ac();
function ac() { 
	
}

function iter() { 
	for (var j = 0; j < 300; j++) {  
		for (var i = 0; i < 300; i++) {  
			alphabetIterate(i);
		}	
	alphabetCounter += 1;

	if (alphabetCounter === 26) {
		alphabetCounter = 0;
	}
	return
	console.log(alphabet[alphabetCounter])
	}
}



setInterval(iter, 1000)

// hmmm doesn't work, but 



/*
	for (var j = 0; j < 2000; j++ {

	
		console.log(alphabet[alphabetCounter])
		flip[i].innerHTML = alphabet[alphabetCounter];
		alphabetCounter += 1;

		if (alphabetCounter === 26) {
			alphabetCounter = 0;
		}

*/
// setInterval(alphabetIterate, 1000); 

