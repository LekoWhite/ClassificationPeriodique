function debut () {
	var bouton=document.getElementById("boutont");
	bouton.addEventListener("click",tableau);
}

function tableau(){
	window.location="../ClassificationPeriodique/index.html";
}

window.addEventListener("load",debut);
