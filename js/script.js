
//Functions to scroll when clicking links on nav to the different divs in the website:
//Funciones para hacer scroll clickeando los links del nav y bajar a los diferentes divs de la web:

function scrollHero(){
	document.querySelector('#hero').scrollIntoView({ behavior: 'smooth'});
}

function scrollServices(){
	document.querySelector('#services').scrollIntoView({ behavior: 'smooth'});
}

function scrollProps(){
	document.querySelector('#properties').scrollIntoView({ behavior: 'smooth'});
}

function scrollPrices(){
	document.querySelector('#prices').scrollIntoView({ behavior: 'smooth'});
}

function scrollProccess(){
	document.querySelector('#proccess').scrollIntoView({ behavior: 'smooth'});
}

function scrollContact(){
	document.querySelector('#pageFooter').scrollIntoView({ behavior: 'smooth'});
}



//Navbar fixed / fija

document.getElementById('nav');



//Burger menu show/hide

var menuBackground = document.getElementById("menuBackground");


function burgerMenu(){
	

	if ( document.getElementById("menuBackground").classList.contains('menuDesplegado')) {
		document.getElementById('menuBackground').classList.remove("menuDesplegado");
		document.getElementById("menu").classList.remove("showMenu");
	}

	else{
		document.getElementById('menuBackground').classList.add("menuDesplegado");
		document.getElementById("menu").classList.add("showMenu");
	}
	}

	



