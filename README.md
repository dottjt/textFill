# textFill
<<<<<<< HEAD
A pseudo text game I created using JavaScript, CSS and HTML. 

You use the mouse to hover over a huge grid of text, which changes the text in various ways. There is also a game within the grid, where a random text element is allocated "special", you must click on it. 


30-05-16
I think I am done with this. I'm not exactly sure what I wanted to achieve with it. I think I wanted to make it into a game, however I'm appreciating it more as a visual effect. I might do something else with this in the future.


# FUNCTIONS

createGrid() // creates all text elements into a div

setInterval(iter, 1000) 
	+ iter() // contains iteration function for all div elements; 
	+ alphabetIterate() // Iterates through alphabet



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
test.js - Initial createGrid function() - Works as intended 30/05/16


// text change mechanics
test2.js - One element iterates through the alphabet  - Works as intended 30/05/16


// combine features of test1.js and test2.js
test3.js - It iterates through the alphabet on every element on the page - Works as intended 30-05-16


// EventListener function.
test4.js - EventListener for just one function. Combine this with test2.js for single element - Works as intended 30-05-16

test4_1.js - Combine with test3.js to get to work with all - Works as intended 30-05-16

// Random letter
test5.js - Test for a random letter to appear on one element. Combine with test.js - Works as intended 30-05-16




//Failed Tests
FAIL test5_1.js - Combine with test4_1.js to make complete solution. Doesn't work. Need new infrastructure.



# TO BE ADDED 

// add if viewport = full, stop generating IN createGrid();  while "contain"

// what I might have to do is once everything has been created, make a seperate function that randomly chooses an element and makes it change, for the "special element to be clicked".

// how can I make it so that the width and height of 
=======
A pseudo text game I created using HTML, CSS and JavaScript. 
>>>>>>> c77eaf64a037c0b39681917b36b8523b9e8451cf
