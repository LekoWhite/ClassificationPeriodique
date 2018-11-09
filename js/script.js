function debut () {
	var bouton=document.getElementById("boutont");
	bouton.addEventListener("click",tableau);
  var bouton=document.getElementById("boutonb");
  bouton.addEventListener("click",bio);

function tableau(){
	window.location="../ClassificationPeriodique/index.html";
}

function bio(){
  window.location="../ClassificationPeriodique/biographie.html";
}

window.addEventListener("load",debut);
