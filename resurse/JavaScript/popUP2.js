function myalert_a()
{
    var a = document.getElementById("fer");  
    a.onmousedown = function()
    {
    var fereastra = document.createElement("p");
    var text = "Sunteti pe pagina de prezentare";
    fereastra.innerHTML = text;
    var locatie = document.getElementById("ferPU1");
    locatie.appendChild(fereastra);
    fereastra.classList.add("content");
    locatie.style.display = "block";
    fereastra.style.color="blanchedalmond";
    fereastra.style.paddingTop="1%";
    fereastra.style.paddingLeft="4%";
    fereastra.style.backgroundColor="rgb(236, 149, 149)";
    fereastra.style.width="20%";
    fereastra.style.height="50px";
    fereastra.style.marginLeft="40%";
    fereastra.style.zIndex="1";
    fereastra.style.position="fixed";
    }       
}
function mouseUP()
{
    var a = document.getElementById("fer");
    a.onclick = function() 
        {

            var fereastraClose = document.getElementsByClassName("content")[0];
             if(fereastraClose)
             {
                fereastraClose.style.display = "none";
                fereastraClose.innerHTML="";
             } 
              document.getElementById("ferPU1").innerHTML="";
              if(document.getElementById("modal-content1"))
                document.getElementById("modal-content1").removeChild(fereastraClose);
              if(document.getElementsByClassName("ferPU1")[0])
                document.getElementsByClassName("ferPU1")[0].style.backgoundColor = "none";
    
    }
}

  


