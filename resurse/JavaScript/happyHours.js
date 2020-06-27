function happyHours()
{
    var HH=[["08:00:00","10:00:00"], ["15:00:00", "17:25:00"], ["19:30:00", "20:30:00"]];
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var avemReduceri;
    for(i = 0; i < HH.length; i++)
    {
        let vh0 = parseInt(HH[i][0].substring(0,2));
        let vh1 = parseInt(HH[i][1].substring(0,2));
        let vm1 = parseInt(HH[i][1].substring(3,5));
        if(vh0 < hour && hour < vh1)
            avemReduceri = 1;
            else if (hour == vh1 && minutes < vm1)
                avemReduceri = 1;
                else avemReduceri = 0;  
    }
    if(avemReduceri)
       document.getElementById("reduceri").innerHTML = "Avem reduceri!";
    else document.getElementById("reduceri").innerHTML = "Nu avem reduceri! :(";
}