function debut () {
	var bouton=document.getElementById("bouton");
	bouton.addEventListener("click",tableau);

}
function tableau(){
	window.location="../ClassificationPeriodique/index.html";
}

window.addEventListener("load",debut);
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
