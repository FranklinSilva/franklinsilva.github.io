
var list = [
"Acarasisshi",
"Hank Pellisier",
"Pat & Paul Krause",
"Viradhamma",
"Diana Gameros",
"Prasadachitta",
"David Delp",
"David Olsher",
"Tomi Cunningham",
"Judi & Bob Dennehy",
"Frank Yu",
"Nora Judd",
"Abi Luthmann",
"Lea Gabay",
"Bipin Nagarle",
"Marion Falk",
"Robin Mackey",
"Malathi Raghavan",
"Leslie Simon",
"Biswajit Nayak",
"Jeremy Jones",
"Shalle Leeming",
"Carlos Borrico",
"Bedford Post Yoga Loft",
"Rochelle Gatlin",
"Viveka Chen",
"Jennifer Bec",
"Suzanne Woodland",
"Anastasia Miron",
"Drew Fola",
"Camila Perez",
"Maria Portillo",
"Pink Ou",
"Megan Wilson",
"Josiane Valverde",
"Sailee Raje",
"Ken Finberg",
"Deborah Levy",
"Anita Walter",
"Nick Jorgensen",
"RF Benson",
"The Fraser Family",
"Maw Shein Win",
"Joy Durighello",
"Susanne Pitsios",
"Leef Smith",
"Michaela Lavell",
"Al Murray",
"Sue Schall",
"RF Benson",
"Kate Sheludyaeva",
"Mary Salome",
"Ivetta Starikova",
"Josely Lo",
"Jude PJ",
"The Curran Sanchez Family",
"Nickolai Jorgensen",
"Anastasia Miron",
"Tenaya & Jaana Tremp",
"Rochelle Gatlin",
"Ivetta",
"Judi and Bob Dennehy",
"Brad Schwagler",
"Gabriel Branbury",
"Diana Gameros",
"David Olsher",
"Jeremy Jones",
"Robin Mackey",
"hope Schall- Buchanan",
"Megan Curran",
"Bipin Nagarale",
"Padmatara",
"jean Scorson",
"Elias Baumgarten",
"Karunadevi",
"Jan Abrahamson",
"Seth Josephson",
"Mary Huang",
"Saddhajoti",
"Gabriela Chacon",
"Dhyana Platas",
"Misha Cohen",
"Carolyn Cox",
"Keulen Kender",
"Sudhama Lee"
];

var hList = [
"Alan Senauke",
"Viradhamma",
"Shalle Leeming"
];

function start(){
	for (var i = 0; i <list.length; i++){
		createEl(list[i]);
		}
	for (var i = 0; i < hList.length; i++) {
		createSpecial(hList[i]);

	};
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

function createSpecial(content){
	randomelement = 1;
	randomcoordenadeX = getRandomInt(5, 91).toFixed(0);
	randomcoordenadeY = getRandomInt(5, 91).toFixed(0);

if(randomelement == 1){
		randomelement = "special";
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



