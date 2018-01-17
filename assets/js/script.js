var clic = document.getElementById("clic");
var score = 0;
var display = document.getElementById("affichage");
var multiplicateur = 1;
var reset = document.getElementById("reset");
var multiplier = document.getElementById("multiplier");
var autoclickercompteur = 1;
var tempoClick;
var tempory00 = 0; //variable temporaire pour le teste on fais pas credit
var prixMultiplicateur = 50;


// ------------ affichage initial-------------
display.innerHTML=score;

if (score<499){ 
	document.getElementById("autoclicker").disabled = true;
}
if (score<prixMultiplicateur){
	document.getElementById("multiplier").disabled = true;
}
document.getElementById("affichage-multiplicateur").innerHTML = "Power Clic lvl: " + multiplicateur;
multiplier.innerHTML = "Power clic :" + prixMultiplicateur + "u";


// -----------------end affichage initial--------------

function onClick(){
	if (score>=prixMultiplicateur){
		multiplier.disabled = false;
	}
	if(score>499){
		document.getElementById("autoclicker").disabled = false;
	}
	score = score+1 * multiplicateur;
	display.innerHTML = score;
}

function augmenterMultiplicateur(){
	tempory00 = score;
	tempory00 = tempory00 - prixMultiplicateur;
	console.log(tempory00);
	if (tempory00>0) {
		multiplicateur ++;
		console.log(multiplicateur);
		score = tempory00;
		display.innerHTML = score;
		prixMultiplicateur = Math.round((prixMultiplicateur/2)*Math.PI);
		console.log(prixMultiplicateur);
		document.getElementById("affichage-multiplicateur").innerHTML = "Power Clic lvl: " + multiplicateur;
	}
	else{
		alert("pas assez de clic!");
	}	
	multiplier.innerHTML = "Power clic :" + prixMultiplicateur + "u";
}


function autoclicker (){

	tempory00 = score;
	tempory00 = tempory00 -500;
	console.log(tempory00);
	if(tempory00>0){
		tempoClick = setInterval (autoScore, 1000);
		score = tempory00;
		autoclickercompteur = autoclickercompteur +1;
		console.log(autoclickercompteur);
	}else{
		alert("ta pas assez purgé xD continue à cliquer!!!")
	}
}

function autoScore (){
	score = score+10;
	display.innerHTML = score;
}

//fonction reset all
function resetScore(){
	score = 0;
	multiplicateur = 1;
	prixMultiplicateur = 50;
		autoclickercompteur = 1;
	clearInterval (tempoClick);
	display.innerHTML = score;
	display.innerHTML = multiplicateur;
	multiplier.innerHTML = "Power clic :" + prixMultiplicateur + "u";
	document.getElementById("affichage-multiplicateur").innerHTML = "Power Clic lvl: " + multiplicateur;
	document.getElementById("multiplier").disabled = true;
}