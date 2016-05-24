var createGrid = function() { 
	for (var i = 0; i < 2000; i++) {  	
		//create DIV and put "X" inside it
		var newDiv = document.createElement("p"); var newContent = document.createTextNode("X"); newDiv.appendChild(newContent);
		
	 	// append DIV with "X" to contain DIV, with class "hello" + number 
		document.getElementById("contain").appendChild(newDiv).classList.add("hello" + i);

		//////////////////// Maybe look at toggle instead of add? 

		// while ("contain")
		// if viewport full, terminate
	}
}
createGrid();



var index = function(elem) { 
	
	var arry = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	elem
	arry.indexOf("A")

}

// Many classes selected via ".hello" + 1

var randNo = Math.floor(Math.random() * 2000);
// fuck yes, I got it to work with different scope!!!!!!
function selectori(i) {
	var elem = document.querySelector(".hello" + i);
			console.log(elem)

	elem.addEventListener('mouseover', function() { 
		elem.classList.add("yo");
		var tmp = i;
		if (tmp > 26) {
			tmp = tmp % 26;
		}
		// okay, all good, however now I need it to loop over just the same letter.
		var tim = document.createTextNode(arry[tmp]);
		elem.appendChild(tim);
				// transform so that it goes through 
	}, false)
}

for (var i = 0; i < 2000; i++) {	
	selectori(i);
};


/*)
// All elements selected via ".hello" // can't get it to work. 

var randNo = Math.floor(Math.random() * 2000);

var elem = document.querySelectorAll('.hello');

console.log(elem.classList)



setTimeout(function() {  
			elem.style.fontSize("500%")}, 100)
	}



elem.addEventListener('click', function() {elem.style.fontSize="600%";}, false);

*/








/*
var enlarge = function() { 
	var elem = querySelector("hello1");

	elem.style.fontSize="600%";
		//add style position
}
*/



/* 

//OLD FUNCTIONS

var createGrid = function() { 
	for (var i = 0; i < 10000; i++) {  
		//create DIV and put "X" inside it
	 	var newDiv = document.createElement("div"); var newContent = document.createTextNode("X"); newDiv.appendChild(newContent);

	 	// append DIV with "X" to contain DIV, with class "hello"
		var h = document.getElementById("contain").appendChild(newDiv)

	 	// if viewport full, terminate
	 	// function to be built

	 	//
		for (var j = 0; j < h.length; h++) {  
			h.classList.add("hello" + j);
			}
	}
}



var createGrid = function() { 
	for (var i = 0; i < 20; i++) {  
			for (var j = 0; j < 20; j++) { 
				var newDiv = document.createElement("div"); var newContent = document.createTextNode("X"); newDiv.appendChild(newContent);
 
				document.getElementById("contain").appendChild(newDiv).classList.add("hello" + j);
			}

	 	
	}
}


*/

