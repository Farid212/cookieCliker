var clic = document.getElementById("clic");
var score = 0;
var display = document.getElementById("affichage");
var multiplicateur = 1;
var reset = document.getElementById("reset");
var multiplier = document.getElementById("multiplier");
var autoclicker = document.getElementById("autoclicker");
var autoclickercompteur = true;
var tempoClick;
var tempory00 = 0; //variable temporaire pour le teste on fais pas credit
var prixMultiplicateur = 50;
var littleAutoClic;


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
	score = score+1 * multiplicateur;
	display.innerHTML = score;
	// autocliker gratuit a 200unités
	// if(score>=200){
	// littleAutoClic = setInterval(autoScore, 1000);
	// }
	if(score>499){
		document.getElementById("autoclicker").disabled = false;
	}
	if (score>=prixMultiplicateur){
		multiplier.disabled = false;
	}
}

function augmenterMultiplicateur(){
	tempory00 = score;
	tempory00 = tempory00 - prixMultiplicateur;
	console.log(tempory00);
	if (tempory00>=0) {
		multiplicateur ++;
		score = tempory00;
		display.innerHTML = score;
		prixMultiplicateur = Math.round((prixMultiplicateur/2)*Math.PI);
		document.getElementById("affichage-multiplicateur").innerHTML = "Power Clic lvl: " + multiplicateur;
		display.innerHTML = score;
		if (score>=prixMultiplicateur) {
			multiplier.disabled = false;
		}else{
			multiplier.disabled = true;
		}
	}
	else{
		multiplier.disabled = true;
	}	
	multiplier.innerHTML = "Power clic :" + prixMultiplicateur + "u";
}


function autoclickerfct (){
	tempory00 = score;
	tempory00 = tempory00 -500;
	console.log(tempory00);
	if(tempory00>=0){
		autoclicker.disabled = true;
		tempoClick = setInterval (autoScore, 1000);
		score = tempory00;
		autoclickercompteur = autoclickercompteur +1;
		console.log(autoclickercompteur);
		display.innerHTML = score;
		autoclicker.disabled = true;
	}else{
	 	alert("ta pas assez purgé xD continue à cliquer!!!")
	}
	
}

function autoScore (){
	score = score+5 ;
	display.innerHTML = score;
	if(score>499 && autoclickercompteur===true ){
		document.getElementById("autoclicker").disabled = false;
	}else{
		autoclicker.disabled = true;
	}
}

//fonction reset all
function resetScore(){
	score = 0;
	multiplicateur = 1;
	prixMultiplicateur = 50;
	autoclickercompteur = 1;
	clearInterval (tempoClick);
	clearInterval (littleAutoClic);
	display.innerHTML = score;
	display.innerHTML = multiplicateur;
	multiplier.innerHTML = "Power clic :" + prixMultiplicateur + "u";
	document.getElementById("affichage-multiplicateur").innerHTML = "Power Clic lvl: " + multiplicateur;
	document.getElementById("multiplier").disabled = true;
}