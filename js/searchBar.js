function debut () {
	var bouton=document.getElementById("bouton");
	bouton.addEventListener("click",recherche);
	var 
}

function recherche(){
	var element=document.getElementById('element').value;
	window.alert(element);
}

window.addEventListener("load",debut);
