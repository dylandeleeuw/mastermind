var guesses = 12;
var colorOptions = 8;
var codeLength = 4;

var colorCode = [];
var tempColorCode = [];
var userInput = [];
var allColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white"]
var curRow = 1;

function createGrid(){
		for (var i = 1; i <= guesses; i++) {
			var div = document.createElement("div");
			div.setAttribute('id', 'row' + i);
	    	document.getElementById("rows").appendChild(div);
	    	for (var j = 1; j <= codeLength; j++) {
	    		var btn = document.createElement("button");
	    		btn.setAttribute('id', 'row'+i+'color'+j);
	   			document.getElementById("row" + i).appendChild(btn);
	    	}
		}
	for (var i = 1; i <= codeLength; i++) {
    	var btn = document.createElement("button");
    	btn.setAttribute('id', 'inputBar'+i);
   		document.getElementById("inputBar").appendChild(btn);
    }
    randomColor();
}

function randomColor(){
	for (var i = 0; i <= codeLength -1; i++) {
		var number = Math.floor(Math.random()* colorOptions);
		colorCode.push(allColors[number]);
	}
	console.log(colorCode);
}

function input(userColor){
	userInput.push(userColor);
	console.log(userInput);

	document.getElementById('inputBar'+userInput.length).style.backgroundColor = userColor;

	if (userInput.length === codeLength){
		pushRow();
		compareCode();
		curRow++;
		curGuess = 1;
	}
}
function pushRow(){
	for (var i = 1; i <= codeLength; i++) {
		document.getElementById('row'+curRow+'color'+i).style.backgroundColor = userInput[i-1];
	}
}
function pushColorCode(){
	i = 0;
	colorCode.forEach( function() {
		tempColorCode.push(colorCode[i]);
		i++;
	});
}

function compareCode(){
	pushColorCode();
	var blackPin = 0;
	var whitePin = 0;
	for (var i = 0; i <= userInput.length -1; i++) {
		if (tempColorCode[i] === userInput[i]) {
			console.log(userInput[i], 'juiste plaats')
			tempColorCode.splice(i, 1);
			userInput.splice(i, 1);
			console.log(tempColorCode);
			console.log(userInput);
			i--;
			blackPin++;
		}
	}
	for (var i = 0; i <= userInput.length -1; i++) {
		compare = tempColorCode.indexOf(userInput[i]);
		if (compare > -1){
			console.log(userInput[i], 'onjuiste plaats')
			tempColorCode.splice(compare, 1);
			userInput.splice(i, 1);
			console.log(tempColorCode);
			console.log(userInput);
			i--;
			whitePin++;
		}else{
			console.log(userInput[i], 'bestaat niet')
		}
	}
	console.log(blackPin, whitePin);
	userInput.splice(0);
	tempColorCode.splice(0);
}

console.log('')