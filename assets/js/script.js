var clic = document.getElementById("clic");
var score = 0;
var display = document.getElementById("affichage");
var multiplicateur = 1;
var reset = document.getElementById("reset");
var multiplier = document.getElementById("multiplier");
var autoclickercompteur = 1;
var tempoClick;
var tempory00 = 0; //variable temporaire pour le teste on fais pas credit



display.innerHTML=score;
function onClick(){
	score = score+1 * multiplicateur;
	display.innerHTML = score;
}

function augmenterMultiplicateur(){
	tempory00 = score;
	tempory00 = tempory00 -50;
	console.log(tempory00);
	if (tempory00>0) {
		multiplicateur = multiplicateur +1;
		score = tempory00;
		display.innerHTML = score;
	}else{
		alert("pas assez de clic!");
	}
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
	score = score+1;
	display.innerHTML = score;
}

//fonction reset all
function resetScore(){
	score = 0;
	multiplicateur = 1;
	clearInterval (tempoClick);
	display.innerHTML = score;
}