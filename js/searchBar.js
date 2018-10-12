function debut () {
	var bouton=document.getElementById("bouton");
	bouton.addEventListener("click",recherche);
}

function recherche(){
	var element=document.getElementById('element').value;
	window.alert(element);
}

window.addEventListener("load",debut);
