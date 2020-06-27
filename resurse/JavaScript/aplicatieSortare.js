function sortez()
{
var btn=document.getElementById("sorteazaCrescator");
btn.onclick=function()
{
    var prod = document.getElementsByClassName("templ_produse"); //array de divulete
    var produse = Array.prototype.slice.call(prod);
    for(i=0; i < produse.length; i++)
       for(j=0; j < produse.length; j++)
        {
            var preti = produse[i].getElementsByTagName('p')[5].innerHTML;
            var pretj = produse[j].getElementsByTagName('p')[5].innerHTML;
            var pret1=preti.substring(6,8);
            var pret2=pretj.substring(6,8);
            pret1=parseInt(pret1,10);
            pret2=parseInt(pret2,10);
            if(pret1 < pret2)
                [produse[i],produse[j]]=[produse[j],produse[i]];
            
        }
        var divMare=document.getElementById("afisTemplate");
        for(let prod of produse)
        divMare.appendChild(prod);
}

var btn2 = document.getElementById("sorteazaDescrescator");
btn2.onclick=function()
{
    var prod = document.getElementsByClassName("templ_produse"); //array de divulete
    var produse = Array.prototype.slice.call(prod);
    for(i=0; i<produse.length; i++)
        for(j=0; j<produse.length; j++)
        {
            let preti = produse[i].getElementsByTagName('p')[5].innerHTML; //iau pretul pentru fiecare
            let pretj = produse[j].getElementsByTagName('p')[5].innerHTML;
            preti=preti.split(" "); //impart in cuvinte
            pretj=pretj.split(" ");
            var pret1=parseInt(preti[1]); //al 2-lea cuvant este pretul
            var pret2=parseInt(pretj[1]);
            if(pret1 > pret2) //daca pret1 < pret2 atunci le schimb intre ele
            [produse[i], produse[j]]=[produse[j], produse[i]];
            
        }
    var divMare=document.getElementById("afisTemplate");
    for(let prod of produse)
        divMare.appendChild(prod);
}
var btn3 = document.getElementById("faraAlergeni");
btn3.onclick= function()
{
    var produse = document.getElementsByClassName("templ_produse"); //array de divulete
    for(i=0; i<produse.length; i++)
    {
        var alergeni = produse[i].getElementsByTagName('p')[4].innerHTML;
        if(!alergeni.includes("nu are"))
            produse[i].classList.add("ascunde");
    }
}
var btn4 = document.getElementById("afisTot");
btn4.onclick=function()
{
    
    var produse = document.getElementsByClassName("templ_produse"); //array de divulete
    for(i=0; i<produse.length; i++)
        produse[i].classList.remove("ascunde")
}
var btn5 = document.getElementById("afisOferta");
btn5.onclick = function()
{
    clickCounter();
    var prod = document.getElementsByClassName("templ_produse"); //array de divulete
    var produse = Array.prototype.slice.call(prod);
    var pretMinCafea=100;
    var pretMinMancare=100;
    for(i=0; i<produse.length; i++)
      {
        let tip = produse[i].getElementsByTagName('p')[0].innerHTML;
        let pret = produse[i].getElementsByTagName('p')[5].innerHTML;
        pret = pret.split(" ");
        var pr = parseInt(pret[1]);
        if(tip.includes("Cafea") && pr < pretMinCafea)
            pretMinCafea = pr;
        else if((tip.includes("Gustare") || tip.includes("Desert")) && pr < pretMinMancare)
            pretMinMancare = pr;
            
      }
    var gasitCafea = 0;
    var gasitMancare = 0;
    for(i=0; i<produse.length; i++)
    {
        let tip = produse[i].getElementsByTagName('p')[0].innerHTML;
        let pret = produse[i].getElementsByTagName('p')[5].innerHTML;
        pret = pret.split(" ");
        var pr = parseInt(pret[1]);
        if(tip.includes("Racoritoare") || tip.includes("Ceai"))
            produse[i].classList.add("ascunde");
            else if(tip.includes("Cafea") && (gasitCafea == 1 || pr > pretMinCafea))
                produse[i].classList.add("ascunde");
            else if((tip.includes("Gustare") || tip.includes("Desert")) && (gasitMancare == 1 || pr > pretMinMancare))
                produse[i].classList.add("ascunde");
            else if(tip.includes("Cafea") && pr == pretMinCafea)
                    gasitCafea = 1;
                else if((tip.includes("Gustare") || tip.includes("Desert")) && pr == pretMinMancare)
                        gasitMancare = 1;
    }


function afisamTot()
{
    
    var produse = document.getElementsByClassName("templ_produse"); //array de divulete
    for(i=0; i<produse.length; i++)
        produse[i].classList.remove("ascunde")
}
setInterval(function(){alert("Sunteti nehotarat?")}, 4000);
setTimeout(function(){ afisamTot();}, 3000);
}

}