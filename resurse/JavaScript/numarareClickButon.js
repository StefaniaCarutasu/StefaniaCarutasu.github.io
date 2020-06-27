function clickCounter(){
    var btn = document.getElementById("afisOferta");
    btn.onclick = function()
    {
        
        if(typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("result").innerHTML = "Ati vizualizat oferta de " + localStorage.clickcount + " ori";
        } else {
          document.getElementById("result").innerHTML = "Ne pare rau dar nu se poate afisa de cate ori ati vizualizat oferta";
        }
    
    }
}
