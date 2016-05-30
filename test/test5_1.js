

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
	}



function randAlphabet(elem) { 
		flip[elem].innerHTML = randomAlphabet[randomCounter];


		return
	}



/*

// for use in event listener 
function randomIterate() { 
	var randomSelection = Math.floor(Math.random() * 300); // select a random
	var select = document.querySelector(".hello" + randomSelection)
	select.innerHTML = randomAlphabet[randomCounter]
}

*/

var randomCounter = 0;
var randomAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

function randiter() { 
	for (var j = 0; j < 300; j++) {  
		for (var i = 0; i < 300; i++) {  
			randAlphabet(i);
		}	


	
	randomCounter += 1;

	if (randomCounter === 26) {
		randomCounter = 0;
	}

	return
	}
}


// I basically need to figure out where to put ac();

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
	}
}


setInterval(iter, 400)




function selectori(i) {
	var elem = document.querySelector(".hello" + i);
			console.log(elem)

	elem.addEventListener('mouseover', function() { 
		elem.classList.add("yo");
				// transform so that it goes through 
	}, false)
}



for (var i = 0; i < 300; i++) {	
	selectori(i);

};




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

