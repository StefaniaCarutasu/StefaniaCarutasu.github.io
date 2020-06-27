function myalert_a()
{
    var a = document.getElementById("ferPU1");  
    a.onmousedown = function()
    {
    var fereastra = document.createElement("p");
    var text = "Sunteti pe prima pagina";
    fereastra.innerHTML = text;
    var locatie = document.getElementById("ferPU1");
    locatie.appendChild(fereastra);
    fereastra.classList.add("content");
    locatie.style.display = "block";
    }
     a.onmouseup = function() 
      {
        var fereastraClose = document.getElementsByClassName("content")[0];
        if (event.target == a) {
            fereastraClose.style.display = "none";
            var b = document.getElementById("modal-content");
            b.removeChild(fereastraClose);
        }
      }
}
