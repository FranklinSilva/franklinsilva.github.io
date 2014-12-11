
var list = [
"franklin",
"joao",
"fernando",
"dayamudra",
"isabella",
"julho",
"Daniel",
"Bianca",
"Gustavo",
"Marianne",
"lucas",
"jorge",
"Paloma",
"Lipe",
"julia",
"gisele",
"rose",
"giel",
"katerine"
];



function start(){
	for (var i = 0; i <list.length; i++){
		createEl(list[i]);
		}

}

function createEl(content){
	randomelement = getRandomInt(6, 1).toFixed(0);
	randomcoordenadeX = getRandomInt(1, 81).toFixed(0);
	randomcoordenadeY = getRandomInt(1, 81).toFixed(0);
	
	if(randomelement == 1){
		randomelement = "gratitude";
	}
	if(randomelement == 2){
		randomelement = "kind";
	}
	if(randomelement == 3){
		randomelement = "faithful";
	}
	if(randomelement == 4){
		randomelement = "happiness";
	}
	if(randomelement == 5){
		randomelement = "harmony";
	}
	

	
	var svg = document.getElementsByTagName('svg')[0];
	var newtext = document.createElementNS("http://www.w3.org/2000/svg","text");
	newtext.setAttribute('id', ''+content);
	newtext.setAttribute('x', ''+randomcoordenadeX+'%');
	newtext.setAttribute('y', ''+randomcoordenadeY+'%');
	newtext.setAttribute('class', ''+randomelement);
	svg.appendChild(newtext);
	var textcontent = document.createTextNode(""+content);
	newtext.appendChild(textcontent);	
	//document.getElementById(""+content).innerHTML = ''+content;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



