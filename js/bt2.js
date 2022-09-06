var n = 3;
var c = 0;
var x = true;
function demsonguyento(){
    var nguyento = document.getElementById("nguyento");
    for(var i = 2;i<n;i++){
        if(n%i==0){
            x = false;
            break;
        }
        x = true;
    }
    console.log(n);
    console.log(x);
    if(x){
        nguyento.innerText += " "+n;
        c++;
    }
    nguyento.innerText +="";
    n++;


    if(c>=20){
        clearInterval(nt)
    }


}

