function afisVarsta()
{
    var getVarsta = document.getElementById("butonVarsta");
    getVarsta.onclick=function()
    {
        var varsta=document.getElementById("myAge").value;
        varsta=varsta.split("#");    
    
    var myVar = setInterval(myTimer, 1000);
    function myTimer()
    {
        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDay();
        var hour=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var v="";
        var l = 12 - (parseInt(varsta[1],10) - 1) -1 + month; //numarul de luni;
        var z = 31 - parseInt(varsta[0],10) + day; //numarul de zile
        if(z >= 31)
        {
            l+=1;
            z-=31;
        }
        var a = (year - 1) - (parseInt(varsta[2],10) + 1) + 1;
        if(l>=12)
        {
            a+=1;
            l-=12;
        }
        v += a + " ani " + l + " luni " + z + " zile " + hour +" ore " + minutes + " minute " + seconds + " secunde";
        document.getElementById("varsta").innerHTML=v;
        
    }
    
    }   
}

