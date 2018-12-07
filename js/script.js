var atomSymbols = [];
var atomNames = [];
var atomAtomicNumbers = [];
var atomMolarMass = [];



// Requette HTTP pour récupérer le XML et opérer sur le XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Remplir le tableau des div atom
    // var atomtab=[];
    // for(var i = 0; i < 118; i++){
    //   atomtab[i] = document.getElementById('atom' + (i+1));
    // }

    var XMLColumns = this.responseXML.getElementsByTagName('column'); // On récupère Un HTMLCollection de tous les élements de tag 'column'
    {
      for (var i = 0; i < XMLColumns.length; i++){ // On cycle through les objets du HTMLCollection
        if (XMLColumns[i].getAttribute('name') == 'symbole'){ // On met les symboles des atomes dans un tableau
          atomSymbols.push(XMLColumns[i].innerHTML);
        }
        if (XMLColumns[i].getAttribute('name') == 'nom'){ // On met les noms des atomes dans un tableau
          atomNames.push(XMLColumns[i].innerHTML);
        }
        if (XMLColumns[i].getAttribute('name') == 'numero'){ // On met les numéros atomiques des atomes dans un tableau
          atomAtomicNumbers.push(XMLColumns[i].innerHTML);
        }
        if (XMLColumns[i].getAttribute('name') == 'masse_atomique'){ // On met les masses molaires(/atomiques) des atomes dans un tableau
          atomMolarMass.push(XMLColumns[i].innerHTML);
        }
      }
    }
  }
};
xhttp.open("GET", "other/atomes.xml", true);
xhttp.send();


// Placement des Données dans le HTML
window.addEventListener('load', main);

function main() {
  {
    var atomSymbolElements = document.getElementsByClassName('atom_symbol');
    for(let i = 0; i < atomSymbolElements.length; i++){
      atomSymbolElements[i].innerHTML = atomSymbols[i]; // Insertion des Symboles
    }
  }
  {
    var atomNameElements = document.getElementsByClassName('atom_name');
    for(let i = 0; i < atomNameElements.length; i++){
      atomNameElements[i].innerHTML = atomNames[i]; // Insertion des Symboles
    }
  }
  {
    var atomAtomicNumberElements = document.getElementsByClassName('atomic_number');
    for(let i = 0; i < atomAtomicNumberElements.length; i++){
      atomAtomicNumberElements[i].innerHTML = atomAtomicNumbers[i]; // Insertion des Symboles
    }
  }
  {
    var atomMolarMassElements = document.getElementsByClassName('weight');
    for(let i = 0; i < atomMolarMassElements.length; i++){
      atomMolarMassElements[i].innerHTML = atomMolarMass[i]; // Insertion des Symboles
    }
  }
}
