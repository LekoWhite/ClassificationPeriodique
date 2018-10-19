function debut () {
	var bouton=document.getElementById("bouton");
	bouton.addEventListener("click",recherche);
	var searchBar=document.getElementById('element');
	searchBar.addEventListener("keypress", checkKeyPress);
	function checkKeyPress(key){
		if(key.keyCode == 13 ){
			recherche();
		}
	}
}

function recherche(){
	var element=document.getElementById('element').value;
	window.alert(element);
}

window.addEventListener("load",debut);
