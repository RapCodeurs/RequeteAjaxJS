/*function loadDoc() {
    const xlm = new XMLHttpRequest();
    xlm.onload = function () {
        myFunction(this);
    }
    xlm.open("GET", "fichier.xml");
    xlm.send();
}

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CITY");
    let table = "<tr><th>Marque</th></tr>";
    for (let i = 0; i < x.length; i++) {
        table += "<r><td>" + x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById('demo').innerHTML = table;
}*/


//Notre requête AJAX
const xhttp = new XMLHttpRequest();
let city;
xhttp.onload = function() {
  const xmlDoc = xhttp.responseXML;
  city = xmlDoc.getElementsByTagName("CITY");
  loadCity();
};
xhttp.open("GET", "fichier.xml");
xhttp.send();


//Notre fonction pour analyser notre XML et afficher sous forme de tableau
function loadCity() {
  let table = "<tr><th>Ville</th><th>Code postal</th></tr>";
  for (let i = 0; i < city.length; i++) {
    table += "<tr onclick='displayCity(" + i + ")'><td>";
    table += city[i].getElementsByTagName("NAME")[0].childNodes[0]
      .nodeValue;
    table += "</td><td>";
    table += city[i].getElementsByTagName("ZIP")[0].childNodes[0]
      .nodeValue;
    table += "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}



//Notre fonction pour afficher les informations pour chaque ville
function displayCity(i) {
  document.getElementById("showCity").innerHTML =
    "Dépôt : " +
    city[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "<br>Code postal : " +
    city[i].getElementsByTagName("ZIP")[0].childNodes[0].nodeValue +
    "<br>Adresse : " +
    city[i].getElementsByTagName("ADRESS")[0].childNodes[0].nodeValue +
    "<br>Jour : " +
    city[i].getElementsByTagName("DAY")[0].childNodes[0].nodeValue +
    "<br>Horaire : " +
    city[i].getElementsByTagName("HOUR")[0].childNodes[0].nodeValue;
  }
