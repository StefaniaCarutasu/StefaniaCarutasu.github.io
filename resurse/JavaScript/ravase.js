window.onload = function()
{
var ravase = ["Totul va fi bine!", "Impreuna suntem mai puternici", "O cafea buna nu strica niciodata", "Este o zi frumoasa, meriti ceva dulce!"];
function afisRavas()
{
    var index = Math.floor((Math.random() * ravase.length));
    var rav ="Ravasul dumneavoastra este:\n   " + ravase[index];
    var p = document.createElement("p");
    p.innerHTML = rav;
    var spn = document.getElementById("ravas");
    spn.appendChild(p);
   
}
afisRavas();
pagActiva();
numaraCuvinte();
myalert_b();
mouseUP();
}

