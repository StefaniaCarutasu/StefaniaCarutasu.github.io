var i = 0;
var txt = 'Cafeneaua noastra isi propune sa le ofere clientilor ei cea mai buna cafea din oras, dar si atmosfera linistita si placuta a propriului camin. In fiecare zi avem grija sa pregatim cu drag pentru toti cei ce ne trec pragul. Cafeaua noastra 100% Arabica, este o cafea de specialitate, certificată CSC (Certified Specialty Coffee) și se numără printre puținele cafele de pe piață, certificate “de specialitate”.';
txt = txt.split(' ');
var speed = 333;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aparitieTreptata").innerHTML = document.getElementById("aparitieTreptata").innerHTML.concat(txt[i]," ");
    i++;
    setTimeout(typeWriter, speed);
  }
} 

var j=0;
var txt1="La o cafea mare o briosa din partea noastra";
txt1=txt1.split(" ");
function typeWriter2()
{
    if (j < txt1.length) {
        document.getElementById("apare2").innerHTML = document.getElementById("apare2").innerHTML.concat(txt1[j]," ");
        j++;
        setTimeout(typeWriter2, speed);
      }
}
function tastaApasata() {
  alert("Verificati daca ati introdus valoarea corecta!");
}
window.onload = function()
{
    typeWriter();
    typeWriter2();
    happyHours();
    numaraCuvinte();
    afisVarsta();
    pagActiva();
    myalert_a();
   tastaApasata()
}



