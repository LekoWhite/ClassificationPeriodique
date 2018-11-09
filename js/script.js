<<<<<<< HEAD
function debut () {
	var bouton=document.getElementById("boutont");
	bouton.addEventListener("click",tableau);
  var bouton=document.getElementById("boutonb");
  bouton.addEventListener("click",bio);
}

function tableau(){
	window.location="../ClassificationPeriodique/index.html";
}

function bio(){
  window.location="../ClassificationPeriodique/biographie.html";
}

window.addEventListener("load",debut);
=======
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    for(var i = 0; i < 118; i++){
      var atom = document.getElementById('atom' + toString(i));
      var test_atom = document.getElementById('test_atom');
      test_atom.innerHTML = xhttp.getElementsByName('nom');
    }

  }
};
xhttp.open("GET", "other/atomes.xml", true);
xhttp.send();
>>>>>>> 25caa7f39f0e6873c40d7129615da2f108c3dc94
