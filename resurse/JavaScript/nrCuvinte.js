function numaraCuvinte()
{
    body = document.getElementsByTagName("body")[0];
    var text = body.innerText.split(" ");
    nrCuvinte = document.getElementById("nrCuv");
    var n = text.length;
    var nr = "Numarul de cuvinte este: " + n;
    nrCuvinte.innerHTML += nr;
}