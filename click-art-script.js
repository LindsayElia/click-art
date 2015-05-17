// **************  PIXEL ART MAKER  **************

// this gives me the first element called "body" from my document
// I think that is what the [0] is for?
// adding this after in-class review
var body = document.getElementsByTagName("body")[0]; 

// set the font for the whole page
body.style.fontFamily = "'Source Sans Pro', sans-serif";

// create a wrapper to center everything on the page
var wrapper = document.createElement("div");
document.body.appendChild(wrapper);
	wrapper.style.width = "1000px";
	wrapper.style.margin = "0 auto";
//	wrapper.style.background = "red";
//	wrapper.innerHTML = "...";

// create a <h1> heading for the page
var header = document.createElement("h1");
wrapper.appendChild(header);
	header.innerHTML = "Click Art";
	header.style.width = "70%";
	header.style.margin = "0 35%";
	header.style.fontSize = "6em";
	header.style.color = "rgb(123, 152, 174)";

//add some text inside of a <p> to tell visitors how to use the page
var instructions1 = document.createElement("p");
wrapper.appendChild(instructions1);
	instructions1.style.margin = "0 10% 5px";
	instructions1.innerHTML = "Hello and welcome to Click Art! "

// I'm using multiple <p> items because I could not figure out how to insert a <br /> tag or line return with JS.
var instructions2 = document.createElement("p");
wrapper.appendChild(instructions2);
	instructions2.style.margin = "0 10% 5px";
	instructions2.innerHTML = "Instructions: Click on one of the colored squares below " + 
		"the canvas and then click into the empty squares inside of the canvas to fill it with that color. ";

var instructions3 = document.createElement("p");
wrapper.appendChild(instructions3);
	instructions3.style.margin = "0 10% 5px";
	instructions3.innerHTML = "If you would like to choose from a different set of colors, " +
		"you can refresh the page for a brand new palette. " + 
		"But be careful - refreshing the page will erase your artwork! " +
		"To erase individual squares, choose the larger white square marked 'eraser', " + 
		"then click over the square(s) on the canvas you want to erase."
		
var instructions4 = document.createElement("p");
wrapper.appendChild(instructions4);
	instructions4.style.margin = "0 10% 3%";
	instructions4.innerHTML = "If you would like to share a screenshot of your artwork you can tweet at me at @USFlin.";
	

// create a div to hold all of the empty squares
var divContainer = document.createElement("div");
wrapper.appendChild(divContainer);
	divContainer.style.width = "1000px";
//	divContainer.style.margin = "5% auto";
//	divContainer.style.background = "blue";
//	divContainer.innerHTML = "...";

// var brushColor = "purple";  // don't need this any more

// create the empty squares
// var createSquares = function(){
	for (var i = 0; i < 15105; i++) {
		var tinyDiv = document.createElement("div");
		divContainer.appendChild(tinyDiv);
			tinyDiv.style.width = "5px";
			tinyDiv.style.float = "left";
			tinyDiv.style.padding = "0 0 5px 0";
			// a border on all 4 sides looks too thick to me, 
			// unfortunately the bottom and the right side of the last rows
			// are missing borders
			tinyDiv.style.borderLeft = "1px solid #dddddd";
			tinyDiv.style.borderTop = "1px solid #dddddd";
			// tinyDiv.innerHTML = ".";	
			tinyDiv.className = "tinydiv";
//			tinyDiv.addEventListener("click", function(){
//			this.style.background = brushColor;
//		})
	}
//};

// create a div to hold the squares with the colors visitors will choose from
var paletteContainer = document.createElement("div");
wrapper.appendChild(paletteContainer);
	paletteContainer.style.clear = "both";
	paletteContainer.style.width = "1000px";
	paletteContainer.style.margin = "5% auto";
	paletteContainer.style.padding = "20px";
//	paletteContainer.style.background = "blue";
//	paletteContainer.innerHTML = "...";

// make one white square so visitors can use it as an eraser
var whiteDiv = document.createElement("div");
paletteContainer.appendChild(whiteDiv);
	whiteDiv.style.width = "100px";
	whiteDiv.style.float = "both";
	whiteDiv.style.padding = "10px 0 30px 10px";
	whiteDiv.style.border = "1px solid black";
	whiteDiv.style.background = "white";
	whiteDiv.className = "palette";
	whiteDiv.innerHTML = "Click here to load eraser";
	whiteDiv.style.margin = "0 0 10px 0";

// create the colored squares
// var colorPalette = function(){
		for (var x = 0; x < 30; x++){
			var palDiv = document.createElement("div");
			paletteContainer.appendChild(palDiv);
				palDiv.style.width = "30px";
				palDiv.style.float = "left";
				palDiv.style.padding = "0 0 30px 0";
				palDiv.style.borderLeft = "1px solid black";
				palDiv.style.borderTop = "1px solid black";
				palDiv.style.borderBottom = "1px solid black";
				// palDiv.innerHTML = ".";	
				tempColor = "#" + Math.floor(Math.random()*16777215).toString(16);
				palDiv.style.background = tempColor;
				palDiv.className = "palette";				
			//	palDiv.addEventListener("click", function() {
			//		brushColor = this.style.backgroundColor;
			//	});			
		}
// };

// HELP: I'm having trouble pulling apart the functions in this program and sending the data
// into the other functions. When I nest the functions it works, when I try to pull them apart
// it does not work.

// set the brush color and set the empty square to that color when both are clicked on
// var colorBrush = function(){
	var brushColorsArr = document.getElementsByClassName("palette");
	var brushColor;
	for (var c = 0; c < brushColorsArr.length; c++){
		brushColorsArr[c].addEventListener("click", function(){
			// set brushColor match the background color of whatever div in "palette" class was just clicked on
			var brushColor = this.style.backgroundColor;
			//	return brushColor;
			
		// change the background color of the div in the "tinydiv" class when it gets clicked on		
		// var paintIt = function(colorBrush){
			var paintMeArr = document.getElementsByClassName("tinydiv");
			for (var j = 0; j < paintMeArr.length; j++){
				paintMeArr[j].addEventListener("click", function(){
					this.style.background = brushColor;
				});
				
				// Having trouble figuring out how to use multiple eventListeners on the same item
				// May need to not do this inside of the same loop?
				paintMeArr[j].addEventListener("dragover", function(){
					this.style.background = brushColor;
				});
			}
		//}
		})
	}
//};


// colorPalette();
// createSquares();
// colorBrush();