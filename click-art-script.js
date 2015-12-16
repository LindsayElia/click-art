// **************  PIXEL ART MAKER  **************


// getElementsByTagName always returns a NodeList, which is an Array-like object. 
// We want the first thing in the array to get just one 'body' tag.
var body = document.getElementsByTagName("body")[0];

// set body styles
body.style.fontFamily = "'Source Sans Pro', sans-serif";
body.style.backgroundColor = "silver";
body.style.marginTop = "0";
body.style.paddingBottom = "50px";

// create a wrapper to center everything on the page
var wrapper = document.createElement("div");
document.body.appendChild(wrapper);
	wrapper.style.width = "80%";
	wrapper.style.minWidth = "900px";
	wrapper.style.margin = "0 auto";
	wrapper.style.background = "white";
	wrapper.style.clear = "both";

// create a <h1> heading for the page
var headerMain = document.createElement("h1");
wrapper.appendChild(headerMain);
	headerMain.innerHTML = "Click Art";
	headerMain.style.width = "70%";
	headerMain.style.margin = "0 auto";
	headerMain.style.textAlign = "center";
	headerMain.style.fontSize = "5em";
	headerMain.style.color = "rgb(123, 152, 174)";

// add text inside of a <div> to tell visitors how to use the page
var instructions = document.createElement("div");
wrapper.appendChild(instructions);
	instructions.style.margin = "0 10% 5px";
	instructions.innerHTML = "<p style='margin:0;' >Hello and welcome to Click Art!</p>" + 
	"<h2>Instructions</h2>" +
	"<ul style='margin-top:0;' >" +
		"<li>Click on one of the colored squares from the pallette below " + 
			"the canvas and then click into the empty squares inside of the canvas to fill it with that color.</li>" +
		"<li>If you would like to choose from a different set of colors, " +
			"you can refresh the page for a brand new palette. " + 
			"But be careful - refreshing the page will erase your artwork!</li>" +
		"<li>To erase individual squares, choose the larger white square marked 'eraser', " + 
			"then click over the square(s) on the canvas you want to erase.</li>" +
		"<li>If you would like to share a screenshot of your artwork please share it with me via Twitter at " + 
		"<a href='https://twitter.com/USFlin' target='blank'>@USFlin</a>.</li>" +
	"</ul>";

// style some of the elements we just created
instructions.style.marginBottom = "40px";
var headingTwo = document.getElementsByTagName("h2")[0];
headingTwo.style.color = "rgb(123, 152, 174)";
headingTwo.style.margin = "5px auto";

// create a <div> to hold all of the empty squares
var divCanvasContainer = document.createElement("div");
wrapper.appendChild(divCanvasContainer);
	divCanvasContainer.style.width = "800px";
	divCanvasContainer.style.border = "5px solid gray";
	divCanvasContainer.style.margin = "0 auto";
	divCanvasContainer.style.display = "table";

// create the empty squares
// var createSquares = function(){
	for (var i = 0; i < 13095; i++) {
		var tinyDiv = document.createElement("div");
		divCanvasContainer.appendChild(tinyDiv);
			tinyDiv.style.width = "5px";
			tinyDiv.style.float = "left";
			tinyDiv.style.padding = "0 0 5px 0";
			// unfortunately the bottom and the right side of the last rows
			// are missing borders
			tinyDiv.style.borderLeft = "1px solid #dddddd";
			tinyDiv.style.borderTop = "1px solid #dddddd";
			tinyDiv.className = "tinydiv";
	}
//};

// create a div to hold the squares with the colors visitors will choose from
var paletteContainer = document.createElement("div");
wrapper.appendChild(paletteContainer);
	paletteContainer.style.clear = "both";
	paletteContainer.style.width = "800px";
	paletteContainer.style.margin = "20px auto";

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
	whiteDiv.style.margin = "0 0 50px 0";
	whiteDiv.style.float = "left";
	whiteDiv.style.position = "relative";
	whiteDiv.style.left = "65px";

// make a div to hold the colors to the side of the eraser
var paletteContainerColors = document.createElement("div");
paletteContainer.appendChild(paletteContainerColors);
	paletteContainerColors.style.width = "465px";
	paletteContainerColors.style.float = "right";
	paletteContainerColors.style.position = "relative";
	paletteContainerColors.style.right = "65px";

// create the colored squares
// var colorPalette = function(){
		for (var x = 0; x < 30; x++){
			var palDiv = document.createElement("div");
			paletteContainerColors.appendChild(palDiv);
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

// add a clearfix after the last element inside of the wrapper so that the 
// height of the wrapper is always containing all inner elements
var clearfixDiv = document.createElement("div");
wrapper.appendChild(clearfixDiv);
clearfixDiv.innerHTML = " ";
clearfixDiv.style.clear = "both";
clearfixDiv.style.display = "table";


// colorPalette();
// createSquares();
// colorBrush();