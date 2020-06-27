function pagActiva()
{
    adr = window.location.href.split("/");
    adr_curenta = adr[adr.length - 1];
    meniu = document.getElementsByTagName("nav")[0];
    a = meniu.getElementsByTagName("a");

    for(let i = 0; i < a.length; i++)
    {
        a_adr = a[i].href.split("/");
        a_adr = a_adr[a_adr.length - 1];
        if(a_adr == adr_curenta){
            a[i].parentNode.classList.add("curent");
        }
    }
}