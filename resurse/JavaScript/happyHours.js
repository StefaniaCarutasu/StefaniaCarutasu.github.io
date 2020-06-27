function happyHours()
{
    var HH=[["08:00:00","10:00:00"], ["15:00:00", "17:25:00"], ["19:30:00", "20:30:00"]];
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var avemReduceri = 0;
    for(i = 0; i < HH.length; i++)
    {
        let vh0 = HH[i][0].split(":");
        let vh1 = HH[i][1].split(":");
        
        if( parseInt(vh0[0]) <= hour && hour <= parseInt(vh1[0]))
           {
               if(parseInt(vh0[0]) == hour && minutes >= parseInt(vh0[1]))
                    avemReduceri = 1;
                else if(hour == parseInt(vh1[0], 10) && minutes <= parseInt(vh1[1]) )
                       avemReduceri = 1;
                    if(parseInt(vh0[0]) < hour && hour < parseInt(vh1[0]))
                        avemReduceri = 1;
            }
        
    }
    if(avemReduceri == 1)
       {document.getElementById("reduceri").innerHTML = "Avem reduceri!";
       document.getElementById("reduceri").style.color="green";}
    else {document.getElementById("reduceri").innerHTML = "Nu avem reduceri! :(";
    document.getElementById("reduceri").style.color="red";}
}