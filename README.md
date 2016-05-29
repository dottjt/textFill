# textFill
A pseudo text game I created using JavaScript, CSS and HTML. 

You use the mouse to hover over a huge grid of text, which changes the text in various ways. There is also a game within the grid, where a random text element is allocated "special", you must click on it. 

# FUNCTIONS

createGrid() // creates all text elements into a div



# HTML

<body>
	<div id="contain"></div> // container grid 
</body>

// The createGrid function then adds a heap of <p> elements with class of "hello" + i
// When element is hovered over, it appends class "yo" to the <p> elements. 
// So eventually it becomes 

<body>
	<div id="contain">
		<p class="hello1 yo"></p>
	</div> // container grid 
</body>


# TESTING 

// grid mechanics 
test.js - Initial createGrid function(); // Works as intended 30/05/16


// text change mechanics
test2.js - One element iterates through the alphabet  - Works as intended 30/05/16


// combine features 
test3.js - 


# TO BE ADDED 

// add if viewport = full, stop generating IN createGrid();  while "contain"


