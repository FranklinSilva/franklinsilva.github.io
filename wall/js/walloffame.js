
var list = [
"Tomi Cunningham",
"David Delp",
"Frank Yu",
"Nickolai Jorgensen",
"Sailee Raje",
"Ken Finberg",
"Anastasia Miron",
"Tenaya & Jaana Tremp",
"Anita Walter",
"Rochelle Gatlin",
"Ivetta",
"Juditotal",
"Brad Schwagler",
"Gabriel Branbury",
"Diana Gameros",
"Davidlsher",
"Viradhamma",
"Pkrause333",
"Hankpellissier",
"Tonypress108",
"Cborrico",
"Smleeming",
"Jeremy Jones",
"Bwnayak",
"Simscha",
"Malathi",
"Robin Mackey",
"Marionlfalk",
"bipin.nagarale",
"ekuiz",
"Drew",
"Wakeupmartin",
"Doggle_99",
"Megan Curran",
"Semifrog",
"hope Schall- Buchanan",
"Leef Smith",
"Lavel006",
"Almurrayuk",
"Rfbenson",
"Jvalverde16",
"Megawilson",
"Pinkou_1130",
"Bipin Nagarale",
"Joselulo",
"Judepj",
"Maria Portillo",
"Drew",
"Milamaliaspice",
"Marycsalome",
"Gabrielbranbury",
"Swfrom2809",
"Jen",
"Viveka"
];



function start(){
	for (var i = 0; i <list.length; i++){
		createEl(list[i]);
		}

}

function createEl(content){
	randomelement = getRandomInt(6, 1).toFixed(0);
	randomcoordenadeX = getRandomInt(5, 91).toFixed(0);
	randomcoordenadeY = getRandomInt(5, 91).toFixed(0);
	
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



