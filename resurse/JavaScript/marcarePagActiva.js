function pagActiva()
{
    adresa = window.location.href.split("/");
    adresa_curenta = adresa[adresa.length - 1];
    meniu = document.getElementsByTagName("nav")[0];
    a = meniu.getElementsByTagName("a");

    for(let i = 0; i < a.length; i++)
    {
        a_adresa = a[i].href.split("/");
        a_adresa = a_adresa[a_adresa.length - 1];
        if(a_adresa == adresa_curenta){
            a[i].parentNode.classList.add("curent");
        }
    }
}